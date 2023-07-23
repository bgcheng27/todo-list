const express = require("express");
const mongoose = require("mongoose");
const homeRouter = require("./routes/home");

mongoose.connect("mongodb+srv://bgcheng27:tQZ8IoUQfZKFnraI@cluster0.veetqu8.mongodb.net/todo_list?retryWrites=true&w=majority")

const app = express()
const PORT = 3000;

app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));