const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

router.get("/allPosts", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create-post", (req, res) => {
  console.log(req.body)
  const { title, body, image } = req.body;

  if (!title || !body || !image) {
     res.status(422).json({ message: "Please add all the fields" });
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
      res.status(400).json({ message: err });

    });
});

module.exports = router;
