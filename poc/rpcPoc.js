// http://218.89.38.36:8090/CMHS?CMHS=JRPC
var contextPath = "http://218.89.38.36:8090";
// var contextPath = "http://192.168.10.70:8088";
// http://218.89.38.36:8090/CMHS?CMHS=GetOutSpFile&rmf=tmo.swf
var request = require('request'),url = require('url');

const net = require('net');
var window=global,cookie = "";

function AJAX(o)
{
	var fnCbk = o.clbkFun,data = o.data || "",uObj = url.parse(o.url);
	// console.log(uObj);
	const client = net.createConnection({ port: uObj.port,host:uObj.hostname}, () => 
	{
	  var a = [
	  	"POST /CMHS?CMHS=JsonRpc&xui=" + new Date().getTime() + " HTTP/1.1",
	  	"Host: " + uObj.host,
	  	"User-Agent: curl/7.61.0",
	  	"Accept: */*",
	  	"XUIAJAX:1",
	  	"CMHS:JsonRpc",
	  	"Content-Type:application/x-www-form-urlencoded;charset=utf-8"];
	  	if(cookie)a.push(cookie);
	  	a.push("");
	  	a.push("");
	  a = a.join("\r\n") +  data + '\r\n\r\n\r\n\r\n\r\n';
	  console.log(a);
	  
	  client.write(a);
	  // client.end();
	});
	var sa = [];
	client.on('data', (data) => {
		var s = data.toString();
		sa.push(s);
	    client.end();
	});
	client.on('end', () => {
		var re = /(\{"result".*?\}\]\})/gmi, re1 = /Set-Cookie:\s*(.*?)(\r|\n)/gmi;
		var s1 = sa.join("");
		// console.log(data);
		var cc = re1.exec(s1);
		if(cc)//console.log
		(cookie = "Cookie: " + cc[1]);
		console.log(s1);
		fnCbk(re.exec(s1)[0]);
	});
}

function JsonRpcClient(url,fnCbk) 
{
	url = contextPath  + "/CMHS?CMHS=JRPC";
	
	this["url"] = url;
	var _this = this, 
		obj = {}, 
		bind = function (f, o) 
		{
			return function ()
			{
				return f.apply(o, arguments);
			};
		},
		_A = function (p) 
		{
			var r = [], i = 0, j = p.length;
			for (; i < j; i++)
				r.push(p[i]);
			return r;
		};
		this.AJAX = AJAX;
	
	
	var fnTmp = function (oTmp)
	{
		if ("number" == (szTp = typeof oTmp)) 
		{
			return isFinite(oTmp) ? oTmp : 0;
		} else 
		{
			if ("boolean" == szTp || null == oTmp)
			{
				return oTmp;
			} else 
			{
				k = {"\r":"", "\n":"\\n", "\t":"\\t", "\b":"\\b", "\f":"\\f", "\"":"\\\""};
				return "'" + encodeURIComponent(oTmp || "").toString().replace(/([\r\n\t\b\f"])/gm, function (a, b) {
					return "\\" + k[b];
				}) + "'";
			}
		}
	},
	o2json = function (oTmp1) 
	{
		var k, aTmp = [];
		if ("object" == typeof oTmp1 && oTmp1)
		{
			for (k in oTmp1)
			{
				oTmp1[k] && aTmp.push("'" + k + "':" + fnTmp(oTmp1[k]));
			}
			return "\"{" + aTmp.join(",").replace(/([\r\n\t\b\f"])/gm, "\\$1") + "}\"";
		} else 
		{
			return fnTmp(oTmp1);
		}
	},
	fnRpcCall = function ()
	{
		var params = _A(arguments), 
			cbk = params[0], 
			bAsync = "function" == typeof (cbk || ""), 
			oRst = {};

		bAsync && params.shift();
		// console.log(arguments);
		AJAX({
			url:this.url, 
			bAsync:bAsync, 
			data:"{\"allPms\":{},\"method\":\"" + this.methodName + "\",\"_id_\":\"" + this["_id_"] + "\",\"params\":" + (function (arg)
				{
				var b = [], szTp;
				for (var i = 0; i < arg.length; i++)
				    b.push(o2json(arg[i]));
				return "[" + b.join(",") + "]";
				})(params) + "}", 
			clbkFun:function () 
			{
				try {
					eval("var oTmp = " + arguments[0]);
					/// console.log(oTmp);
					if (null != oTmp && "object" == typeof oTmp)
					{
						if (Array == (oTmp["constructor"] || ""))
						{
							oRst = [];
							for (var i = 0; i < oTmp.length; i++)
								if ("object" == typeof oTmp[i])
									_this.fnMakeObj(oTmp[i], oRst[i] = {});
								else oRst[i] = oTmp[i];
						} else _this.fnMakeObj(oTmp, oRst);
					} else oRst = oTmp;
					console.log("=======");
					console.log(oRst);
					console.log("=======");
					bAsync && cbk.apply(oRst, [oRst]);
				}catch (e){}
			}});
		return oRst;
	};
	this.fnMakeObj = function (o, oRstObj)
	{
		var oT = oRstObj;
		o._name_ && (oT = (oRstObj[o._name_] = {}));
		for (var k in o)
		{
			if ("methods" == k)
			{
				for (var i = o[k].length - 1; i >= 0; i--)
					oT[o[k][i]] = bind(fnRpcCall, {url:_this.url, methodName:o[k][i], "_id_":o["_id_"]});
				delete o[k];
			} else 
			{
				if (o[k] && "object" == o[k]["constructor"])
					o[k]["_name_"] = k, _this.fnMakeObj(o[k], oT);
				else oT[k] = o[k];
			}
		}
	};
	
	this.cacheObj = [];

	this.LoadJsObj = function(s)
	{
	  if("undefined" == typeof _this._LoadJsObj)return this;
	  eval("var o = window." + s + ";");
	  if(o)return o;
	  try{o = _this.cacheObj[s] || (_this.cacheObj[s] = eval("1," + _this._LoadJsObj.getJsObj(s).getResult()))}catch(e){};
	  if(o)
	  {
	     if(o.init) o = o.init();
	     else
	     {
	       if(Base)
	        for(var k in Base)
	          if(!o[k])o[k] = Base[k];
	     }
	     _this.cacheObj[s] = o;
	     eval("window." + s + "=o;");
	  }
	  return o
	};
	/*
	 * 获取一个未注册的java对象，该对象需要继承, jcore.jsonrpc.common.JsonRpcObject
	 * 或实现接口jcore.jsonrpc.common.face.IJsonRpcObject,并有默认的构造函数
	 */
	this.getRpcObj = function()
	{
	   return _this._LoadJsObj.getRpcObj.apply(_this,arguments);
	};

	AJAX({url:url, bAsync:false, clbkFun:function ()
	{
		try {
			eval("obj = " + arguments[0]);
			obj = obj.result;
			if(obj)
				for (var i = 0; i < obj.length; i++)
					_this.fnMakeObj(obj[i], _this);
			fnCbk(_this);
		}catch (e) {}
	}});
}

var rpc = null;
JsonRpcClient('',function(o)
{
	rpc = o;
	
	rpc && rpc.getRpcObj(function(obj)
	{

		if(obj)
		{
			obj = obj.result[0];
			obj.getErrMsg(function(s){console.log(s)});
			console.log(obj);
			for(var k in obj)
			{
				console.log( k + ": " + typeof obj[k]);
			}
			//////////////*/
			console.log(obj.getDao);
			obj.getDao(function(o1)
			{
				o1 = o1.result[0];
				console.log(o1);
				o1.query(function(o2)
				{
					console.log(o2);
				},"select * from ad53a4 limit 1,3")
			});
		}
		// jcore.jsonrpc.rpcobj.XRpc
	},
	// "baseDao"
	// "jcore.jsonrpc.rpcobj.XRpc"
	'com.yinhai.xui.base.common.YHBaseJsonRpc'
	);

	
});





