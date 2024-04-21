## Deploy HADR docker containers with docker-compose

### Deploy etcd cluster in docker
You can find more details on <a href="./etcd/README.md">etcd README</a>

### Install docker-compose
reference: https://docs.docker.com/compose/install/linux/  

```sh
#install docker-compose
sudo apt-get update
sudo apt-get install docker-compose-plugin

#check the version
docker compose version
```

### Edit Dockerfile
You can find **_Dockerfile_** in the directory **_composetest_**  
Dockerfile  
```yaml 
FROM ibmcom/db2

RUN mkdir /var/custom
COPY a_setup_governor.sh /var/custom
RUN chmod a+x /var/custom/a_setup_governor.sh
COPY b_create_table.sh /var/custom
RUN chmod a+x /var/custom/b_create_table.sh
```
Function of Dockerfile:  
1. Shell script **a_setup_governor.sh_** and **b_create_table.sh_** copied into the /var/custom will be automatically executed after main Db2 setup has completed.  
  
a_setup_governor.sh  
```sh
#!/bin/bash

# insatll python2
sudo yum -y install python2

# install Enum34 mock nose-parameterized pyyaml
sudo pip2 install Enum34 mock nose-parameterized pyyaml

# install python2-devel
sudo yum -y install python2-devel

# install subprocess32
sudo pip2 install subprocess32

# install fasteners
sudo pip2 install fasteners

# install ps
sudo yum -y install procps

# install protobuf
sudo pip2 install protobuf==3.17.0

# install wheel
sudo pip2 install wheel

# install etcd3
sudo pip2 install etcd3

# create file governor-hostname.log and change mode
logDir="/home/xiaomin/log/"
hostname=`hostname`
path=$logDir"governor-"$hostname".log"

touch $path

chmod 777 $path

# modify db2.yml
su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i '/env: prod/ a\truth_manager: etcd3' db2.yml"

su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i 's|etcd:|etcd3:|' db2.yml"

su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i 's|cert:|ca_cert:|' db2.yml"

su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i '/ca_cert:/ a\ user: \n password:' db2.yml"

# modify governor.py
su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i '3i\import socket' governor.py"

su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i '/fname =/ i\path = \"/var/log/governor/governor-\" + socket.gethostname() + \".log\"' governor.py"

su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i 's|fname = \"/var/log/governor/governor.log\" if config.is_prod() or config.is_stage() else None|fname = path if config.is_prod() or config.is_stage() else None|' governor.py"

# modify helpers/etcd3interface.py
su - ${DB2INSTANCE} -c "cd governor/ ; sudo sed -i 's|etcd3.client(self.host, self.port, ca_cert=self.ca_cert, timeout=10, user=self.user, password=self.password)|etcd3.client(self.host, self.port)|' helpers/etcd3interface.py"

# execute governor.py
su - ${DB2INSTANCE} -c "cd governor/ ; nohup python2 governor.py &"
```
Function of a_setup_governor.sh:  
1) Install python2  
2) Install related packages which required in the governor component: Enum34 mock nose-parameterized pyyaml python2-devel subprocess32 fasteners procps wheel etcd3  
3) Create file hostname-governor.log and change mode  
4) Modify the db2.yml and etcd3interface.py (since default governor used etcd2, we need to change it to fit etcd3)  
5) Modify the governor.py to change the name of governor log file  
6) Run governor in the background with no hang up  


b_create_table.sh  
```sh
#!/bin/bash

# set up HADR config
su - ${DB2INSTANCE} -c "db2set DB2_HADR_ROS=ON"

su - ${DB2INSTANCE} -c "db2set DB2_STANDBY_ISO=UR"

dbname=${DBNAME}

su - ${DB2INSTANCE} -c "db2 connect to ${dbname}; db2 \"create table USERS(id int NOT NULL primary key, NAME VARCHAR(10), AGE VARCHAR(10))\"; db2 \"insert into USERS values('1','Nancy','20')\"; db2 \"insert into USERS values('2','Mike', '21')\"; db2 \"insert into USERS values('3','Lukas', '22')\"; db2 \"insert into USERS values('4','Felix', '23')\"; db2 \"insert into USERS values('5','David', '24')\"; db2 \"insert into USERS values('6','Jack', '25')\""
```
Function of b_create_table.sh:  
1. DB2_HADR_ROS=ON: enable the reads on standby feature  
2. DB2_STANDBY_ISO=UR: the only isolation level that is supported on an active standby HADR database which is read enabled is Uncommitted Read (UR)  
3. create table USERS in HADRDB for test  

### Run docker-compose
You can find **_docker-compose.yml_** in the directory **_composetest_**  
docker-compose.yml      
```yml
version: "3.7"
services:
  db2_hadr_primary:
    build: .
    container_name: db2_hadr_node1
    hostname: db2_hadr_node1
    ports:
      - 50000
    #network_mode: host
    privileged: true
    environment:
      LICENSE: accept
      BLU: false
      ENABLE_ORACLE_COMPATIBILITY: false
      UPDATEAVAIL: NO
      TO_CREATE_SAMPLEDB: false
      REPODB: false
      IS_OSXFS: false
      PERSISTENT_HOME: true
      DB2INSTANCE: db2inst1
      DB2INST1_PASSWORD: db2inst1
      DBNAME: HADRDB
      HADR_ENABLED: true
      ETCD_ENDPOINT: 172.20.0.4:2379
    volumes:
      - db2_empty_hadr_h1:/database
      - db2_empty_hadr_share:/hadr
    networks:
      hadr_net:
        ipv4_address: 172.20.0.7
  db2_hadr_standby:
    build: .
    container_name: db2_hadr_node2
    hostname: db2_hadr_node2
    ports:
      - 50000
    #network_mode: host
    privileged: true
    environment:
      LICENSE: accept
      BLU: false
      ENABLE_ORACLE_COMPATIBILITY: false
      UPDATEAVAIL: NO
      TO_CREATE_SAMPLEDB: false
      REPODB: false
      IS_OSXFS: false
      PERSISTENT_HOME: true
      DB2INSTANCE: db2inst1
      DB2INST1_PASSWORD: db2inst1
      DBNAME: HADRDB
      HADR_ENABLED: true
      ETCD_ENDPOINT: 172.20.0.4:2379
    volumes:
      - db2_empty_hadr_h2:/database
      - db2_empty_hadr_share:/hadr
    networks:
      hadr_net:
        ipv4_address: 172.20.0.8

volumes:
  db2_empty_hadr_h1: {}
  db2_empty_hadr_h2: {}
  db2_empty_hadr_share: {}
#networks:
#  hadr_net:
#    driver: bridge
#    ipam:
#      driver: default
#      config:
#        - subnet: "172.20.0.0/16"
networks:
  hadr_net:
    external: true
```

run docker-compose  
```sh
# build images
sudo docker-compose build

# start the containers in the background and leaves them running
sudo docker-compose up -d
```

some other commands  
```sh
# list all containers
sudo docker-compose ps -a

# down all up containers with remove volume
sudo docker-compose down -v 
```
