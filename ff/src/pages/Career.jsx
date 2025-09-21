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
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobCard = styled(Card)(({ theme }) => ({
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const CultureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const Career = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const cultureFeatures = [
    {
      icon: <WorkOutlineIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and remote options that support your lifestyle and well-being.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "Growth Opportunities", 
      description: "Structured career progression paths and professional advancement programs with clear milestones.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: "Collaborative Environment",
      description: "Cross-functional team projects and knowledge-sharing initiatives that foster innovation.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const benefits = [
    {
      title: "Career Growth & Development",
      description: "Structured career progression frameworks with mentorship programs, leadership training, and clear advancement pathways to support your professional journey.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Comprehensive Training Programs", 
      description: "Industry-leading training modules, certification opportunities, and continuous skill development programs to enhance your professional capabilities.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Inclusive & Diverse Culture",
      description: "A welcoming environment that celebrates diversity, promotes equity, and values unique perspectives through inclusive policies and practices.",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Performance-Based Rewards",
      description: "Competitive compensation structures, performance bonuses, and recognition programs that reward excellence and achievement.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Comprehensive Benefits Package",
      description: "Complete health and wellness benefits, retirement plans, paid time off, and additional perks that support your overall well-being.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Modern Work Environment", 
      description: "State-of-the-art facilities equipped with latest technology, ergonomic workspaces, and collaborative areas designed for productivity and comfort.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const jobs = [
    {
      title: "Customer Support Representative",
      department: "Customer Experience",
      type: "Full-time", 
      location: "Remote",
      description: "Deliver exceptional customer service and support across multiple channels while maintaining brand standards and customer satisfaction metrics.",
      applyUrl: "#apply"
    },
    {
      title: "Data Entry Specialist",
      department: "Data Operations",
      type: "Full-time",
      location: "Remote", 
      description: "Ensure accurate data processing and management while maintaining high quality standards and meeting operational deadlines.",
      applyUrl: "#apply"
    },
    {
      title: "Technical Support Engineer",
      department: "Technical Support",
      type: "Full-time",
      location: "Remote",
      description: "Provide expert technical assistance and troubleshooting support to ensure optimal system performance and user satisfaction.",
      applyUrl: "#apply"
    },
    {
      title: "Quality Assurance Analyst",
      department: "Quality Assurance",
      type: "Full-time",
      location: "Remote",
      description: "Implement quality control processes and ensure adherence to standards while driving continuous improvement initiatives.",
      applyUrl: "#apply"
    },
    {
      title: "Team Lead – Operations",
      department: "Operations", 
      type: "Full-time",
      location: "Remote",
      description: "Lead operational teams and drive process optimization while ensuring delivery excellence and team development.",
      applyUrl: "#apply"
    },
    {
      title: "Business Development Associate",
      department: "Business Development",
      type: "Full-time",
      location: "Remote",
      description: "Drive business growth through strategic partnerships, client acquisition, and market expansion initiatives.",
      applyUrl: "#apply"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <Box sx={{ paddingTop: '80px' }}>
      <Helmet>
        <title>Careers at AdmirerX - Join Our Team</title>
        <meta name="description" content="Join our team and grow your career with industry leaders. We value teamwork, celebrate our community and diverse cultures, and every team member has the opportunity to grow and excel." />
        <meta property="og:title" content="Careers at AdmirerX - Join Our Team" />
        <meta property="og:description" content="Join our team and grow your career with industry leaders. We value teamwork, celebrate our community and diverse cultures, and every team member has the opportunity to grow and excel." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at AdmirerX - Join Our Team" />
        <meta name="twitter:description" content="Join our team and grow your career with industry leaders. We value teamwork, celebrate our community and diverse cultures, and every team member has the opportunity to grow and excel." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
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
            backgroundImage: `url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
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
            Careers at AdmirerX
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
            Join our team and grow your career with industry leaders
          </Typography>
        </Container>
      </Box>

      {/* Our Culture Section */}
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
              Our Culture
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
              As AdmirerX, we believe that our people are our greatest asset. We value teamwork, celebrate our community and diverse cultures, and every team member has the opportunity to grow and excel.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: { xs: '16px', md: '18px' },
                color: '#ffffff',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Our culture is built on the pillars of excellence, integrity, and continuous learning. We provide comprehensive training programs, mentorship opportunities, and exposure to different areas to help our team members achieve their professional goals.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {cultureFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CultureCard sx={{ maxWidth: 345, height: '100%' }}>
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: '100%',
                      height: 140,
                      objectFit: 'cover',
                      borderRadius: '12px 12px 0 0',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2, textAlign: 'center' }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '20px', md: '24px' },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        textAlign: 'center',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#ffffff',
                        lineHeight: 1.6,
                        textAlign: 'center',
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </CultureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Work With Us Section */}
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
              Why Work With Us
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
              Discover the benefits and opportunities that make AdmirerX an exceptional place to build your career.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ height: '100%', maxWidth: 345, '&:hover': { transform: 'translateY(-4px)' } }}>
                  <Box
                    component="img"
                    src={benefit.image}
                    alt={benefit.title}
                    sx={{
                      width: '100%',
                      height: 140,
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Open Positions Section */}
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
              Open Positions
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {jobs.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <JobCard sx={{ height: '100%' }}>
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
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '14px', md: '16px' },
                        color: '#ffffff',
                        lineHeight: 1.6,
                      }}
                    >
                      {job.description}
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      <Chip label={job.department} size="small" color="primary" />
                      <Chip label={job.type} size="small" variant="outlined" />
                      <Chip label={job.location} size="small" variant="outlined" />
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      href={job.applyUrl}
                      sx={{
                        mt: 1,
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </JobCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Application Form Section */}
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
              Apply for a Position
            </Typography>
          </Box>

          <Card sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
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
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Apply for Position *</InputLabel>
                    <Select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      label="Apply for Position *"
                    >
                      <MenuItem value="Customer Support Representative">Customer Support Representative</MenuItem>
                      <MenuItem value="Data Entry Specialist">Data Entry Specialist</MenuItem>
                      <MenuItem value="Technical Support Engineer">Technical Support Engineer</MenuItem>
                      <MenuItem value="Quality Assurance Analyst">Quality Assurance Analyst</MenuItem>
                      <MenuItem value="Team Lead – Operations">Team Lead – Operations</MenuItem>
                      <MenuItem value="Business Development Associate">Business Development Associate</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Why are you interested in this position? *"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your skills and experience..."
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
                    Submit Application
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

export default Career;
