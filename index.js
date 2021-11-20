const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
