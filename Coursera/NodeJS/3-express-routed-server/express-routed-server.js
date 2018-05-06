var express = require('express');
var morgan = require('morgan');
var booksRouter = require('./booksRouter.js');

var hostname = 'localhost';
var port = '3000';

var app = express();
app.use(morgan('dev'));

app.use('/books', booksRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
  console.log('running server on ' + hostname);
});
