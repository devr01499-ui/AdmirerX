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
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 71, 0.15)',
    border: '2px solid #000047',
  },
}));

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: 'HR & Recruitment',
      description: 'Our comprehensive HR and recruitment services handle everything from talent sourcing to onboarding. We use advanced assessment tools and industry expertise to find the perfect candidates who align with your company culture and business objectives.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'End-to-end recruitment process management',
        'Advanced AI-powered candidate screening',
        'Compliance with local and international labor laws',
        'Seamless onboarding and orientation programs',
        'Talent pipeline development and management',
        'Employer branding and candidate experience optimization'
      ]
    },
    {
      title: 'Customer Support',
      description: 'Provide exceptional 24/7 customer support across all channels. Our multilingual teams deliver brand-aligned communication with rapid response times, ensuring customer satisfaction and loyalty while maintaining your brand voice and values.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Multi-channel support (voice, email, chat, social media)',
        'Brand-aligned communication and tone management',
        'Custom SLA management and performance tracking',
        'Quality monitoring and detailed reporting analytics',
        'Multilingual support capabilities',
        'Customer satisfaction and retention strategies'
      ]
    },
    {
      title: 'Lead Generation',
      description: 'Drive revenue growth with our strategic lead generation and inside sales services. We deliver qualified prospects through compliant, data-driven outreach campaigns that target your ideal customer profile and maximize conversion rates.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Smart lead qualification and scoring systems',
        'Compliance-first approach to outreach campaigns',
        'Advanced analytics and conversion rate optimization',
        'Scalable campaign management across industries',
        'CRM integration and lead nurturing workflows',
        'Performance-based reporting and ROI measurement'
      ]
    },
    {
      title: 'Technical Helpdesk',
      description: 'Deliver exceptional technical support with our expert helpdesk services. We provide rapid response times and comprehensive issue resolution across multiple tiers, ensuring minimal downtime and maximum user satisfaction for your customers.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Abstract representation of technical support and connectivity
      features: [
        'Multi-tier technical support (L1, L2, L3)',
        'SLA-driven resolution times and uptime guarantees',
        'Remote diagnostics and troubleshooting capabilities',
        'Knowledge base management and self-service portals',
        'Proactive system monitoring and maintenance',
        'Customer training and education programs'
      ]
    },
    {
      title: 'Data Processing & Back Office',
      description: 'Transform raw data into actionable insights with our comprehensive data processing and back-office services. We ensure accuracy, efficiency, and compliance while handling high-volume data operations and administrative tasks.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'High-volume data entry and validation processes',
        'Advanced analytics and business intelligence reporting',
        'Process automation and workflow optimization',
        'Insight generation and data visualization',
        'Quality assurance and error detection systems',
        'Compliance with data protection regulations'
      ]
    },
    {
      title: 'Custom BPO Solutions',
      description: 'Get tailored BPO solutions designed specifically for your unique business needs. We create flexible workflows and scalable team structures that integrate seamlessly with your existing operations and business objectives.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Bespoke workflow design and implementation',
        'Scalable team allocation and resource management',
        'Custom system integrations and API development',
        'Performance optimization and continuous improvement',
        'Dedicated account management and strategic planning',
        'Flexible engagement models and pricing structures'
      ]
    }
  ];

  const whyChoosePoints = [
    {
      title: "Cost Reduction and Efficiency",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Reduce operational costs by up to 40%",
        "Streamlined processes eliminate waste",
        "Predictable monthly pricing model",
        "ROI-focused service delivery"
      ]
    },
    {
      title: "Advanced Technology and Automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bullets: [
        "AI-powered process automation",
        "Real-time analytics and reporting",
        "Seamless API integrations",
        "Continuous technology upgrades"
      ]
    },
    {
      title: "Industry Expertise and Compliance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Certified compliance experts",
        "Industry-specific knowledge",
        "GDPR and data protection compliance",
        "Quality assurance frameworks"
      ]
    },
    {
      title: "Scalable and Flexible Solutions",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Scale up or down within 24 hours",
        "Flexible engagement models",
        "Dedicated account management",
        "Customizable service packages"
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ paddingTop: '80px' }}>
      <Helmet>
        <title>Our Services - AdmirerX BPO Solutions</title>
        <meta name="description" content="Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security. From technology to finance, we deliver excellence." />
        <meta property="og:title" content="Our Services - AdmirerX BPO Solutions" />
        <meta property="og:description" content="Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security. From technology to finance, we deliver excellence." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - AdmirerX BPO Solutions" />
        <meta name="twitter:description" content="Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security. From technology to finance, we deliver excellence." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '100vh' }, // FULL viewport height on desktop
          minHeight: '600px', // Minimum height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
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
            Our Services
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
              Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security. From technology to finance, we deliver excellence.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Alternating Layout Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000047' }}>
        <Container maxWidth="xl">
          {services.map((service, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }, 
                alignItems: 'center', 
                mb: 8,
                '&:last-child': { mb: 0 }
              }}
            >
              {/* Content */}
              <Box sx={{ width: { xs: '100%', md: '50%' }, pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 }, pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 } }}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '28px', md: '36px' },
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '16px', md: '18px' },
                    color: '#ffffff',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
                
                {/* Features List */}
                <Box sx={{ mb: 3 }}>
                  {service.features.map((feature, featureIndex) => (
                    <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main', mr: 1.5 }} />
                      <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '16px' }}>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                
                {/* Button */}
                <Button
                  component={Link}
                  to={{
                    pathname: "/contact",
                    search: `?service=${encodeURIComponent(service.title)}`
                  }}
                  href="/contact#contact-form"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '16px',
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
              
              {/* Image */}
              <Box sx={{ width: { xs: '100%', md: '50%' }, mt: { xs: 3, md: 0 } }}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 400 },
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Why Choose AdmirerX Section */}
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
              Why Choose AdmirerX
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
              Our comprehensive approach to business process outsourcing delivers measurable results that drive your business forward. Here's what sets us apart from the competition.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {whyChoosePoints.map((point, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)' } }}>
                  <Box
                    component="img"
                    src={point.image}
                    alt={point.title}
                    sx={{
                      width: '100%',
                      height: 160,
                      objectFit: 'cover',
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
                      {point.title}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {point.bullets.map((bullet, bulletIndex) => (
                        <Box key={bulletIndex} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main', mr: 1 }} />
                          <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '14px' }}>{bullet}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        id="contact-section"
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
                fontSize: { xs: '24px', md: '32px' },
                fontWeight: 700,
                color: 'white',
              }}
            >
              Ready to Transform Your Business Operations?
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
              Discover how AdmirerX's comprehensive BPO services can help your business achieve operational excellence and drive sustainable growth.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Start Partnership
              </Button>
              <Button
                variant="contained"
                size="large"
                href="/contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  backgroundColor: '#FF6B00',
                  '&:hover': {
                    backgroundColor: '#E55A00',
                  },
                }}
              >
                Get Free Consultation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Services;
