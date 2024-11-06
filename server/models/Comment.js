const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./User');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    content: String,
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    timestamp: { 
        type: Date, 
        default: Date.now,
        get: timeStamp => dateFormat(timeStamp)
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
});

const User = mongoose.model('Comment', commentSchema);

module.exports = User;