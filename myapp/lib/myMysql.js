var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
}),a = process.argv.splice(2);

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
if(0 < a.length)
	fnQuery(a[0]);
connection.end();