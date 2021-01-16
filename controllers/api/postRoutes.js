//PUT, DELETE, POST routes for adding, updating, and deleting posts
const router = require("express").Router();
const { Post } = require("../../models");

//Get user by id to display posts on dashboard
router.post("/:id", async (req, res) => {
  try {
    const newPost = req.body;
    const postData = await Post.create(newPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update posts on homepage
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = req.body;
    const postData = await Post.update(updatedPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;