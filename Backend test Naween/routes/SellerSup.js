const router = require('express').Router();
let SellerSup=require('../models/SellerSup.model');

//get seller sup details
router.route('/').get((req,res) =>{
    SellerSup.find()
    .then(sellerSups => res.json(sellerSups))
    .catch(err => res.status(400).json('Error:' + err));

});

//add seller sup details
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const sellerId = req.body.sellerId;
    const email = req.body.email;
    
    const inquiry = req.body.inquiry;
  
    const newSellerSup = new SellerSup({
        name,
        sellerId,
        email,
        inquiry,
      
    });


//save add
newSellerSup.save()
.then(() => res.json('Seller support details added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    SellerSup.findByIdAndDelete(req.params.id)
      .then(() => res.json('Seller support details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  

module.exports= router;

