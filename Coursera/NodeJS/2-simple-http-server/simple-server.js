var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = '3200';

var server = http.createServer(function(req, res) {
  console.log('request url:' + req.url);
  console.log('request method:' + req.method);

  if (req.method == 'GET') {
    var fileUrl;

    if (req.url == '/') {
      fileUrl = '/index.html';
    } else {
      fileUrl = req.url;
    }

    var filePath = path.resolve('../public' + fileUrl);
    console.log(filePath);
    var fileExt = path.extname(filePath);

    if (fileExt == '.html') {
      fs.exists(filePath, function(exists) {
        if (exists) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          fs.createReadStream(filePath).pipe(res);
          return;
        } else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.end('<html><body><h1>Error 404: ' + fileUrl + ' does not exists</h1></body></html>');
        }
      });
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<html><body><h1>Error 404: ' + fileUrl + ' does not have HTML extension</h1></body></html>');
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Error 404: ' + req.method + ' is not supported</h1></body></html>');
  }
});

server.listen(port, hostname, function() {
  console.log('running server at ' + hostname + ':' + port);
});
