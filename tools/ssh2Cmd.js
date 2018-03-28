// node ssh2Cmd.js --port 29156 --host 192.168.17.74 --username root --password xxx123
var Client = require('ssh2').Client,
  fs = require('fs'),
  ci = require(__dirname + '/../commonlib/ci.js'),
  os = require('os'),
  child_process = require('child_process'),
  mypath = os.homedir() + '/mtx/db/',
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

// 经纬度分析

// 文件存在判断
function isExists(t)
{
  return fs.existsSync( mypath+ t);
}

// 获得ip经纬度信息
function fnGetIpInfo(ip)
{
  var odip = ip,o = {},s;
  ip = ip.replace(/.*?ffff:/gmi,'');
  // 历史文件的名称修复
  if(isExists(odip) && odip != ip)
    fs.rename(mypath + odip, mypath + ip,function(e){});

  if(isExists(ip))
  {
    s = fs.readFileSync(mypath + ip).toString();
    if(s)
      o = JSON.parse(s);
    if(!o.loc)
    {
      console.log("删除：" + ip);
      fs.unlinkSync(mypath + ip);
    }
  }
  if(!o.loc)
  {
    var ipRg = /^(\d{1,3}\.){3}\d{1,3}$/g,o = {};
    // 确保没有注入攻击,排除内网ip
    // 172.16.0.0～172.31.255.255
    if(ipRg.exec(ip) && !/^(192\.168|127\.0|10|172)\..*/.exec(ip))
    {
      try{
        // -k -x 'http://127.0.0.1:1086' 
        console.log("start:" + ip);
        var ss1 = '';
        o = JSON.parse(ss1 = child_process.execSync("curl -s -k  http://ipinfo.io/" + ip));
        if(o.loc)
        {
          fs.writeFileSync(mypath + ip,JSON.stringify(o));
        }
        if(o.country)
          o.country = ci[o.country]||o.country;
        if(o.loc)console.log(o);
      }catch(e)
      {
        console.log(ip);
        console.log(ss1);
        console.log(e);
      }
    }
  }
  o.date = require('moment')(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss');
  o.ip = ip;
  delete o.url;
  delete o['user-agent'];
  delete o.referer;
  delete o['x-forwarded-for'];
  if(o.country)
    o.country = ci[o.country]||o.country;
  // if(o.loc)console.log(o);
// console.log(ip);
  return o;
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
    // if(!fnCbk)
      // console.log([a[1],a[2]]);

      console.log(a[2]);
      /*
      if(isExists(a[2]))
      {
        s = fs.readFileSync(mypath + a[2]).toString();
        if(s)
        {
          o = JSON.parse(s);
          if(o.loc)
          {
            console.log(o);
          }
          else console.log(a[2]);
        }
      }
      else console.log(a[2]);
      */
    // x.push([a[1],fnGetIpInfo(a[2])]);
    x.push([a[1],a[2]]);
    
  }
  if(fnCbk)fnCbk(x);
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
  
  /////*/
  ];


  for(var k in a)
  {
    +function(o){
      fnMySsh(o,function(x)
      {
        if(0 < x.length)
        {
          console.log(o.host + " 发现的ip数量:" + x.length);
          // appendFileSync
          fs.writeFileSync("ips/" + o.host,JSON.stringify(x));
          console.log(x);
        }
      });
    }({host:a[k][2],username:a[k][0],password:a[k][1]});
  }
}