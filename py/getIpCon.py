#! /usr/bin/env python
#!coding=utf-8
__author__ = 'M.T.X.'
'''
1、判断被渗透目标有哪些端口通外网

'''
from scapy.all import *
import pickle
import re
import os
import datetime
import atexit
import netifaces

curDir = os.path.dirname(os.path.realpath(__file__))
fileName = curDir +"/../urls/keywords"

def readKeys():
    f = open(fileName, 'r')
    str = f.read()
    f.close()
    str = re.sub("[\n\s\r]*$",'',str)
    str = str.replace("\n",'|').replace("-",'\\-')
    myre = re.compile('(?:' + str + ')\s*=\s*[\'"]?([^\'\n\r"]+)[\'"]?',re.M|re.I)
    # my1 = myre.findall("sina.com?uid='xxxx'\n\naccount=llllksdfjslfjsl\n")
    # print my1
    return myre
global myRe

def find(s):
    k = myRe.findall(s)
    return k


def main():
    # os.system('sysctl -w net.inet.ip.forwarding=1 > /dev/null')
    # os.system('sudo sysctl -w net.inet.ip.fw.enable=1 > /dev/null ')
    
    # sniff(prn=arp_monitor_callback, filter="arp", store=0)
    myRe = readKeys()
    
    kk = myRe.findall("email.com?sdfsf='234242424'\n\sdfsf=的时候\n")
    
    print kk

if __name__ == '__main__':
    main()