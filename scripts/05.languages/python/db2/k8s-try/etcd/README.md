## ETCD Cluster

Set up a etcd cluster for DB2 HADR  

### Deploy etcd cluster

Edit yaml file  
etcd-cluster.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: etcd-client
spec:
  type: NodePort
  ports:
    - name: etcd-client
      port: 2379
      protocol: TCP
      targetPort: 2379
  selector:
    app: etcd
---
apiVersion: v1
kind: Service
metadata:
  name: etcd
  annotations:
    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"
spec:
  clusterIP: None
  publishNotReadyAddresses: true
  ports:
    - port: 2379
      name: client
    - port: 2380
      name: peer
  selector:
    app: etcd

---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: etcd
  labels:
    app: etcd
spec:
  serviceName: etcd
  selector:
    matchLabels:
      app: etcd
  replicas: 3
  template:
    metadata:
      name: etcd
      labels:
        app: etcd
    spec:
      containers:
        - name: etcd
          image: quay.io/coreos/etcd:latest
          ports:
            - containerPort: 2379
              name: client
            - containerPort: 2380
              name: peer
          volumeMounts:
            - name: data
              mountPath: /var/run/etcd
          env:
            - name: CLUSTER_SIZE
              value: "3"
            - name: SET_NAME
              value: "etcd"
          command:
            - /bin/sh
            - -ecx
            - |
              IP=$(hostname -i)
              PEERS=""
              for i in $(seq 0 $((${CLUSTER_SIZE} - 1))); do
                  PEERS="${PEERS}${PEERS:+,}${SET_NAME}-${i}=http://${SET_NAME}-${i}.${SET_NAME}:2380"
              done
              exec etcd --name ${HOSTNAME} \
                --listen-peer-urls http://0.0.0.0:2380 \
                --listen-client-urls http://0.0.0.0:2379 \
                --advertise-client-urls http://${HOSTNAME}.${SET_NAME}:2379 \
                --initial-advertise-peer-urls http://${HOSTNAME}:2380 \
                --initial-cluster-token etcd-cluster-1 \
                --initial-cluster ${PEERS} \
                --initial-cluster-state new \
                --data-dir /var/run/etcd/default.etcd
        
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        storageClassName: openebs-hostpath
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 1Gi

``` 

Deploy yaml file  
```sh
# create etcd namespace  
kubectl create ns etcd

# deploy etcd cluster
kubectl apply -f etcd-cluster.yaml -n etcd
```

Check healthy for etcd cluster
```sh
# check healthy
kubectl -n etcd exec -it etcd-0 -- etcdctl cluster-health

# output as following
member 59d3bdbcac74f6d9 is healthy: got healthy result from http://etcd-2.etcd:2379
member cf6e4d46327c6096 is healthy: got healthy result from http://etcd-0.etcd:2379
member ef7b9396380fadf3 is healthy: got healthy result from http://etcd-1.etcd:2379
cluster is healthy

```

Interact with etcd
```sh
# set msg, 30740 is the port of etcd-client service
curl 129.69.209.195:30740/v2/keys/msg -XPUT -d value=hello-world
# output
{"action":"set","node":{"key":"/msg","value":"hello-world","modifiedIndex":18,"createdIndex":18},"prevNode":{"key":"/msg","value":"hello-again","modifiedIndex":11,"createdIndex":11}}

# get msg
curl 129.69.209.195:32171/v2/keys/msg
# output
{"action":"get","node":{"key":"/msg","value":"hello-world","modifiedIndex":18,"createdIndex":18}}

# check the value on each instance locally
kubectl -n etcd exec -it etcd-0 -- etcdctl get msg
# output
hello-world
```

Test High Availability for etcd cluster  
```sh
# find who is the leader
kubectl -n etcd exec -it etcd-0 -- etcdctl member list  

# output as following, we can find the etcd-2 is the leader  
59d3bdbcac74f6d9: name=etcd-2 peerURLs=http://etcd-2.etcd.etcd.svc.cluster.local:2380 clientURLs=http://etcd-2.etcd:2379 isLeader=false  
cf6e4d46327c6096: name=etcd-0 peerURLs=http://etcd-0.etcd.etcd.svc.cluster.local:2380 clientURLs=http://etcd-0.etcd:2379 isLeader=true  
ef7b9396380fadf3: name=etcd-1 peerURLs=http://etcd-1.etcd.etcd.svc.cluster.local:2380 clientURLs=http://etcd-1.etcd:2379 isLeader=false  

# kill the leader  
kubectl delete pod etcd-0 -n etcd  

# check cluster health  
kubectl -n etcd exec -it etcd-1 -- etcdctl cluster-health  
# output, cluster is not healthy now  
member 59d3bdbcac74f6d9 is healthy: got healthy result from http://etcd-2.etcd:2379  
failed to check the health of member cf6e4d46327c6096 on http://etcd-0.etcd:2379: Get http://etcd-0.etcd:2379/health: dial tcp 192.168.182.202:2379: i/o timeout  
member cf6e4d46327c6096 is unreachable: [http://etcd-0.etcd:2379] are all unreachable  
member ef7b9396380fadf3 is healthy: got healthy result from http://etcd-1.etcd:2379  
cluster is degraded  
command terminated with exit code 5  


# check service is still working (read)  
curl 129.69.209.195:30740/v2/keys/msg  
# output  
{"action":"get","node":{"key":"/msg","value":"hello-world","modifiedIndex":18,"createdIndex":18}}  

# check service is still working (write)  
curl 129.69.209.195:30740/v2/keys/msg -XPUT -d value=hello-world-again  
# output  
{"action":"set","node":{"key":"/msg","value":"hello-world-again","modifiedIndex":22,"createdIndex":22},"prevNode":{"key":"/msg","value":"hello-world","modifiedIndex":21,"createdIndex":21}}  

# check cluster is healthy after a while  
kubectl -n etcd exec -it etcd-1 -- etcdctl cluster-health  
# output, cluster is healthy now
member 59d3bdbcac74f6d9 is healthy: got healthy result from http://etcd-2.etcd:2379
member cf6e4d46327c6096 is healthy: got healthy result from http://etcd-0.etcd:2379
member ef7b9396380fadf3 is healthy: got healthy result from http://etcd-1.etcd:2379
cluster is healthy

# check the leader has changed
kubectl -n etcd exec -it etcd-1 -- etcdctl member list  
# output, leader changes from etcd-0 to etcd-2
59d3bdbcac74f6d9: name=etcd-2 peerURLs=http://etcd-2.etcd.etcd.svc.cluster.local:2380 clientURLs=http://etcd-2.etcd:2379 isLeader=true  
cf6e4d46327c6096: name=etcd-0 peerURLs=http://etcd-0.etcd.etcd.svc.cluster.local:2380 clientURLs=http://etcd-0.etcd:2379 isLeader=false  
ef7b9396380fadf3: name=etcd-1 peerURLs=http://etcd-1.etcd.etcd.svc.cluster.local:2380 clientURLs=http://etcd-1.etcd:2379 isLeader=false  


```

reference:  
https://blog.harbur.io/demystifying-stateful-apps-on-kubernetes-by-deploying-an-etcd-cluster-b85bf8c16fea  
https://github.com/improbable-eng/etcd-cluster-operator/issues/92  
