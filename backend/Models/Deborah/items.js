//to get the database model
const mongoose = require('mongoose');

const rating = new mongoose.Schema({
    Name: String,
    Date: Date,
    Reviews: Number,
    Comments: String,
});

//columns, properties of the schema
const itemSchema = new mongoose.Schema({
    Image: {
        type: String
    },

    ItemNo: {
        type: String
    },

    ItemName: {
        type: String
    },

    Quantity: {
        type: Number
    },

    Status: {
        type: String
    },

    Price: {
        type: Number
    },

    Reviews: {
        type: Number
    },

    Category: {
        type: String
    },

    Description: {
        type: String
    },

    SellerID : {
        type: String
    },

    SellerName: {
        type: String
    },

    ratings: [rating]
});

module.exports = mongoose.model('Items', itemSchema);