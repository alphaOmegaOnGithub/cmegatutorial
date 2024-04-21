#!/bin/bash

# create file governor-hostname.log and change mode
logDir="/var/log/governor/"
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

