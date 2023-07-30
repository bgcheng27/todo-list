const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./api/item");
const userRouter = require("./api/user");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect(process.env.DATABASE_URL);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));

app.use("/items", itemRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));