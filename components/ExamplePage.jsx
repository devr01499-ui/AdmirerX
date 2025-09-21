import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from './Header';

const ExamplePage = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3, color: '#1F1F1F' }}>
          Example Page with Header
        </Typography>
        <Typography variant="body1" sx={{ color: '#5C5C5C', lineHeight: 1.6 }}>
          This is an example page demonstrating the AdmirerX Header component. 
          The header includes:
        </Typography>
        <Box component="ul" sx={{ mt: 2, pl: 3 }}>
          <li>Responsive design (desktop + mobile)</li>
          <li>White background with bluish-purple theme</li>
          <li>Active route highlighting</li>
          <li>Hover effects with underline animation</li>
          <li>Mobile hamburger menu</li>
          <li>Clickable logo that navigates to home</li>
        </Box>
      </Container>
    </Box>
  );
};

export default ExamplePage;
