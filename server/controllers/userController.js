const { User } = require('../../models');

// Create a new user
async function createUser(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//  Get a user info by ID
async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id).populate('friends', 'name email');
        if (!user) throw new Error('User not found');
        res.json(user);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get all users
async function getAllUsers(req, res) {
    try {
        const users = await User.find().populate('friends', 'name email');
        res.json(users);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a user by ID
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a user by ID
async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a friend
async function addFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $addToSet: { friends: req.body.friendId } }, { new: true });
        res.json(user);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Remove a friend
async function removeFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } }, { new: true });
        res.json(user);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
}