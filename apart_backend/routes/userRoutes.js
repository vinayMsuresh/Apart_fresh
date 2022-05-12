const express = require('express');
const userModel = require('../schemas/User');
const bcrypt = require('bcrypt');
const registerValidate = require('../validations/registerValidate');
const loginValidate = require('../validations/loginValidate');
const sendEmail = require('../helpers/sendEmail');
const sendMessage = require('../helpers/sendMessage');
const jwt = require('jsonwebtoken');
const jwtsecret = 'anfksfderlkld9343kl';
const saltRounds = 10;

const router = express.Router();

router.post('/register',registerValidate, async(req, res)=>{
    const data = req.body;
    data.password = bcrypt.hashSync(req.body.password, saltRounds);
    try{
        const user_data = await new userModel(data);
        await user_data.save();
        sendEmail(req.body);
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
            let payload = { uid: data.email};
            const token = jwt.sign(payload, jwtsecret, {expiresIn: 3600000});
            res.json({status_code: 200, msg: 'LoggedIn successfully', token})
        }
        else{
            res.json({status_code: 400, msg:'Passwor wrong'});
        }
    }
    catch(err){
        res.json({status_code: 400, msg: 'Invalid email and password'});
    }
})

router.get('/forgot/:number', (req, res)=> {
    let {number} = req.params;
    const otp = sendMessage(number);
    res.json({msg:'otp sent successfully', otp});

});

router.post('/forgot/change', async(req, res) => {
    let {number, password} = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    try{
        await userModel.updateOne({phone: number},{$set:{password: hash}});
        res.json({status_code: 201, msg: 'Password updated successfully'});
    }
    catch(err){
        res.json({status_code: 400, msg:'Phone number doesnot exists'})
    }

})

module.exports = router;