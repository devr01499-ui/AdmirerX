import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 40px rgba(0, 0, 71, 0.15)`,
    border: `2px solid #000047`,
  },
}));

const WhyChooseCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 40px rgba(0, 0, 71, 0.15)`,
    border: `2px solid #000047`,
  },
}));

const ValuePropCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 40px rgba(0, 0, 71, 0.15)`,
    border: `2px solid #000047`,
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const valuePropCards = [
    {
      title: 'Scale with Confidence',
      content: 'Expand your operations seamlessly with our elastic BPO solutions that grow with your business needs.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Streamline Operations',
      content: 'Optimize your workflows with our technology-driven processes that eliminate inefficiencies and reduce costs.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Succeed with Data',
      content: 'Leverage our analytics and insights to make informed decisions that drive measurable business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const services = [
    {
      title: 'HR & Recruitment',
      description: 'Full-cycle recruitment services from talent sourcing to onboarding, powered by advanced assessment tools and industry expertise.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'End-to-end recruitment process',
        'Advanced candidate screening',
        'Compliance & legal expertise',
        'Onboarding excellence'
      ]
    },
        {
          title: 'Customer Support',
          description: '24/7 omnichannel support across phone, email and chat to delight your customers with exceptional service.',
          image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          features: [
            'Multi-channel support',
            'Real-time response',
            'Customer satisfaction focus',
            'Scalable operations'
          ]
        },
    {
      title: 'Lead Generation',
      description: 'Comprehensive lead generation services that identify, qualify, and nurture prospects to drive your sales pipeline.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Prospect identification',
        'Lead qualification',
        'Nurturing campaigns',
        'Sales pipeline management'
      ]
    },
        {
          title: 'Technical Helpdesk',
          description: 'Specialist helpdesk teams with SLA-driven response times for maximum uptime and technical excellence.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          features: [
            'SLA-driven response times',
            'Technical expertise',
            '24/7 availability',
            'Issue resolution focus'
          ]
        },
    {
      title: 'Data Processing & Back Office',
      description: 'Comprehensive data processing and back-office operations to handle repetitive tasks and free up your core team.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Data entry & validation',
        'Report generation',
        'Process automation',
        'Quality assurance'
      ]
    },
    {
      title: 'Custom BPO Solutions',
      description: 'Tailored business process outsourcing solutions designed specifically for your unique business requirements.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Customized solutions',
        'Flexible engagement models',
        'Industry-specific expertise',
        'Scalable implementation'
      ]
    }
  ];

  const whyChooseCards = [
    {
      title: 'Scalable Operations',
      description: 'Expand capacity instantly without fixed overheads. Our flexible solutions grow with your business needs, ensuring you only pay for what you use while maintaining quality and efficiency.',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Technology Integration',
      description: 'We integrate seamlessly with your systems. Our API-driven approach and compatibility with leading platforms ensure smooth operations without disrupting your existing workflows.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Trusted Partner',
      description: 'Your data and your customers remain protected. We employ enterprise-grade security protocols, compliance frameworks, and rigorous data protection measures to keep your information safe.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
  ];

  const scrollToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000047',
        backgroundImage: 'linear-gradient(135deg, #1a1a5c 0%, #000047 100%)',
        minHeight: '100vh',
        color: '#ffffff',
        paddingTop: '80px', // Add padding to prevent header overlap
      }}
    >
      <Helmet>
        <title>AdmirerX - Empowering Your Business with Smart BPO Solutions</title>
        <meta name="description" content="AdmirerX provides end-to-end business process outsourcing and technology services to help you scale, streamline, and succeed. Professional BPO solutions with cutting-edge technology." />
        <meta property="og:title" content="AdmirerX - Empowering Your Business with Smart BPO Solutions" />
        <meta property="og:description" content="AdmirerX provides end-to-end business process outsourcing and technology services to help you scale, streamline, and succeed. Professional BPO solutions with cutting-edge technology." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AdmirerX - Empowering Your Business with Smart BPO Solutions" />
        <meta name="twitter:description" content="AdmirerX provides end-to-end business process outsourcing and technology services to help you scale, streamline, and succeed. Professional BPO solutions with cutting-edge technology." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" />
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
              backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backgroundBlendMode: 'multiply',
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
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
              fontSize: { xs: '2.5rem', md: '4rem' }
            }}
          >
            Empowering Your Business with Smart BPO Solutions
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
              mb: 3,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            AdmirerX provides end-to-end business process outsourcing and technology services to help you scale, streamline, and succeed. Our comprehensive solutions combine cutting-edge technology with human expertise to deliver measurable results that drive your business forward.
          </Typography>
        </Container>
      </Box>

      {/* Value Proposition Cards */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              padding: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              mb: 6
            }}
          >
            <Grid container spacing={4}>
              {valuePropCards.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ValuePropCard
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: '100%',
                        height: 200,
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
                          color: '#ffffff',
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '14px', md: '16px' },
                          color: '#ffffff',
                        lineHeight: 1.6,
                      }}
                    >
                      {card.content}
                    </Typography>
                  </CardContent>
                </ValuePropCard>
              </Grid>
            ))}
          </Grid>
          </Box>
        </Container>
      </Box>

      {/* About Preview Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              padding: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <HeroImage
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
                Who We Are
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: { xs: '16px', md: '18px' },
                  color: '#ffffff',
                  lineHeight: 1.6,
                }}
              >
                We're a team of operations experts, technologists, and problem-solvers dedicated to transforming business operations through innovation and excellence. We combine deep industry knowledge with cutting-edge technology to deliver exceptional value to clients worldwide.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                href="/about-us"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: '#ffffff',
                    color: '#000047',
                  },
                }}
              >
                Learn More About Us
              </Button>
            </Grid>
          </Grid>
          </Box>
        </Container>
      </Box>

      {/* Services Preview Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              padding: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              mb: 6
            }}
          >
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
              Our Core Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: '#ffffff',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              From customer support to process automation, AdmirerX offers a full suite of scalable solutions.
            </Typography>
          </Box>

            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                    }
                  }}>
                  {/* Image */}
                  <Box sx={{ height: 200, overflow: 'hidden' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        console.error('Image failed to load:', service.image);
                        // Try alternative URL
                        if (e.target.src !== 'https://images.unsplash.com/photo-1581094794322-5dfe5a7b49ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80') {
                          e.target.src = 'https://images.unsplash.com/photo-1581094794322-5dfe5a7b49ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                        } else {
                          // Final fallback
                          e.target.src = 'https://via.placeholder.com/600x200/4C4CFF/FFFFFF?text=Technical+Support';
                        }
                      }}
                      loading="lazy"
                    />
                  </Box>
                  
                  {/* Content */}
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#ffffff' }}>
                          {service.title}
                        </Typography>

                        <Typography variant="body2" sx={{ 
                          mb: 2, 
                          flexGrow: 1, 
                          color: '#ffffff',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto'
                        }}>
                          {service.description}
                        </Typography>
                    
                    {/* Features List */}
                    <Box sx={{ mb: 2 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: '#ffffff', mr: 1 }} />
                          <Typography variant="body2" sx={{ color: '#ffffff' }}>{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    {/* Button */}
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        mt: 'auto',
                        borderColor: '#ffffff',
                        color: '#ffffff',
                        '&:hover': {
                          borderColor: '#ffffff',
                          backgroundColor: '#ffffff',
                          color: '#000047',
                        }
                      }}
                      onClick={scrollToContact}
                    >
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                href="/services"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: '#ffffff',
                    color: '#000047',
                  },
                }}
              >
                View All Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              padding: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              mb: 6
            }}
          >
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
              Why Choose Us
            </Typography>
          </Box>

            <Grid container spacing={4}>
              {whyChooseCards.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <WhyChooseCard
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: '12px 12px 0 0',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#ffffff',
                        lineHeight: 1.6,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </WhyChooseCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        id="contact-section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
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
              Let's Build Your Next Big Thing
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
              Partner with AdmirerX to transform your operations today.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="/partner-with-us"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '16px',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'white',
                  color: '#000047',
                },
              }}
            >
              Partner With Us
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
