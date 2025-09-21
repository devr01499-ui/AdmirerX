const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  company: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    enum: ['Customer Support', 'Technical Helpdesk', 'Data Processing', 'Other'],
    default: 'Other'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in_progress', 'resolved'],
    default: 'new'
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);
