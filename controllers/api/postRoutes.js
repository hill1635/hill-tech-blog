//PUT, DELETE, POST routes for adding, updating, and deleting posts
const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({});
    console.log("postData: ", postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create new post
router.post("/", async (req, res) => {
  try {
    var newPost = req.body;
    newPost.user_id = req.session.user_id;
    console.log("newPost: ", newPost);
    const postData = await Post.create(newPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
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

router.delete("/:id", async (req, res) => {
  try {
    console.log("req: ", req);
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
