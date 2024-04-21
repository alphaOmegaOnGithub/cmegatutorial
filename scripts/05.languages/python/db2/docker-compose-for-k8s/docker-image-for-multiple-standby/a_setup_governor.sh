#!/bin/bash

# create file governor-hostname.log and change mode
logDir="/var/log/governor/"
hostname=`hostname`
path=$logDir"governor-"$hostname".log"

touch $path

chmod 777 $path

primary=`/opt/ibm/db2/V11.5/bin/db2fupdt -f /hadr/hadr.cfg -p primary_hostname`
standby=`/opt/ibm/db2/V11.5/bin/db2fupdt -f /hadr/hadr.cfg -p standby_hostname`

# execute governor.py
if [ "${hostname?}" = "${primary?}" -o "${hostname?}" = "${standby?}" ]; then
	su - ${DB2INSTANCE} -c "cd governor/ ; nohup python2 governor.py &"
fi
