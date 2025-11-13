require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5001;

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000', 
  'https://rogerdai2026.github.io',
  'https://rogerdai2026.github.io/my-website',
  'https://rogerdai2026.github.io/my-website/'
];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Handle preflight requests for all routes
app.options('*', cors());

// Middleware to parse JSON
app.use(express.json());

// Contact API Route
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  // Debug logging
  console.log('Environment variables check:');
  console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
  console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);

  try {
    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.RECIPIENT_EMAIL, // Your email address
      from: process.env.EMAIL_USER, // Must be verified sender in SendGrid
      replyTo: email, // Sender's email address
      subject: subject,
      text: `You have received a new message from your website contact form:
      
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await sgMail.send(msg);
      
    // Success response
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    // Error response
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message,
      code: error.code 
    });
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
