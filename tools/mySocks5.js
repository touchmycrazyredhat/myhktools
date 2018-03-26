// node tools/mySocks5.js --user mtxuser --password sldfjsljf -p 5533
var socks = require('socksv5'),
	program = require('commander'),
	srv = socks.createServer(function(info, accept, deny) {
  accept();
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