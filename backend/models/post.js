const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    requires: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

mongoose.model("Post", postSchema);
