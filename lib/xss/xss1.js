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
        szT2 = encodeURIComponent(szPxx = `\`<>"'%()&+\\`),// `<${szT}>alert(${nT})</${szT}>`
        szT3 = "samelogin=" + szT2 + "&style=" + szT2;
        hst.port = hst.port||(-1 < hst.protocol.indexOf("https")?443:80);

        if(!parms && hst['query'])
        {
            parms = {};
            var aTmp = String(hst.query).split("&");
            for(var i = 0; i < aTmp.length; i++)
            {
                var a1 = aTmp[i].split("=");
                if(1 <= a1.length && a1[0])
                    parms[a1[0]] = 1;
            }
        }

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
            
            _t.cXss.setT(_t,_s);
            _t.cXss.fnDoCheckUrl(url,function(h)
            {
                if(h['location'])
                {
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
        var szPaload = `GET ${hst.pathname}?${szT3} HTTP/1.1
Host: ${hst.host}
User-Agent: ${_s.g_szUa}
Accept: */*
Connection: close


`;
            _s.fnSocket(hst.hostname,hst.port,szPaload,function(s)
            {
                s = String(s);
                // _s.fnDoForm(s,url,{body:s},_t.tags);
                var i = 0;
                
                var reE = /Location:\s*([^\r\n]+)[\r]*\n/gmi;
                var aT = reE.exec(s),s1 = s.replace(reE,'');
                if(aT)
                {
                    _t.doCheck(aT[1], fnCbk,parms);
                    return;
                }
                _s.fnDoBody(s1,"xss",url,null,function(o)
                {
                    var r = {"url":url,"send":szPaload};
                    //  非html也会，所以取消检测：  && -1 < s1.indexOf("Content-Type: text/html")
                    if(-1 < (i = s1.indexOf(szPxx)))
                    {
                        r.vul = true;
                        if(-1 == xss_Oks.indexOf(url))
                            _s.fs.writeFileSync(xfP, url + "\n" + xss_Oks);
                        r.result = s1.substr(i - szT3.length - 10, szT3.length * 3);
                        fnCbk(_s.copyO2O(r,o),_t);
                    }  
                });
            });
        }catch(e){
            _s.error(e)}
	}
};