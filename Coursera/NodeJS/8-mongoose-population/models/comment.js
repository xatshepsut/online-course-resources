var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        max: 10,
        min: 1,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true });


var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
module.exports.schema = commentSchema;
