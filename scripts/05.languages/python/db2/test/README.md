## Test Env


## Set up haproxy
We choose haproxy as load balancer outside K8s cluster, which is deployed in docker.  

### 1.Architecture
```sh
# haproxy-primary
request      --->      haproxy-primary      --->        worknode1
                   (129.69.209.196:23307)         (129.69.209.194:30001)
				   
                                            --->        worknode2
                                                  (129.69.209.195:30001)

```

## 2.Edit Config File
You can find following files in the directory **_haproxy_**  
haproxy-primary.cfg    
```cfg
global
    #log stdout format raw local0
    log         stdout format raw local0 info
defaults
    mode            tcp
    log             global
    option          tcplog
    option          dontlognull
    option          http-server-close
    option          redispatch
    retries         3
    timeout         http-request 10s
    timeout         queue   1m
    timeout         connect 10s
    timeout         client  1m
    timeout         server  1m
    timeout         http-keep-alive 10s
    timeout         check   10s
    maxconn         3000
frontend        db2
    bind        0.0.0.0:23307
    mode        tcp
    log         global
    default_backend db2_cluster

backend     db2_cluster
    log         global
    balance roundrobin
    server  node01 129.69.209.194:30001 check inter 5s rise 2 fall 3
    server  node02 129.69.209.195:30001 check inter 5s rise 2 fall 3

listen stats
    mode    http
    bind    0.0.0.0:1080
    stats   enable
    stats   hide-version
    stats uri /haproxyamdin?stats
	stats realm Haproxy\ Statistics
    stats auth admin:admin
    stats admin if TRUE

```

### 3.Deploy haproxy in the docker

```sh
# haproxy-primary
sudo docker run -p 1080:1080 -p 23307:23307 -d --name haproxy-primary -v /home/xiaomin/postgres/gitlab/stateful-db-k8s-services/DB2/test/haproxy/haproxy-primary.cfg:/usr/local/etc/haproxy/haproxy.cfg --privileged=true haproxy
```

### 4.Monitor haproxy status in browser
```sh
# user/password
admin/admin

# use following url to monitor haproxy-primary
http://129.69.209.196:1080/haproxyamdin?stats

```

## Deploy DB2Cluster in the k8s
You can find details in <a href="../db2-operator/README.md">DB2Cluster README</a>

## Test connection of DB2 service
### Run connect_db2.py
You can find **__connect_db2.py__** in the **__test__** directory
```sh
python connect_db2.py
```
### Function of connect_db2.py
##### 1. Connect to database (HADRDB) every 60s
##### 2. After connecting to HADRDB, conduct following CRUDS operations:  
* create table book if not exists  
* instert data into table book
* update data in table book  
* delete data in table book
* select data from table book


