const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    gender: {type: String},
    country: {type: String}
});


module.exports = mongoose.model('users', UserSchema);