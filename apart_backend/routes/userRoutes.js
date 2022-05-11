const express = require('express');
const userModel = require('../schemas/User');
const bcrypt = require('bcrypt');
const registerValidate = require('../validations/registerValidate');
const loginValidate = require('../validations/loginValidate');
const saltRounds = 10;
const router = express.Router();

router.post('/register',registerValidate, async(req, res)=>{
    const data = req.body;
    data.password = bcrypt.hashSync(req.body.password, saltRounds);
    try{
        const user_data = await new userModel(data);
        await user_data.save();
        res.json({status_code: 201, msg: 'Registered successfully'})
    }
    catch(err){
        res.json({status_code: 400, msg: err.message})
    }
});

router.post('/login',loginValidate, async(req, res)=>{
    const data = req.body;
    try{
        const user = await userModel.findOne({email: data.email});
        if(bcrypt.compareSync(data.password, user.password)){
            res.json({status_code: 200, msg: 'LoggedIn successfully'})
        }
        else{
            res.json({status_code: 400, msg:'Passwor wrong'});
        }
    }
    catch(err){
        res.json({status_code: 400, msg: 'Invalid email and password'});
    }
})

module.exports = router;