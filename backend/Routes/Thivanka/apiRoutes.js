const router = require("express").Router();
const Cart = require("../../Models/Thivanka/cart");

// client's items save in the cart
router.route("/cart/item/save").post(async (req, res) => {
  const itemDetails = req.body;
  const items = await Cart.findOne({ email: { $eq: itemDetails.email } });
  if (!items) {
    const cart = new Cart(itemDetails);
    await cart
      .save()
      .then((data) => {
        res.json({ status: true, data });
      })
      .catch((err) => {
        res.json({ status: false, err });
      });
  } else {
    await Cart.findOneAndUpdate(
      { email: itemDetails.email },
      { $push: { items: itemDetails.items } }
    )
      .then((data) => {
        res.json({ status: true, data });
      })
      .catch((err) => {
        res.json({ status: false, err });
      });
  }
});

// client's items get from the cart
router.route("/cart/item/:email").get(async (req, res) => {
  const email = req.params.email;
    Cart.findOne({ email: { $eq: email } })
    .then((data) => {
        if (!data) {
          res.json(data);
        } else {
          res.json(data.items);
        }
    })
        .catch((err) => {
        res.json({ status: false, err });
    })
});

// client's items remove from the cart
router.route("/cart/item/remove/:email/:id").delete(async (req, res) => {
  const email = req.params.email;
  const id = req.params.id;
  Cart.update({ email: email }, { $pull: { items: { _id: id } } })
    .then((data) => {
      res.json({ status: data.acknowledged });
    })
    .catch((err) => {
      res.json({ status: false, err });
    });
});

// client's items remove from the cart
router.route("/cart/item/clear/:email").delete(async (req, res) => {
  const email = req.params.email;
  Cart.deleteOne({ email: email })
    .then((data) => {
      res.json({ status: data.acknowledged });
    })
    .catch((err) => {
      res.json({ status: false, err });
    });
});


module.exports = router;
