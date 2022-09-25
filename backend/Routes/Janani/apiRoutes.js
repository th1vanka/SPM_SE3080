const router = require("express").Router();
const User = require("../../Models/Janani/user");

//hotel registration routes
router.route("/data/save").post(async (req, res) => {
  const { name, email, country, password } = req.body;
  const user = User.find({ email: { $eq: email } });
  if (!user) {
    res.json({ status: false, message: "This user is alraedy exist!" });
  } else {
    const details = new User({
      username: "1030",
      name: name,
      mobile: "0000000000",
      bdate: "0",
      email: email,
      country: country,
      password: password,
    });
    await details
      .save()
      .then(() => {
        res.json({
          status: true,
          message: "Registration Done!",
        });
      })
      .catch(() => {
        res.json({
          status: false,
          message: "Something went wrong!",
        });
      });
  }
});

router.route("/login/:email/:password").get((req, res) => {
  let email = req.params.email;
  let pass = req.params.password;
  User.findOne({
    $and: [{ email: { $eq: email } }, { password: { $eq: pass } }],
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});


router.route("/details/update/:username").put(async (req, res) => {
  const username = req.params.username;
  const data = req.body.data
  
  User.updateOne({ username: username }, { $push: { data } })
    .then((data) => {
      res.json({ status: data.acknowledged });
    })
    .catch((err) => {
      res.json({ status: false, err });
    });
});

router.route("/details/remove/:email").get(async (req, res) => {
  const email = req.params.email;
  User.findOneAndDelete({ email: { $eq: email } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
