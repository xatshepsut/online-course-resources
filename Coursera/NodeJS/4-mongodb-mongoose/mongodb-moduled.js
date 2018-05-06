var mongoClient = require('mongodb').MongoClient;
var mongoHelper = require('./mongo-helper');

var url = 'mongodb://localhost:27017/confussion';

mongoClient.connect(url, function(err, db) {
    assert(err, null);
    console.log('connected to DB with URL: ' + url);

    mongoHelper.getDocuments(db, 'books', function(docs) {
        console.log('helper returned following docs: ' + docs);
    });
});
