module.exports={
	tags:"http,host,spoof,web",
	des:"spoof host,漏洞检测",
	VulApps:[],
	urls:[],
	doCheck:function (url,fnCbk,)
	{
        url = url.trim().replace(/[\s\r\n]*/gmi,'');
        var _t = this,_s = this.self,hst = _s.parseUrl(url),szXx = "m.t.x.hktalent";
        hst.port = hst.port||(-1 < hst.protocol.indexOf("https")?443:80);
        try{
        var szPaload = `GET ${hst.pathname} HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Host: ${szXx}
User-Agent: ${_s.g_szUa}
Connection: close


`;
console.log(hst.port)
            _s.fnSocket(hst.hostname,hst.port,szPaload,function(s)
            {
                s = String(s);
                // console.log(s);
                var i = s.indexOf(szXx);
                if(-1 < i)
                {
                    var r = {"url":url,"send":szPaload,result:s.substr(i - 20, szXx.length * 5)};
                    r.vul = true;
                    fnCbk(r,_t);
                }
            });
        }catch(e){
            _s.error(e)}
	}
};