K8s A Step-by-Step Guide
Servers should have a minimum of 2 vCPU and 2GB RAM.

    Server 01: Will act as Kubernetes Controller Plane
    Server 02: Will act as Kubernetes Worker node.

In both servers ensure the firewall is disabled and all the ports are allowed between the servers.
Id you want restricted port access between the servers, enable all the recommended ports of 
control plane and worker nodes as given in the image below.
install the following utilities on all the servers.

    Container Runtime (CRI-O)
    kubelet
    Kubeadm
    kubectl
use install script 
sudo su
chmod +x utilities.sh
./utilities.sh

## Step 3: Create Kubeadm Configuration File

Next step is to create a Kubeadm YAML configuration file with all the required configurations for control plane.
Save the following YAML file as kubeadm.config in the control plane node. 
Replace 35.89.184.80 with the Public or Private IP of the control plane node.

## Initialize Control Plane with Configuration File
kubeadm init --config=kubeadm.config
Copy the join command and keep it in a notepad. 
We need the join command to be run on the worker nodes to join the master node.
Execute the following to add the admin.conf file to the homefolder to use kubectl commands
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

Verify kubectl by executing the following command.

kubectl get pod -n kube-system
root@controlplane# kubectl get pod -n kube-system
## Step 5: Join the Worker Nodes To Control Plane
Execute the join command you noted down in the last step on the Worker nodes. It should look like the following.

kubeadm join 172.31.41.192:6443 --token e5919f.htqtr9b1zlf0pc26 \
        --discovery-token-ca-cert-hash sha256:1b034aba240d892c3c05d7dd551623df51759164ed3072b368a7c0415a522266

## on the control plane node to verify if the node has joined the cluster.

kubectl get nodes

You should see the following output.

root@controlplane:/home/ubuntu# kubectl get nodes

## Step 6: Validate the cluster
Lets do a smoke test and validate the cluster.

Command	Description
kubectl get nodes	Check the status of nodes in the cluster.
kubectl get pods --all-namespaces	Check if all pods are running or have successfully terminated.
kubectl cluster-info	Get basic info about the cluster.
kubectl get svc	Check services running in the default namespace.
kubectl get componentstatuses	Check the status of cluster components like etcd, controller-manager, etc.
kubectl api-resources	See all available API resources.
kubectl config view	View kubeconfig settings.
kubectl get events	See events such as scaling operations or errors.
kubectl version	Check the version of the client and the server.



		
