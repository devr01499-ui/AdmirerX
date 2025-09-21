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
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Partner With Us', path: '/partner' },
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
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2,
        borderBottom: '1px solid #E0E0E0'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#4C4CFF',
            fontWeight: 'bold',
            fontSize: '20px'
          }}
        >
          AdmirerX
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
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
                    color: location.pathname === item.path ? '#4C4CFF' : '#1F1F1F',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    fontSize: '16px',
                    display: 'block',
                    padding: '8px 0',
                    borderBottom: location.pathname === item.path ? '2px solid #4C4CFF' : '2px solid transparent',
                    transition: 'all 0.2s ease-in-out'
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
        position="sticky"
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#1F1F1F',
          boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'box-shadow 0.3s ease-in-out',
          borderBottom: '1px solid #E0E0E0'
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
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  src="/assets/logo.svg"
                  alt="AdmirerX Logo"
                  sx={{
                    height: 40,
                    width: 'auto',
                    mr: 1,
                    display: { xs: 'none', sm: 'block' }
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: '#4C4CFF',
                    fontWeight: 'bold',
                    fontSize: { xs: '20px', sm: '24px' },
                    display: 'block'
                  }}
                >
                  AdmirerX
                </Typography>
              </Box>
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
                        fontWeight: location.pathname === item.path ? 600 : 400,
                        color: location.pathname === item.path ? '#4C4CFF' : '#1F1F1F',
                        position: 'relative',
                        fontSize: '16px',
                        padding: '8px 0',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          color: '#4C4CFF',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: '#4C4CFF',
                            transform: 'scaleX(1)',
                            transition: 'transform 0.2s ease-in-out',
                          },
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-2px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: '#4C4CFF',
                          transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                          transition: 'transform 0.2s ease-in-out',
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
                sx={{ color: '#1F1F1F' }}
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
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
