package controllers

import (
	"context"
	"strings"
	"time"

	db2v1 "github.com/example/db2-operator/api/v1"
	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/types"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/log"
)

func (r *DB2ClusterReconciler) ensureService(ctx context.Context,
	db2Cluster *db2v1.DB2Cluster,
	svc *corev1.Service,
) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	found := &corev1.Service{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Name:      svc.Name,
		Namespace: db2Cluster.Namespace,
	}, found)
	if err != nil && errors.IsNotFound(err) {

		// Create the service
		contextLogger.Info("Creating a new Service", "Service.Namespace", svc.Namespace, "Service.Name", svc.Name)
		err = r.Client.Create(ctx, svc)

		if err != nil {
			// Creation failed
			contextLogger.Error(err, "Failed to create new Service", "Service.Namespace", svc.Namespace, "Service.Name", svc.Name)
			return &ctrl.Result{}, err
		} else {
			// Creation was successful
			return nil, nil
		}
	} else if err != nil {
		// Error that isn't due to the service not existing
		contextLogger.Error(err, "Failed to get Service")
		return &ctrl.Result{}, err
	}

	return nil, nil
}

func (r *DB2ClusterReconciler) ensurePVC(ctx context.Context,
	db2Cluster *db2v1.DB2Cluster,
	hadrPvc *corev1.PersistentVolumeClaim,
) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	found := &corev1.PersistentVolumeClaim{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Name:      hadrPvc.Name,
		Namespace: db2Cluster.Namespace,
	}, found)
	if err != nil && errors.IsNotFound(err) {

		// Create the PVC
		contextLogger.Info("Creating a new PersistentVolumeClaim", "PersistentVolumeClaim.Namespace", hadrPvc.Namespace, "PersistentVolumeClaim.Name", hadrPvc.Name)
		err = r.Client.Create(ctx, hadrPvc)

		if err != nil {
			// Creation failed
			contextLogger.Error(err, "Failed to create new PersistentVolumeClaim", "PersistentVolumeClaim.Namespace", hadrPvc.Namespace, "PersistentVolumeClaim.Name", hadrPvc.Name)
			return &ctrl.Result{}, err
		} else {
			// Creation was successful
			return nil, nil
		}
	} else if err != nil {
		// Error that isn't due to the PVC not existing
		contextLogger.Error(err, "Failed to get PersistentVolumeClaim")
		return &ctrl.Result{}, err
	}

	return nil, nil
}

func (r *DB2ClusterReconciler) ensureStatefulSet(ctx context.Context,
	db2Cluster *db2v1.DB2Cluster,
	sts *appsv1.StatefulSet,
) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	found := &appsv1.StatefulSet{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Name:      sts.Name,
		Namespace: db2Cluster.Namespace,
	}, found)
	if err != nil && errors.IsNotFound(err) {

		// Create the service
		contextLogger.Info("Creating a new StatefulSet", "StatefulSet.Namespace", sts.Namespace, "StatefulSet.Name", sts.Name)
		err = r.Client.Create(ctx, sts)

		if err != nil {
			// Creation failed
			contextLogger.Error(err, "Failed to create new StatefulSet", "StatefulSet.Namespace", sts.Namespace, "StatefulSet.Name", sts.Name)
			return &ctrl.Result{}, err
		} else {
			// Creation was successful
			return nil, nil
		}
	} else if err != nil {
		// Error that isn't due to the service not existing
		contextLogger.Error(err, "Failed to get StatefulSet")
		return &ctrl.Result{}, err
	}

	return nil, nil
}

func (r *DB2ClusterReconciler) getPodList(ctx context.Context, db2Cluster *db2v1.DB2Cluster, podList *corev1.PodList) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	listOpts := []client.ListOption{
		client.InNamespace(db2Cluster.Namespace),
		client.MatchingLabels(setLabels("common")),
	}

	if err := r.Client.List(ctx, podList, listOpts...); err != nil {
		contextLogger.Error(err, "Failed to list pods", "db2Cluster.Namespace", db2Cluster.Namespace, "db2Cluster.Name", db2Cluster.Name)
		return &ctrl.Result{}, err
	}

	foundSts := &appsv1.StatefulSet{}
	err := r.Client.Get(ctx, types.NamespacedName{
		Name:      db2Cluster.Name,
		Namespace: db2Cluster.Namespace,
	}, foundSts)

	if err != nil {
		// The statefulSet may not have been created yet, so requeue
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, err
	}

	contextLogger.Info("Current StatefulSet replica", "replica:", *foundSts.Spec.Replicas)

	if int(*foundSts.Spec.Replicas) != len(podList.Items) {
		contextLogger.Info("Requeue get Podlist", "podList len", len(podList.Items))
		return &ctrl.Result{RequeueAfter: 5 * time.Second}, nil
	}

	contextLogger.Info("Get all pods", "podList len", len(podList.Items))

	return nil, nil
}

func (r *DB2ClusterReconciler) getPVCList(ctx context.Context, req ctrl.Request, db2Cluster *db2v1.DB2Cluster, pvcList *corev1.PersistentVolumeClaimList) (*ctrl.Result, error) {

	contextLogger := log.FromContext(ctx)

	//contextLogger.Info("client.ListOption", "req.NamespacedName.Namespace", req.NamespacedName.Namespace, "client.MatchingLabels", setLabels("common"))

	listOpts := []client.ListOption{
		client.InNamespace(req.NamespacedName.Namespace),
		client.MatchingLabels(setLabels("common")),
	}

	if err := r.Client.List(ctx, pvcList, listOpts...); err != nil {
		contextLogger.Error(err, "Failed to list PersistentVolumeClaimList", "db2Cluster.Namespace", db2Cluster.Namespace, "db2Cluster.Name", db2Cluster.Name)
		return &ctrl.Result{}, err
	}

	return nil, nil
}

func splitString(str string) string {

	//remove string which after \n
	index := strings.Index(str, "\n")
	str = str[0:index]

	strList := strings.Split(str, "=")

	// Remove space
	strRes := strings.Replace(strList[1], " ", "", -1)

	// Remove /n
	//strRes = strings.Replace(strRes, "\n", "", -1)

	return strRes
}
