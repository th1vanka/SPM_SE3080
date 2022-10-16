//to get the database model
const mongoose = require("mongoose");

const rating = new mongoose.Schema({
  Name: String,
  Date: String,
  Review: String,
  Comment: String,
});

//columns, properties of the schema
const itemSchema = new mongoose.Schema({
  image: {
    type: String
  },

  itemNo: {
    type: Number
  },

  itemName: {
    type: String
  },
  quantity: {
    type: String
  },
  
  status: {
    type: String,
  },

  price: {
    type: String
  },

  reviews: {
    type: Number
  },
  
  category: {
    type: String
  },

  description: {
    type: String
  },

  sellerID: {
    type: String
  },

  sellerName: {
    type: String
  },

  ratings: [rating]
});

module.exports = mongoose.model("Items", itemSchema);
