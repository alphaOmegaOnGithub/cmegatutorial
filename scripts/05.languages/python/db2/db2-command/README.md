## Common db2 command

```sh
# list database
db2 list db directory

# connect to database
db2 connect to HADRDB user db2inst1 using db2inst1

# list tables
db2 list tables

# enter db2 terminal
db2

# create table USERS
create table USERS( id int NOT NULL primary key, NAME VARCHAR(10), AGE VARCHAR(10));

# insert data into table USERS
insert into USERS values('1','Nancy', '20');
insert into USERS values('2','Mike', '21');
insert into USERS values('3','Lukas', '22');
insert into USERS values('4','Felix', '23');
insert into USERS values('5','David', '24');
insert into USERS values('6','Jack', '25');

# query data
select * from USERS;

# exit db2 terminal
quit

# describe table USERS
db2 describe table USERS

# start db2
db2start

# stop db2
db2stop

# show db2 settings
db2set

# deactivate database
db2 deactivate db HADRDB

# activate database 
db2 activate db HADRDB

# connect to database
db2 connect to HADRDB

# list applications
db2 list applications

# check hadr settings
db2pd -db hadrdb -hadr
```
