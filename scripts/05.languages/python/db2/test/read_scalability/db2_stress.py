#!/usr/bin/python
import time, ibm_db, sys, threading

threads_count = int(sys.argv[1])
request_num = int(sys.argv[2])



def read_only():
    # connection information
    connStr = "DATABASE=HADRDB;HOSTNAME=129.69.209.196;PORT=23307;PROTOCOL=TCPIP;UID=db2inst1;PWD=db2inst1;"
    conn = None

    # connect to DB2 database
    conn = ibm_db.connect(connStr, "", "")
    try:
        for i in range(request_num):
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

threads=[]
for i in range(threads_count):
    t = threading.Thread(target=read_only)
    threads.append(t)

if __name__ == '__main__':
    T1 = time.time()
    for i in threads:
        i.start()
    for i in threads:
        i.join()
    T2 = time.time()
    print("running time:")
    print(T2 - T1)
