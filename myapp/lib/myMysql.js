/*
drop table ipInfo;
create table ipInfo(ips BIGINT, ipe BIGINT,ctj varchar(20), sf varchar(150),ctq varchar(150),city varchar(150),loc1 varchar(30),loc2 varchar(30),primary key(ips,ipe));

create index i2 on ipInfo(ctq);
create index i3 on ipInfo(sf);
create index i4 on ipInfo(city);

select count(1) from ipInfo; 

load data infile '/Users/xiatian/Desktop/untitled\ folder/ip2location-lite-db5.csv/IP2LOCATION-LITE-DB5.CSV' into table ipInfo  fields terminated by ',' enclosed by '"'  lines terminated by '\n';

SHOW VARIABLES LIKE "secure_file_priv";

/usr/local/opt/mysql//.bottle/etc/my.cnf
brew services list
brew services restart mysql
brew services start mysql
SELECT @@global.secure_file_priv;

/Library/LaunchDaemons
com.oracle.oss.mysql.mysqld.plist
*/
var mysql      = require('mysql'),
	program = require('commander'),
	ci = require(__dirname + '/../../commonlib/ci.js'),
	ipInt = require('ip-to-int'),
	connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
});

program.version("社工信息查询")
  .option('-k, --key [value]', '姓名、身份证')
  .parse(process.argv);

connection.connect(function(err)
{
  if (err) throw err;
  // console.log("Connected!");
});

function fnDoRst(szK,a,results,oTmp,fnCbk)
{
	for(var i = 0; i < results.length; i++)
	{
		var ss1 = results[i]["xx"];
		if(ss1.length - szK.length < 4)continue;
		if(!oTmp[ss1])
			oTmp[ss1]=1,a.push(ss1);
	}
	fnCbk();
}

function fnDoQuery(sql,szK,a,oTmp,fnCbk)
{
	connection.query(
		sql
		, function (error, results, fields) {
	  if (error) throw error;
	  fnDoRst(szK,a,results,oTmp,fnCbk);
	});
}
// count qqun 218777
//    ac01 1152,8172
//    qq 484894 全文检索
// WHERE MATCH (title,body) AGAINST ('database')
/*
	create index i2 on ac01(AAE005);
	create index i4 on ac01(AAC002);
	create index i3 on cdgrzfxx(DHHM);
*/
function fnQuery(szK)
{
	var a = [],nC = 0, oTmp = {},aSql = [
		"SELECT concat_ws(',',a.AAC003,a.AAC002,a.AAE004,a.AAE005,a.AAE006) as xx from ac01 a where aac003='" + szK + "' or AAE005='" + szK + "'",
		"SELECT concat_ws(',',YHXM,DHHM,YHDZ) as xx from cdgrzfxx where yhxm='" + szK + "' or DHHM='" + szK + "'"
	],fnCbk = function()
	{
		nC++;
		if(aSql.length == nC)console.log(a.join("\n"));
	};

	for(var i = 0; i < aSql.length; i++)
	{
		fnDoQuery(aSql[i],szK,a,oTmp,fnCbk);
	}
	
}

/*
connection.query('INSERT INTO posts SET ?', {title: 'test'}, function (error, results, fields) {
  if (error) throw error;
  console.log(results.insertId);
});

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
*/

/*
connection.query(
		"SELECT * from info a limit 1,4"
		, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});
///////////////*/

/*
/usr/local/mysql-5.6.13-osx10.7-x86_64/data/dht
connection.query(
		"create database if not exists dht"
		, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});

connection.query(
		"create table hash_info(hash varchar(40), info varchar(100),primary key(hash))"
		, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});

connection.query(
		"create table peerIP(ip varchar(40), info varchar(100),primary key(ip))"
		, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});

*/

/*////////导入经纬度信息////////
var readline = require('readline'),fs = require('fs');
rl = readline.createInterface({
  input: fs.createReadStream('/Users/xiatian/Desktop/untitled folder/ip2location-lite-db5.csv/IP2LOCATION-LITE-DB5.CSV'),
  crlfDelay: Infinity
});

var x = 0,g_a = [];
rl.on('line', (line) => 
{
	x++;
	// if(3300000 > x)return;
	var a = String(line).replace(/(^\s*")|(\s*"\s*$)/gmi,'').split(/"\s*,\s*"/);
	if(8 != a.length)
	{
		console.log(line);
		throw line;
		return;
	}
	a[0] = parseInt(a[0]);
	a[1] = parseInt(a[1]);
	
	g_a.push(a);

	if(0 == x % 500 && 0 < g_a.length)
	{
		var sql = "INSERT INTO ipInfo(ips,ipe,ctj,sf,ctq,city,loc1,loc2) VALUES ?", aT = g_a;
		g_a=[];
		var i = 0;
		// try{
	  	connection.query(
			sql,[aT]
			,function (error, results, fields) {
		  if (error)
		  {if( error.sqlState == '23000'||error.sqlMessage.indexOf("Duplicate entry")); //throw error;
		   else console.log(error);
		   }
		});
	  	
  	}
});

rl.on('close',function()
{
	if(0 < g_a.length){
	var sql = "INSERT INTO ipInfo(ips,ipe,ctj,sf,ctq,city,loc1,loc2) VALUES ?", aT = g_a;
		g_a=[];
		var i = 0;
		// try{
	  	connection.query(
			sql,[aT]
			,function (error, results, fields) {
		  // if (error) throw error;
		  // console.log(error);
		  connection.end();
		});
	 }
});
///////////////*/

function fnGetMuIps(ips)
{
	var a = ips.split(/[;,]/), x = [],n;
	
	for(var i = 0; i < a.length; i++)
	{
		n = ipInt(a[i]).toInt();
		// x.push("(ips <= " + n + " and ipe >= " + n + ")");
		x.push("("+ n + " BETWEEN ips and ipe)");
	}
	return x.join(" or ");
}

function fnGetObj(o)
{
	var x = {};
	if(o)
	for(var k in o)
	{
		if(o[k])x[k]= o[k];
	}
	delete x.ips;delete x.ipe;
	return x;
}

function fnGetIpInfo(ip,fnCbk)
{
	var n = fnGetMuIps(ip);
	// console.log(n);
	connection.query(
	// city='Kunming'"//
		"select * from ipInfo where " + n
		, function (error, results, fields) {
	  if (error) throw error;
	  var o = fnGetObj(results[0]);
	  o.ip = ip;
	  o['ctj'] = (ci[o['ctj']] || '') + o['ctj'];
	  fnCbk(o);
	});
}
function fnEnd()
{
	connection.end();
}

if(program.key)
{
	fnQuery(program.key);
	fnEnd();
}
module.exports ={"fnGetIpInfo":fnGetIpInfo,"fnEnd":fnEnd,"fnQuery":fnQuery}
/*/
fnGetIpInfo('116.52.138.104',function(o)
{
	console.log(o);
	fnEnd()
});
//*/