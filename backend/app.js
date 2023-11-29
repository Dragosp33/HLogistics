const config = require('./config');
const express = require('express');
const path = require('path');
const app = express();

//const OPENCAGE_API_KEY = config.OPENCAGE_API_KEY;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//const opencage = require('opencage-api-client');

const cors = require('cors');

app.use(cors());
app.use(express.static('build'));

app.use(express.json());

function getdate() {
  const currentDate = new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });
  return currentDate;
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/send_form', (req, res) => {
  console.log('???');

  const formData = req.body; // Access the form data from req.body

  //this is the confirmation mail for your customer
  const msg = {
    to: `${formData.email}`, // Change to your recipient
    from: 'dragos.polifronie@s.unibuc.ro', // Change to your verified sender
    subject: 'Thank you for your email, we will contact you soon!',

    html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .email-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
    }
    .email-content h1 {
      color: #333;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .email-content h4 {
      color: #666;
      font-size: 14px;
      margin-top: 10px;
    }
    .email-content p {
      font-size: 12px;
      margin: 5px 0;
    }
    .email-content strong {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="email-content">
  <div>
    <h1> Hello this is a copy of your response. </h1>
    
    
    <div>
    <h4>Contact Infos:</h4>
    <p> first name and last name: ${formData.firstName} ${formData.lastName}</p>
    <p>Email: ${formData.email}</p>
    <p>Phone: ${formData.phone}</p>
    <p>Company: ${formData.company}</p>
    </div>

    <div>
    <h4>From:</h4> 
    <p>${formData.departureAddress}</p>
    
    <h4>To:</h4> 
    <p>${formData.destinationAddress}</p>
    
    <h4>Leaving:</h4>
    <p>${formData.departureDate},</p>
    
    <h4>Arriving:</h4>
    <p>${formData.arrivalDate}</p>
    </div>

   </div> 
 
  </div>
</body>
</html>`,
  };
  // this is the mail for offers - the offers you receive from customers
  const mail2 = {
    to: 'polifroniec@gmail.com',
    from: 'dragos.polifronie@s.unibuc.ro',
    subject: 'New offer',
    html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .email-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
    }
    .email-content h1 {
      color: #333;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .email-content h4 {
      color: #666;
      font-size: 14px;
      margin-top: 10px;
    }
    .email-content p {
      font-size: 12px;
      margin: 5px 0;
    }
    .email-content strong {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="email-content">
  <div>
    <h1>New offer from <strong>${formData.firstName} ${
      formData.lastName
    }</strong></h1>
    Date of this offer:
    ${getdate()}
     
      <div>
    <h4>Contact Infos:</h4>
    <p>Email: ${formData.email}</p>
    <p>Phone: ${formData.phone}</p>
    <p>Company: ${formData.company}</p>
    </div>

    <div>
    <h4>From:</h4> 
    <p>${formData.departureAddress}</p>
    
    <h4>To:</h4> 
    <p>${formData.destinationAddress}</p>
    </div>

    <div>
    <h4>Leaving:</h4>
    <p>${formData.departureDate},</p>
    
    <h4>Arriving:</h4>
    <p>${formData.arrivalDate}</p>
    </div>

    
    
 
  </div>
  </div>
</body>
</html>`,
  };

  Promise.all([sgMail.send(mail2), sgMail.send(msg)])
    .then(() => {
      console.log('Both emails sent successfully');
      res.json({ message: 'Form submitted successfully' });
    })
    .catch((error) => {
      console.error('Error sending emails:', error);
      res.status(500).json('Internal error');
    });
});

module.exports = app;
