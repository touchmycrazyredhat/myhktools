var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.10.216',
  port:3306,
  user     : 'qix1',
  password : 'qix1',
  database : 'rdp'
}),a = process.argv.splice(2);

connection.connect(function(err)
{
  if (err) throw err;
  // console.log("Connected!");
});

function fnGetObj(o)
{
	var a = [];
	for(var k in o)
	{
		var o1 = {}, x = o[k];
		for(var y in x)
		{
			if(x[y] || 0 === x[y] || false === x[y])
			{
				if("function" != typeof x[y])
					o1[y] = x[y];
			}
		}
		a.push(o1);
	}
	return a;
}

// count qqun 218777
//    ac01 1152,8172
//    qq 484894 全文检索
// WHERE MATCH (title,body) AGAINST ('database')
function fnQuery(szK)
{
	var a = [],nC = 0,fnCbk = function()
	{
		if(1 == nC)console.log(a);
	};
	connection.query(
		"SELECT concat_ws(',',a.AAC003,a.AAC002,a.AAE004,a.AAE005,a.AAE006) as xx from ac01 a where aac003='" + szK + "'"
		, function (error, results, fields) {
	  if (error) throw error;
	  for(var i = 0; i < results.length; i++)
	  {
	  	a.push(results[i]["xx"]);
	  }
	  nC++;fnCbk();
	});
	connection.query(
		"SELECT concat_ws(',',YHXM,DHHM,YHDZ) as xx from cdgrzfxx where yhxm='" + szK + "'"
		, function (error, results, fields) {
	  if (error) throw error;
	  for(var i = 0; i < results.length; i++)
	  {
	  	a.push(results[i]["xx"]);
	  }
	  nC++;fnCbk();
	});
}
//* 
// show tables
// penetration_project 581
// penetration_vulnerability
// penetration_p_v
// taorg
// penetration_p_v_log
connection.query(
	// b.scope = 1 外网
		"select a.ORGNAME,b.name,b.url,b.scope,b.createtime from taorg a, penetration_project b where a.orgid = b.orgid"
		// "select * from penetration_project b where orgid not in(select orgid from taorg) "
		, function (error, results, fields) {
	  if (error) throw error;
	  var a = fnGetObj(results),o = {};
	  // console.log(a);;
	  var aX = ['117.139.75.61','182.140.197.114']
	  for(var k in a)
	  {
	  	 if(0 == a[k].scope)continue;
	  	 
	  	 var  s = String(a[k].url).replace(/(^.*?:\/\/)|([\/:].*?$)/gmi, '');
	  	 if(-1 < aX.indexOf(s))console.log(a[k]);
	  	 o[s] = 1;
	  }
	  for(var k in o)
	  {
	  	// console.log(["nmap --script firewall-bypass --host-timeout=100m  --max-rtt-timeout=3000ms --initial-rtt-timeout=1000ms --min-rtt-timeout=1000ms --max-retries=2 --stats-every 10s --min-hostgroup=64 --min-rate=500 --traceroute -PS1-65535  -A -O -oX ",k + ".xml",k," &"].join(" "));
	  }
	});
///////////////*/
if(0 < a.length)
	fnQuery(a[0]);
connection.end();