module.exports={
	tags:"xss,parms,web",
	des:"xx,漏洞检测",
	VulApps:[],
	urls:[],
	doCheck:function (url,fnCbk,parms)
	{
        url = url.trim().replace(/[\s\r\n]*/gmi,'');
        
        var _t = this,_s = this.self,hst = _s.parseUrl(url),szT = "script",nT = new Date().getTime(),
            szPxx = '',
        szT2 = encodeURIComponent(szPxx = `<${szT}>alert(${nT})</${szT}>`),
        szT3 = "samelogin=" + szT2 + "&style=" + szT2;
        hst.port = hst.port||(-1 < hst.protocol.indexOf("https")?443:80);

        var xss_Oks = "", xfP = __dirname + "/../../data/xssUrls.txt";
        if(_s.fs.existsSync(xfP))
            xss_Oks = _s.fs.readFileSync(xfP).toString("utf-8");
        if(!_t.cXss)
        {
            _t.cXss = require('../../tools/checkXss.js');
            _t.cXss.setInfoCbk(function(url,ss,i)
            {
                var mylen = 180,r = {"url":url,vul:true,"result":ss.substr(i - mylen, mylen * 1.5)};
                fnCbk(r,_t);
                _s.fs.writeFileSync(xfP, url + "\n" + xss_Oks);
            });
            _t.cXss.fnDoCheckUrl(url,function(h)
            {
                if(h['location'])
                {
                    // console.log("location: " + h['location']);
                    _t.cXss.fnDoCheckUrl(h['location']);
                }
            })	
        }

        if(parms)
        for(var k in parms)
        {
            szT3 += "&" + k + "=" + szT2;
        }
        try{
            // var xss_wt = _s.fs.readFileSync("tools/xss_whitelist.txt").toString("utf-8"),
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
                    if(-1 < (i = s1.indexOf(szPxx)))
                    {
                        r.vul = true;
                        if(-1 == xss_Oks.indexOf(url))
                            _s.fs.writeFileSync(xfP, url + "\n" + xss_Oks);
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