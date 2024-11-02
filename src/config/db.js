// Require dotenv at the top of your main file
// require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Log to verify if the environment variable is loaded
        // console.log("MongoDB URL:", process.env.MONGODB_URL);

        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
