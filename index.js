import express from "express";
import morgan from "morgan";

const app = express();
import clinic from "./src/routes/clinics.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
app.use(morgan("dev"));

app.use("/clinics", clinic);
app.set("view engine", "ejs");

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default server;
