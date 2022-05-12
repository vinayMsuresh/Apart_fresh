const transporter = require('./Transporter');
const mailBody = require('./mailBody');
function sendEmail(body) {
    const mail = mailBody(body);
    const mailOptions = {
        from: 'naganandams16@gmail.com',
        to: body.email,
        subject: 'Welcome to Apart Fresh',
        html: mail
    };
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log('Email sent successfully');
        }
    })
}

module.exports = sendEmail;