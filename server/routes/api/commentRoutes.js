// Import Express Router
const router = require('express').Router();

// Import authentication handler
const auth = require('../middlewares/authMiddleware');

// Import route handler logic from controllers
const { 
    addComment, 
    removeComment 
} = require('../../controllers/commentController');

// POST and DELETE routes for /api/comments endpoint
router.route('/:userId').post(auth, addComment)
router.route('/:commentId').delete(auth, removeComment);

module.exports = router;