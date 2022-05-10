const mongoose = require('mongoose');
const user = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address1:{
        type: String,
    },
    address2:{
        type: String,
    },
    pincode:{
        type: Number
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('user', user);