var fs = require('fs');
var crypto = require('crypto');
var inspect = require('util').inspect;

var buffersEqual = require('buffer-equal-constant-time');
var ssh2 = require('ssh2');
var utils = ssh2.utils;

var pubKey = {fulltype: "", public:"", publicOrig:""};//utils.genPublicKey(utils.parseKey(fs.readFileSync('user.pub')));

new ssh2.Server({
  hostKeys: []// fs.readFileSync('host.key')
}, function(client) {
  console.log('Client connected!');

  client.on('authentication', function(ctx) {
    pubKey.public = ctx.key.data;
    pubKey.fulltype = ctx.key.algo;
    pubKey.publicOrig =  ctx.signature;
    if (ctx.method === 'password'
        // Note: Don't do this in production code, see
        // https://www.brendanlong.com/timing-attacks-and-usernames.html
        // In node v6.0.0+, you can use `crypto.timingSafeEqual()` to safely
        // compare two values.
        && ctx.username === 'sldfjlsjf'
        && ctx.password === 'lsjdglsfj2342')
      ctx.accept();
    else if (ctx.method === 'publickey'
             && ctx.key.algo === pubKey.fulltype
             && buffersEqual(ctx.key.data, pubKey.public)) 
    {
      if (ctx.signature) {
        var verifier = crypto.createVerify(ctx.sigAlgo);
        verifier.update(ctx.blob);
        if (verifier.verify(pubKey.publicOrig, ctx.signature))
          ctx.accept();
        else
          ctx.reject();
      } else {
        // if no signature present, that means the client is just checking
        // the validity of the given public key
        ctx.accept();
      }
    } else
      ctx.reject();
  }).on('ready', function() {
    console.log('Client authenticated!');
    client.on('session', function(accept, reject) {
      var session = accept();
      session.once('exec', function(accept, reject, info)
      {
        console.log('Client wants to execute: ' + inspect(info.command));
        var stream = accept();
        stream.stderr.write('Oh no, the dreaded errors!\n');
        stream.write('Just kidding about the errors!\n');
        stream.exit(0);
        stream.end();
      });
    });
  }).on('end', function() 
  {
    console.log('Client disconnected');
  });
}).listen(0, '127.0.0.1', function() {
  console.log('Listening on port ' + this.address().port);
});