const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON data from the form
app.use(cors());
app.use(express.json());

// DEBUG: Log environment variables on server start
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Loaded' : 'MISSING');
console.log('EMAIL_APP_PASSWORD:', process.env.EMAIL_APP_PASSWORD ? 'Loaded' : 'MISSING');

// FIX 1: Use createTransport (not createTransporter)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

// Verify transporter on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('Transporter Verification FAILED:', error);
    } else {
        console.log('Transporter Verified. Server is ready to send emails.');
    }
});

app.post('/send-email', async (req, res) => {
    console.log('POST /send-email called. Body:', req.body);

    const { name, email, subject, message, phone, company, service } = req.body;

    // FIX 2: Hardcode "from" to authenticated email + use "replyTo"
    const mailOptions = {
        from: process.env.EMAIL_USER, // MUST match authenticated user
        to: process.env.EMAIL_USER,
        replyTo: email, // Allows replying to submitter
        subject: `New Form: ${subject || 'Contact Form'}`,
        html: `
            <h3>New Contact Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Service:</strong> ${service || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject || 'Contact Form'}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email SENT:', info.messageId);
        res.status(200).json({ 
            success: true,
            message: 'Request submitted successfully! We will get back to you within 24 hours.' 
        });
    } catch (error) {
        console.error('FULL ERROR:', error.name, error.code, error.message);
        console.error('Stack:', error.stack);
        res.status(500).json({ 
            success: false,
            message: 'Email failed. Please contact us directly at Management@admirerx.net' 
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        message: 'AdmirerX Backend Server is running',
        timestamp: new Date().toISOString()
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 AdmirerX Backend Server is running on port ${PORT}`);
    console.log(`📧 Email will be sent to: ${process.env.EMAIL_USER}`);
    console.log(`🌐 Health check: http://localhost:${PORT}/health`);
});
