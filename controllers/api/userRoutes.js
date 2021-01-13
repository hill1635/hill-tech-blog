const router = require("express").Router();
// const bcrypt = require("bcrypt");
const { User } = require("../../models");

//Login stuff here

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({});

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: req.session.logged_in === true,
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/logout", async (req, res) => {
  try {
    // Doesn't work
    const userData = await User.findAll({
      where: req.session.logged_in === false,
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST for login and logout to add to list, don't need GET requests.

router.post("/", async (req, res) => {
  try {
    const newUser = req.body;

    // newUser.password = await bcrypt.hash(req.body.password, 10);

    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password.  Please try again." });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);


    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password.  Please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in." });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Doesn't work
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;