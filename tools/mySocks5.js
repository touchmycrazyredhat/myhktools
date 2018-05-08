#!/usr/bin/env node
/*
node tools/mySocks5.js --user mtxuser --password Wr90,_x*d -p 15533
node proxy/ProxyServer.js --proxy 'socks://mtxuser:Wr90,_x*d@127.0.0.1:15533'
curl -x "http://127.0.0.1:8880" http://ip.cn

curl -x "socks5://mtxuser:Wr90,_x*d@127.0.0.1:15533" http://ip.cn
curl -x "socks5://127.0.0.1:1089" http://ip.cn

同时使用多个vps线路的情况，苹果系统代理不能设置密码，否则各种问题
proxychains4 -f ~/safe/`whoami`/proxychains.conf node /Users/`whoami`/safe/myhktools/tools/mySocks5.js -p 15533
*/
var socks = require('socksv5'),
	program = require('commander'),
	srv = socks.createServer(function(info, accept, deny)
{
	/*
	{ cmd: 'connect',
  srcAddr: '127.0.0.1',
  srcPort: 56597,
  dstAddr: 'ip.cn',
  dstPort: 80 }
	*/
	// console.log(info)
	accept();
	// 黑名单：deny();
});
program.version("socks5代理")
	.option('-p, --port [value]', '端口,默认 15533')
	.option('-h, --host [value]', '绑定的ip，默认0.0.0.0')
	.option('-u, --user [value]', '用户名')
	.option('-p, --password [value]', "密码")
	.parse(process.argv);
process.on('uncaughtException', function(e){});
process.on('unhandledRejection', function(e){});

srv.listen(program.port||15533, program.host||'0.0.0.0', function()
{
	console.log('SOCKS server listening...' + this._connectionKey);
});

if(program.user && program.password)
	srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
	  cb(user === (program.user || 'mtx') && password === (program.password || "`!';/.;l'Qgdf097"));
	}));
else srv.useAuth(socks.auth.None());