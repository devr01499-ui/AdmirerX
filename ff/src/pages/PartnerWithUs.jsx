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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BenefitCard = styled(Card)(({ theme }) => ({
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const SolutionCard = styled(Card)(({ theme }) => ({
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const PartnerWithUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const partnerBenefits = [
    {
      title: "Dedicated Management",
      description: "Expert account managers providing personalized strategic guidance and continuous support tailored to your business objectives.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Flexible Engagement Models", 
      description: "Customizable onshore, offshore, and hybrid solutions designed to fit your specific operational requirements and budget.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Transparent Pricing Structure",
      description: "Clear, competitive pricing models with detailed breakdowns and flexible payment terms ensuring cost-effectiveness.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SLA Commitment & Performance",
      description: "Guaranteed service level agreements with measurable KPIs and continuous performance optimization strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Quality Assurance Excellence",
      description: "Comprehensive quality control frameworks with real-time monitoring and proactive improvement initiatives.",
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Strategic Partnership Approach", 
      description: "Long-term collaborative relationships focused on mutual growth, innovation, and shared success.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const solutions = [
    {
      title: "Scalable Business Solutions",
      description: "Elastic operational capacity that adapts to your growth trajectory without fixed overhead costs or infrastructure investments.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Seamless Technology Integration", 
      description: "Advanced API-driven integrations and compatibility with leading platforms ensuring smooth operational continuity.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Comprehensive data protection protocols, compliance frameworks, and rigorous security measures safeguarding your information assets.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Consultation",
      description: "Initial meeting to understand your business needs and objectives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Solution Design",
      description: "Customized proposal development with tailored BPO solutions.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Implementation & Onboarding",
      description: "Seamless integration and team setup with comprehensive training.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Continuous Optimization",
      description: "Ongoing performance monitoring and improvement strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
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
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({ 
      fullName: '', 
      company: '', 
      email: '', 
      phone: '', 
      interest: '', 
      message: '' 
    });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <Box sx={{ paddingTop: '80px' }}>
      <Helmet>
        <title>Partner With Us - AdmirerX BPO Solutions</title>
        <meta name="description" content="Join forces with us to deliver exceptional BPO solutions and drive mutual growth. Together we create powerful synergies that benefit both our businesses." />
        <meta property="og:title" content="Partner With Us - AdmirerX BPO Solutions" />
        <meta property="og:description" content="Join forces with us to deliver exceptional BPO solutions and drive mutual growth. Together we create powerful synergies that benefit both our businesses." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partner With Us - AdmirerX BPO Solutions" />
        <meta name="twitter:description" content="Join forces with us to deliver exceptional BPO solutions and drive mutual growth. Together we create powerful synergies that benefit both our businesses." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
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
          backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
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
            Partner With Us
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              fontWeight: 400, 
              lineHeight: 1.6,
              mt: 2,
              mb: 3
            }}
          >
            AdmirerX provides end-to-end business process outsourcing and technology services to help you scale, streamline, and succeed. Our comprehensive solutions combine cutting-edge technology with human expertise to deliver measurable results that drive your business forward.
          </Typography>
        </Container>
      </Box>

      {/* Supporting Text Box */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          backgroundColor: '#000047',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '20px',
            background: 'linear-gradient(135deg, #1a1a5c 0%, #000047 100%)',
            borderRadius: '0 0 50% 50%',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: '#1a1a5c',
              borderRadius: '20px',
              p: { xs: 3, md: 4 },
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: '#ffffff',
                lineHeight: 1.6,
                fontSize: { xs: '18px', md: '20px' },
              }}
            >
              Join forces with us to deliver exceptional BPO solutions and drive mutual growth. Together we create powerful synergies that benefit both our businesses.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Why Partner With Us Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000047' }}>
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
              Why Partner With Us
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
              Discover the advantages that make AdmirerX the ideal partner for your business growth and success.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {partnerBenefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <BenefitCard sx={{ height: '100%' }}>
                  <Box
                    component="img"
                    src={benefit.image}
                    alt={benefit.title}
                    sx={{
                      width: '100%',
                      height: 160,
                      objectFit: 'cover',
                      borderRadius: '12px 12px 0 0',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#ffffff',
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

      {/* Enhanced Solutions Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000047' }}>
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
              Our Partnership Solutions
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
              Comprehensive solutions designed to accelerate your business growth and operational excellence.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} md={4} key={index}>
                <SolutionCard sx={{ height: '100%' }}>
                  <Box
                    component="img"
                    src={solution.image}
                    alt={solution.title}
                    sx={{
                      width: '100%',
                      height: 160,
                      objectFit: 'cover',
                      borderRadius: '12px 12px 0 0',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {solution.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#ffffff',
                        lineHeight: 1.6,
                      }}
                    >
                      {solution.description}
                    </Typography>
                  </CardContent>
                </SolutionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* Partnership Process Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000047' }}>
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
              Our Partnership Process
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: '#5C5C5C',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              We've streamlined our partnership process to make it easy for you to get started. Here's how we work together to build successful, long-term partnerships.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)' } }}>
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.title}
                    sx={{
                      width: '100%',
                      height: 140,
                      objectFit: 'cover',
                      borderRadius: '12px 12px 0 0',
                    }}
                  />
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#ffffff',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: '#4C4CFF',
          color: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '24px', md: '32px' },
                fontWeight: 700,
                color: 'white',
              }}
            >
              Ready to Start Your Partnership Journey?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: 'white',
                opacity: 0.9,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Join our growing network of successful partners and unlock new opportunities for growth and expansion.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '16px',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'white',
                  color: '#4C4CFF',
                },
              }}
            >
              Start Partnership
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Start Your Partnership Journey Form Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000047' }}>
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
              Start Your Partnership Journey
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
              Complete the form below and our partnership team will contact you within 24 hours.
            </Typography>
          </Box>

          <Card sx={{ p: 4 }}>
            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your interest! Our partnership team will contact you within 24 hours.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company Name *"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Partnership Interest *</InputLabel>
                    <Select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      label="Partnership Interest *"
                    >
                      <MenuItem value="BPO Services">BPO Services</MenuItem>
                      <MenuItem value="Strategic Alliance">Strategic Alliance</MenuItem>
                      <MenuItem value="Technology Partnership">Technology Partnership</MenuItem>
                      <MenuItem value="Reseller Program">Reseller Program</MenuItem>
                      <MenuItem value="Other Collaboration">Other Collaboration</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Details *"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your partnership requirements and objectives..."
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: '16px',
                      backgroundColor: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Request Partnership Consultation
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PartnerWithUs;
