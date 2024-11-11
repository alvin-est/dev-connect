const jwt = require('jsonwebtoken');
require('dotenv').config();
// Set token secret and expiration date
const secret = process.env.JWT_SECRET || "super-secret-key";
const expiration = '2h';

module.exports = {
  // Function for our authenticated routes
  authMiddleware: function ({ req }) {
    // Extract token from headers or context: accomodates different token transmission methods in GraphQL
    let token = req.headers.authorization || req.body.token || req.query.token;

    // If token starts with 'Bearer', extract token
    if (token && token.startsWith('Bearer ')) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return { user: null }; // GraphQL resolver will handle this as not authenticated
    }

    try {
      // Verify token and get user data
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      
      return { user: data };
    } 
    catch(err) {
      console.error('Invalid token:', err);
      return { user: null }; 
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
