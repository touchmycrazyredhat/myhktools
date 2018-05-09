#!/usr/bin/env node
var kkk = require('./lib/core_new.js');
var r = new kkk(),colors = require('colors');
// -v 参数才会输出
r.on('log',function(s)
{
	if(s)console.log(s);
});
r.on('info',function(s)
{
	if(s)console.log(s);
});
r.on('error',function(s,t,o)
{
	if(s)
	{
		s = String(s.stdout||s.stderr||s);
		if(-1 == s.indexOf("ESOCKETTIMEDOUT") && -1 == s.indexOf("ETIMEDOUT"))
			console.log('=================='),console.log(s);
		else return;
	}
	if(-1 < s.indexOf('ping -c 1'))
	{
		r.g_szError += o.url + "\n";
		r.fs.writeFileSync(r.szErrorPath, r.g_szError);
		return;
	}
	if(o && o.url)console.log(o.url);
	console.log('==================');
});
r.on('vulinfo',function(s)
{
	console.log(s.red);
});
// 发现安全问题才会进入这里
r.on('vul',function(v,t,s)
{
	if(r.program.verbose && v && v.vul)console.log(v);
});

r.on('ready',function()
{
	// console.log('准备好了....');
	// r.runChecks();
});