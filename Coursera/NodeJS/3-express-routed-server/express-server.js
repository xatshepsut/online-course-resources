var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = '3000';


var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.all('/books', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  next();
});

app.get('/books', function(req, res, next) {
  res.end('Will send all books data...');
});

app.post('/books', function(req, res, next) {
  res.end('Will create book with name: ' + req.body.name + 
    ' and details: ' + req.body.details);
});

app.delete('/books', function(req, res, next) {
  res.end('Will delete all books...');
});

app.get('/books/:book_id', function(req, res, next) {
  res.end('Will send info about book with id: ' + req.params.book_id);
});


// app.use(function(req, res, next) {
  // console.log(req.headers);

  // res.writeHeader(200, { 'Content-Type': 'text/hmtl'});
  // res.end('<h1> Hello </h1>');
// });

var server = http.createServer(app);
server.listen(port, hostname, function() {
  console.log('Server is runnning...');
});
