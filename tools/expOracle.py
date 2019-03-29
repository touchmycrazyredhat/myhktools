#!/usr/bin/env python2
# -*- coding: utf-8 -*-

import sys
import csv
import os
import cx_Oracle
import os.path

# os.environ["NLS_LANG"] = "RUSSIAN_RUSSIA.AL32UTF8"

# py2 /root/mytools/myhktools/tools/expOracle.py xx/xx@12.18.102.5/xxx
connection = sys.argv[1]
dbName=""
tbname=""
if len(sys.argv) > 2:
    dbName = sys.argv[2]
if len(sys.argv) > 3:
    tbname = sys.argv[3]

# print connection
orcl = cx_Oracle.connect(connection,encoding = "UTF-8", nencoding = "UTF-8")
curs = orcl.cursor()

printHeader = True # include column headers in each table output
owner=""
if dbName:
    owner="owner='" + dbName + "' and "
if tbname:
    tbname="TABLE_NAME='" + tbname + "' and "

sql = "select owner,TABLE_NAME,NUM_ROWS from all_tables where "  + tbname + owner + " not 'CHANGE_ON_INSTALL,CTXSYS,DBSNMP,INTERNAL,LBACSYS,MANAGER,MDSYS,MTRPW,MTSSYS,ODM,ODM_MTR,OLAPSYS,ORACLE,ORDPLUGINS,ORDSYS,OUTLN,SCOTT,SYS,SYSTEM,TIGER' like '%'||owner||'%'  and num_rows>1000 and not (table_name like '%LOG%' or  table_name like '%$%' or table_name like '%BAK%' or table_name like '%TMP%' or table_name like '%TEMP%' or table_name like '%TEST%') order by num_rows desc"
curs.execute(sql)


for row_data in curs:
    try:
        #  and "AC01" == row_data[1]
        if not row_data[1].startswith('BIN$') : # skip recycle bin tables
            tableName = row_data[1]
            dbName = row_data[0]

            # output each table content to a separate CSV file
            csv_file_dest = dbName + "." + tableName + ".csv"

            if not os.path.exists(csv_file_dest) and not os.path.isfile(csv_file_dest):
                print csv_file_dest + ":"  + str(row_data[2])
                outputFile = open(csv_file_dest,'w') # 'wb'
                output = csv.writer(outputFile, dialect='excel')
                sql = "select * from " + dbName + "." + tableName
                curs2 = orcl.cursor()
                curs2.execute(sql)

                if printHeader: # add column headers if requested
                    cols = []
                    for col in curs2.description:
                        cols.append(col[0])
                    output.writerow(cols)

                for row_data in curs2: # add table rows
                    output.writerow(row_data)

                outputFile.close()
    except Exception, e:
        # print e
        pass