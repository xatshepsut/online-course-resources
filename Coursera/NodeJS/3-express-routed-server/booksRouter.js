var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var booksRouter = express.Router();
booksRouter.use(bodyParser.json());

booksRouter.route('/')
.all(function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  next();
})
.get(function(req, res, next) {
  res.write('Hey there, this will return list of all books');
  res.end('Books router is handling the request');
});

module.exports = booksRouter;
