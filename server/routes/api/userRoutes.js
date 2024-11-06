// Import Express Router
const router = require('express').Router();

// Import authentication handler
const auth = require('../middlewares/authMiddleware');

// Import route handler logic from controllers
const { login } = require('../controllers/authController');
const { 
    createUser, 
    getUser, 
    getAllUsers,
    updateUser, 
    deleteUser, 
    addFriend 
} = require('../../controllers/userController');

// GET, POST, PUT, DELETE routes for /api/users endpoint
router.route('/').get(auth, getAllUsers).post(createUser);
router.route('/:userId').get(auth, getUser).put(auth, updateUser).delete(auth, deleteUser);

// Friend routes
router.route('/:userId/friends/:friendId').post(addFriend);

// Auth routes
router.route('/login').post(login);

module.exports = router;