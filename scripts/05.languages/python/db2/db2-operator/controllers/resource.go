package controllers

import (
	"bytes"
	"context"
	"fmt"
	"time"

	db2v1 "github.com/example/db2-operator/api/v1"
	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/apimachinery/pkg/util/intstr"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/tools/remotecommand"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/controller/controllerutil"
	"sigs.k8s.io/controller-runtime/pkg/log"
)

const (

	// the suffix appended to the cluster name to get the service name
	// for every ready node that you can use to read data (including the primary)
	ServiceReadSuffix = "-read-only"
	// the suffix appended to the cluster name to get the service name
	// for the primary node that you can use to write data
	ServiceWriteSuffix = "-primary"
	// the suffix appended to the cluster name to get the pvc name
	// for pv that you can mount hadr.cfg
	PersistentVolumeClaimHADRSuffix = "-shared-hadr"

	// label: app = db2
	DB2ClusterCommonLabelKey   = "app"
	DB2ClusterCommonLabelValue = "db2"
	// label: role = primary/standby
	DB2ClusterRoleLabelKey          = "role"
	DB2ClusterRoleLabelPrimaryValue = "primary"
	DB2ClusterRoleLabelStandbyValue = "standby"
	// name of PV for database
	DB2ClusterPVName = "db2database"
	// name of PV for hadr
	HADRPVName = "hadr-data"
	// name of directory for log path
	LogPath = "log-path"
)

func (r *DB2ClusterReconciler) deletePvc(ctx context.Context, db2Pvc *corev1.PersistentVolumeClaim) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	err := r.Client.Delete(ctx, db2Pvc)
	if err != nil {
		contextLogger.Error(err, "Failed to delete db2Pvc.", "PersistentVolumeClaim.Namespace", db2Pvc.Namespace, "PersistentVolumeClaim.Name", db2Pvc.Name)
		return &ctrl.Result{}, err
	}
	contextLogger.Info("Delete PersistentVolumeClaim successfully.", "PersistentVolumeClaim.Namespace", db2Pvc.Namespace, "PersistentVolumeClaim.Name", db2Pvc.Name)

	return nil, nil
}

func (r *DB2ClusterReconciler) createWriteService(db2Cluster *db2v1.DB2Cluster) *corev1.Service {
	writeSvc := &corev1.Service{
		ObjectMeta: metav1.ObjectMeta{
			Name:      db2Cluster.Name + ServiceWriteSuffix,
			Namespace: db2Cluster.Namespace,
			Labels:    setLabels("common"),
		},
		Spec: corev1.ServiceSpec{
			Type:     corev1.ServiceTypeNodePort,
			Selector: setLabels("primary"),
			Ports: []corev1.ServicePort{
				corev1.ServicePort{
					Name:       "writeport",
					Port:       50000,
					TargetPort: intstr.IntOrString{IntVal: 50000},
					NodePort:   30001,
				},
			},
		},
	}

	controllerutil.SetControllerReference(db2Cluster, writeSvc, r.Scheme)
	return writeSvc
}

func (r *DB2ClusterReconciler) createReadService(db2Cluster *db2v1.DB2Cluster) *corev1.Service {
	readSvc := &corev1.Service{
		ObjectMeta: metav1.ObjectMeta{
			Name:      db2Cluster.Name + ServiceReadSuffix,
			Namespace: db2Cluster.Namespace,
			Labels:    setLabels("common"),
		},
		Spec: corev1.ServiceSpec{
			Type:     corev1.ServiceTypeNodePort,
			Selector: setLabels("common"),
			Ports: []corev1.ServicePort{
				corev1.ServicePort{
					Name:       "readport",
					Port:       50000,
					TargetPort: intstr.IntOrString{IntVal: 50000},
					NodePort:   30002,
				},
			},
		},
	}

	controllerutil.SetControllerReference(db2Cluster, readSvc, r.Scheme)
	return readSvc
}

func (r *DB2ClusterReconciler) createHadrPvc(db2Cluster *db2v1.DB2Cluster) *corev1.PersistentVolumeClaim {
	hadrPvc := &corev1.PersistentVolumeClaim{
		ObjectMeta: metav1.ObjectMeta{
			Name:      db2Cluster.Name + PersistentVolumeClaimHADRSuffix,
			Namespace: db2Cluster.Namespace,
		},
		Spec: corev1.PersistentVolumeClaimSpec{
			AccessModes: []corev1.PersistentVolumeAccessMode{
				corev1.ReadWriteMany,
			},
			StorageClassName: &db2Cluster.Spec.StorageClassforHADR,
			Resources: corev1.ResourceRequirements{
				Requests: corev1.ResourceList{
					corev1.ResourceStorage: resource.MustParse("1Gi"),
				},
			},
		},
	}

	controllerutil.SetControllerReference(db2Cluster, hadrPvc, r.Scheme)
	return hadrPvc
}

func (r *DB2ClusterReconciler) createStatefulSet(db2Cluster *db2v1.DB2Cluster) *appsv1.StatefulSet {

	var privilegeContent = true
	//volumeType := corev1.HostPathDirectoryOrCreate
	//var hadr_enabled = "false"
	//if db2Cluster.Spec.Size > int32(1) {
	//	hadr_enabled = "true"
	//}

	db2Sts := &appsv1.StatefulSet{
		ObjectMeta: metav1.ObjectMeta{
			Name:      db2Cluster.Name,
			Namespace: db2Cluster.Namespace,
			Labels:    setLabels("common"),
		},
		Spec: appsv1.StatefulSetSpec{
			Replicas: &db2Cluster.Spec.Size,
			Selector: &metav1.LabelSelector{
				MatchLabels: setLabels("common"),
			},
			Template: corev1.PodTemplateSpec{
				ObjectMeta: metav1.ObjectMeta{
					Name:   DB2ClusterCommonLabelValue, //"db2"
					Labels: setLabels("common"),
				},
				Spec: corev1.PodSpec{
					Containers: []corev1.Container{
						corev1.Container{
							Name:            DB2ClusterCommonLabelValue, //"db2"
							Image:           "129.69.209.196:5000/my-db2:v9.2",
							ImagePullPolicy: corev1.PullIfNotPresent,
							Ports: []corev1.ContainerPort{
								corev1.ContainerPort{
									Name:          "db2port",
									ContainerPort: 50000,
								},
							},
							Env: []corev1.EnvVar{
								corev1.EnvVar{
									Name:  "BLU",
									Value: "false",
								},
								corev1.EnvVar{
									Name:  "ENABLE_ORACLE_COMPATIBILITY",
									Value: "false",
								},
								corev1.EnvVar{
									Name:  "UPDATEAVAIL",
									Value: "NO",
								},
								corev1.EnvVar{
									Name:  "REPODB",
									Value: "false",
								},
								corev1.EnvVar{
									Name:  "IS_OSXFS",
									Value: "false",
								},
								corev1.EnvVar{
									Name:  "PERSISTENT_HOME",
									Value: "true",
								},
								corev1.EnvVar{
									Name:  "DBNAME",
									Value: db2Cluster.Spec.DBName,
								},
								corev1.EnvVar{
									Name:  "DB2INSTANCE",
									Value: db2Cluster.Spec.DBInstance,
								},
								corev1.EnvVar{
									Name:  "DB2INST1_PASSWORD",
									Value: db2Cluster.Spec.DBInstancePassword,
								},
								corev1.EnvVar{
									Name:  "LICENSE",
									Value: "accept",
								},
								corev1.EnvVar{
									Name:  "TO_CREATE_SAMPLEDB",
									Value: "false",
								},
								corev1.EnvVar{
									Name:  "HADR_ENABLED",
									Value: "true",
								},
								corev1.EnvVar{
									Name:  "ETCD_ENDPOINT",
									Value: db2Cluster.Spec.EtcdEndpoint,
								},
								corev1.EnvVar{
									Name:  "REPLICAS",
									Value: fmt.Sprint(db2Cluster.Spec.Size),
								},
							},
							VolumeMounts: []corev1.VolumeMount{
								corev1.VolumeMount{
									Name:      DB2ClusterPVName,
									MountPath: "/database",
								},
								corev1.VolumeMount{
									Name:      HADRPVName,
									MountPath: "/hadr",
								},
								corev1.VolumeMount{
									Name:      LogPath,
									MountPath: "/var/log/governor",
								},
							},
							SecurityContext: &corev1.SecurityContext{
								Privileged: &privilegeContent,
							},
						},
					},
					Volumes: []corev1.Volume{
						corev1.Volume{
							Name: HADRPVName,
							VolumeSource: corev1.VolumeSource{
								PersistentVolumeClaim: &corev1.PersistentVolumeClaimVolumeSource{
									ClaimName: db2Cluster.Name + PersistentVolumeClaimHADRSuffix,
								},
							},
						},
						corev1.Volume{
							Name: LogPath,
							VolumeSource: corev1.VolumeSource{
								HostPath: &corev1.HostPathVolumeSource{
									Path: "/home/xiaomin/log",
									//Type: &volumeType,
								},
							},
						},
					},
					/*Affinity: &corev1.Affinity{
						PodAntiAffinity: &corev1.PodAntiAffinity{
							RequiredDuringSchedulingIgnoredDuringExecution: []corev1.PodAffinityTerm{
								corev1.PodAffinityTerm{
									TopologyKey: "kubernetes.io/hostname",
									LabelSelector: &metav1.LabelSelector{
										MatchLabels: setLabels("common"),
									},
								},
							},
						},
					},*/
				},
			},
			VolumeClaimTemplates: []corev1.PersistentVolumeClaim{
				corev1.PersistentVolumeClaim{
					ObjectMeta: metav1.ObjectMeta{
						Name: DB2ClusterPVName,
					},
					Spec: corev1.PersistentVolumeClaimSpec{
						AccessModes: []corev1.PersistentVolumeAccessMode{
							corev1.ReadWriteOnce,
						},
						StorageClassName: &db2Cluster.Spec.StorageClassforDB,
						Resources: corev1.ResourceRequirements{
							Requests: corev1.ResourceList{
								corev1.ResourceStorage: resource.MustParse("1Gi"),
							},
						},
					},
				},
			},
		},
	}

	controllerutil.SetControllerReference(db2Cluster, db2Sts, r.Scheme)
	return db2Sts
}

func (r *DB2ClusterReconciler) handlePVCChanges(ctx context.Context, db2Cluster *db2v1.DB2Cluster) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	found := &corev1.PersistentVolumeClaim{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Name:      db2Cluster.Name + PersistentVolumeClaimHADRSuffix,
		Namespace: db2Cluster.Namespace,
	}, found)

	if err != nil {
		// The PVC may not have been created yet, so requeue
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, err
	}

	// Update StorageClassName of pvc
	scName := db2Cluster.Spec.StorageClassforHADR
	contextLogger.Info("PVC StorageClassforHADR", "StorageClassforHADR", *found.Spec.StorageClassName)
	if scName != *found.Spec.StorageClassName {
		found.Spec.StorageClassName = &scName
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update PVC.", "PVC.Namespace", found.Namespace, "PVC.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update PVC successfully.", "PVC.Name", found.Name, "PVC.StorageClassName", *found.Spec.StorageClassName)
		// Spec updated - return and requeue
		//return &ctrl.Result{Requeue: true}, nil
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}
	return nil, nil
}

func (r *DB2ClusterReconciler) handleStatefulsetChanges(ctx context.Context, db2Cluster *db2v1.DB2Cluster) (*ctrl.Result, error) {
	contextLogger := log.FromContext(ctx)

	found := &appsv1.StatefulSet{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Name:      db2Cluster.Name,
		Namespace: db2Cluster.Namespace,
	}, found)

	if err != nil {
		// The statefulSet may not have been created yet, so requeue
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, err
	}

	// Update replica of StatefulSet
	size := db2Cluster.Spec.Size
	contextLogger.Info("StatefulSet replicas", "Size", *found.Spec.Replicas)
	if size != *found.Spec.Replicas {
		// Update ReplicaIncreaseType
		if size == int32(2) && *found.Spec.Replicas == int32(3) {
			ReplicaIncreaseType = "2to3"
		} else if size == int32(2) && *found.Spec.Replicas == int32(4) {
			ReplicaIncreaseType = "2to4"
		} else if size == int32(3) && *found.Spec.Replicas == int32(4) {
			ReplicaIncreaseType = "3to4"
		}

		found.Spec.Replicas = &size
		//found.Spec.Template.Spec.Containers[0].Env[13].Value = fmt.Sprint(size)
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update StatefulSet.", "StatefulSet.Namespace", found.Namespace, "StatefulSet.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update StatefulSet replicas successfully.", "StatefulSet.Name", found.Name, "StatefulSet.Replicas", *found.Spec.Replicas)
		// Spec updated - return and requeue

		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	// Update env EtcdEndpoint of StatefulSet
	etcdEndpoint := db2Cluster.Spec.EtcdEndpoint
	contextLogger.Info("StatefulSet env EtcdEndpoint", "EtcdEndpoint", found.Spec.Template.Spec.Containers[0].Env[12].Value)
	if etcdEndpoint != found.Spec.Template.Spec.Containers[0].Env[12].Value { //env "ETCD_ENDPOINT"
		found.Spec.Template.Spec.Containers[0].Env[12].Value = etcdEndpoint
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update StatefulSet.", "StatefulSet.Namespace", found.Namespace, "StatefulSet.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update StatefulSet env EtcdEndpoint successfully.", "StatefulSet.Name", found.Name, "StatefulSet.EtcdEndpoint", found.Spec.Template.Spec.Containers[0].Env[12].Value)
		// Spec updated - return and requeue
		//return &ctrl.Result{Requeue: true}, nil
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	// Update env DBName of StatefulSet
	dbName := db2Cluster.Spec.DBName
	contextLogger.Info("StatefulSet env DBName", "DBName", found.Spec.Template.Spec.Containers[0].Env[6].Value)
	if dbName != found.Spec.Template.Spec.Containers[0].Env[6].Value { //env "DBNAME"
		found.Spec.Template.Spec.Containers[0].Env[6].Value = dbName
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update StatefulSet.", "StatefulSet.Namespace", found.Namespace, "StatefulSet.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update StatefulSet env DBName successfully.", "StatefulSet.Name", found.Name, "StatefulSet.DBName", found.Spec.Template.Spec.Containers[0].Env[6].Value)
		// Spec updated - return and requeue
		//return &ctrl.Result{Requeue: true}, nil
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	// Update env DBInstance of StatefulSet
	dbInstance := db2Cluster.Spec.DBInstance
	contextLogger.Info("StatefulSet env DBInstance", "DBInstance", found.Spec.Template.Spec.Containers[0].Env[7].Value)
	if dbInstance != found.Spec.Template.Spec.Containers[0].Env[7].Value { //env "DB2INSTANCE"
		found.Spec.Template.Spec.Containers[0].Env[7].Value = dbInstance
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update StatefulSet.", "StatefulSet.Namespace", found.Namespace, "StatefulSet.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update StatefulSet env DBInstance successfully.", "StatefulSet.Name", found.Name, "StatefulSet.DBInstance", found.Spec.Template.Spec.Containers[0].Env[7].Value)
		// Spec updated - return and requeue
		//return &ctrl.Result{Requeue: true}, nil
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	// Update env DBInstancePassword of StatefulSet
	dbInstancePw := db2Cluster.Spec.DBInstancePassword
	contextLogger.Info("StatefulSet env dbInstancePw", "DBInstancePassword", found.Spec.Template.Spec.Containers[0].Env[8].Value)
	if dbInstancePw != found.Spec.Template.Spec.Containers[0].Env[8].Value { //env "DB2INST1_PASSWORD"
		found.Spec.Template.Spec.Containers[0].Env[8].Value = dbInstancePw
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update StatefulSet.", "StatefulSet.Namespace", found.Namespace, "StatefulSet.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update StatefulSet env DBInstancePassword successfully.", "StatefulSet.Name", found.Name, "StatefulSet.DBInstancePassword", found.Spec.Template.Spec.Containers[0].Env[8].Value)
		// Spec updated - return and requeue
		//return &ctrl.Result{Requeue: true}, nil
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	// Update StorageClass of StatefulSet
	scForDB := db2Cluster.Spec.StorageClassforDB
	contextLogger.Info("StatefulSet StorageClassforDB", "StorageClassforDB", *found.Spec.VolumeClaimTemplates[0].Spec.StorageClassName)
	if scForDB != *found.Spec.VolumeClaimTemplates[0].Spec.StorageClassName { //env "DB2INST1_PASSWORD"
		found.Spec.VolumeClaimTemplates[0].Spec.StorageClassName = &scForDB
		err = r.Client.Update(ctx, found)
		if err != nil {
			contextLogger.Error(err, "Failed to update StatefulSet.", "StatefulSet.Namespace", found.Namespace, "StatefulSet.Name", found.Name)
			return &ctrl.Result{}, err
		}
		contextLogger.Info("Update StatefulSet env StorageClassforDB successfully.", "StatefulSet.Name", found.Name, "StatefulSet.StorageClassforDB", found.Spec.VolumeClaimTemplates[0].Spec.StorageClassName)
		// Spec updated - return and requeue
		//return &ctrl.Result{Requeue: true}, nil
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	return nil, nil
}

func setLabels(label string) map[string]string {

	if label == "common" {
		return map[string]string{
			DB2ClusterCommonLabelKey: DB2ClusterCommonLabelValue, // app:db2
		}
	}

	if label == "primary" {
		return map[string]string{
			DB2ClusterRoleLabelKey: DB2ClusterRoleLabelPrimaryValue, //role:primary
		}
	}

	if label == "standby" {
		return map[string]string{
			DB2ClusterRoleLabelKey: DB2ClusterRoleLabelStandbyValue, //role:standby
		}
	}

	return nil
}

func execCommandInPod(pod *corev1.Pod, command ...string) (string, error) {

	kubeCfg := clientcmd.NewNonInteractiveDeferredLoadingClientConfig(
		clientcmd.NewDefaultClientConfigLoadingRules(),
		&clientcmd.ConfigOverrides{},
	)
	restCfg, err := kubeCfg.ClientConfig()
	if err != nil {
		return "", err
	}
	coreClient, err := kubernetes.NewForConfig(restCfg)
	if err != nil {
		return "", err
	}

	execOut := &bytes.Buffer{}
	execErr := &bytes.Buffer{}
	request := coreClient.CoreV1().RESTClient().
		Post().
		Namespace(pod.Namespace).
		Resource("pods").
		Name(pod.Name).
		SubResource("exec").
		VersionedParams(&corev1.PodExecOptions{
			Container: pod.Spec.Containers[0].Name,
			Command:   command,
			Stdout:    true,
			Stderr:    true,
		}, scheme.ParameterCodec)
	exec, err := remotecommand.NewSPDYExecutor(restCfg, "POST", request.URL())
	err = exec.Stream(remotecommand.StreamOptions{
		Stdout: execOut,
		Stderr: execErr,
		Tty:    false,
	})

	//if err != nil {
	//	return "", fmt.Errorf("could not execute: %v", err)
	//}

	if execErr.Len() > 0 {
		return "", fmt.Errorf("stderr: %v", execErr.String())
	}

	return execOut.String(), nil
}

func (r *DB2ClusterReconciler) setRoleLabelForPod(ctx context.Context, pod *corev1.Pod, role string) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	if pod.Labels == nil {
		pod.Labels = make(map[string]string)
	}
	// Set role label: role=primary
	if role == DB2ClusterRoleLabelPrimaryValue {
		pod.Labels[DB2ClusterRoleLabelKey] = DB2ClusterRoleLabelPrimaryValue
	}
	// Set role label: role=standby
	if role == DB2ClusterRoleLabelStandbyValue {
		pod.Labels[DB2ClusterRoleLabelKey] = DB2ClusterRoleLabelStandbyValue
	}

	// Update pod
	err := r.Client.Update(ctx, pod)
	if err != nil {
		contextLogger.Error(err, "Failed to update Pod.", "Pod.Namespace", pod.Namespace, "Pod.Name", pod.Name)
		return &ctrl.Result{}, err
	}
	contextLogger.Info("Update role label for pod successfully.", "Pod.Name", pod.Name, "Pod.RoleLabel", pod.Labels[DB2ClusterRoleLabelKey])

	return &ctrl.Result{}, nil
}

func (r *DB2ClusterReconciler) updateAuxiliaryStandby(ctx context.Context, currentPrimary string, db2Cluster *db2v1.DB2Cluster) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	contextLogger.Info("updateAuxiliaryStandby")

	remoteSVC := ""

	pod0Name := db2Cluster.Name + "-0"
	if currentPrimary == pod0Name {
		remoteSVC = "db2_hadrp"
	} else {
		remoteSVC = "db2_hadrs"
	}

	if db2Cluster.Spec.Size == int32(3) {
		contextLogger.Info("db2Cluster.Spec.Size == 3")
		r.updateAuxiliaryStandbyPod(ctx, currentPrimary, "2", remoteSVC, db2Cluster)

	} else if db2Cluster.Spec.Size == int32(4) {
		contextLogger.Info("db2Cluster.Spec.Size == 4")
		r.updateAuxiliaryStandbyPod(ctx, currentPrimary, "2", remoteSVC, db2Cluster)
		r.updateAuxiliaryStandbyPod(ctx, currentPrimary, "3", remoteSVC, db2Cluster)
	}

	return &ctrl.Result{}, nil
}

func (r *DB2ClusterReconciler) updateAuxiliaryStandbyPod(ctx context.Context, currentPrimary string, id string, remoteSVC string, db2Cluster *db2v1.DB2Cluster) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	contextLogger.Info("updateAuxiliaryStandbyPod")

	remoteHost := currentPrimary
	standbyPodName := db2Cluster.Name + "-" + id
	dbInstance := db2Cluster.Spec.DBInstance
	dbName := db2Cluster.Spec.DBName

	pod := &corev1.Pod{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Namespace: db2Cluster.Namespace,
		Name:      standbyPodName,
	}, pod)
	contextLogger.Info("updateAuxiliaryStandbyPod", "standbyPodName", standbyPodName, "Pod.Name", pod.Name)
	if err != nil {
		contextLogger.Error(err, "Failed to get auxiliary standby Pod.", "Pod.Namespace", pod.Namespace, "Pod.Name", pod.Name)
		return &ctrl.Result{}, err
	}

	command := fmt.Sprintf("su - %s -c 'db2 update db cfg for %s using HADR_REMOTE_HOST %s'", dbInstance, dbName, remoteHost)
	contextLogger.Info("updateAuxiliaryStandbyPod", "execRemoteHost command", command)
	execRemoteHost, err := execCommandInPod(pod, "/bin/bash", "-c", command)
	if err != nil {
		contextLogger.Info("updateAuxiliaryStandbyPod ERROR", "execRemoteHost err", err)
		return &ctrl.Result{}, err
	}

	contextLogger.Info("updateAuxiliaryStandbyPod", "execRemoteHost", execRemoteHost)

	command = fmt.Sprintf("su - %s -c 'db2 update db cfg for %s using HADR_REMOTE_SVC %s'", dbInstance, dbName, remoteSVC)
	execRemoteSVC, err := execCommandInPod(pod, "/bin/bash", "-c", command)
	if err != nil {
		return &ctrl.Result{}, err
	}
	contextLogger.Info("updateAuxiliaryStandbyPod", "execRemoteSVC", execRemoteSVC)

	command = fmt.Sprintf("su - %s -c 'db2 deactivate db %s'", dbInstance, dbName)
	execDeactivateDB, err := execCommandInPod(pod, "/bin/bash", "-c", command)
	if err != nil {
		return &ctrl.Result{}, err
	}
	contextLogger.Info("updateAuxiliaryStandbyPod", "execDeactivateDB", execDeactivateDB)

	command = fmt.Sprintf("su - %s -c 'db2 stop hadr on db %s'", dbInstance, dbName)
	execStopHADR, err := execCommandInPod(pod, "/bin/bash", "-c", command)
	if err != nil {
		return &ctrl.Result{}, err
	}
	contextLogger.Info("updateAuxiliaryStandbyPod", "execStopHADR", execStopHADR)

	command = fmt.Sprintf("su - %s -c 'db2 start hadr on db %s as standby'", dbInstance, dbName)
	execStartHADR, err := execCommandInPod(pod, "/bin/bash", "-c", command)
	if err != nil {
		return &ctrl.Result{}, err
	}
	contextLogger.Info("updateAuxiliaryStandbyPod", "execStartHADR", execStartHADR)

	command = fmt.Sprintf("su - %s -c 'db2 activate db %s'", dbInstance, dbName)
	execActivateDB, err := execCommandInPod(pod, "/bin/bash", "-c", command)
	if err != nil {
		return &ctrl.Result{}, err
	}
	contextLogger.Info("updateAuxiliaryStandbyPod", "execActivateDB", execActivateDB)

	contextLogger.Info("-------Exec result------", "execRemoteHost", execRemoteHost, "execRemoteSVC", execRemoteSVC, "execDeactivateDB", execDeactivateDB, "execStopHADR", execStopHADR, "execStartHADR", execStartHADR, "execActivateDB", execActivateDB)

	return &ctrl.Result{}, nil
}

func (r *DB2ClusterReconciler) getPodWithName(ctx context.Context, podName string, db2Cluster *db2v1.DB2Cluster) (*ctrl.Result, error) {
	contextLogger := log.FromContext(ctx)

	pod := &corev1.Pod{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Namespace: db2Cluster.Namespace,
		Name:      podName,
	}, pod)
	if err != nil {
		contextLogger.Error(err, "Failed to get Pod.", "Pod.Namespace", pod.Namespace, "Pod.Name", pod.Name)
		return &ctrl.Result{}, err
	}

	return &ctrl.Result{}, nil
}

func (r *DB2ClusterReconciler) updateEtcHosts(ctx context.Context, podName string, ipPodName string) (*ctrl.Result, error) {

	return &ctrl.Result{}, nil
}
