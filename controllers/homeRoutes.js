const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    console.log("req.session: ", req.session);
    const postData = await Post.findAll({
      order: [["datePosted", "DESC"]],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    if (req.session.logged_in === true) {
      res.render("homepage", { posts });
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      order: [["datePosted", "DESC"]],
    });

    const myPosts = postData.map((project) => project.get({ plain: true }));

    if (req.session.logged_in === true) {
      res.render("dashboard", { myPosts });
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
