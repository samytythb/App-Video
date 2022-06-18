const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/index");
const video = require("./routes/video");
mongoose.connect("mongodb://localhost:27017/MyProject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded({ extend: true }));
app.use(express.static("public"));
app.set("view engine", "pug");
app.use("/", video);
app.use("/", router);
app.listen(3000, () => {
  console.log("listening on port 3000");
});
