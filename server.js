const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/index");
const video = require("./routes/video");
mongoose.connect(
  "mongodb+srv://samytythb:leduc2821@cluster0.9gvnvqw.mongodb.net/MyProject?retryWrites=true&w=majority",
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
