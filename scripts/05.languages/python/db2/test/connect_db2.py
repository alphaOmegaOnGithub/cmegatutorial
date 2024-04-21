#!/usr/bin/python
import time
import ibm_db

# connection information
connStr = "DATABASE=HADRDB;HOSTNAME=129.69.209.196;PORT=23307;PROTOCOL=TCPIP;UID=db2inst1;PWD=db2inst1;"
conn = None

id = 0
loop = 0

while True:
    try:
        loop = loop + 1
        # connect to DB2 database
        conn = ibm_db.connect(connStr, "", "")
        # close auto commit
        ibm_db.autocommit(conn, ibm_db.SQL_AUTOCOMMIT_OFF)
   
        # sql statement for CRUDS operation
        # create table book
        sql_create = "create table if not exists BOOK( id int NOT NULL primary key, NAME VARCHAR(20), AUTHOR VARCHAR(10) )"
        stmt_create = ibm_db.exec_immediate(conn, sql_create)

        print("------------------------------Loop", loop, "-------------------------------")
        # insert data into table book
        id = id + 1
        sql_insert_1 = "insert into book values('%d','Data Structure','Lipschute')" % id
        stmt_insert_1 = ibm_db.exec_immediate(conn, sql_insert_1)

        id = id + 1
        sql_insert_2 = "insert into book values('%d','Guide Network','Freed')" % id
        stmt_insert_2 = ibm_db.exec_immediate(conn, sql_insert_2)

        id = id + 1
        sql_insert_3 = "insert into book values('%d','DOS Guide','Cowart')" % id
        stmt_insert_3 = ibm_db.exec_immediate(conn, sql_insert_3)
   
        id = id + 1
        sql_insert_4 = "insert into book values('%d','Java for Everyone','Schildt')" % id
        stmt_insert_4 = ibm_db.exec_immediate(conn, sql_insert_4)

        id = id + 1
        sql_insert_5 = "insert into book values('%d','Advanced Pascal','Norton')" % id
        stmt_insert_5 = ibm_db.exec_immediate(conn, sql_insert_5)

        # select data from table book
        sql_select = "select * from book"
        stmt_select = ibm_db.exec_immediate(conn, sql_select)
        res = ibm_db.fetch_both(stmt_select)
        print("previous table")
        while res:
            print("row:", res[0], res[1], res[2])
            res = ibm_db.fetch_both(stmt_select)
        print("+++++++++++++++++++++++++++++++++++++++")

        # update data in table book
        sql_update = "update book set author='Prog' where name='Data Structure'"
        stmt_update = ibm_db.exec_immediate(conn, sql_update)
   
        # delete data in table book
        sql_delete = "delete from book where name='Guide Network'"
        stmt_delete = ibm_db.exec_immediate(conn, sql_delete)

        # select data from table book
        sql_select = "select * from book"
        stmt_select = ibm_db.exec_immediate(conn, sql_select)
        res = ibm_db.fetch_both(stmt_select)
        print("current table")
        while res:
            print("row:", res[0], res[1], res[2])
            res = ibm_db.fetch_both(stmt_select)
       
        # commit transaction
        ibm_db.commit(conn)

        # sleep
        #time.sleep(60)

    except Exception as ex:
        print("Exception:", ex)
        # rollback transaction
        ibm_db.rollback(conn)
    finally:
        # colse connection
        ibm_db.close(conn)
        time.sleep(60)    
