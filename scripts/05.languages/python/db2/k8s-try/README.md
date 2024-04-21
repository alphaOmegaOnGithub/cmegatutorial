## Deploy a HADR DB2 cluster on k8s

### Deploy etcd cluster on k8s
You can find details in <a href="./etcd/README.md">ETCD README</a>

### Apply db2-cluster.yaml file
You can use **__db2-cluster.yaml__** to deploy the DB2 cluster which is in the directory **__k8s-trty__**
db2-cluster.yaml:  
```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
   name: share-hadr
spec:
   accessModes:
     - ReadWriteMany
   storageClassName: managed-nfs-storage
   resources:
     requests:
       storage: 1Gi
---
# Headless service for db
apiVersion: v1
kind: Service
metadata:
  name: db2-svc-v5
  labels:
    app: db2
spec:
  clusterIP: None
  ports:
    - port: 50001
      name: db2
  selector:
    app: db2
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: db2-v5
  labels:
    app: db2
spec:
  serviceName: db2-svc-v5
  selector:
    matchLabels:
      app: db2
  replicas: 2
  template:
    metadata:
      name: db2-v5
      labels:
        app: db2
    spec:
      containers:
        - name: db2
          image: 129.69.209.196:5000/my-db2:v5
          imagePullPolicy: "IfNotPresent"
          ports:
          - containerPort: 51000
          - containerPort: 56000  
          env:
          - name: BLU
            value: "false"
          - name: ENABLE_ORACLE_COMPATIBILITY
            value: "false"
          - name: UPDATEAVAIL
            value: "NO"
          - name: REPODB
            value: "false"
          - name: IS_OSXFS
            value: "false"
          - name: PERSISTENT_HOME
            value: "true"
          - name: DBNAME
            value: "HADRDB"
          - name: DB2INST1_PASSWORD
            value: "db2inst1"
          - name: LICENSE
            value: "accept"
          - name: TO_CREATE_SAMPLEDB
            value: "false"
          - name: DB2INSTANCE
            value: "db2inst1"
          - name: HADR_ENABLED
            value: "true"
          - name: ETCD_ENDPOINT
            value: "etcd-0.etcd.etcd-new.svc.cluster.local:2379,etcd-1.etcd.etcd-new.svc.cluster.local:2379,etcd-2.etcd.etcd-new.svc.cluster.local:2379"
          volumeMounts:
          - name: db2database
            mountPath: /database
          - name: hadr-data
            mountPath: /hadr
          securityContext:
            privileged: true
      volumes:
        - name: hadr-data
          persistentVolumeClaim:
            claimName: 'share-hadr'
      securityContext:
        fsGroup: 1000
      #imagePullSecrets:
      #- name: regcred
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - topologyKey: kubernetes.io/hostname
            labelSelector:
              matchLabels:
                app: db2
  volumeClaimTemplates:
    - metadata:
        name: db2database
      spec:
        storageClassName: openebs-hostpath
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 1Gi
```
Fuction of db2-cluster.yaml:  
1. Create a PVC with nfs StorageClass, this pvc is used to create a pv to mount hadr.cfg file that can be used by primary and standby pods in the cluster  
2. Create headless service for each db2 pod  
3. Create StatefulSet to manage db2 cluster  


