import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from '../components/ContactForm';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const whyChooseCards = [
    {
      title: 'Expert Team',
      description: 'Our experienced professionals deliver quality and reduce uncertainty in customer interactions and increase business productivity.',
    },
    {
      title: 'Smoother Operations',
      description: 'Our streamlined processes provide faster, reactive responses to customer positions and increase productivity.',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored strategies provide proactive solutions to help customers achieve more without sacrificing operational efficiency.',
    },
  ];

  const services = [
    {
      title: 'HR & Recruitment',
      description: 'Hire the best talent from a full-time working environment, ensuring employees\' efficiency and success.',
      bullets: ['We have an efficient process', 'Our best satisfaction', 'Grounded high numbers'],
    },
    {
      title: 'Customer Support',
      description: '24/7 omnichannel customer support across phone, email, and chat — reduce operational costs while increasing satisfaction.',
      bullets: ['24/7 availability', 'Multi-channel support', 'Real-time monitoring'],
    },
    {
      title: 'Data Processing',
      description: 'Accurate and automated data entry, report generation and verification at scale.',
      bullets: ['Automated data entry', 'Report generation', 'Quality assurance'],
    },
    {
      title: 'Technical Helpdesk',
      description: 'Specialist teams with SLA-driven response times to improve uptime and reliability for your clients.',
      bullets: ['SLA-driven response', 'Specialist teams', 'Proactive monitoring'],
    },
    {
      title: 'Back-Office Operations',
      description: 'Handle repetitive processes and free up your core team with secure, efficient back-office support.',
      bullets: ['Process automation', 'Secure data handling', 'Cost reduction'],
    },
    {
      title: 'Quality Assurance',
      description: 'Maintain high standards with our dedicated QA teams monitoring your workflows end-to-end.',
      bullets: ['End-to-end monitoring', 'Quality metrics', 'Process improvement'],
    },
  ];

  return (
    <Box>
      {/* App Bar */}
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1565c0', 
              fontWeight: 700,
              fontSize: '24px'
            }}
          >
            ADMREEX
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <HeroSection sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 300, 
                mb: 2,
                fontSize: { xs: '28px', md: '34px' }
              }}
            >
              Transform Your Business
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 500, 
                mb: 1,
                fontSize: { xs: '32px', md: '40px' }
              }}
            >
              With Premium BPO
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 500, 
                mb: 4,
                fontSize: { xs: '32px', md: '40px' }
              }}
            >
              Services
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 6, 
                maxWidth: 600, 
                mx: 'auto',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.6
              }}
            >
              Strengthen operations, enhance customer experience, and drive growth with our company's BPO services. From customer support to back-office solutions, we deliver excellence in every interaction.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setContactFormOpen(true)}
                sx={{
                  backgroundColor: '#1565c0',
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#0d47a1',
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setContactFormOpen(true)}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'white',
                    color: '#1565c0',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      {/* Why Choose Admirex Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#333333',
                fontSize: { xs: '28px', md: '36px' }
              }}
            >
              Why Choose Admirex?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto',
                color: '#333333',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.6
              }}
            >
              A dedicated team focused on your success, clear communication solutions, customized strategies, and strong relationships built on trust to reduce the risk of your business decisions, ensure customer satisfaction, and create opportunities for your business.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {whyChooseCards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: '#1565c0',
                        fontSize: { xs: '20px', md: '24px' }
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#333333',
                        lineHeight: 1.6,
                        fontSize: { xs: '14px', md: '16px' }
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#333333',
                fontSize: { xs: '28px', md: '36px' }
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#333333',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.6
              }}
            >
              Smart, scalable BPO solutions that drive your growth delivering efficiency, security and excellence at every step.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <ServiceCard>
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: '#1565c0',
                        fontSize: { xs: '18px', md: '20px' }
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#333333',
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: { xs: '14px', md: '16px' }
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {service.bullets.map((bullet, bulletIndex) => (
                        <Typography 
                          key={bulletIndex}
                          component="li" 
                          variant="body2" 
                          sx={{ 
                            color: '#333333',
                            mb: 0.5,
                            fontSize: { xs: '13px', md: '14px' }
                          }}
                        >
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Let's Build Success Together Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#1565c0' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '28px', md: '36px' }
              }}
            >
              Let's Build Success Together
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                maxWidth: 600, 
                mx: 'auto',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.6
              }}
            >
              We believe the best customer experience comes from strong partnerships. We build customer loyalty with our long-term commitment, activities, and dedication to create opportunities to build a robust marketplace.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setContactFormOpen(true)}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '16px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'white',
                  color: '#1565c0',
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0d47a1', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: '24px'
                }}
              >
                Admirex
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: '16px'
                }}
              >
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Customer Support', 'Data Processing', 'Lead Generation', 'Tech Support', 'HR Consultancy'].map((item, index) => (
                  <Typography key={index} variant="body2" sx={{ fontSize: '14px' }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: '16px'
                }}
              >
                Connect
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['LinkedIn', 'Facebook', 'Instagram', 'Twitter'].map((item, index) => (
                  <Typography key={index} variant="body2" sx={{ fontSize: '14px' }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: '16px'
                }}
              >
                Policies
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Workload Management', 'Quality Assurance', 'Transparent Policy', 'Long Partnership'].map((item, index) => (
                  <Typography key={index} variant="body2" sx={{ fontSize: '14px' }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <Typography variant="body2" sx={{ fontSize: '14px' }}>
              © 2024 Admirex. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Modal */}
      <ContactForm 
        open={contactFormOpen} 
        onClose={() => setContactFormOpen(false)} 
      />
    </Box>
  );
};

export default HomePage;
