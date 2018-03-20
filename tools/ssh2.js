var socks = require('socksv5');
var Client = require('ssh2').Client,
    port = 29156,ip = 127.0.0.1,user = 'root',
    pport = 8080;

process.setMaxListeners(0);
require('events').EventEmitter.prototype._maxListeners = 0;
require('events').EventEmitter.defaultMaxListeners = 0
process.env.NODE_ENV = "production";
// 读取命令行参数
if(process.argv)
{
  var a = process.argv.splice(2);
  if(0 < a.length)ip = a[0];
  if(1 < a.length)port = a[1];
  if(2 < a.length)user = a[2];
  if(3 < a.length)pass = a[3];
  if(4 < a.length)pport = a[4];
}

var ssh_config = 
{
  compress:true,
  keepaliveCountMax:3,
  host: ip,
  port: port,
  username: user,
  password: pass
};

socks.createServer(function(info, accept, deny)
{
  // NOTE: you could just use one ssh2 client connection for all forwards, but
  // you could run into server-imposed limits if you have too many forwards open
  // at any given time
  var conn = new Client();
  conn.on('ready', function() {
    conn.forwardOut(info.srcAddr,
                    info.srcPort,
                    info.dstAddr,
                    info.dstPort,
                    function(err, stream) 
                    {
                      if (err) 
                      {
                        conn.end();
                        return deny();
                      }

                      var clientSocket;
                      if (clientSocket = accept(true))
                      {
                        stream.pipe(clientSocket).pipe(stream).on('close', function() {
                          conn.end();
                        });
                      } else
                        conn.end();
                    });
  }).on('error', function(err) {
    deny();
  }).connect(ssh_config);
}).listen(pport, '0.0.0.0', function() 
{
  console.log('SOCKSv5 proxy server started on port ' + pport);
}).useAuth(socks.auth.None());
