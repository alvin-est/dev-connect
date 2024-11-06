const { User } = require('../models');

// Login functionality
async function login(req, res) {
    try {
        // Destructure necessary info from request body
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email }).select('+password'); // Select PW field - which is not retrieved by default

        // Error handling if user is not found
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed. User not found.'});
        }

        // Check if password is correct 
        const isPasswordValid = await user.isCorrectPassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Authentication failed. Incorrect password.'});
        }

        // Generate the JSON Web Token
        const token = user.generateAuthToken();

        // If successful, send back JWT token in response
        res.status(200).json({ token, userId: user._id });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error: ', error: error.message });
    }
}

module.exports = { login };

/* Security Notes: 
 - Use HTTPS to prevent token interception.
 - Never store sensitive data in the JWT unless it's encrypted.
 - Consider using refresh tokens for long-term sessions.
*/