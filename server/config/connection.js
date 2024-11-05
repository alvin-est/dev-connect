require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect("mongodb+srv://cameronbeattie97:ljeg2xVJcaGsko7L@cluster0.0w6qh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = mongoose.connection;