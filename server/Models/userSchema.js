const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    prodlink: {
        type: String,
        required: false
    },
    delcharge: {
        type: String,
        required: false
    },
    accrange: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: false
    }

});

const usr = mongoose.model('Usr', UserSchema);

module.exports = usr;
