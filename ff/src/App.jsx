import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

// Import theme
import theme from './theme';

// Import pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Career from './pages/Career';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
