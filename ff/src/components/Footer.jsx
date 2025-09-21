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
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();

  const footerSections = [
    {
      title: 'Services',
      links: ['Customer Support', 'HR & Recruitment', 'Lead Generation', 'Technical Helpdesk', 'Data Processing & Back Office', 'Custom BPO Solutions'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Partnership'],
    },
  ];

  const socialIcons = [
    { icon: LinkedInIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
    { icon: TwitterIcon, url: 'javascript:void(0)', enabled: false },
    { icon: InstagramIcon, url: 'https://x.com/AdmirerX_?t=h-zViP_Hb5-wBlkYG5E1TA&s=09', enabled: true },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 6,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.secondary.light}`
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Left Section - Logo and Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.primary.main,
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
                          color: '#ffffff',
              }}
            >
              Management@admirerx.net
            </Typography>
            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialIcons.map(({ icon: Icon, url, enabled }, index) => (
                <IconButton
                  key={index}
                  href={enabled ? url : undefined}
                  target={enabled ? "_blank" : undefined}
                  rel={enabled ? "noopener noreferrer" : undefined}
                  disabled={!enabled}
                  sx={{
                    color: enabled ? '#ffffff' : '#666666',
                    opacity: enabled ? 1 : 0.5,
                    cursor: enabled ? 'pointer' : 'not-allowed',
                    '&:hover': enabled ? {
                      color: theme.palette.primary.main,
                      transform: 'translateY(-2px)',
                    } : {
                      transform: 'none',
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
                <Grid item xs={6} sm={4} key={section.title}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.primary.main,
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
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '14px',
                          '&:hover': {
                            color: '#ffffff',
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
            borderTop: `1px solid ${theme.palette.secondary.light}`,
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © 2024 AdmirerX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
