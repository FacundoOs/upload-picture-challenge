const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

router.get("/allPosts", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});

router.post("/create-post", (req, res) => {
  const { title, body, image } = req.body;

  if (!title || !body || !image) {
    res.status(400).send({ message: "Please add all the fields" });
  }

  const post = new Post({
    title,
    body,
    image,
  });
  post
    .save()
    .then((result) => {
      res.status(201).json({ post: result, message: "Post created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Try again" });
    });
});

module.exports = router;
