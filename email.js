var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'omar.oueslati2009@gmail.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'omar.oueslati2009@gmail.com',
    to: 'omar.oueslati2009@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });