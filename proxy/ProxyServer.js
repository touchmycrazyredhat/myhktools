// 校验http、https 代理是否可用
// node checkProxy.js ~/C/ip_log.txt 
/*
node proxy/ProxyServer.js --proxy socks://127.0.0.1:5533
node proxy/ProxyServer.js --proxy 'socks://mtxuser:sldfjsljf@127.0.0.1:5533'
curl -x "http://127.0.0.1:8880" http://ip.cn

npm install -g socks-proxy-agent
curl -v --proxy http://127.0.0.1:8880 http://ip.cn
# 这样kali就可以使用vps的代理了
vi /etc/apt/apt.conf.d/auto-apt-proxy.conf 
Acquire::http::Proxy "http://192.168.24.10:8880";
*/
var fs  = require("fs"),
	http = require("http"),
    request = require("request"),
    g_aProxy = null,
    program = require('commander'),
    SocksProxyAgent = require('socks-proxy-agent'),
    nPort = 8880,
    g_szUA = "Mozilla/5.0 (Linux; Android 5.1.1; OPPO A33 Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043409 Safari/537.36 V1_AND_SQ_7.1.8_718_YYB_D PA QQ/7.1.8.3240 NetType/4G WebP/0.3.0 Pixel/540",//"CaptiveNetworkSupport-355.30.1 wispr",
    szIp = "0.0.0.0";

program.version("动态代理")
	.option('-u, --useHttp', '使用动态http代理')
	.option('-x, --proxy [value]', 'socks://127.0.0.1:1086, or process.env.socks_proxy')
	.parse(process.argv);
process.on('uncaughtException', function(e){});
process.on('unhandledRejection', function(e){});

function fnWathProxyFile(s)
{
	var fnCbk = function()
	{
		if(fs.existsSync(s))
			g_aProxy = fs.readFileSync(s).toString().trim().split(/\n/);
	};
	fnCbk();
	fs.watch(s,{encoding:'buffer'},(eventType, filename)=>
	{
		if (filename)
		{
			fnCbk();
		}
	});
}

var proxy = program.proxy||process.env.socks_proxy, agent = null;
if(proxy)
{
	agent = new SocksProxyAgent(proxy);
	console.log("启用了代理:" + proxy);
}

// 设置二级代理并返回request对象
function getRequest()
{
	if(!program.useHttp)return request;
	var szAutoProxyIps = __dirname + "/" + (process.env["autoProxy"] || "autoProxy.txt");
	
	fnWathProxyFile(szAutoProxyIps);
	if(!g_aProxy)
	{
		console.log("g_aProxy 没有数据");
		return request;
	}

	// 随机获得代理
	// HTTP,ip,port
	var n = parseInt(Math.random() * 2000000000) % g_aProxy.length, aT = g_aProxy[n];

	
	process.env["HTTP_PROXY"] = "http://" + aT;
	console.log("当前代理: " + process.env["HTTP_PROXY"]);
	return request.defaults({'proxy': process.env["HTTP_PROXY"]});
}

/* 安全检查：
1、不能访问本机资源
2、黑名单
3、去除广告
/////////////////////*/
function fnSafeCheck(req, fnCbk)
{
	fnCbk();
}

// 请求前对一些信息进行处理
function fnPrevReq(req)
{
	/*
_this["random-agent"] = true;
            var uas = require("./allUserAgents"), szTmpUa = uas[Math.random() * 20000 % uas.length];
            req.headers["user-agent"] = szTmpUa;
	*/
}
var g_oGl = {},g_szSubmit_key = null;

function fnFilterFunc(o,req)
{
	for(var k in o)
	{
		if("function" == typeof o[k])
		{
			(function(f,k)
			{
				// console.log(k);
				if("setHeader" == k)
				{
					o[k] = function()
					{
						// var a = [].slice.call(arguments);
						var a = [];
						for(i = 0; i < arguments.length; i++)
						{
							a[i] = arguments[i];
						}
						// console.log(this.headers["cookies"]);
						// console.log(this);
						
						if("set-cookie" == a[0])
						{
							var re = /JSESSIONID=([^;]+)/gmi.exec(a[1][0]);
							if(re && 0 < re.length)
							{
								this.JSESSIONID = re[1];
								console.log("得到 JSESSIONID: " + this.JSESSIONID);
							}
							
						}
						// _SUBMIT_KEY
						if("_submit_key'" == a[0])
						{
							console.log("得到 响应中_submit_key: " + a[1]);
							// 首次响应
							if(this.JSESSIONID)g_oGl[this.JSESSIONID] = a[1];
							else console.log("响应中_submit_key 无法得到JSESSIONID关联");
							// 请求时获得submit_key 
							if(req.headers)
							{
								var ss = req.headers["cookie"];
								if(ss)
								{
									var re = /JSESSIONID=([^;]+)/gmi.exec(ss)[1];
									if(g_oGl[re])
									{
										console.log("成功获取到: " + g_oGl[re]);
									}
								}
							}
						}
						// console.log(this);
						f.apply(o,a);
					};
				}
			})(o[k],k);
		}
	}
}

var g_oMT = {};
// 设置代理主程序
function fnCreateProxyServer()
{
	var nTimeout = 19000, server = http.createServer(function (req, resp)
	{
		// 检查通过就回调继续走
		// JSESSIONID _SUBMIT_KEY
		fnSafeCheck(req,function()
		{
			/**
			if(req.method == "GET" ||
				|| ("content-length" in req.headers) && 0 == req.headers["content-length"]
				|| ("content-type" in req.headers) && 'text/plain' == req.headers["content-type"]
				)
			//////////////*/
			{
				// console.log(req.method.toLowerCase());
				// req.headers["user-agent"] = g_szUA;
				// request,// 
				// console.log(req.url);
				// console.log(agent);
				var r = getRequest(),// 获取动态代理
					x = r[req.method.toLowerCase()](
						{
							"agent":agent,
							"uri":req.url,
							"timeout":nTimeout});
					// console.log(req.headers)
				req.pipe(x);
				// fnFilterFunc(resp);
		    	resp = x.pipe(resp);
		    	console.log(req.headers);
	    	}
	    	/*
	    	else 
	    	{
	    		// content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
	    		// console.log(req.method + " "+  req.url);
	    		console.log(req.headers);
	    		var ss = req.headers["cookie"],re;
				if(ss)
				{
					re = /JSESSIONID=([^;]+)/gmi.exec(ss)[1];
				}
	    		req.on("data",function()
	    		{
	    			var s = String(arguments[0]);
	    			console.log("拼接前：" + s);
	    			
	    			if(g_oMT[re] && -1 == s.indexOf('_SUBMIT_KEY=NONE'))
	    				s += "&_SUBMIT_KEY=" + g_oMT[re];
	    			console.log("拼接后：" + s);
	    			
	    			request.post({uri:req.url,"timeout":nTimeout,headers:req.headers,body:s},function(e,r,b)
					{// _SUBMIT_KEY
						delete r.headers['x-powered-by'];delete r.headers['server'];
						// console.log(r.headers);
						if(r.headers && r.headers['_submit_key'])
						{
							console.log("成功获取到: " + r.headers['_submit_key']);
							if(re)g_oMT[re] = r.headers['_submit_key'];
						}
						b = b.trim();
						console.log(b);
						resp.end(b);
					});
	    		});
	    	}////////*/
		});
	});
	server.on('clientError', (err, socket) => 
	{
		if(err)console.log(err);
	  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
	});
	server.on('close', (err) => {
		if(err)console.log(err);
	});
	server.on('connect', (request, socket,headBuffer) => 
	{
		console.log([socket.remoteFamily,socket.remoteAddress,socket.remotePort])
	  // socket.end();
	});
	/*
	server.on('request', (request,response) => {
		let body = [];
		
		request.on('data', (chunk) => {
		  body.push(chunk);
		}).on('end', () => {
		  // body = Buffer.concat(body);
		  // var fs = require("fs");
		  // fs.writeFileSync("testAmf.bin",body);
		  console.log(body.toString());
		  // at this point, `body` has the entire request body stored in it as a string
		});

	});
	*/
	server.on('upgrade', (request, socket,headBuffer) => {
		//socket.end();
	});
	server.listen(nPort,szIp,function()
	{
		console.log("start: " + szIp + ":" + nPort);
	});
	server.maxHeadersCount = 2000;

	// 超时设置
	server.setTimeout(nTimeout);
	server.timeout = nTimeout;
	server.keepAliveTimeout = nTimeout;

}
// 启动多个
// pm2 start ProxyServer.js -i max
process.setMaxListeners(0);
require('events').EventEmitter.prototype._maxListeners = 0;
require('events').EventEmitter.defaultMaxListeners = 0;
fnCreateProxyServer();
