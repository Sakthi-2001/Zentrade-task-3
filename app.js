//I have added comments wherever I felt needed...

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/forgot-password', (req, res) => {
  sendForgotPasswordEmail();
  res.send('An email has been sent with instructions to reset your password.');
});


app.post('/login', (req, res) => {
  const password = req.body.password;

  
  if (password === 'ZenTradesTest@123') {
    res.redirect('/dashboard');
  } else {
    res.send('Incorrect password. Please try again.');
  }
});


app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});


function sendForgotPasswordEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '102120057.thermo@gmail.com', 
      pass: 'laeo dwte hknt pxfv'  //Enter your app password generated through google 2 factor authentication
    }
  });

  
  const mailOptions = {
    from: '102120057.thermo@gmail.com', //Enter your email
    to: 'support@zentrades.pro',   
    subject: 'Forgot Password',
    text: 'Forgot password request has been sent to the Zentrades.'
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
