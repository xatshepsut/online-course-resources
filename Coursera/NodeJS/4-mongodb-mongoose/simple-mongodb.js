var mongodb = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/confussion';

mongodb.connect(url, function(err, db) {
    assert.equal(err, null);
    console.log('connected to DB...');

    var booksCollection = db.collection('books');

    booksCollection.insertOne({name: 'Blob', author: 'git'}, function(err, res) {
        assert.equal(err, null);
        console.log('Result of insertion: ' + res.ops);

        booksCollection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log(docs);

        db.close();
    });
    });
});