const express = require("express");
const router = express.Router();
const video = require("../models/Video");
const mongoose = require("mongoose");
/// testttt
router
  .get("/add", (req, res, next) => {
    res.render("./video/add");
  })
  .post("/add", (req, res, next) => {
    const newvideo = req.body;
    console.log(newvideo);
    const newVideo = new video(newvideo);
    newVideo
      .save()
      .then(() => {
        let message = "Successfully";
        res.render("./video/add", { message: message });
      })
      .catch(next);
  })
  .get("/list", async (req, res, next) => {
    const listVideo = await video.find();
    res.render("./video/list", { videos: listVideo });
  })
  .get("/edit/:id", async (req, res, next) => {
    console.log(req.params.id);
    const Video = await video.findById(req.params.id);
    res.render("./video/edit", { video: Video });
  })
  .post("/edit/:id", (req, res, next) => {
    // video.deleteOne({ _id: req.params.id });
    // const newvideo = req.body;
    // console.log(newvideo);
    // const newVideo = new video(newvideo);
    // newVideo
    //   .save()
    //   .then(() => {
    //     let message = "Successfully";
    //     res.redirect("/list/");
    //   })
    //   .catch(next);
    video
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/list");
      })
      .catch(next);
  })
  .get("/delete/:id", (req, res, next) => {
    video
      .delete({ _id: req.params.id })
      .then(() => {
        res.redirect("/list");
      })
      .catch(next);
  })
  .get("/trash", (req, res, next) => {
    video
      .findDeleted()
      .then((video) => {
        res.render("./video/trash", { videos: video });
      })
      .catch(next);
  })
  .get("/restore/:id", (req, res, next) => {
    video
      .restore({ _id: req.params.id })
      .then(() => {
        res.redirect("/trash");
      })
      .catch(next);
  })
  .get("/forcedelete/:id", (req, res, next) => {
    video
      .deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("/trash");
      })
      .catch(next);
  });
module.exports = router;
