import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactForm from '../components/ContactForm';

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 80, 217, 0.15)',
  },
}));

const MissionVisionCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 80, 217, 0.12)',
  },
}));

const LeadershipCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 32px rgba(0, 80, 217, 0.15)',
  },
}));

const LeadershipAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto 16px',
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'grayscale(0%)',
  },
}));

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [teamData, setTeamData] = useState([]);

  // Fetch team data from API
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/team`);
        if (response.ok) {
          const data = await response.json();
          setTeamData(data.data);
        } else {
          // Fallback to mock data if API fails
          setTeamData([
            {
              id: 1,
              name: 'John Doe',
              position: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              linkedin: 'https://linkedin.com/in/johndoe'
            },
            {
              id: 2,
              name: 'Jane Smith',
              position: 'COO',
              image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              linkedin: 'https://linkedin.com/in/janesmith'
            },
            {
              id: 3,
              name: 'Raj Kumar',
              position: 'Head of Operations',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              linkedin: 'https://linkedin.com/in/rajkumar'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching team data:', error);
        // Fallback to mock data
        setTeamData([
          {
            id: 1,
            name: 'John Doe',
            position: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            linkedin: 'https://linkedin.com/in/johndoe'
          },
          {
            id: 2,
            name: 'Jane Smith',
            position: 'COO',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            linkedin: 'https://linkedin.com/in/janesmith'
          },
          {
            id: 3,
            name: 'Raj Kumar',
            position: 'Head of Operations',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            linkedin: 'https://linkedin.com/in/rajkumar'
          }
        ]);
      }
    };

    fetchTeamData();
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
                About AdmirerX
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
                We are a team of innovators and problem-solvers committed to delivering 
                premium BPO and digital solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <HeroImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Corporate team working together"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'secondary.main' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MissionVisionCard>
                <CardContent>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      mb: 3,
                      fontSize: { xs: '28px', md: '36px' },
                      fontWeight: 700,
                      color: 'primary.main',
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '16px', md: '18px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    To empower businesses worldwide by streamlining operations, enhancing 
                    customer experiences, and driving sustainable growth through our scalable 
                    BPO services.
                  </Typography>
                </CardContent>
              </MissionVisionCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MissionVisionCard>
                <CardContent>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      mb: 3,
                      fontSize: { xs: '28px', md: '36px' },
                      fontWeight: 700,
                      color: 'primary.main',
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '16px', md: '18px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    To be the most trusted partner for organizations seeking operational 
                    excellence and digital transformation.
                  </Typography>
                </CardContent>
              </MissionVisionCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
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
              Our Values
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ValueCard>
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
                    Customer-Centric
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    We put our clients' customers first, ensuring every interaction adds value.
                  </Typography>
                </CardContent>
              </ValueCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ValueCard>
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
                    Innovation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    We continuously improve our processes and technology to stay ahead.
                  </Typography>
                </CardContent>
              </ValueCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ValueCard>
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
                    Integrity
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    We uphold the highest standards of transparency and accountability.
                  </Typography>
                </CardContent>
              </ValueCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Leadership Section */}
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
              Meet Our Leadership
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamData.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <LeadershipCard>
                  <CardContent>
                    <LeadershipAvatar
                      src={member.image}
                      alt={member.name}
                    />
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        mb: 1,
                        fontSize: { xs: '18px', md: '20px' },
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '14px', md: '16px' },
                        color: 'text.secondary',
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<LinkedInIcon />}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.dark',
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      LinkedIn
                    </Button>
                  </CardContent>
                </LeadershipCard>
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
              Ready to Work With Us?
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
              Partner with AdmirerX to transform your business today.
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
              Contact Our Team
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

export default AboutUs;
