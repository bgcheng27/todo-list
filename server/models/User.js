const mongoose = require('mongoose');
const Item = require('./Item');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    list: Array
})

module.exports = mongoose.model("User", userSchema)