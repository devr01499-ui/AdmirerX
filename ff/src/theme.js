import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // Bright blue for accents and highlights
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e2e8f0', // Light gray for secondary elements
      light: '#f1f5f9',
      dark: '#cbd5e1',
      contrastText: '#000047',
    },
    background: {
      default: '#000047', // Deep navy blue background
      paper: '#1a1a5c', // Slightly lighter navy for cards
    },
    text: {
      primary: '#ffffff', // White text for contrast on dark background
      secondary: '#ffffff', // White text for all secondary text too
    },
    success: {
      main: '#16a34a', // The "Correct Answer" (positive, affirming green)
      light: '#22c55e',
      dark: '#15803d',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc2626', // The "Incorrect Calculation" (clear, attention-grabbing red)
      light: '#ef4444',
      dark: '#b91c1c',
      contrastText: '#ffffff',
    },
    surface: {
      main: '#1a1a5c', // Dark navy for card surfaces
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#ffffff',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#ffffff',
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    body1: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#ffffff',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#ffffff',
    },
    caption: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    overline: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#ffffff',
    },
  },
  spacing: 8, // Base unit of 8px
  shape: {
    borderRadius: 12, // Card radius
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Modern, non-all-caps look
          borderRadius: '8px', // Slightly rounded corners for a friendly yet precise feel
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: '#1a1a5c',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid #2d2d7a',
          color: '#ffffff',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
            border: '2px solid #3b82f6',
            backgroundColor: '#1a1a5c',
          },
          '& .MuiTypography-root': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000047',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          '& .MuiToolbar-root': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#1a1a5c',
            color: '#ffffff',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3b82f6',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3b82f6',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2d2d7a',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#e2e8f0',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d2d7a',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#3b82f6',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        standardSuccess: {
          backgroundColor: '#1a1a5c',
          color: '#22c55e',
          border: '1px solid #22c55e',
        },
        standardError: {
          backgroundColor: '#1a1a5c',
          color: '#ef4444',
          border: '1px solid #ef4444',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff !important',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default theme;
