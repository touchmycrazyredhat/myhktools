// parse svn authz file
// node tools/parseSvnAuthz.js -f "./svn_conf/authz" -k slname
var fs  = require("fs");

var a = null,
    // 分组
    groups = {},
    program = require('commander'),
    // 人
    oR = {},
    // 项目
    xx = {};
program.version("svn配置文件解析")
	.option('-k, --key [value]', '搜索的人有哪些目录权限')
	.option('-f, --file [value]', '配置文件')
	.parse(process.argv);
process.setMaxListeners(0);
process.on('uncaughtException', function(e){console.log(e)});
process.on('unhandledRejection', function(e){console.log(e)});

a = fs.readFileSync(program.file).toString("utf-8").trim().replace(/\r/gmi,'').replace(/\n+/gmi,'\n');
a = a.split(/\n/);

var nLstXm = 0,szLstPath = '';
a.forEach(function(i,n)
{
	if(-1 == i.indexOf('='))
	{
		// 记录项目路径位置
		nLstXm = n;
		szLstPath = '';
		return;
	}
	var t = i.split(/=/);
	if(2 == t.length && t[1])
	{
		// 分组与项目路径的读写权限
		if(/^[rw]*$/gmi.test(t[1]))
		{
			// 读写权限路径
			if(!szLstPath && 1 < nLstXm)
				szLstPath = a[nLstXm].replace(/\[|\]/gmi,'');
			t[0] = t[0].replace(/^@/,'');
			// console.log([t[0],groups[t[0]],szLstPath,nLstXm]);
			if(szLstPath)
			{
				var oD = groups[t[0]] || (groups[t[0]] = {});
				oD = oD['dirs'] || (oD['dirs'] = {});
				oD[szLstPath] = 1;
				return;
			}
			else{console.log(i + "没有找到授权路径");}
		}
		// 人与分组的关系，确保通过人、分组能够查到关系
		var oD = groups[t[0]] || (groups[t[0]] = {});
		oD['rs'] = t[1];
		var aR1 = t[1].split(/[,;]/);
		aR1.forEach(function(iR,rN)
		{
			var oTr = oR[iR] || (oR[iR] = {});
			oTr[t[0]] = 1;
		});
		
		// console.log([i,n]);
	}
});

process.on('exit',function()
{
	var szK = '', o1, a = [];
	if(szK = program.key)
	{
		// 分组信息
		if(o1 = oR[szK])
		{
			for(var k in o1)
			{
				var oDir = groups[k]['dirs'];
				if(oDir)
				{
					for(var x in oDir)
					{
						a.push(x);
					}
				}
			}
		}
	}
	if(0 < a.length)
	{
		console.log("找到读目录权限：");
		console.log(a.join('\n'));
	}else console.log("sorry 没有找到");
});