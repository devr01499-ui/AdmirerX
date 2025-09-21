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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import EmailIcon from '@mui/icons-material/Email';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../static-form.css';

const InsightCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // Remove all animations and transitions
  transition: 'none !important',
  animation: 'none !important',
  transform: 'none !important',
  '&:hover': {
    transform: 'none !important',
    boxShadow: 'none !important',
    borderColor: 'inherit !important',
    backgroundColor: 'inherit !important',
    color: 'inherit !important',
  },
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInsights = [
    {
      title: "Rapid Response",
      description: "Our leadership team responds to all inquiries within 24 hours with tailored solutions and strategic guidance.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Strategic Consultation", 
      description: "Get expert advice on optimizing your business processes, reducing costs, and scaling operations efficiently.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Confidential Discussion",
      description: "All conversations are protected by enterprise-grade security protocols and strict confidentiality agreements.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const serviceOptions = [
    "Customer Support",
    "HR & Recruitment",
    "Lead Generation",
    "Technical Helpdesk",
    "Data Processing",
    "Custom BPO Solutions",
    "Partnership Inquiry"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    setSubmitStatus('loading');
    
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          subject: `Contact Form Submission - ${formData.service}`,
          message: formData.message
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <Box sx={{ paddingTop: '80px' }}>
      <Helmet>
        <title>Contact Us - AdmirerX BPO Solutions</title>
        <meta name="description" content="Ready to transform your business operations? Get in touch with our leadership team to discuss customized BPO solutions that drive growth and efficiency." />
        <meta property="og:title" content="Contact Us - AdmirerX BPO Solutions" />
        <meta property="og:description" content="Ready to transform your business operations? Get in touch with our leadership team to discuss customized BPO solutions that drive growth and efficiency." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - AdmirerX BPO Solutions" />
        <meta name="twitter:description" content="Ready to transform your business operations? Get in touch with our leadership team to discuss customized BPO solutions that drive growth and efficiency." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '100vh' },
          minHeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
        
        {/* Text Content Container */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem' }
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary', 
              maxWidth: 600, 
              mx: 'auto',
              fontWeight: 400, 
              lineHeight: 1.6,
            }}
          >
            Ready to transform your business operations? Get in touch with our leadership team to discuss 
            customized BPO solutions that drive growth and efficiency.
          </Typography>
        </Container>
      </Box>

      {/* Contact Insights Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#000047' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              Why Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: '#ffffff',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Experience the difference of working with a dedicated team that prioritizes your success and delivers exceptional results.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {contactInsights.map((insight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <InsightCard sx={{ backgroundColor: '#1a1a5c' }}>
                  {/* Image */}
                  <Box sx={{ height: 160, overflow: 'hidden' }}>
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  
                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        fontSize: { xs: '18px', md: '20px' }
                      }}
                    >
                      {insight.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#ffffff',
                        lineHeight: 1.6,
                        fontSize: { xs: '14px', md: '16px' }
                      }}
                    >
                      {insight.description}
                    </Typography>
                  </CardContent>
                </InsightCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* Contact Form Section */}
      <Box id="contact-form" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000047' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              Get Started Today
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: '#ffffff',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Complete the form below and our leadership team will contact you within 24 hours to discuss your specific needs.
            </Typography>
          </Box>

          <Card 
            id="contact-form"
            sx={{ 
              p: 4,
              // Remove all animations and transitions
              '& *': {
                transition: 'none !important',
                animation: 'none !important',
                transform: 'none !important',
              },
              '& input, & textarea, & select': {
                transition: 'none !important',
                animation: 'none !important',
                transform: 'none !important',
                '&:focus': {
                  outline: 'none !important',
                  boxShadow: 'none !important',
                  border: '1px solid #ccc !important',
                  transform: 'none !important',
                },
                '&:hover': {
                  transform: 'none !important',
                  boxShadow: 'none !important',
                  borderColor: 'inherit !important',
                  backgroundColor: 'inherit !important',
                }
              },
              '& button': {
                transition: 'none !important',
                animation: 'none !important',
                transform: 'none !important',
                '&:hover': {
                  transform: 'none !important',
                  boxShadow: 'none !important',
                },
                '&:active': {
                  transform: 'none !important',
                }
              }
            }}
          >
            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your interest! Our leadership team will contact you within 24 hours.
              </Alert>
            )}
            
            {submitStatus === 'error' && (
              <Alert severity="error" sx={{ mb: 3 }}>
                Sorry, there was a problem sending your message. Please email us directly at Management@admirerx.net
              </Alert>
            )}
            
            {submitStatus === 'loading' && (
              <Alert severity="info" sx={{ mb: 3 }}>
                Sending your message...
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  name="name"
                  label="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  placeholder="Your full name"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      transition: 'none !important',
                      animation: 'none !important',
                      transform: 'none !important',
                      '&:hover': {
                        transform: 'none !important',
                        boxShadow: 'none !important',
                      },
                      '&.Mui-focused': {
                        transform: 'none !important',
                        boxShadow: 'none !important',
                      }
                    }
                  }}
                />
                
                <TextField
                  name="company"
                  label="Company Name *"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  placeholder="Your company name"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      transition: 'none !important',
                      animation: 'none !important',
                      transform: 'none !important',
                      '&:hover': { transform: 'none !important', boxShadow: 'none !important' },
                      '&.Mui-focused': { transform: 'none !important', boxShadow: 'none !important' }
                    }
                  }}
                />
                
                <TextField
                  name="email"
                  label="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  placeholder="your.email@company.com"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      transition: 'none !important',
                      animation: 'none !important',
                      transform: 'none !important',
                      '&:hover': { transform: 'none !important', boxShadow: 'none !important' },
                      '&.Mui-focused': { transform: 'none !important', boxShadow: 'none !important' }
                    }
                  }}
                />
                
                <TextField
                  name="phone"
                  label="Phone Number *"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  placeholder="+1 (555) 123-4567"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      transition: 'none !important',
                      animation: 'none !important',
                      transform: 'none !important',
                      '&:hover': { transform: 'none !important', boxShadow: 'none !important' },
                      '&.Mui-focused': { transform: 'none !important', boxShadow: 'none !important' }
                    }
                  }}
                />
                
                <FormControl 
                  fullWidth 
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      transition: 'none !important',
                      animation: 'none !important',
                      transform: 'none !important',
                      '&:hover': { transform: 'none !important', boxShadow: 'none !important' },
                      '&.Mui-focused': { transform: 'none !important', boxShadow: 'none !important' }
                    }
                  }}
                >
                  <InputLabel>Service Interest *</InputLabel>
                  <Select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    label="Service Interest *"
                  >
                    {serviceOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <TextField
                  name="message"
                  label="Project Details *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Tell us about your business needs and objectives..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      transition: 'none !important',
                      animation: 'none !important',
                      transform: 'none !important',
                      '&:hover': { transform: 'none !important', boxShadow: 'none !important' },
                      '&.Mui-focused': { transform: 'none !important', boxShadow: 'none !important' }
                    }
                  }}
                />
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={submitStatus === 'loading'}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                    backgroundColor: theme.palette.primary.main,
                    transition: 'none !important',
                    animation: 'none !important',
                    transform: 'none !important',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      transform: 'none !important',
                      boxShadow: 'none !important',
                    },
                    '&:active': {
                      transform: 'none !important',
                    },
                    '&:disabled': {
                      backgroundColor: theme.palette.grey[400],
                      transform: 'none !important',
                    },
                  }}
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </form>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Contact;