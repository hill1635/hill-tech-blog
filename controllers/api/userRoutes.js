const router = require("express").Router();
const { User } = require("../../models");

//Login stuff here

router.get("/api/users/login", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        loggedIn: true,
      },
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/users/logout", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        loggedIn: false,
      },
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;