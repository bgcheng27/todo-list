const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    text: String,
    completed: Boolean,
    userId: mongoose.Types.ObjectId
})

module.exports = mongoose.model("Item", itemSchema);