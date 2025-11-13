require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5001;

// Simple CORS middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000', 
    'https://rogerdai2026.github.io',
    'https://rogerdai2026.github.io/my-website',
    'https://rogerdai2026.github.io/my-website/'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  next();
});

// JSON parsing
app.use(express.json());

// Contact API Route
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  console.log('SendGrid API Key exists:', !!process.env.SENDGRID_API_KEY);
  console.log('Recipient email:', process.env.RECIPIENT_EMAIL);

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      text: `New contact form message:
      
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});