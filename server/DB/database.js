const mongoose = require('mongoose');

const connection_url = 'mongodb+srv://MG84:RK18HK@cluster0.vjyk9.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
    console.log("Database connect ho gaya, bolo radhekrishna !!!")
    return mongoose.connect(connection_url);
}

module.exports = connectDB;
