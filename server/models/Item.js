const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    text: String
})

module.exports = mongoose.model("Item", itemSchema);