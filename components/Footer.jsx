import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const theme = useTheme();

  const footerSections = [
    {
      title: 'Services',
      links: ['Customer Support', 'Technical Helpdesk', 'Data Processing', 'Back-Office Operations'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Partnership'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Case Studies', 'Blog', 'Support Center'],
    },
    {
      title: 'Contact',
      links: ['Get in Touch', 'Schedule a Call', 'Support', 'Partnership'],
    },
  ];

  const socialIcons = [
    { icon: LinkedInIcon, url: 'https://linkedin.com/company/admirerx' },
    { icon: TwitterIcon, url: 'https://twitter.com/admirerx' },
    { icon: YouTubeIcon, url: 'https://youtube.com/@admirerx' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F8F9FC',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Left Section - Logo and About */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: '#4C4CFF',
                fontWeight: 'bold',
                fontSize: '24px',
                mb: 2,
              }}
            >
              AdmirerX
            </Typography>
            <Typography
              variant="body2"
              sx={{ 
                mb: 3, 
                maxWidth: 300,
                color: '#5C5C5C',
                lineHeight: 1.6,
              }}
            >
              We go beyond outsourcing — we solve complex business challenges and deliver 
              measurable results. Our solutions are designed to increase efficiency, 
              enhance customer satisfaction and unlock new opportunities for your business.
            </Typography>
            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialIcons.map(({ icon: Icon, url }, index) => (
                <IconButton
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#5C5C5C',
                    '&:hover': {
                      color: '#4C4CFF',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Right Section - Footer Links */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {footerSections.map((section) => (
                <Grid item xs={6} sm={3} key={section.title}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#1F1F1F',
                      fontSize: '16px',
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {section.links.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        sx={{
                          color: '#5C5C5C',
                          textDecoration: 'none',
                          fontSize: '14px',
                          '&:hover': {
                            color: '#4C4CFF',
                            textDecoration: 'underline',
                          },
                          transition: 'color 0.2s ease-in-out',
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Border */}
        <Box
          sx={{
            borderTop: '1px solid #E0E0E0',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#5C5C5C' }}>
            © 2024 AdmirerX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
