const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI).
        then(() => console.log('Connected to MongoDB'))
        .catch(err => console.log('Could not connect to MongoDB:', err));
};

module.exports = connectDB;
