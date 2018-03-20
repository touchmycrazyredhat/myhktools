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
/*
connection.query(
		"SELECT * from info a limit 1,4"
		, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});
///////////////*/
if(0 < a.length)
	fnQuery(a[0]);
connection.end();