function mailBody(body) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        .button {
            font-size: 16px;
            letter-spacing: 2px;
            font-weight: 400 !important;
            background-color: #e63946ff;
            color: #fff;
            padding: 23px 50px;
            margin: auto;
            text-align: center;
            display: inline-block !important;
            text-decoration: none;
            border: 0px;
            width: max-content;
            cursor: pointer;
            transition: all 0.3s 0s ease-in-out;
        }
        .a{
            text-decoration: none;
            color: #FFFFFF;
        }
        </style>

    </head>
    <body>
        <h2>Welcome to Apart Fresh,</h2>
        <p>${body.firstname} you have registered for Apart Fresh successfully</p>
        <button class="button">
        <a href='http://localhost:3000/login' class="a">Click Here to Login</a></button>
    </body>
    </html>`
}

module.exports = mailBody;