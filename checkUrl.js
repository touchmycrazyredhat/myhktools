#!/usr/bin/env node
var kkk = require('./lib/core_new.js');
var r = new kkk();
// -v 参数才会输出
r.on('log',function(s)
{
	if(s)console.log(s);
});
r.on('info',function(s)
{
	if(s)console.log(s);
});
r.on('error',function(s)
{
	if(s)console.log(s);
});
// 发现安全问题才会进入这里
r.on('vul',function(v,t,s)
{
	if(v && v.vul)console.log(v);
});

r.on('ready',function()
{
	console.log('准备好了....');
	// r.runChecks();
});