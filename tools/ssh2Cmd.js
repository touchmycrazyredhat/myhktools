
// node ssh2Cmd.js --port 29156 --host 192.168.17.74 --username root --password xxx123
var Client = require('ssh2').Client,
  program = require('commander'),
  conn = new Client();
program.version("远程命令执行")
  .option('-p, --port [value]', '端口,默认 22')
  .option('-h, --host [value]', '访问主机的ip')
  .option('-u, --username [value]', '用户名, 默认：root')
  .option('-s, --password [value]', "密码")
  .option('-c, --cmd [value]', "命令")
  .parse(process.argv);
process.on('uncaughtException', function(e){});
process.on('unhandledRejection', function(e){});

// 经纬度分析


// ip连接分析
function fnGetIps(s)
{
  var r = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}).*?(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/gmi,a, oT = {},x = [];
  while(a = r.exec(s))
  {
    var szTT = a[1]+ "," + a[2];
    if( oT[szTT] || 
        -1 < szTT.indexOf('0.0.0.0') ||
        -1< szTT.indexOf('127.0.0.1'))
      continue;
    oT[szTT] = 1;
    x.push([a[1],a[2]]);
    console.log([a[1],a[2]]);
  }
}

conn.on('ready', function()
{
  var a = [];
  conn.shell(function(err, stream) 
  {
    if (err) throw err;
    stream.on('close', function() 
    {
      var ss = a.join("");
      if(!program.cmd)
        fnGetIps(ss);
      else console.log(ss);
      conn.end();
    }).on('data', function(data)
    {
      a.push(data);
    }).stderr.on('data', function(data)
    {
      a.push(data);
    });
    stream.end((program.cmd || 'netstat -antlp\n') + '\nexit\n');
  });
}).connect(
{
  host: program.port.host || '23.105.209.65',
  port: program.port || 22,
  username: program.username || 'root',
  password: program.password||"xxx123"
  // ,privateKey: require('fs').readFileSync('/here/is/my/key')
});