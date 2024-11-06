const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

/* Schema embedded in User to represent each Profile's comments */
const commentSchema = new Schema({
    content: String,
    author: { 
        // Should be the author's User ID
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

module.exports = commentSchema;