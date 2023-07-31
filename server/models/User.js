const mongoose = require('mongoose');
const Item = require('./Item');

const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    list: Array
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;