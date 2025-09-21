import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Import pages
import Career from './pages/Career';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';

// Create theme with the specified palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#4C4CFF', // Bluish-purple for CTAs, links
    },
    secondary: {
      main: '#6A00FF', // Purple accent (hover states)
    },
    accent: {
      main: '#FF6B00', // Orange (buttons/icons)
    },
    text: {
      primary: '#1F1F1F', // Main headings
      secondary: '#5C5C5C', // Body copy
    },
    background: {
      default: '#FFFFFF', // Page background
    },
    surface: {
      main: '#F8F9FC', // Card backgrounds
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  spacing: 8, // Base unit of 8px
  shape: {
    borderRadius: 12, // Default border radius
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(76, 76, 255, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(76, 76, 255, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/career" element={<Career />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
