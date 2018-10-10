#!/usr/bin/python
# -*- coding: UTF-8 -*-

# python py/oracleTools.py -x 127.0.0.1 -p 1521 -s orcl -u xxx -k xxx

import sys, getopt,os
import cx_Oracle

def main(argv):
    host1='127.0.0.1'
    port=1521
    sid='orcl'
    user='oracle'
    passwd=''
    try:
        opts, args = getopt.getopt(argv,"hx:p:s:u:k:",["host=","port=","sid=","user=","passwd="])
    except getopt.GetoptError:
        print 'oracleTools.py -x <host> -p <port> -s <sid>  -u <user> -k <passwd>'
        sys.exit(2)
    
    for opt, arg in opts:
        if opt == '-h':
            print 'oracleTools.py -x <host> -p <port> -s <sid>  -u <user> -k <passwd>'
            sys.exit()
        elif opt in ("-x", "--host"):
            host1 = arg
        elif opt in ("-p", "--port"):
            port = int(arg)
        elif opt in ("-s", "--sid"):
            sid = arg
        elif opt in ("-u", "--user"):
            user = arg
        elif opt in ("-k", "--passwd"):
            passwd = arg
    
    oracle_tns = cx_Oracle.makedsn(host1,port,sid)
    connectObj = cx_Oracle.connect(user, passwd, oracle_tns)
    cursorObj = connectObj.cursor()

    sql = "select owner,TABLE_NAME,NUM_ROWS from all_tables where not 'CHANGE_ON_INSTALL,CTXSYS,DBSNMP,INTERNAL,LBACSYS,MANAGER,MDSYS,MTRPW,MTSSYS,ODM,ODM_MTR,OLAPSYS,ORACLE,ORDPLUGINS,ORDSYS,OUTLN,SCOTT,SYS,SYSTEM,TIGER' like '%'||owner||'%'  and num_rows>10000 and not (table_name like '%LOG%' or  table_name like '%$%' or table_name like '%BAK%' or table_name like '%TMP%' or table_name like '%TEMP%' or table_name like '%TEST%') order by num_rows desc"
    cursorObj.prepare(sql)
    r1 = cursorObj.execute(None, {})

    print "SET ECHO OFF"
    print "SET SQLFORMAT CSV"
    path = "/root/mytools/tmp/" + sid + "_" + user  + "/"
    
    if not os.path.exists(path):
        os.makedirs(path,0755)

    for row in cursorObj:
        (owner,TABLE_NAME,NUM_ROWS) = row
        print "SPOOL " + path + TABLE_NAME + ".csv"
        print "SELECT * FROM " + TABLE_NAME + ";"
        print "SPOOL OFF"
        # print TABLE_NAME + ", " + NUM_ROWS

    cursorObj.close()
    connectObj.close()

if __name__ == "__main__":
   main(sys.argv[1:])