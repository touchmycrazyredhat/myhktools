#! /usr/bin/env python
#!coding=utf-8
__author__ = 'M.T.X.'
'''
1、数据监控
sudo port install py27-libdnet
sudo port install  py27-pypcap
sudo port select --set python python27
sudo port select --set python2 python27
brew install --with-python libdnet
pip install pcapy
pip install scapy

pip install pydumbnet
pip install pymongo
'''
from scapy.all import *
import pickle
import os
import db
import base64
import datetime
import atexit
from Crypto.PublicKey import RSA
import json
import requests
import netifaces

def doPack(pkt):
    try:
        pkt.show()
        m = []#['ff:ff:ff:ff:ff:ff', '192.168.24.91','192.168.24.180','00:00:00:00:00:00', '224.0.0.253', '224.0.0.251','224.0.0.252', '192.168.24.1', '239.255.255.250','192.168.24.255','192.168.24.15']
        a = [pkt.src, pkt.dst]
        #if pkt.src in m or pkt.dst in m:
        #    return
        # LLC 802.3 SNAP
        b = {}
        if IP in pkt:
            b = pkt[IP]
        elif 802.3 in pkt:
            b = pkt[802.3]
        #if ARP in pkt:
        #    a += [pkt[ARP].hwsrc, pkt[ARP].hwdst, pkt[ARP].psrc, pkt[ARP].pdst]

        if b:
            a += [b.src, b.dst]
            #if b.src in m or b.dst in m:
            #    return
        # if Raw in pkt:
        #    a += [str(pkt[Raw])]
        if TCP in pkt:
            #pkt.show()
            s1 = str(pkt[TCP].payload)
            #  or -1 < s1.find("POST ")
            #  and -1 < s1.find("Cookie:")  and -1 == s1.find("secclientgw.alipay.com")
            if -1 < s1.find(" HTTP/"):
                a += [s1]
                # db.fnInsert(a)
                szJson = json.dumps(a,sort_keys=True, indent=2, separators=(',', ':'))
                print(szJson)
                # requests.post("http://127.0.0.1:8088/netM",data=base64.b64encode(szJson));
        #elif not b:
        #    pkt.show()
    except Exception, e:
        print str(e)
        pass
    return
def main():
    os.system('sysctl -w net.inet.ip.forwarding=1 > /dev/null')
    # os.system('sudo sysctl -w net.inet.ip.fw.enable=1 > /dev/null ')
    defNet = netifaces.gateways()['default'][netifaces.AF_INET]
    # ,interface='bridge0'
    sniff(prn=doPack, filter="", store=0)

if __name__ == '__main__':
    main()