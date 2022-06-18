const express = require("express");
const video = require("../models/Video");
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
router.get("/", async (req, res) => {
  const Video = await video.find();
  res.render("index", { videos: Video });
});
router.get("/:id", (req, res, next) => {
  Promise.all([video.findById(req.params.id), (VideoAll = video.find())])
    .then(([Video, VideoAll]) => {
      res.render("index", { videoSelected: Video, videos: VideoAll });
    })
    .catch(next);
});
module.exports = router;
