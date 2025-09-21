import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
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

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Partner With Us', path: '/partner-with-us' },
    { name: 'Contact', path: '/contact' }
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
    <Box sx={{ width: 280 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        p: 2,
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} onClick={handleDrawerToggle} sx={{ px: 3 }}>
            <ListItemText 
              primary={
                <Link 
                  to={item.path}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#ffffff',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    fontSize: '16px',
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.name}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#ffffff',
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderTop: 'none',
          borderRadius: '0px 0px 20px 20px',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1000
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            py: 1,
            minHeight: '64px'
          }}>
            {/* Logo */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      color: '#ffffff',
                      letterSpacing: '0.5px',
                      fontSize: { xs: '24px', sm: '28px' }
                    }}
                  >
                    AdmirerX
                  </Typography>
                </Link>

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
                        color: '#ffffff',
                        position: 'relative',
                        fontSize: '16px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#ffffff' }}
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
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: 'rgba(0, 0, 71, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderTop: 'none',
            borderRight: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
