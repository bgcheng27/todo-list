const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    list: Array
});

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", userSchema);
