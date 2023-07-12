const mongoose = require('mongoose');
require('dotenv').config();

const connection_url = process.env.DB_URL;
console.log(connection_url)
//const connection_url = 'mongodb+srv://MG84:RK18HK@cluster0.vjyk9.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
    console.log("Database connect ho gaya, bolo radhekrishna !!!")
    return mongoose.connect(connection_url);
}

module.exports = connectDB;
