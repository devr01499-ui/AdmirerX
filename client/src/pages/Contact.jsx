import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.surface?.main || '#F8F9FC',
  border: '2px solid transparent',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(76, 76, 255, 0.15)',
    borderColor: '#4C4CFF',
  },
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      id: 1,
      type: 'Address',
      value: 'AdmirerX Pvt Ltd, 123 Corporate Park, Gurgaon, India',
      icon: '📍',
    },
    {
      id: 2,
      type: 'Phone',
      value: '+91 98765 43210',
      icon: '📞',
    },
    {
      id: 3,
      type: 'Email',
      value: 'info@admirerx.com',
      icon: '✉️',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: '#FFFFFF',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '36px', md: '48px' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#1F1F1F',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: '#5C5C5C',
                lineHeight: 1.6,
              }}
            >
              We're here to answer your questions. Reach out to us anytime.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Methods and Form Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F8F9FC' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* Contact Methods - Left Column */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 4,
                  fontSize: { xs: '28px', md: '36px' },
                  fontWeight: 700,
                  color: '#1F1F1F',
                }}
              >
                Get in Touch
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactMethods.map((method) => (
                  <ContactCard key={method.id}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography sx={{ fontSize: '24px' }}>
                          {method.icon}
                        </Typography>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '16px',
                              fontWeight: 600,
                              color: '#4C4CFF',
                              mb: 0.5,
                            }}
                          >
                            {method.type}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: '14px',
                              color: '#5C5C5C',
                            }}
                          >
                            {method.value}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </ContactCard>
                ))}
              </Box>
            </Grid>

            {/* Contact Form - Right Column */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 4,
                  fontSize: { xs: '28px', md: '36px' },
                  fontWeight: 700,
                  color: '#1F1F1F',
                }}
              >
                Send us a Message
              </Typography>

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#4C4CFF',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#4C4CFF',
                      },
                    }}
                  />
                  
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#4C4CFF',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#4C4CFF',
                      },
                    }}
                  />
                  
                  <TextField
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#4C4CFF',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#4C4CFF',
                      },
                    }}
                  />
                  
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
                    placeholder="How can we help you?"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#4C4CFF',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#4C4CFF',
                      },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '16px',
                      backgroundColor: '#4C4CFF',
                      '&:hover': {
                        backgroundColor: '#6A00FF',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Google Map Embed Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 4,
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 700,
              color: '#1F1F1F',
              textAlign: 'center',
            }}
          >
            Find Us
          </Typography>
          
          <Box
            sx={{
              width: '100%',
              height: { xs: '300px', md: '400px' },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.123456789!2d77.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdmirerX%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AdmirerX Location Map"
            />
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Contact;
