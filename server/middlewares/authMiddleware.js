const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {
    // Retrieve token from request header
    const token = req.header('x-auth-token');
    if(!token) { return res.status(401).send('Access denied. Authentication token does not exist.'); }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add user from payload
        next();
    }
    catch (error) {
        res.status(400).send('Invalid token.');
    }
}