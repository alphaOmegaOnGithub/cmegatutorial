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

package v1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// EDIT THIS FILE!  THIS IS SCAFFOLDING FOR YOU TO OWN!
// NOTE: json tags are required.  Any new fields you add must have json tags for the fields to be serialized.

// DB2ClusterSpec defines the desired state of DB2Cluster
type DB2ClusterSpec struct {
	// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster
	// Important: Run "make" to regenerate code after modifying this file

	// Size: the size of DB2 instances
	// +kubebuilder:validation:Minimum=2
	// +kubebuilder:validation:Maximum=4
	Size int32 `json:"Size"`
	// EtcdEndpoint: endpoints of etcd cluster
	EtcdEndpoint string `json:"EtcdEndpoint"`
	// DBName: name of db2 database
	// +kubebuilder:default:="HADRDB"
	DBName string `json:"DBName,omitempty"`
	// DBInstance: name of db2 instance
	// +kubebuilder:default:="db2inst1"
	DBInstance string `json:"DBInstance,omitempty"`
	// DBInstancePassword: password of db2 instance
	// +kubebuilder:default:="db2inst1"
	DBInstancePassword string `json:"DBInstancePassword,omitempty"`
	// StorageClassforHADR: StorageClass to mount hadr.cfg file which can be shared(usually is NFS)
	StorageClassforHADR string `json:"StorageClassforHADR"`
	// StorageClassforDB: StorageClass to mount database
	// +kubebuilder:default:="default"
	StorageClassforDB string `json:"StorageClassforDB,omitempty"`
}

// DB2ClusterStatus defines the observed state of DB2Cluster
type DB2ClusterStatus struct {
	// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
	// Important: Run "make" to regenerate code after modifying this file
}

//+kubebuilder:object:root=true
//+kubebuilder:subresource:status

// DB2Cluster is the Schema for the db2clusters API
type DB2Cluster struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   DB2ClusterSpec   `json:"spec,omitempty"`
	Status DB2ClusterStatus `json:"status,omitempty"`
}

//+kubebuilder:object:root=true

// DB2ClusterList contains a list of DB2Cluster
type DB2ClusterList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []DB2Cluster `json:"items"`
}

func init() {
	SchemeBuilder.Register(&DB2Cluster{}, &DB2ClusterList{})
}
