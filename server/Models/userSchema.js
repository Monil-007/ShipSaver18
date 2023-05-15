const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }

});

const usr = mongoose.model('Usr', UserSchema);

module.exports = usr;
