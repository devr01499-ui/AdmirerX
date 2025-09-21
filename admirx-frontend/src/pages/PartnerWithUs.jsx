import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const BenefitCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.surface?.main || '#F8F9FC',
  border: '2px solid transparent',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(76, 76, 255, 0.15)',
    borderColor: '#4C4CFF',
  },
}));

const PartnerWithUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const benefits = [
    {
      id: 1,
      title: 'Scalable Solutions',
      description: 'Expand capacity instantly without fixed overheads.',
    },
    {
      id: 2,
      title: 'Technology Integration',
      description: 'We integrate seamlessly with your systems.',
    },
    {
      id: 3,
      title: 'Confidential & Secure',
      description: 'Your data and your customers remain protected.',
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
    setFormData({ companyName: '', email: '', message: '' });
    
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
              Partner With AdmirerX
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
              Unlock new opportunities by collaborating with a trusted BPO and technology 
              partner. We provide scalable, white-label services to help you grow.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F8F9FC' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {benefits.map((benefit) => (
              <Grid item xs={12} md={4} key={benefit.id}>
                <BenefitCard>
                  <CardContent>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: '#4C4CFF',
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#5C5C5C',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section with Form */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
                color: '#1F1F1F',
              }}
            >
              Let's Build Something Great Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: '#5C5C5C',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Fill out the form below and our partnership team will get in touch.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your interest! Our partnership team will contact you soon.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  name="companyName"
                  label="Company Name"
                  value={formData.companyName}
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
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Tell us about your partnership needs..."
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
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PartnerWithUs;
