import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, clearError, clearSuccess } from '../store/slices/contactSlice';

const ContactForm = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { isSubmitting, submitSuccess, error } = useSelector((state) => state.contact);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'Other',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    try {
      await dispatch(submitContactForm(formData)).unwrap();
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'Other',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleClose = () => {
    dispatch(clearError());
    dispatch(clearSuccess());
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: 'primary.main' }}>
          Get in Touch
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Let's discuss how we can help transform your business operations
        </Typography>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => dispatch(clearError())}>
              {error}
            </Alert>
          )}
          
          {submitSuccess && (
            <Alert severity="success" sx={{ mb: 2 }} onClose={() => dispatch(clearSuccess())}>
              Thank you for your message! We will get back to you soon.
            </Alert>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            
            <TextField
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            
            <TextField
              name="company"
              label="Company (Optional)"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            
            <TextField
              name="phone"
              label="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            
            <FormControl fullWidth>
              <InputLabel>Service Interest</InputLabel>
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                label="Service Interest"
              >
                <MenuItem value="Customer Support">Customer Support</MenuItem>
                <MenuItem value="Technical Helpdesk">Technical Helpdesk</MenuItem>
                <MenuItem value="Data Processing">Data Processing</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Tell us about your business needs and how we can help..."
            />
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ContactForm;
