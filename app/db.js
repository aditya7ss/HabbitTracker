const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.set("strictQuery", false);
    const mongodbUri = process.env.MONGODB_URI; // Get the MongoDB URI from the environment variables
    mongoose.connect(mongodbUri, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB => Habit-Tracker"))
        .catch(error => console.log("Not Connect MongoDB", error));
}
