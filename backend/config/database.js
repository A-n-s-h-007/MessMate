const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected Successfully`);
    } 
    catch (error) {
        console.error(`MongoDB Connection Failed`);
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;