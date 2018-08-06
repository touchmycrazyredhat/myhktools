#!/usr/bin/python
# -*- coding: UTF-8 -*-

# python oracleTools.py -H 127.0.0.1 -p 1521 -s orcl -u yjfull -P yjfull_use2017

import sys, getopt,os
import cx_Oracle

def main(argv):
    host='127.0.0.1'
    port=1521
    sid='orcl'
    user='oracle'
    pswd=''
    try:
        opts, args = getopt.getopt(argv,"hpsHuP:o:",["port=","sid=","host=","user=","passwd="])
    except getopt.GetoptError:
        print 'oracleTools.py -p <port> -s <sid> -H <host> -u <user> -P <passwd>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'oracleTools.py -p <port> -s <sid> -H <host> -u <user> -P <passwd>'
            sys.exit()
        elif opt in ("-p", "--port"):
            port = arg
        elif opt in ("-s", "--sid"):
            sid = arg
        elif opt in ("-H", "--host"):
            host = arg
        elif opt in ("-u", "--user"):
            user = arg
        elif opt in ("-P", "--passwd"):
            pswd = arg


    oracle_tns = cx_Oracle.makedsn(host, port,sid)
    connectObj = cx_Oracle.connect(user, pswd, oracle_tns)
    cursorObj = connectObj.cursor()

    sql = "select TABLE_NAME,NUM_ROWS from all_tables where owner = '" + user.upper() + "' and num_rows > 0 order by num_rows desc"
    cursorObj.prepare(sql)
    r1 = cursorObj.execute(None, {})

    print "SET SQLFORMAT CSV"
    path = "/root/mytools/tmp/" + sid + "_" + user  + "/"
    os.makedirs(path,0755)
    for row in cursorObj:
        (TABLE_NAME,NUM_ROWS) = row
        print "SPOOL " + path + TABLE_NAME + ".csv"
        print "SELECT * FROM " + TABLE_NAME + ";"
        print "SPOOL OFF"
        # print TABLE_NAME + ", " + NUM_ROWS

    cursorObj.close()
    connectObj.close()

if __name__ == "__main__":
   main(sys.argv[1:])