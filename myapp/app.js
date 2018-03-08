/*////////////////////
npm install -g express path morgan serve-favicon useragent express-session compression cookie-parser redis node-uuid helmet juicer
brew services list
sudo chmod 777 /var/log/redis.log
brew services stop redis
brew services start redis
brew services list

npm install -g mstsc.js
npm i -g ssh2 term.js morgan socket.io validator colors basic-auth  compression debug read-config validator

https://github.com/billchurch/WebSSH2
https://github.com/citronneur/mstsc.js
////////////////////*/
var express = require('express'),
    os = require('os'),
    constants = require('constants'),
    fs = require('fs'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    useragent = require('useragent'),
    session = require('express-session'),
    compress = require('compression'),
    cookieParser = require('cookie-parser'),
    // bodyParser = require('body-parser'),
    xpb = 'x-powered-by',
    crypto = require("crypto"),
    client = require('redis').createClient(),
    nMaxConn = 100,
    uuid  = require('node-uuid'),
    // 安全头信息
    helmet = require('helmet'),
    juicer = require("juicer"),
    app = express();

// cookie start
app.set('trust proxy', 1);
// 获取随机数
function getRandom(nMax)
{
  return String((Math.random() * 1000000000) % nMax).replace(/\..*?$/gmi,'');
}

//*////////////
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
var aSName = String.fromCharCode('a'.charCodeAt(0) + getRandom(26),'A'.charCodeAt(0) + getRandom(26));
app.use(session({
  "secret" : 'secret',
  resave: false,
  saveUninitialized: true,
  "httpOnly": true,
  "name" : 'x',
  genid:function(req)
  {
    return uuid.v4();
  }
  })
);
///////////*/
/*
app.use(require('cookie-session')({
  "name": aSName,
  // keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            // domain: 'example.com',
            // path: 'foo/bar',
            expires: expiryDate
          }
  })
);
///*/
// cookie end

limiter = require('express-limiter')(app, client);
limiter({
  path: '*',// "post"
  method: 'all',
  lookup: ['connection.remoteAddress'],
   whitelist:function (req) 
   {
      var eRg = /^(127\.0\.0\.1|192\.168\.|localhost).*/g,s = String(req.connection.remoteAddress),
          eGetIp = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/gmi;
      s = eGetIp.exec(s) || '';
      if(s)s = s[1];
      return !!eRg.exec(s);
  },
  onRateLimited: function (req, res, next)
  {
    req.connection.destroy();
    // next({ message: '客户端1分钟内只允许并发连接' + nMaxConn, status: nCd });// 429
  },
  // 150 requests per hour
  total: nMaxConn,
  skipHeaders: false,
  expire: 1000 * 60 * 60
});

// 检查user-agent，避免工具、攻击，不合法的ua拒绝访问
function fnCheckUa(req,res)
{
  var ua = useragent.is(req.headers['user-agent'] || ""), 
      bFlg = ua.opera || ua.webkit || ua.ie || ua.chrome || ua.safari || ua.mobile_safari || ua.firefox || ua.mozilla || ua.android;
  if(bFlg)return true;
  // console.log('直接关闭连接');
  req.connection.destroy();
  return false;
}

// 避免js转义
juicer.set({
 'script': false,
  strip:false,
 'cache': false
});

// gzip压缩数据
app.use(compress({
    "level":9,
    "memLevel":9,
    // "strategy":// 
    "filter":function(req,res)
    {
        var s = String(res && res.getHeader('Content-Type') || "");
        if(0 == s.indexOf("text/"))return true;
        return compress.filter(req, res);
    }
}));
// 禁止x-powered-by
app.disable(xpb);

// 监听网络数据包
app.use("/netM",function(req,res,next)
{
  var oIp = getIp(req);
  var data = '';
  req.on('data', function(chunk){
    data += chunk;
  });
  req.on('end', function() {
    req.rawBody = data;
    if(global.g_socketIO)
    {
      var sTmp = JSON.parse(new Buffer(data,"base64").toString());
      // 需要解决重复数据问题
      global.g_socketIO.emit("netData", JSON.stringify(sTmp));
      // 内网、外网识别
      var aIps = [fnGetIpInfo(sTmp[2]),fnGetIpInfo(sTmp[3])];
      
      if(aIps[1]["city"])
      {
        console.log(aIps);
      }
      
    }
    // console.log();
  });
  res.end('');
});

// 安全头信息设置太高导致的反馈信息接收
app.post("/rptv",function(req,res){
        if(req.body)
        {
            // console.log(req.body);
        }
        // res.status(204).end();
        res.end();
    });

// nonce 的生成
app.use(function (req, res, next)
{
  if(!res.locals.nonce)res.locals.nonce = uuid.v4();
  if(fnCheckUa(req,res))next();
});

// 安全头信息处理
app.use(helmet({"noCache":true,"policy":"no-referrer"}));  
app.use(helmet.contentSecurityPolicy(
  {
      directives: {
        // 包含下面注释的默认设置
        // "defaultSrc": ["'self'"],
        // "frameAncestors":["ALLOW-FROM *"],
        // "frameAncestors":["'127.0.0.1:3000'"],
        /*
        "imgSrc":["'self'",'data:'],
        "scriptSrc": [
            "'self'",
            "'unsafe-eval'",
            function (req, res) {
                return "'nonce-" + res.locals.nonce + "'"  // 'nonce-614d9122-d5b0-4760-aecf-3a5d17cf0ac9'
            },
            "'unsafe-inline'"
        ],
        "styleSrc": ["'self'","'unsafe-inline'"],
        ////////*/
        // "sandbox":['allow-forms', 'allow-scripts','allow-modals'],
        "reportUri": '/rptv'// report-violation
      },
      // "reportOnly": true,
      // "browserSniff":true,
      "setAllHeaders":false,
      "disableAndroid": true
  }));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// cookie解析
app.use(cookieParser());
// 静态资源转发
app.use(express.static(path.join(__dirname, 'public')));
app.use(/.*\/zsm\.htm.*$/,function (req, res, next)
{
   res.sendFile(__dirname + "/public/zsm.html");
});
// /usr/mtx/db/
var fs  = require("fs"), mypath = os.homedir() + '/mtx/db/', child_process = require('child_process') ;
// 文件存在判断
function isExists(t)
{
  return fs.existsSync( mypath+ t);
}

// 获得ip经纬度信息
function fnGetIpInfo(ip,req)
{
  var odip = ip;
  ip = ip.replace(/.*?ffff:/gmi,'');
  // 历史文件的名称修复
  if(isExists(odip) && odip != ip)
    fs.rename(mypath + odip, mypath + ip,function(e){});

  if(isExists(ip))
  {
    o = JSON.parse(fs.readFileSync(mypath + ip));
  }
  else
  {
    var ipRg = /^(\d{1,3}\.){3}\d{1,3}$/g,o = {};
    // 确保没有注入攻击,排除内网ip
    // 172.16.0.0～172.31.255.255
    if(ipRg.exec(ip) && !/^(192\.168|127\.0|10|172)\..*/.exec(ip))
    {
      try{
        o = JSON.parse(child_process.execSync("curl ipinfo.io/" + ip));
      }catch(e){}
    }
  }
  o.date = require('moment')(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss');

  if(req)
  {
    // 更新ua
    if(req.headers)
    {
      var a = "x-forwarded-for,user-agent,x-real-ip".split(/[;,]/);
      for(var k in a)
      {
        if(!!req.headers[a[k]])
           o[a[k]] = req.headers[a[k]];
      }
      if(!o.url)o.url = [req.url];
      else if("string" == typeof o.url)o.url = [o.url,req.url];
      else if(-1 == o.url.indexOf(req.url)) o.url.push(req.url);

      if(!o.referer && req.headers['referer'])o.referer = req.headers['referer'];
    }
  }

  fs.writeFileSync(mypath + ip,JSON.stringify(o));

  return o;
}

// 获取ip信息
function getIp(req)
{
  var ip = req.headers['x-real-ip'] || String(req.connection.remoteAddress), o;
  o = fnGetIpInfo(ip,req);
  return o;
}

// 得到ip信息
function rcip(req,res,next)
{
  var s = req.url,ipG = /.*?\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/gmi,a = ipG.exec(s);
  if(a && 0 < a.length && isExists(a[1]))
  {
    s = fs.readFileSync(mypath + a[1]).toString();
    res.end(s);
    console.log(43);
  }
  else
  {
    var s = getIp(req);
    
    res.setHeader("Content-Type", "text/json");
    res.json(s);
    res.end("");
  }
}

app.use('/', rcip);
app.use('/ip',rcip);
// app.use('/users', users);

app.use(function(req, res, next)
{
  getIp(req);
  /*
  var s = path.join(__dirname, 'public') + req.path;
   var indexTpl  = fs.readFileSync(path.join(__dirname, 'public') + "/ec.html",{encoding:"utf8"}),
  compiled_tpl = juicer(indexTpl);
  */
  next();
});
// error handler
app.use(function(err, req, res, next) 
{
  // 未知请求，全部禁止
  //req.connection.destroy();
  //*
  if(err)console.log(err);
  rcip(req,res,next);
  //*/
});

module.exports = app;
