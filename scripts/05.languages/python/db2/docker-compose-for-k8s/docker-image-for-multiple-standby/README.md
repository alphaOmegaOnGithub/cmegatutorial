## Build db2 images for deploying db2 cluster on k8s

### Edit Dockerfile
You can find Dockerfile and shell scripts in the directory **__docker-compose-for-k8s__**  
Dockerfile
```yml
FROM ibmcom/db2

COPY install_python2.sh install_python2.sh
RUN bash install_python2.sh
RUN mkdir /var/custom
COPY a_setup_governor.sh /var/custom
RUN chmod a+x /var/custom/a_setup_governor.sh
COPY b_create_table.sh /var/custom
RUN chmod a+x /var/custom/b_create_table.sh
```
Function of Dockerfile:  
1. Shell script **__install_python2.sh__** installs python2 and related packages which required in the governor component 
2. Shell script **__a_setup_governor.sh__** and **__b_create_table.sh__** copies into the /var/custom will be automatically executed after main Db2 setup has completed  

install_python2.sh  
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
```
Function of install_python2.sh:  
1. Install python2
2. Install related packages which required in the governor component:  
   Enum34 mock nose-parameterized pyyaml python2-devel subprocess32 fasteners procps wheel etcd3


a_setup_governor.sh  
```sh
#!/bin/bash

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
1. Create file hostname-governor.log and change mode
2. Modify the db2.yml and etcd3interface.py (since default governor used etcd2, we need to change it to fit etcd3)
3. Modify the governor.py to change the name of governor log file
4. Run governor in the background with no hang up


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

### Build and push docker image
```sh
# docker build
sudo docker build -t 129.69.209.196:5000/my-db2:v2 .

# docker push
sudo docker push 129.69.209.196:5000/my-db2:v2

# check repository
curl 129.69.209.196:5000/v2/_catalog
```
