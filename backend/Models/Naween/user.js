const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username:{
            type:String,
            required:true
        },
        nic:{
            type:String,
            required:true,
            unique:true
        },
        contact:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
});

const users = new mongoose.model("Users", userSchema);

module.exports = users;