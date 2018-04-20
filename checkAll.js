var arg = [],//process.argv.splice(2),
    // s1 = 0 < arg.length ? arg[0] : require('os').homedir() + "/Desktop/untitled\ folder/allurls.txt"// "db/allUrls.txt"  // "/Volumes/MyWork/zfweb.txt"//0< arg.length arg[0]
    s1 = "/Users/xiatian/Desktop/k/tm.txt"// "db/allUrls.txt"  // "/Volumes/MyWork/zfweb.txt"//0< arg.length arg[0]
    , fs = require('fs')
    , a = fs.readFileSync(s1).toString().trim().split("\n"),
    async = require('async'),
    child_process = require('child_process'),
    md5 = require('md5'),
    kkk = require('./lib/core_new.js');

var g_oUrl = {};
async.mapLimit(a, 2,function(s,fnCbk1)
{
	
	var sFn = "./data/" + md5(s) + ".txt";
	var r = new kkk(s);
	var sFn = r.rstPath + '/' + r.md5(s) + ".txt";
	if(fs.existsSync(sFn))
	{
		console.log("已经执行过了，跳过：" + s);
		if(!g_oUrl[s])g_oUrl[s] = 1,fnCbk1();
		return;
	}
	r.on('info',function(s)
	{
		console.log(s);
	});
	r.on('over',function()
	{
		console.log(s);
		if(!g_oUrl[s])g_oUrl[s] = 1,fnCbk1();
	});
	
	r.on('log',function(s)
	{
		console.log(s);
	});
	r.on('error',function(s,t,o)
	{
		console.log('==================');
		console.log(s);
		s = String(s);
		if(-1 < s.indexOf('ping -c 1'))
		{
			r.g_szError += o.url + "\n";
			r.fs.writeFileSync(r.szErrorPath, r.g_szError);
		}
		if(o && o.url)console.log(o.url);
		console.log('==================');
	});
	r.on('vul',function(v,t,s)
	{
		if(v.vul)console.log(v);
	});

	r.on('ready',function()
	{
		console.log('准备好了....');
		// r.runChecks(url,"weblogic,struts2,web");
	});
});