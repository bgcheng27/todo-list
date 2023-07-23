const express = require("express");
const pagesRouter = require("./routes/pages");

const app = express()
const PORT = 3000;

app.use("/", pagesRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));