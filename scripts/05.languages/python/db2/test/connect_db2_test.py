import ibm_db

# connection information
connStr = "DATABASE=HADRDB;HOSTNAME=129.69.209.196;PORT=23307;PROTOCOL=TCPIP;UID=db2inst1;PWD=db2inst1;"
conn = None

try:
   # connect to DB2 database
   conn = ibm_db.connect(connStr, "", "")
   # close auto commit
   ibm_db.autocommit(conn, ibm_db.SQL_AUTOCOMMIT_OFF)

   id = 8

   sql_insert_1 = "insert into users values('%d','Kitty','29')" % id
   stmt_insert_1 = ibm_db.exec_immediate(conn, sql_insert_1)

   # select data from table book
   sql_select = "select * from users"
   stmt_select = ibm_db.exec_immediate(conn, sql_select)
   res = ibm_db.fetch_both(stmt_select)
   while res:
       print("row:", res[0], res[1], res[2])
       res = ibm_db.fetch_both(stmt_select)
       
   # commit transaction
   ibm_db.commit(conn)
except Exception as ex:
   print("Exception:", ex)
   # rollback transaction
   ibm_db.rollback(conn)
finally:
   # colse connection
   ibm_db.close(conn)
