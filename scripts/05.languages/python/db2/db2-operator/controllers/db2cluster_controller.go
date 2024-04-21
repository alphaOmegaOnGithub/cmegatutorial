/*
Copyright 2022.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package controllers

import (
	"context"
	"fmt"
	"time"

	db2v1 "github.com/example/db2-operator/api/v1"
	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	//"sigs.k8s.io/controller-runtime/pkg/controller"
	//"sigs.k8s.io/controller-runtime/pkg/handler"
	"sigs.k8s.io/controller-runtime/pkg/log"
	//"sigs.k8s.io/controller-runtime/pkg/source"
)

// DB2ClusterReconciler reconciles a DB2Cluster object
type DB2ClusterReconciler struct {
	client.Client
	Scheme *runtime.Scheme
}

var CurrentPrimary string = ""
var CurrentStandby string = ""
var PreviousPrimary string = ""
var PreviousStandby string = ""

var ReplicaIncreaseType string = ""
var AuxStandby1Ready bool = false
var AuxStandby2Ready bool = false

type IncreaseType string

const (
	IncreaseFrom2To3 string = "2to3"
	IncreaseFrom2To4 string = "2to4"
	IncreaseFrom3To4 string = "3to4"
)

//+kubebuilder:rbac:groups=db2.example.com,resources=db2clusters,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=db2.example.com,resources=db2clusters/status,verbs=get;update;patch
//+kubebuilder:rbac:groups=db2.example.com,resources=db2clusters/finalizers,verbs=update
//+kubebuilder:rbac:groups=core,resources=persistentvolumeclaims,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=core,resources=services,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=apps,resources=statefulsets,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=core,resources=pods,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=core,resources=pods/exec,verbs=get;list;watch;create;update;patch;delete

// Reconcile is part of the main kubernetes reconciliation loop which aims to
// move the current state of the cluster closer to the desired state.
// TODO(user): Modify the Reconcile function to compare the state specified by
// the DB2Cluster object against the actual cluster state, and then
// perform operations to make the cluster state reflect the state specified by
// the user.
//
// For more details, check Reconcile and its Result here:
// - https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.12.2/pkg/reconcile
func (r *DB2ClusterReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	//_ = log.FromContext(ctx)

	// TODO(user): your logic here
	contextLogger := log.FromContext(ctx)

	contextLogger.Info("Reconcile Begin !!!!!!!!!!", "", "")

	var result *ctrl.Result

	// Get DB2Cluster entity
	db2Cluster := &db2v1.DB2Cluster{}
	err := r.Get(ctx, req.NamespacedName, db2Cluster)
	if err != nil {
		if errors.IsNotFound(err) {

			// Get pvc list
			pvcList := &corev1.PersistentVolumeClaimList{}
			result, err = r.getPVCList(ctx, req, db2Cluster, pvcList)
			if result != nil {
				return *result, err
			}

			// Delete all pvc in the namespace of db2 cluster
			for _, pvc := range pvcList.Items {
				contextLogger.Info("pvcList", "pvc.Namespace", pvc.Namespace, "pvc.Name", pvc.Name)
				result, err = r.deletePvc(ctx, &pvc)
				if result != nil {
					return *result, err
				}
			}

		}
		return ctrl.Result{}, client.IgnoreNotFound(err)
	}

	// Create Write Service
	result, err = r.ensureService(ctx, db2Cluster, r.createWriteService(db2Cluster))
	if result != nil {
		return *result, err
	}

	// Create Read Service
	result, err = r.ensureService(ctx, db2Cluster, r.createReadService(db2Cluster))
	if result != nil {
		return *result, err
	}

	// Create hadr PVC
	result, err = r.ensurePVC(ctx, db2Cluster, r.createHadrPvc(db2Cluster))
	if result != nil {
		return *result, err
	}

	// Update hadr PVC
	//result, err = r.handlePVCChanges(ctx, db2Cluster)
	//if result != nil {
	//return *result, err
	//}

	// Create db2 StatefulSet
	result, err = r.ensureStatefulSet(ctx, db2Cluster, r.createStatefulSet(db2Cluster))
	if result != nil {
		return *result, err
	}

	// Update db2 StatefulSet
	//result, err = r.handleStatefulsetChanges(ctx, db2Cluster)
	//if result != nil {
	//	return *result, err
	//}

	// Get pod list
	podList := &corev1.PodList{}
	result, err = r.getPodList(ctx, db2Cluster, podList)
	if result != nil {
		return *result, err
	}

	dbInstance := db2Cluster.Spec.DBInstance
	dbName := db2Cluster.Spec.DBName

	auxiliaryStandby1PodName := db2Cluster.Name + "-2"
	auxiliaryStandby2PodName := db2Cluster.Name + "-3"

	podInfoMap := make(map[string]string)

	// Add labels for pods
	for i, pod := range podList.Items {
		contextLogger.Info("----------Loop Begin----------", "Round:", i, "Pod Name", pod.Name)

		podInfoMap[pod.Name] = pod.Status.PodIP

		var hadrRole, hadrState, hadrConnectState string = "", "", ""

		// Get HADR_ROLE
		command := fmt.Sprintf("su - %s -c 'db2pd -db %s -hadr | grep -w HADR_ROLE'", dbInstance, dbName)
		//contextLogger.Info("Bash command", "command", command, "Pod Name", pod.Name)
		execOutHadrRole, err := execCommandInPod(&pod, "/bin/bash", "-c", command)
		if err == nil && execOutHadrRole != "" {

			contextLogger.Info("Exec Result", "bash command", command, "execOutHadrRole", execOutHadrRole, "Pod Name", pod.Name)
			hadrRole = splitString(execOutHadrRole)
			contextLogger.Info("Split execOutHadrRole Result", "hadrRole", hadrRole, "Pod Name", pod.Name)
		} else {
			contextLogger.Info("execOutHadrRole continue", "execOutHadrRole", execOutHadrRole, "Pod Name", pod.Name)
			continue
		}

		if hadrRole == "STANDBY" && pod.Name == auxiliaryStandby1PodName {
			AuxStandby1Ready = true
		}

		if hadrRole == "STANDBY" && pod.Name == auxiliaryStandby2PodName {
			AuxStandby2Ready = true
		}

		// Get HADR_STATE
		command = fmt.Sprintf("su - %s -c 'db2pd -db %s -hadr | grep -w HADR_STATE'", dbInstance, dbName)
		//contextLogger.Info("Bash command", "command", command, "Pod Name", pod.Name)
		execOutHadrState, err := execCommandInPod(&pod, "/bin/bash", "-c", command)
		if err == nil && execOutHadrState != "" {

			contextLogger.Info("Exec Result", "bash command", command, "execOutHadrState", execOutHadrState, "Pod Name", pod.Name)
			hadrState = splitString(execOutHadrState)
			contextLogger.Info("Split execOutHadrState Result", "hadrState", hadrState, "Pod Name", pod.Name)
		} else {
			contextLogger.Info("execOutHadrState continue", "execOutHadrState", execOutHadrState, "Pod Name", pod.Name)
			continue
		}

		// Get HADR_CONNECT_STATUS
		command = fmt.Sprintf("su - %s -c 'db2pd -db %s -hadr | grep -w HADR_CONNECT_STATUS'", dbInstance, dbName)
		//contextLogger.Info("Bash command", "command", command, "Pod Name", pod.Name)
		execOutHadrConnectState, err := execCommandInPod(&pod, "/bin/bash", "-c", command)
		if err == nil && execOutHadrConnectState != "" {

			contextLogger.Info("Exec Result", "bash command", command, "execOutHadrConnectState", execOutHadrConnectState, "Pod Name", pod.Name)
			hadrConnectState = splitString(execOutHadrConnectState)
			contextLogger.Info("Split execOutHadrConnectState Result", "hadrConnectState", hadrConnectState, "Pod Name", pod.Name)
		} else {
			contextLogger.Info("execOutHadrConnectState continue", "execOutHadrConnectState", execOutHadrConnectState, "Pod Name", pod.Name)
			continue
		}

		// Connected situation
		if hadrConnectState == "CONNECTED" {
			contextLogger.Info("HADR CONNECTED")
			contextLogger.Info("HADR CONNECTED befor steup", "CurrentPrimary", CurrentPrimary, "CurrentStandby", CurrentStandby)
			if hadrRole == "PRIMARY" {
				contextLogger.Info("HADR CONNECTED set primary")
				// Set role label of Pod as: role=primary
				r.setRoleLabelForPod(ctx, &pod, "primary")
				CurrentPrimary = pod.Name
				/*if pod.Name == CurrentStandby {
					// Failover finish
					// Update auxiliary standby to connect to new primary
					contextLogger.Info("updateAuxiliaryStandby", "CurrentPrimary", CurrentPrimary)
					r.updateAuxiliaryStandby(ctx, CurrentPrimary, db2Cluster)
				}*/
			} else if hadrRole == "STANDBY" && hadrState == "PEER" {
				contextLogger.Info("HADR CONNECTED set standby")
				// Set role label of Pod as: role=standby
				r.setRoleLabelForPod(ctx, &pod, "standby")
				CurrentStandby = pod.Name
			} else if hadrRole == "STANDBY" && hadrState == "REMOTE_CATCHUP" {
				// Set role label of Pod as: role=standby
				r.setRoleLabelForPod(ctx, &pod, "standby")
			}
			contextLogger.Info("HADR CONNECTED after steup", "CurrentPrimary", CurrentPrimary, "CurrentStandby", CurrentStandby)

			//return ctrl.Result{Requeue: true}, err
		}

		// Disconnected situation
		if (hadrState == "DISCONNECTED_PEER" || hadrState == "DISCONNECTED") && hadrConnectState == "DISCONNECTED" {
			contextLogger.Info("HADR DISCONNECTED")
			contextLogger.Info("HADR DISCONNECTED befor steup", "CurrentPrimary", CurrentPrimary, "CurrentStandby", CurrentStandby)
			if hadrRole == "PRIMARY" {
				if CurrentPrimary != CurrentStandby {
					if pod.Name == CurrentStandby && pod.Name != CurrentPrimary {
						//Set role label of Pod as: role=primary
						contextLogger.Info("before setRoleLabelForPod")
						r.setRoleLabelForPod(ctx, &pod, "primary")
						contextLogger.Info("after setRoleLabelForPod")
						CurrentPrimary = pod.Name
						// Failover finish
						// Update auxiliary standby to connect to new primary
						contextLogger.Info("updateAuxiliaryStandby", "CurrentPrimary", CurrentPrimary)
						r.updateAuxiliaryStandby(ctx, CurrentPrimary, db2Cluster)
					}
					PreviousPrimary = pod.Name
				}
			} else if hadrRole == "STANDBY" {
				if CurrentPrimary != "" && CurrentStandby != "" && CurrentPrimary == CurrentStandby {
					// Set role label of Pod as: role=standby
					r.setRoleLabelForPod(ctx, &pod, "standby")
					CurrentStandby = pod.Name
				}
				PreviousStandby = pod.Name
			}
			contextLogger.Info("HADR DISCONNECTED after steup", "CurrentPrimary", CurrentPrimary, "CurrentStandby", CurrentStandby)
			//return ctrl.Result{Requeue: true}, err
		}
		contextLogger.Info("CurrentPrimary", "CurrentPrimary", CurrentPrimary, "CurrentStandby", CurrentStandby)
		contextLogger.Info("----------Loop End----------", "Pod Name", pod.Name)

	}

	if AuxStandby1Ready == true && ReplicaIncreaseType == IncreaseFrom2To3 {
		// Update primary and standby with remote_svc, remote_host, hadr_target_list, and /etc/hosts
		// Update auxiliary standby1 with remote_svc, remote_host (current primary)
	}

	if AuxStandby1Ready == true && AuxStandby2Ready == true && ReplicaIncreaseType == IncreaseFrom2To4 {
		// Update primary and standby with remote_svc, remote_host, hadr_target_list, and /etc/hosts
		// Update auxiliary standby1 and auxiliary standby2 with remote_svc, remote_host (current primary)
	}

	if AuxStandby2Ready == true && ReplicaIncreaseType == IncreaseFrom3To4 {
		// Update primary and standby with remote_svc, remote_host, hadr_target_list, and /etc/hosts
		// Update auxiliary standby1 and auxiliary standby2 with remote_svc, remote_host (current primary)

	}

	// Update hadr PVC
	result, err = r.handlePVCChanges(ctx, db2Cluster)
	if result != nil {
		return *result, err
	}

	// Update db2 StatefulSet
	result, err = r.handleStatefulsetChanges(ctx, db2Cluster)
	if result != nil {
		return *result, err
	}

	return ctrl.Result{RequeueAfter: 10 * time.Second}, nil

	//return ctrl.Result{Requeue: true}, nil

	//return ctrl.Result{}, nil
}

// SetupWithManager sets up the controller with the Manager.
func (r *DB2ClusterReconciler) SetupWithManager(mgr ctrl.Manager) error {

	return ctrl.NewControllerManagedBy(mgr).
		For(&db2v1.DB2Cluster{}).
		Owns(&appsv1.StatefulSet{}).
		Owns(&corev1.Service{}).
		Owns(&corev1.PersistentVolumeClaim{}).
		Complete(r)

}
