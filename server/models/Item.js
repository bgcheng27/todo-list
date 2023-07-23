const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    text: String,
    completed: Boolean,
})

module.exports = mongoose.model("Item", itemSchema);