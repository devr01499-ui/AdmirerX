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
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobCard = styled(Card)(({ theme }) => ({
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

const Career = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const jobOpenings = [
    {
      id: 1,
      title: 'Customer Support Executive',
      description: 'Handle multi-channel customer inquiries. Location: Remote. Full Time.',
    },
    {
      id: 2,
      title: 'Data Analyst',
      description: 'Analyse and visualise business data to generate insights. Location: Gurgaon. Full Time.',
    },
    {
      id: 3,
      title: 'Process Automation Engineer',
      description: 'Build automation workflows and scripts to improve efficiency. Location: Bangalore. Full Time.',
    },
  ];

  return (
    <Box>
      <Header />
      
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
              Join Our Team at AdmirerX
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
              We're always looking for talented people who are passionate about creating 
              exceptional BPO and tech solutions.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Current Openings Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F8F9FC' }}>
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
              Current Openings
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {jobOpenings.map((job) => (
              <Grid item xs={12} md={4} key={job.id}>
                <JobCard>
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
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#5C5C5C',
                        lineHeight: 1.6,
                      }}
                    >
                      {job.description}
                    </Typography>
                  </CardContent>
                </JobCard>
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
              Ready to Make an Impact?
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="https://forms.google.com/your-application-form"
              target="_blank"
              rel="noopener noreferrer"
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
              Apply Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Career;
