const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/email');

// POST /api/contact - Submit contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message, service } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      company,
      phone,
      message,
      service: service || 'Other'
    });

    await contact.save();

    // Send email notification to admin
    try {
      await sendContactEmail({
        name,
        email,
        company,
        phone,
        message,
        service: service || 'Other'
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contacts (admin only - in production, add authentication)
router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

module.exports = router;
