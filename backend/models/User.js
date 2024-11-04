const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt'); // for password hashing

const userSchema = new Schema({
    // User's Email - Unique and required
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email!"
      }
    },
  
    // User's Password - Hashed for security
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false // Don't retrieve this field by default
    },
  
    // First Name
    firstName: {
      type: String,
      required: true,
      trim: true
    },
  
    // Last Name
    lastName: {
      type: String, 
      required: true,
      trim: true
    },

    // Bio - Short description or bio about the user
    bio: {
        type: String,
        trim: true,
        maxlength: 280, // Assuming a character limit like Twitter/X
    },
    
    // Starred/Liked Count - Number of likes the user('s profile) has received
    likesCount: {
        type: Number,
        default: 0,
        min: 0
    },
    
    // Portfolio URLs - Links to user's professional or personal projects/sites
    // Uses an array of strings to allow multiple URLs
    portfolioURLs: [{
        type: String,
        validate: {
          validator: function(v) {
            return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
          },
          message: "Please enter a valid URL!"
        },
        trim: true,
        maxlength: 2000 // A reasonable upper limit for a URL
    }],

    /* add skills */
  
});
  

// Set up pre-save middleware to create password (sign up functionality)
userSchema.pre('save', async function(next) {
    /* will automatically hash PW before adding it into the DB */
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

  next();
});

// Method for comparing the incoming password with the hashed password (sign in functionality)
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
