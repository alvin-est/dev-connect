const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    // Primary Key - Automatically generated by Mongoose
    _id: Schema.Types.ObjectId,
  
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000 // Adjust based on your requirements
    },

    // author
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // profile - Reference to a Profile document
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // Timestamp for when the comment was created
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('Comment', commentSchema);

module.exports = User;
