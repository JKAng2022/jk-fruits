//? Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Fruit = require("./models/fruits");
const fruitsController = require("./controllers/fruits");

//? Config
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI

mongoose.connect("mongodb://localhost:27017/basiccrud");
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//? middleware
app.use(express.urlencoded({ extended: false }));
app.use("/fruits", fruitsController);
// app.use("/simon", fruitsController);

app.get("/", (req, res) => {
    res.send("Hello World");
})

//? listener
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//test repush