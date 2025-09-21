import React, { useState, useEffect } from 'react';
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
import ContactForm from '../components/ContactForm';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: theme.palette.surface.main,
  border: '2px solid transparent',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(76, 76, 255, 0.15)',
    borderColor: theme.palette.primary.main,
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: '0 auto 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  color: 'white',
  fontSize: '32px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [servicesData, setServicesData] = useState([]);

  // Mock services data - in production, this would come from the API
  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/services`);
        if (response.ok) {
          const data = await response.json();
          setServicesData(data.data);
        } else {
          // Fallback to mock data if API fails
          setServicesData([
            {
              id: 1,
              title: 'Customer Support',
              description: '24/7 omnichannel customer support across phone, email, and chat — reduce operational costs while increasing satisfaction.',
              icon: '🎧',
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/845/845339.png'
            },
            {
              id: 2,
              title: 'Technical Helpdesk',
              description: 'Specialist teams with SLA-driven response times to improve uptime and reliability for your clients.',
              icon: '🛠️',
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/2699/2699472.png'
            },
            {
              id: 3,
              title: 'Data Processing',
              description: 'Accurate and automated data entry, report generation and verification at scale.',
              icon: '💾',
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/3352/3352756.png'
            },
            {
              id: 4,
              title: 'Back-Office Operations',
              description: 'Handle repetitive processes and free up your core team with secure, efficient back-office support.',
              icon: '🏢',
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/732/732093.png'
            },
            {
              id: 5,
              title: 'Quality Assurance',
              description: 'Maintain high standards with our dedicated QA teams monitoring your workflows end-to-end.',
              icon: '✅',
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/561/561094.png'
            },
            {
              id: 6,
              title: 'Process Automation',
              description: 'Leverage AI and automation to streamline operations, cut costs, and speed up delivery.',
              icon: '🤖',
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/6863/6863135.png'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching services data:', error);
        // Fallback to mock data
        setServicesData([
          {
            id: 1,
            title: 'Customer Support',
            description: '24/7 omnichannel customer support across phone, email, and chat — reduce operational costs while increasing satisfaction.',
            icon: '🎧',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/845/845339.png'
          },
          {
            id: 2,
            title: 'Technical Helpdesk',
            description: 'Specialist teams with SLA-driven response times to improve uptime and reliability for your clients.',
            icon: '🛠️',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/2699/2699472.png'
          },
          {
            id: 3,
            title: 'Data Processing',
            description: 'Accurate and automated data entry, report generation and verification at scale.',
            icon: '💾',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/3352/3352756.png'
          },
          {
            id: 4,
            title: 'Back-Office Operations',
            description: 'Handle repetitive processes and free up your core team with secure, efficient back-office support.',
            icon: '🏢',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/732/732093.png'
          },
          {
            id: 5,
            title: 'Quality Assurance',
            description: 'Maintain high standards with our dedicated QA teams monitoring your workflows end-to-end.',
            icon: '✅',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/561/561094.png'
          },
          {
            id: 6,
            title: 'Process Automation',
            description: 'Leverage AI and automation to streamline operations, cut costs, and speed up delivery.',
            icon: '🤖',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/6863/6863135.png'
          }
        ]);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.default',
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
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: 'text.secondary',
                lineHeight: 1.6,
              }}
            >
              From customer support to data processing, AdmirerX delivers scalable BPO 
              solutions with efficiency, security and excellence.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'surface.main' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {servicesData.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
                <ServiceCard>
                  <CardContent>
                    <ServiceIcon>
                      <img 
                        src={service.iconUrl} 
                        alt={service.title}
                        style={{ 
                          width: '40px', 
                          height: '40px',
                          filter: 'brightness(0) invert(1)'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span style={{ display: 'none', fontSize: '32px' }}>
                        {service.icon}
                      </span>
                    </ServiceIcon>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: 'primary.main',
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
              }}
            >
              Partner with AdmirerX to transform your operations today.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setContactFormOpen(true)}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '16px',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'white',
                  color: 'primary.main',
                },
              }}
            >
              Talk to Our Experts
            </Button>
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

export default Services;
