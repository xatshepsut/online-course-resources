var express = require('express');
var mongoose = require('mongoose');
var Verify = require('./verify');

var Book = require('../models/book');
var booksRouter = express.Router();


booksRouter.route('/')
.get(Verify.verifyOrdinaryUser, function(req, res, next) {
	Book.find({}, function(err, books) {
		if (err) throw err;
		res.json(books);
	});
})
.post(Verify.verifyOrdinaryUser, function(req, res, next) {
	Book.create(req.body, function(err, created_book) {
		if (err) throw err;

		console.log('Succesfully created book: ' + created_book);

		res.json(created_book);
		res.end('Succesfully created book with id: ' + created_book._id);
	});
})
.delete(Verify.verifyOrdinaryUser, function(req, res, next) {
	Book.remove({}, function(err, result) {
		if (err) throw err;
		res.writeHead('Succesfully deleted all books');
		res.json(result);
	});
});


booksRouter.route('/:bookId')
.get(function(req, res, next) {
	Book.findById(req.params.bookId, function(err, book) {
		if (err) throw err;

		res.json(book);
	});
});


module.exports = booksRouter;

