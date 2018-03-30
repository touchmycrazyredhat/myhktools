// node ssh2Cmd.js --port 29156 --host 192.168.17.74 --username root --password xxx123
var Client = require('ssh2').Client,
  fs = require('fs'),
  ci = require(__dirname + '/../commonlib/ci.js'),
  mysql = require(__dirname + '/../myapp/lib/myMysql.js'),
  os = require('os'),
  child_process = require('child_process'),
  mypath = os.homedir() + '/mtx/db/',
  ipInt = require('ip-to-int'),
  program = require('commander');
program.version("远程命令执行")
  .option('-p, --port [value]', '端口,默认 22')
  .option('-h, --host [value]', '访问主机的ip')
  .option('-u, --username [value]', '用户名, 默认：root')
  .option('-s, --password [value]', "密码")
  .option('-c, --cmd [value]', "命令")
  .parse(process.argv);
process.on('uncaughtException', function(e){});
process.on('unhandledRejection', function(e){});

// ip转换为数字
// "16802816","16803071","JP","Japan","Shimane","Izumo","35.367000","132.767000"
function ipStringToLong(szIp)
{
    return ipInt(szIp).toInt();
}
// 文件存在判断
function isExists(t)
{
  return fs.existsSync( mypath+ t);
}

// 获得ip经纬度信息
function fnGetIpInfo(ip,fnCbk)
{
  mysql.fnGetIpInfo(ip,fnCbk);
}
// ip连接分析
function fnGetIps(s,myCurIp,fnCbk)
{
  var r = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}).*?(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/gmi,a, oT = {},x = [];
  while(a = r.exec(s))
  {
    var szTT = a[1]+ "," + a[2];
    if( oT[szTT] || 
        -1 < szTT.indexOf('0.0.0.0') ||
        -1< szTT.indexOf('127.0.0.1') ||
        -1< szTT.indexOf('192.168.24.15') ||
        -1< szTT.indexOf('192.168.24.10') ||
        -1< a[2].indexOf('192.168') ||
        -1< a[2].indexOf('172.1') ||
        (myCurIp == a[1] && a[1] == a[2]))
      continue;
    oT[szTT] = 1;

    fnGetIpInfo(a[2],function(o)
    {
      // console.log("start .. " + o.ip);
      
      if("中国CN" != o.o.ctj)
        console.log("=========注意，发现了国外的ip=========");
      console.log([o.ip, o.ctj,o.ctq,o.city,o.loc1,o.loc2].join(", "));
      if(fnCbk)fnCbk(o);
      // if("中国CN" != o.o.ctj)
        // console.log([o.ip, o.ctj,o.ctq,o.city,o.loc1,o.loc2].join(", "));
    });
    // x.push(a[2]);
  }
  if(fnCbk)fnCbk(null);
}

function fnMySsh(prm,fnCbk)
{
  var conn = new Client();
  conn.on('ready', function()
  {
    var a = [];
    conn.shell(function(err, stream) 
    {
      if (err) throw err;
      stream.on('close', function() 
      {
        var ss = a.join("");
        if(!prm.cmd)
          fnGetIps(ss,prm.host,fnCbk);
        else console.log(ss);
        conn.end();
      }).on('data', function(data)
      {
        a.push(data);
      }).stderr.on('data', function(data)
      {
        a.push(data);
      });
      stream.end((prm.cmd || 'netstat -antlp\n') + '\nexit\n');
    });
  }).connect(
  {
    host: prm.host,
    port: prm.port || 22,
    username: prm.username || 'root',
    password: prm.password || "xxx123"
    // ,privateKey: require('fs').readFileSync('/here/is/my/key')
  });
}

if(program && program.host)
  fnMySsh(program);

else
{
  var a = [

  ];
  var sxPa = __dirname + "/ips/" + require('moment')(new Date().getTime()).format('YYYY-MM-DD');
  if (!fs.existsSync(sxPa))
    fs.mkdirSync(sxPa);
  for(var k in a)
  {
    +function(o)
    {
      var aR = [];
      fnMySsh(o,function(x)
      {
        if(x)aR.push(x);
        else
        {
          if(0 < aR.length)
            console.log(o.host + " 发现的ip数量:" + aR.length),
            console.log(aR),
            // appendFileSync
            fs.writeFileSync(sxPa + "/" + o.host,JSON.stringify(aR));
          // mysql.fnEnd();
        }
      });
    }({host:a[k][2],username:a[k][0],password:a[k][1]});
  }
}

process.on('exit', (code) => 
{
  mysql.fnEnd();
});