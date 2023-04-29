require('dotenv').config();
const express = require("express");

const nodemailer = require('nodemailer');

const app = express();
const log = console.log;
const path = require('path')

const PORT = process.env.PORT || 8080;

//Data Parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.post('/email', (req, res) => {


    const {email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "legchris12@gmail.com",
            pass: process.env.APP_PASS
        }
    });
    
    const mailOptions = {
        from: "legchris12@gmail.com",
        to: email,
        subject: "Hello, Christian received your message",
        text: `This is your message "${message}" `,
      }
      
      transporter.sendMail(mailOptions, function(err, info) {
          if(err){
              console.log(err);
          }
          else{
              console.log("Email sent: " + info.response);
          }
      })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
})




app.listen(PORT, () => log("Server is starting on PORT", 8080));