## Deploy etcd cluster in docker

### Create docker network
```sh
sudo docker network create -d bridge hadr_net
```

### Run etcd containers
```sh
sudo docker run -itd \
    --network hadr_net \
    --ip 172.20.0.4 \
    --hostname etcd1 \
    --name etcd1 \
    -e ETCDCTL_API=3 \
    -p 12379:2379 \
    -p 12380:2380 \
    quay.io/coreos/etcd:latest \
    etcd --name etcd1 \
    --initial-advertise-peer-urls http://172.20.0.4:2380 \
    --listen-peer-urls http://172.20.0.4:2380 \
    --listen-client-urls http://172.20.0.4:2379,http://127.0.0.1:2379 \
    --advertise-client-urls http://172.20.0.4:2379 \
    --initial-cluster-token etcd-cluster-1 \
    --initial-cluster etcd1=http://172.20.0.4:2380,etcd2=http://172.20.0.5:2380,etcd3=http://172.20.0.6:2380 \
    --initial-cluster-state new

sudo docker run -itd \
    --network hadr_net \
    --ip 172.20.0.5 \
    --hostname etcd2 \
    --name etcd2 \
    -e ETCDCTL_API=3 \
    -p 22379:2379 \
    -p 22380:2380 \
    quay.io/coreos/etcd:latest \
    etcd --name etcd2 \
    --initial-advertise-peer-urls http://172.20.0.5:2380 \
    --listen-peer-urls http://172.20.0.5:2380 \
    --listen-client-urls http://172.20.0.5:2379,http://127.0.0.1:2379 \
    --advertise-client-urls http://172.20.0.5:2379 \
    --initial-cluster-token etcd-cluster-1 \
    --initial-cluster etcd1=http://172.20.0.4:2380,etcd2=http://172.20.0.5:2380,etcd3=http://172.20.0.6:2380 \
    --initial-cluster-state new

sudo docker run -itd \
    --network hadr_net \
    --ip 172.20.0.6 \
    --hostname etcd3 \
    --name etcd3 \
    -e ETCDCTL_API=3 \
    -p 32379:2379 \
    -p 32380:2380 \
    quay.io/coreos/etcd:latest \
    etcd --name etcd3 \
    --initial-advertise-peer-urls http://172.20.0.6:2380 \
    --listen-peer-urls http://172.20.0.6:2380 \
    --listen-client-urls http://172.20.0.6:2379,http://127.0.0.1:2379 \
    --advertise-client-urls http://172.20.0.6:2379 \
    --initial-cluster-token etcd-cluster-1 \
    --initial-cluster etcd1=http://172.20.0.4:2380,etcd2=http://172.20.0.5:2380,etcd3=http://172.20.0.6:2380 \
    --initial-cluster-state new
```

### Check status of etcd cluster
```sh
# use etcd1 as example

# enter the container etcd1
sudo docker exec -it etcd1 /bin/bash

# run following command in etcd1
# check etcd cluster status
etcdctl -w table --endpoints=etcd1:2379,etcd2:2379,etcd3:2379 endpoint status
# check etcd cluster status
etcdctl endpoint status --cluster -w table
```