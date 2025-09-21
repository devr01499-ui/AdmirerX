import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const WhyChooseCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const coreValues = [
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions that drive client success.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Excellence", 
      description: "We strive for perfection in every service we deliver, ensuring exceptional quality and reliability in all operations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in every client interaction.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Partnership",
      description: "We work collaboratively with clients, considering their success as our own achievement and priority.",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const whyChooseUs = [
    {
      title: "Global Expertise",
      description: "Leveraging international best practices and cross-industry experience to deliver superior BPO solutions.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Technology Driven",
      description: "Utilizing cutting-edge automation and AI-powered tools to enhance efficiency and deliver measurable results.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Client-Centric Approach",
      description: "Customized solutions designed around your specific business needs and growth objectives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

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
        <title>About Us - AdmirerX BPO Solutions</title>
        <meta name="description" content="Learn about AdmirerX's mission, values, and the team dedicated to your success. We are a global team of innovators committed to delivering excellence in business process outsourcing." />
        <meta property="og:title" content="About Us - AdmirerX BPO Solutions" />
        <meta property="og:description" content="Learn about AdmirerX's mission, values, and the team dedicated to your success. We are a global team of innovators committed to delivering excellence in business process outsourcing." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - AdmirerX BPO Solutions" />
        <meta name="twitter:description" content="Learn about AdmirerX's mission, values, and the team dedicated to your success. We are a global team of innovators committed to delivering excellence in business process outsourcing." />
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
          backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
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
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            About Us
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontStyle: 'italic', 
              mb: 1, 
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            We Admire Your Dreams
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 300, 
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            Be empowered. Be supported. Be AdmirerX
          </Typography>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
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
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff', 
                    fontWeight: 600,
                    textAlign: 'left',
                    mb: 6,
                    '&::after': {
                      content: '""',
                      display: 'block',
                      width: '60px',
                      height: '4px',
                      backgroundColor: '#ffffff',
                      margin: '20px 0 0',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Our Story
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#ffffff',
                    mb: 3
                  }}
                >
                  At AdmirerX, we are driven by a big vision: to redefine how outsourcing empowers businesses. Founded with the belief that exceptional service can create real business impact, we set out to deliver smarter, faster, and more reliable solutions for our clients.
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#ffffff',
                    mb: 3
                  }}
                >
                  Our team brings together deep industry expertise, modern technology, and a passion for innovation. We partner with businesses of all sizes to provide scalable, secure, and customer-focused BPO services that fuel growth and efficiency.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#ffffff'
                  }}
                >
                  Guided by transparency, reliability, and continuous improvement, we are building AdmirerX into a trusted partner for companies that want to scale without the usual outsourcing headaches.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="AdmirerX strategic business planning"
                  style={{ 
                    width: '100%', 
                    borderRadius: '16px', 
                    boxShadow: '0 12px 40px rgba(37, 99, 235, 0.15)',
                    border: '3px solid white',
                    height: '400px',
                    objectFit: 'cover'
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
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
                  color: '#ffffff', 
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 6,
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#ffffff',
                    margin: '20px auto 0',
                    borderRadius: '2px'
                  }
                }}
              >
                Our Core Values
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                At AdmirerX, our values shape everything we do. They guide our decisions, drive our innovation, and ensure we deliver exceptional results for our clients.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {coreValues.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ValueCard
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
                      src={value.image}
                      alt={value.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: '12px 12px 0 0',
                      }}
                    />
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: '#ffffff',
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#ffffff',
                          lineHeight: 1.6,
                          flexGrow: 1,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </ValueCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
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
                  color: '#ffffff', 
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 6,
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#ffffff',
                    margin: '20px auto 0',
                    borderRadius: '2px'
                  }
                }}
              >
                Why Choose Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Discover what makes AdmirerX the preferred choice for businesses seeking exceptional BPO solutions.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {whyChooseUs.map((item, index) => (
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
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: '12px 12px 0 0',
                      }}
                    />
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: '#ffffff',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#ffffff',
                          lineHeight: 1.6,
                          flexGrow: 1,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </WhyChooseCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.primary.main,
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
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: 'white',
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                color: 'white',
                opacity: 0.9,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Partner with AdmirerX to unlock your business potential with our comprehensive BPO solutions.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;