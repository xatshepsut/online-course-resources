var mongoose = require('mongoose');
var Currency = require('mongoose-currency');
var Comment = require('./comment');

var bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true
    },
    comments: [Comment.schema]
}, { 
    timestamps: true,
    usePushEach: true
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
