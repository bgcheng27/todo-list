const express = require("express");
const mongoose = require("mongoose");
const homeRouter = require("./routes/home");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL)

const app = express()
const PORT = 3000;

app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));