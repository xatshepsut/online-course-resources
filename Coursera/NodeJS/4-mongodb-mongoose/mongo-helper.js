var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback) {
    var col = db.collection(col);
    col.insertOne(document, function(err, result) {
        assert(err, null);
        console.log('succesfully inserted document...');
        callback(result);
    });
};

exports.deleteDocument = function(db, document, collection, callback) {
    var col = db.collection(col);
    col.deleteOne(document, function(err, result) {
        assert(err, null);
        console.log('succesfully deleted document...');
        callback(result);
    });
};

exports.getDocuments = function(db, collection) {
    db.collection(collection).find({}).toArray(function(err, docs) {
        assert(err, null);
        console.log('found documents from collection: \n' + docs);
        callback(docs);
    });
};
