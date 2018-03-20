/*
magnet:?xt=urn:btih:abcdef...&tr=http://example.com/announce&tr=udp://example.net:1234/announce&tr=...

*/
var a = process.argv.splice(2);

var  magnet_uri = require('magnet-uri');
var o = magnet_uri.decode(a[0]);
/*
console.log(o)
console.log(o.infoHash)
*/

var WebTorrent = require('webtorrent');
var client = new WebTorrent();
client.add(a[0], function (torrent) 
{
	console.log("种子信息解析");
	console.log(torrent);
    torrent.files.forEach(function (file) 
    {
    	console.log(file);
    })
});

// node decodeMagnet.js "magnet:?xt=urn:btih:85F39F1D94917D61277725E7DA85D8177A5C12EB&dn=leaks"