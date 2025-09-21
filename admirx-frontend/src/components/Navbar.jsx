import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from './ContactForm';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          AdmirerX
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} onClick={handleDrawerToggle}>
            <ListItemText 
              primary={
                <Link 
                  to={item.path}
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                  }}
                >
                  {item.name}
                </Link>
              }
              sx={{
                '& .MuiListItemText-primary': {
                  cursor: 'pointer',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem onClick={handleDrawerToggle}>
          <Button
            variant="contained"
            onClick={() => setContactFormOpen(true)}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              width: '100%',
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Contact Us
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '24px',
              }}
            >
              AdmirerX
            </Typography>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        fontWeight: location.pathname === item.path ? 600 : 500,
                        color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                        position: 'relative',
                        '&:hover': {
                          color: 'primary.main',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'primary.main',
                            transform: 'scaleX(1)',
                            transition: 'transform 0.2s ease-in-out',
                          },
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-4px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'primary.main',
                          transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                          transition: 'transform 0.2s ease-in-out',
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))}
                <Button
                  variant="contained"
                  onClick={() => setContactFormOpen(true)}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>

      {/* Contact Form Modal */}
      <ContactForm 
        open={contactFormOpen} 
        onClose={() => setContactFormOpen(false)} 
      />
    </>
  );
};

export default Navbar;
