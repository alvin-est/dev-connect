const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const commentSchema = require('./Comment');

const UserSchema = new Schema({
  name: [{
    /* Array to accomodate multiple names */
    type: String,
    trim: true,
    required: true,
  }],
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    /* Should be hashed */
    type: String,
    required: true,
    minlength: 8,
    select: false // Don't retrieve this field by default
  },
  bio: { type: String, trim: true, maxlength: 280}, // Assumes char limit like Twitter/X
  avatar: String, // URL to user's profile picture
  skills: [{ type: String, trim: true }], // Multiple skills can be in the array
  portfolio: [ { url: String, title: String } ], // Link to portfolio projects + title
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Reference to user's friend IDs
  comments: [commentSchema] // Subdocument nested in User
},
{
  toJSON: {
    virtuals: true,
    getters: true
  }
});

/* Virtual property not needed in database */
UserSchema.virtual('friendCount').get(function() { return this.friends.length; }); // get friend count

/* Middleware to hash password before saving to DB */
UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
      const saltRounds = 10; this.password = await bcrypt.hash(this.password, saltRounds);
  }
next();
});

/* Method to validate user password */
UserSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;