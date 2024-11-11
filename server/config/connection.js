require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/devdeploy-db');

module.exports = mongoose.connection;