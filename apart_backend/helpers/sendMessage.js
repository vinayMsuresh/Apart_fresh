const fast2sms = require('fast-two-sms');

function sendMessage(number) {
    const otp = Math.round(Math.random()*10000) + 1; 
    const options= {
        authorization: '9t0GMyKXzlF2nhqrsD3gJPAxLBpmQ5IVSEvwNRjafouHde6U4WENuscfCnwLYBeGIr6q05tS17JyxoPD',
        numbers: [number.toString()],
        message: `The OTP from Apart Fresh is ${otp}`
    }

    fast2sms.sendMessage(options)
    .then(response=>{
        console.log(response);
    })
    .catch(err=>{
        console.log(err);
    })
    return otp;
}

module.exports = sendMessage;

