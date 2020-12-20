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

//POST for login and logout to add to list, don't need GET requests.

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      passsword: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
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
      res.status(400)
        .json({ message: "Incorrect email or password.  Please try again." });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);


    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password.  Please try again." });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in." });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;