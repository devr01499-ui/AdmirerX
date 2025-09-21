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
      links: ['Customer Support', 'Technical Helpdesk', 'Data Processing', 'Consulting'],
    },
    {
      title: 'Products',
      links: ['BPO Solutions', 'Analytics Platform', 'Integration Tools', 'API Services'],
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
        backgroundColor: 'secondary.main',
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
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '24px',
                mb: 2,
              }}
            >
              AdmirerX
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 300 }}
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
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'accent.main',
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
                      color: 'text.primary',
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
                          color: 'text.secondary',
                          textDecoration: 'none',
                          fontSize: '14px',
                          '&:hover': {
                            color: 'primary.main',
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
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 AdmirerX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
