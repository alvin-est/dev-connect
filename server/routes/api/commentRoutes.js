const router = require('express').Router();

// Import route handler logic from controllers
const { 
    addComment, 
    removeComment 
} = require('../../controllers/commentController');

// POST and DELETE routes for /api/comments endpoint
router.route('/:user_id').post(addComment)
router.route('/:comment_id').delete(removeComment);

module.exports = router;