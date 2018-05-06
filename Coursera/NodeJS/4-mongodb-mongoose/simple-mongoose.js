var mongoose = require('mongoose');
var assert = require('assert');

var Book = require('./models/book');

var url = 'mongodb://localhost:27017/confussion';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('connected to server...');

    var newBook = Book({
        name: 'random book',
        author: 'someone',
        price: '$23,6',
        comments: [
            {
                rating: 9,
                comment: 'nice book'
            }
        ]
    });
    newBook.save(function(err) {
        if (err) throw err;
        console.log('succesfully created book...');

        Book.find({}).exec(function(err, books) {
            if (err) throw err;
            console.log(books);
        });
    });

    Book.create({
        name: 'Design Patterns',
        author: 'someone',
        price: '$54,00'
    }, function(err, book) {
        if (err) throw err;

        setTimeout(function() {
            // findByIdAndUpdate only creates query
           Book.findByIdAndUpdate(book._id, {$set: {author: 'second someone'}}, {new: true})
           .exec(function(err, book) {
                if (err) throw err;
                console.log(book);

                book.comments.push({
                    rating: 8,
                    comment: 'could be better'
                });
                book.save(function(err, book) {
                    console.log('updated book: ' + book);
                    db.collection('books').drop(function(err) {
                        db.close();
                    });
                });
           });
        }, 3000);
    });
});

