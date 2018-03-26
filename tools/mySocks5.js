/*
node tools/mySocks5.js --user mtxuser --password Wr90,_x*d -p 5533
node proxy/ProxyServer.js --proxy 'socks://mtxuser:Wr90,_x*d@127.0.0.1:5533'
curl -x "http://127.0.0.1:8880" http://ip.cn
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
	accept();
	// 黑名单：deny();
});
program.version("socks5代理")
	.option('-p, --port [value]', '端口')
	.option('-h, --host [value]', '绑定的ip，默认0.0.0.0')
	.option('-u, --user [value]', '用户名, 默认：mtx')
	.option('-p, --password [value]', "密码, 默认：`!';/.;l'Qgdf097")
	.parse(process.argv);
process.on('uncaughtException', function(e){});
process.on('unhandledRejection', function(e){});

srv.listen(program.port||1080, program.host||'0.0.0.0', function()
{
	console.log('SOCKS server listening...' + this._connectionKey);
});

srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
  cb(user === (program.user || 'mtx') && password === (program.password || "`!';/.;l'Qgdf097"));
}));