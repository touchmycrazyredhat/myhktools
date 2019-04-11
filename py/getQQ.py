#! /usr/bin/env python
#!coding=utf-8
__author__ = 'M.T.X.'
'''
1、数据转发
'''
from scapy.all import *
import pickle
import os
import datetime
import atexit

"""
&uin=2431403919
2140314833

"""
def doPack(pkt):
    if pkt[IP].dst == "125.71.203.220" :
        print(str(bytes(pkt[TCP].payload)))
    if pkt[TCP].payload:
    	k = str(pkt[TCP].payload)
    	if -1 < k.find(".qq.com"):
        	#pkt.show()#
                packet = pkt
                print("\n{} ----HTTP----> {}:{}:\n{}".format(packet[IP].src, packet[IP].dst, packet[IP].dport, str(bytes(packet[TCP].payload))))
        	print k

def main():
    os.system('sysctl -w net.inet.ip.forwarding=1 > /dev/null')
    # os.system('sudo sysctl -w net.inet.ip.fw.enable=1 > /dev/null ')
    print "start ........ "
    sniff(prn=doPack, filter="tcp", store=0)

if __name__ == '__main__':
    main()
