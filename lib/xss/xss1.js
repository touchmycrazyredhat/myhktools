module.exports={
	tags:"xss,parms",
	des:"xx,漏洞检测",
	VulApps:[],
	urls:[],
	doCheck:function (url,fnCbk,parms)
	{
        var _t = this,_s = this.self,hst = _s.parseUrl(url),szT = "script",nT = new Date().getTime(),
        szT2 = `<${szT}>alert(${nT})</${szT}>`,
        szT3 = "samelogin=" + szT2 + "&style=" + szT2;
        if(parms)
        for(var k in parms)
        {
            szT3 += "&" + k + "=" + szT2;
        }
        try{
            // var xss_wt = _s.fs.readFileSync("tools/xss_whitelist.txt").toString("utf-8"),
            var xss_Oks = _s.fs.readFileSync("data/xssUrls.txt").toString("utf-8");
        var szPaload = `
GET ${hst.pathname}?${szT3} HTTP/1.0
Accept-Language: en-US
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Host: ${hst.host}
User-Agent: ${_s.g_szUa}
Connection: close


`;
            _s.fnSocket(hst.hostname,hst.port,szPaload,function(s)
            {
                var i = 0;
                s = String(s);
                var reE = /Location:\s*([^\r\n]+)[\r]*\n/gmi;
                var aT = reE.exec(s),s1 = s.replace(reE,'');
                // console.log(s);console.log(aT)
                if(aT)
                {
                    // console.log(aT[1])
                    _t.doCheck(aT[1], fnCbk,parms);
                    return;
                }
                _s.fnDoBody(s1,"xss",url,null,function(o)
                {
                    var r = {"url":url,"send":szPaload};
                    if(-1 < (i = s1.indexOf(szT2)))
                    {
                        r.vul = true;
                        if(-1 == xss_Oks.indexOf(url))
                            _s.fs.writeFileSync("data/xssUrls.txt", url + "\n" + xss_Oks);
                        r.result = s1.substr(i - szT3.length - 10, szT3.length * 3);
                        // console.log("XSS: " + url,r.result);
                        // console.log(r.result);
                        fnCbk(_s.copyO2O(r,o),_t);
                    }  
                });
            });
        }catch(e){
            _s.error(e)}
	}
};