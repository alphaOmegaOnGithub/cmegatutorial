#!/bin/bash

dbname=${DBNAME}

su - ${DB2INSTANCE} -c "db2 connect to ${dbname}; db2 \"create table USERS(id int NOT NULL primary key, NAME VARCHAR(10), AGE VARCHAR(10))\"; db2 \"insert into USERS values('1','Nancy','20')\"; db2 \"insert into USERS values('2','Mike', '21')\"; db2 \"insert into USERS values('3','Lukas', '22')\"; db2 \"insert into USERS values('4','Felix', '23')\"; db2 \"insert into USERS values('5','David', '24')\"; db2 \"insert into USERS values('6','Jack', '25')\""


