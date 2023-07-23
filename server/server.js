const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/item");
require("dotenv").config();
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL)

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"]
}))

app.use("/item", itemRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));