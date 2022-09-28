const router = require("express").Router();
let User = require("../models/Users");

router.route("/add").post((req, res) => {
  const {
    username,
    password,
    fullName,
    email,
    mobileNo,
    country,
    dateOfBirth,
    nic,
  } = req.body;

  const user = new User({
    username,
    password,
    fullName,
    email,
    mobileNo,
    country,
    dateOfBirth,
    nic,
  });

  user
    .save()
    .then(() => {
      res.json("Account created!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:username").get((req, res) => {
  const username = req.params.username;

  User.findOne({ username })
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:username").put(async (req, res) => {
  const updates = req.body;

  let username = req.params.username;

  console.log(updates);

  await User.findOneAndUpdate({ username }, updates)
    .then(() => {
      res.json("Updated succesfully!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete/:username").delete(async (req, res) => {
  let username = req.params.username;

  await User.findOneAndDelete({ username })
    .then(() => {
      res.json("Unregistered successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/changepwd/:username").put(async (req, res) => {
  let username = req.params.username;

  const newpwd = req.body;

  console.log(req.body);

  await User.findOneAndUpdate({ username }, newpwd)
    .then(() => {
      res.json("Password updated!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/check/:username").get(async (req, res) => {
  const username = req.params.username;
  await User.exists({ username })
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
