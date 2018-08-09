#!/usr/bin/env node
/*
node tools/lanSsProxy.js -f tmp/sshIps.txt
cat tmp/sshIps.txt
192.168.22.98   192.168.22.98    22/tcp (ssh)  root  xxx!@#$         Password
.....
内网渗透时隐藏ip最终，通过若干ssh建立代理池
proxychains4 -f ~/safe/`whoami`/proxychains.conf node /Users/`whoami`/safe/myhktools/tools/mySocks5.js -p 15533
*/
var fs  = require("fs"),
	program = require('commander'),
	path = require('path'),
	startPort = 4000,
	util = require('util'),
	prefix = "192",
	youPort = 8111,
	child_process = require('child_process'),
	a = [],
	fnE = function(e){console.log(e)};

	program.version("Lan_ssh_Proxy")
	.option('-f, --file [value]', 'file name')
	.option('-p, --prefix [value]', 'prefix，default:192')
	.option('-n, --startPort [value]', 'start port，default 4000')
	.option('-s, --youPort [value]', 'proxychains port，default 8111')
	.parse(process.argv);
process.setMaxListeners(0);
process.on('uncaughtException', fnE);
process.on('unhandledRejection', fnE);

startPort = program.startPort || startPort;
prefix = program.prefix || prefix;
youPort = program.youPort || youPort;



var socks = require('socksv5');
var Client = require('ssh2').Client;

// 启动监听
function fnMySSocks5(ip,u,p,port,fnCbk)
{
	var ssh_config = {
	  host: ip,
	  "port": 22,
	  username: u,
	  password: p
	};

	socks.createServer(function(info, accept, deny)
	{
	  var conn = new Client();
	  conn.on('ready', function() {
	    conn.forwardOut(info.srcAddr,
	                    info.srcPort,
	                    info.dstAddr,
	                    info.dstPort,
	                    function(err, stream) {
	      if (err) {
	        conn.end();
	        return deny();
	      }

	      var clientSocket;
	      if (clientSocket = accept(true)) {
	        stream.pipe(clientSocket).pipe(stream).on('close', function() {
	          conn.end();
	        });
	      } else
	        conn.end();
	    });
	  }).on('error', function(err) {
	    deny();
	  }).connect(ssh_config);
	}).listen(port, 'localhost', function() {
		fnCbk(port);
	  // console.log('SOCKSv5 proxy server started on port '+ port);
	}).useAuth(socks.auth.None());
}

/*
得到已经监听的端口，避免冲突:
*/
var sAll = child_process.execSync("allListen=`netstat -ant|grep LISTEN|awk '{print $4}'|sed 's/.*[:\.]//g'|sort -u`;echo $allListen").toString('utf-8');
console.log("本地已经监听的端口，会自动跳过、避免冲突：" + sAll);
function fnDoIp(ip,u,p,fnCbk)
{
	// console.log([ip,u,p]);
	while(-1 < sAll.indexOf(String(++startPort)));
	fnMySSocks5(ip,u,p,startPort,fnCbk);
}

var szCode = (function(){/*
random_chain
quiet_mode
remote_dns_subnet 224
tcp_read_time_out 15000
tcp_connect_time_out 8000
localnet 127.0.0.0/255.0.0.0
[ProxyList]
*/}).toString().split(/\n/).slice(1, -1);
/*
1、建立proxychains配置文件
2、启动ssh远程socks代理，启动前，杀掉相同ip的进程
ssh -4 -f -D 1337 -q -C -N root@192.168.17.98 -p 22
3、启动proxychains
*/
function fnGo()
{
	var szFileName = path.resolve(process.env.PWD,program.file);
	a = fs.readFileSync(szFileName).toString().split(/\n/gmi)
	var i = 0;
	var nC = 0,c = [""],fnCbk1 = function(n)
	{
		szCode.push("socks5  127.0.0.1  " + n);
		nC--;
		if(0 == nC && i == a.length)
		{
			var tP = "/tmp/" + Math.random();
			fs.writeFileSync(tP,szCode.join("\n"));
			var szCmd = "/usr/local/Cellar/proxychains-ng/4.12_1/bin/proxychains4 -f " + tP + " node /Users/`whoami`/safe/myhktools/tools/mySocks5.js  -h 127.0.0.1 -p " + youPort + " &";
			console.log("已经启动终结代理端口：" + youPort);
			child_process.execSync(szCmd);
		}
	};
	for(; i < a.length; i++)
	{
		var t = a[i].trim().split(/\s+/);
		if(4 > t.length)continue;
		nC++;
		if(-1 < t[0].indexOf(prefix))fnDoIp(t[0],t[4],t[5],fnCbk1);
		if(t[0] != t[1] && -1 < t[1].indexOf(prefix))fnDoIp(t[1],t[4],t[5],fnCbk1);
	}
	return (szCode);
}

fnGo();
