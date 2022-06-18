const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const schema = new mongoose.Schema(
  {
    nameVideo: { type: "string", required: "true" },
    videoId: { type: "String", required: "true" },
    adder: { type: "string", required: "true" },
    des: { type: "string" },
  },
  {
    timestamp: true,
  }
);
schema.plugin(mongooseDelete, { deleteAt: true, overrideMethods: "all" });

module.exports = new mongoose.model("Video", schema);
