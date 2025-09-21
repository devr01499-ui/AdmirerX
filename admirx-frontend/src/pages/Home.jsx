import React, { useState } from 'react';
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

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 70, 255, 0.15)',
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [contactFormOpen, setContactFormOpen] = useState(false);

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
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
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
                Transform Your Business With Premium BPO Services
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
                Streamline operations, enhance customer experience, and drive growth with our 
                comprehensive BPO services. From customer support to data processing, we deliver 
                excellence in every interaction.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setContactFormOpen(true)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setContactFormOpen(true)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <HeroImage
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Business professionals working together"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose AdmirerX Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'secondary.main' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
              }}
            >
              Why Choose AdmirerX?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '16px', md: '18px' },
                color: 'text.secondary',
              }}
            >
              We go beyond outsourcing — we solve complex business challenges, and deliver 
              measurable results. Our solutions are designed to increase efficiency, enhance 
              customer satisfaction and unlock new opportunities for your business.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ServiceCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: '24px', md: '28px' },
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Expert Teams
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '16px', md: '18px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Cutting-edge processes, flexible models, and capacity to scale teams as you 
                    grow, converging on your goals with no compromise on quality.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ServiceCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: '24px', md: '28px' },
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Scalable Solutions
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '16px', md: '18px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Smart, scalable BPO solutions that power your growth with efficiency, 
                    security, and excellence at every step.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
              }}
            >
              Our Services
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: '20px', md: '24px' },
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Customer Support
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    24/7 omnichannel customer support with phone, email, chat; reducing 
                    operational costs while increasing customer satisfaction.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: '20px', md: '24px' },
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Technical Helpdesk
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Specialist teams with SLA-driven response times, improving uptime and 
                    reliability for your clients.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: '20px', md: '24px' },
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    Data Processing
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Accurate and automated data entry, report generation and verification.
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Let's Build Success Together Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'secondary.main' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
              }}
            >
              Let's Build Success Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '16px', md: '18px' },
                color: 'text.secondary',
              }}
            >
              Dedicated Managers | SLA Commitment — We build the best customer experience from 
              the ground up, forging partnerships that strengthen your existing operations. 
              Quality and innovation in every engagement—helping you scale with confidence.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => setContactFormOpen(true)}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '16px',
              }}
            >
              Ready to Partner With Us?
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Bottom Banner CTA */}
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
              Let's discuss how we can help transform your business operations and drive growth faster.
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
              Schedule a Call
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

export default Home;
