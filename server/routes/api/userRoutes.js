const router = require('express').Router();

// Import route handler logic from controllers
const { 
    createUser, 
    getUser, 
    getAllUsers,
    updateUser, 
    deleteUser, 
    addFriend 
} = require('../../controllers/userController');

// GET, POST, PUT, DELETE routes for /api/users endpoint
router.route('/').get(getAllUsers).post(createUser);
router.route('/:user_id').get(getUser).put(updateUser).delete(deleteUser);

// Friend routes
router.route('/:user_id/friends/:friend_id').post(addFriend);

module.exports = router;