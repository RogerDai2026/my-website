require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

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
  console.log('EMAIL_SERVICE:', process.env.EMAIL_SERVICE);
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

  try {
    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE, // e.g., Gmail
      auth: {
        user: process.env.EMAIL_USER, // Sender email (from .env)
        pass: process.env.EMAIL_PASS, // Sender password (from .env)
      },
    });

    await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`, // Sender's name and your Gmail address
        replyTo: email, // Sender's email address
        to: process.env.RECIPIENT_EMAIL, // Your email address
        subject: subject, // Subject line
        text: `You have received a new message from your website contact form:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
      `, // Plain text body
      });
      
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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
