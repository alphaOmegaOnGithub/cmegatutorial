import ibm_db
import ibm_db_dbi

# Careful with the punctuation here - we have 3 arguments.
# The first is a big string with semicolons in it.
# (Strings separated by only whitespace, newlines included,
#  are automatically joined together, in case you didn't know.)
# The last two are emptry strings.
#DATABASE=HADRDB;HOSTNAME=129.69.209.196;PORT=23307;PROTOCOL=TCPIP;UID=db2inst1;PWD=db2inst1;"

conn_str = ibm_db.connect('DATABASE=HADRDB;HOSTNAME=129.69.209.196;PORT=23307;PROTOCOL=TCPIP;UID=db2inst1;PWD=db2inst1;')

#For connecting to local database named pydev for user db2inst1 and password secret, use below example
#ibm_db_conn = ibm_db.connect('pydev', 'db2inst1', 'secret')
#For connecting to remote database named pydev for uid db2inst and pwd secret on host host.test.com, use below example
# Connect using ibm_db
ibm_db_conn = ibm_db.connect(conn_str,'','')
# Connect using ibm_db_dbi
conn = ibm_db_dbi.Connection(ibm_db_conn)
# create table using ibm_db
create="create table mytable(id int, name varchar(50))"
ibm_db.exec_immediate(ibm_db_conn, create)

#<ibm_db.IBM_DBStatement object at 0x7fcc5f44f650>

# Execute tables API
conn.tables('DB2INST1', '%')
[{'TABLE_CAT': None, 'TABLE_SCHEM': 'DB2INST1', 'TABLE_NAME': 'MYTABLE', 'TABLE_TYPE': 'TABLE', 'REMARKS': None}]

# Insert 3 rows into the table
insert = "insert into mytable values(?,?)"
params=((1,'Sanders'),(2,'Pernal'),(3,'OBrien'))
stmt_insert = ibm_db.prepare(ibm_db_conn, insert)
ibm_db.execute_many(stmt_insert,params)
3
# Fetch data using ibm_db_dbi
select="select id, name from mytable"
cur = conn.cursor()
cur.execute(select)
True
row=cur.fetchall()
print("{} \t {} \t {}".format(row[0],row[1],row[2]),end="\n")
(1, 'Sanders')   (2, 'Pernal')   (3, 'OBrien')
row=cur.fetchall()
print(row)

# Fetch data using ibm_db
stmt_select = ibm_db.exec_immediate(ibm_db_conn, select)
cols = ibm_db.fetch_tuple( stmt_select )
print("%s, %s" % (cols[0], cols[1]))

cols = ibm_db.fetch_tuple( stmt_select )
print("%s, %s" % (cols[0], cols[1]))

cols = ibm_db.fetch_tuple( stmt_select )
print("%s, %s" % (cols[0], cols[1]))

cols = ibm_db.fetch_tuple( stmt_select )
print(cols)

# Close connections
cur.close()

# Dropping the table created
drop = "drop table mytable"
stmt_delete = ibm_db.exec_immediate(ibm_db_conn,drop)
conn1.tables('DB2INST1','MY%')

ibm_db.close(ibm_db_conn)
True