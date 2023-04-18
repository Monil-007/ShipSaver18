const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Naam: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }

});

const usr = mongoose.model('Usr', UserSchema);

module.exports = usr;
