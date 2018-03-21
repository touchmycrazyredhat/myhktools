/*
{ name: 'Beauty.and.the.Beast.2017.BDRip.1.46Gb.Dub.MegaPeer.avi',
  size: 1567037440,
  files: 
   [ { size: 1567037440,
       path: 'Beauty.and.the.Beast.2017.BDRip.1.46Gb.Dub.MegaPeer.avi' } ],
  pieces: <Buffer f5 24 e6 8c 82 d5 ac 37 66 4a 58 87 e8 1e af 59 03 59 39 26 8d 87 94 8c ea 60 eb b7 83 ae ac 79 2f 52 a6 b3 99 a3 17 25 cc 32 f6 2e 4a f2 6a 73 d7 be ... >,
  address: '46.241.1.141',
  port: 64255,
  infohash: 'aa90f027d5d0c0063df99c2c9ec8a168b727e12b',
  magnet: 'magnet:?xt=urn:btih:aa90f027d5d0c0063df99c2c9ec8a168b727e12b' }
*/
var p2pspider = require('p2pspider'),fs = require('fs');
p2pspider(function(data){
    delete data.pieces;
    var ss = '';
    fs.appendFileSync("myMagnetsInfo.txt",(ss = JSON.stringify(data)) + "\n\n");
    console.log(ss); //获取到的信息 
});