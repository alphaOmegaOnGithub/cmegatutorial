## Create private repository in docker

We can use docker registry to store docker images.

### What is docker registry
The Registry is a stateless, highly scalable server side application that stores and lets you distribute Docker images.  
You should use the Registry if you want to:  
- tightly control where your images are being stored
- fully own your images distribution pipeline
- integrate image storage and distribution tightly into your in-house development workflow

### Create registry container
```sh
# create registry directory
sudo mkdir -p /opt/data/registry

# run registry container
sudo docker run -d --restart=always -p 5000:5000 -v /opt/data/registry:/tmp/registry --name db2-operator-registry registry
```

### Build and push docker image
```sh
# docker build
sudo docker build -t 129.69.209.196:5000/my-db2:v1 .

# docker push
sudo docker push 129.69.209.196:5000/my-db2:v1

# check repository
curl 129.69.209.196:5000/v2/_catalog
```
You can more details in <a href="../docker-compose-for-k8s/README.md">docker-compose for k8s README</a>  

### Configure containerd
In order to pull images successfully from our private registry when deploying db2 cluster on k8s, we need to configure containerd.

Edit /etc/containerd/config.toml  
```yml
[plugins."io.containerd.grpc.v1.cri".registry]
  [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."129.69.209.196:5000"]
      endpoint = ["http://129.69.209.196:5000"]
  [plugins."io.containerd.grpc.v1.cri".registry.configs]
    [plugins."io.containerd.grpc.v1.cri".registry.configs."129.69.209.196:5000".tls]
      insecure_skip_verify = true
```

Restart containerd service  
```sh
# restart 
sudo systemctl restart containerd

# check status
sudo systemctl status containerd
```

Test if we can pull image from registry on k8s
```sh
sudo crictl -r /run/containerd/containerd.sock pull 129.69.209.196:5000/my-db2:v1

kubectl run test --image 129.69.209.196:5000/my-db2:v1
```