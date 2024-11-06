const User = require('../models/userModel');

// Add a comment
async function addComment(req, res) {
    try {
        const user = await User.findById(req.params.id);
        user.comments.push(req.body);
        await user.save();
        res.json(user);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Remove a comment
async function removeComment(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, 
            { $pull: { comments: { _id: req.params.commentId } } }, 
            { new: true });
        res.json(user);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    addComment,
    removeComment
}