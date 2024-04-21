#!/usr/bin/python
import ibm_db, sys
from multiprocessing import Process

process_count = int(sys.argv[1])


def read_only():
    # connection information
    connStr = "DATABASE=HADRDB;HOSTNAME=129.69.209.196;PORT=23308;PROTOCOL=TCPIP;UID=db2inst1;PWD=db2inst1;"
    conn = None

    # connect to DB2 database
    conn = ibm_db.connect(connStr, "", "")
    try:
        while True:
            # select data from table users
            sql_select = "select * from users"
            stmt_select = ibm_db.exec_immediate(conn, sql_select)
            #res = ibm_db.fetch_both(stmt_select)
            #print("------------table------------")
            #while res:
            #    print("row:", res[0], res[1], res[2])
            #    res = ibm_db.fetch_both(stmt_select)
    except Exception as ex:
        print("Exception:", ex)
        # rollback transaction
        ibm_db.rollback(conn)
    finally:
        # colse connection
        ibm_db.close(conn)

processes=[]
for i in range(process_count):
    p = Process(target=read_only)
    processes.append(p)

if __name__ == '__main__':
    for i in processes:
        i.start()
    for i in processes:
        i.join()
