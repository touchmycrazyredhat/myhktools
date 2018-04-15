module.exports={
	tags:"report",// 报告处理插件
	doCheck:function(o,_t)
	{
		var _s = this.self;
		// console.log("======");
		// console.log(_t.tags);
		// delete o.send;
		// delete o.body;
		// console.log(o);
		if(!o.body)delete o.body;
		// _s.log(o);
		// console.log("======");
		if(_s.g_socketIO && o)
		{
			// 发送消息
			_s.g_socketIO.emit("url",o,_t);
		}
		// -v 参数才会在控制台输出
		if(o && o.vul)
		{
			
			// console.log(_t.tags);
			delete o.send;
			delete o.body;
			var sFn = _s.rstPath + '/' + _s.md5(_s.url) + ".txt";
			o.tags = _t.tags;
			o.srcUrl = _s.url;
			_s.fs.writeFileSync(sFn, JSON.stringify(o,null,' '));
			// console.log([_t.tags,o.url]);
			// console.log(_t);
		}
		_s.emit('vul',o,_t,_s);
		if(_s.program.cmd)_s.log(o.body);
	}
};