const mongoose =  require('mongoose');


const Schema = mongoose.Schema;

const sellerSupSchema = new Schema({
  name: {type: String, require: true},
  sellerId: {type: String, require: true},
  email: {type: String, require: true},
  inquiry: {type: String, require: true},
},{
    timestamps: true,
});
const SellerSup = mongoose.model('SellerSup', sellerSupSchema)

module.exports = SellerSup;