const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/item");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL)

const app = express();
const PORT = 3000;

app.use("/item", itemRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));