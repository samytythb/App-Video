const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/index");
const video = require("./routes/video");
mongoose.connect(
  process.env.DB_MONGODB,
  (req, res) => {
    if (req) {
      return console.log("Fail");
    } else {
      return console.log("Success");
    }
  },
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(express.urlencoded({ extend: true }));
app.use(express.static("public"));
app.set("view engine", "pug");
app.use("/", video);
app.use("/", router);
app.listen(3000, () => {
  console.log("listening on port 3000");
});
