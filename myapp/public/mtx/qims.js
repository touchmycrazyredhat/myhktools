var fs = require('fs'),
	a = function()
	{
		/*
./100000000599396/lib/cms/memcachedclient-2.0.1.jar
./100000000599396/lib/cms/spymemcached-2.3.1.jar
./100000000691380/????/lib/cms/memcachedclient-2.0.1.jar
./100000000691380/????/lib/cms/spymemcached-2.3.1.jar
./100000009743525/common-lib/memcachedclient-2.0.1.jar
./100000009743525/common-lib/spymemcached-2.3.1.jar
./100000009743525/WebRoot/WEB-INF/lib/spymemcached-2.3.1.jar
./100000000599879/lib/cms/memcachedclient-2.0.1.jar
./100000000599879/lib/cms/spymemcached-2.3.1.jar
./100000009743648/lib/cms/memcachedclient-2.0.1.jar
./100000009743648/lib/cms/spymemcached-2.3.1.jar
		*/
	}.toString(),i = 0,
	s = fs.readFileSync("/Users/xiatian/Desktop/untitled\ folder/qims.txt").toString().split("\n");
a = a.substr(i = a.indexOf("/*") + 2,a.indexOf("*/") - i).trim();
var re = /\/(\d+)\/.*?\/([^\/\n]+\.jar)\n/gmi,g_oT = {};
while(p = re.exec(a))
{
	// console.log(p[1]);
	// console.log(a);
	for(var x = 1; x < s.length; x++)
	{
		// console.log(s[x].split("	")[2]);
		// console.log(s[2]);
		if(-1 < s[x].indexOf(p[1]))
		{
			console.log(s[x]);
			var kx = s[x].split("	"), kkk = kx[2];
			g_oT[kkk] = kx[1] + " " + p[2];
			// console.log();
			break;
		}
	}
}
console.log(g_oT);