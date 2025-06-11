// src/theme.js
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  // กำหนด color schemes สำหรับ light และ dark mode
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6200EE', // Deep Purple
          light: '#9e47ff',
          dark: '#3f00a5',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#03DAC6', // Teal
          light: '#6efff9',
          dark: '#00a896',
          contrastText: '#000000',
        },
        background: {
          default: '#F5F5F5', // Light background
          paper: '#FFFFFF',   // White paper/card background
        },
        text: {
          primary: '#212121', // Dark text
          secondary: '#757575', // Gray text
        },
        divider: 'rgba(0, 0, 0, 0.12)',
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#BB86FC', // Lighter Purple (for dark mode)
          light: '#E0B5FF',
          dark: '#8E50D0',
          contrastText: '#000000', // Black text on primary for dark mode
        },
        secondary: {
          main: '#03DAC6', // Teal (consistent)
          light: '#6efff9',
          dark: '#00a896',
          contrastText: '#000000',
        },
        background: {
          default: '#0A0A1F', // Very dark blue/purple, galaxy-like
          paper: '#1A1A30',   // Slightly lighter dark for cards/paper
        },
        text: {
          primary: '#E0E0E0', // Off-white text
          secondary: '#B0B0B0', // Lighter gray text
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        mode: 'dark', // Explicitly set mode to dark
      },
    },
  },
  // ส่วนสำคัญ: กำหนด Font Family ที่นี่
  typography: {
    // กำหนดลำดับ Font: Kanit (ไทย), Inter (อังกฤษ/Fallback), sans-serif (Generic Fallback)
    fontFamily: ['"Kanit"', '"Inter"', 'sans-serif'].join(','),
    h1: {
      fontSize: '3.8rem',
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '5.5rem',
      },
      fontWeight: 800, // Make all headings bold by default
    },
    h2: {
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '4rem',
      },
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.2rem',
      '@media (min-width:600px)': {
        fontSize: '2.8rem',
      },
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  // กำหนด overrides สำหรับ Material-UI components
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: '12px', // Slightly rounded buttons
          padding: '12px 24px',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-3px)', // Lift more on hover
          },
        }),
        containedPrimary: ({ theme }) => ({
          background: `linear-gradient(135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 100%)`,
          boxShadow: theme.vars.shadows[6], // Stronger shadow
          '&:hover': {
            background: `linear-gradient(135deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.primary.dark} 100%)`,
            boxShadow: theme.vars.shadows[10], // Darker, larger shadow
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          boxShadow: theme.vars.shadows[4],
          backgroundColor: theme.vars.palette.background.paper,
          transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out', // Smooth transition
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Glassmorphism effect will be applied directly in Header.js for more control
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.primary.light,
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: theme.vars.palette.secondary.main,
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.primary.dark,
          color: theme.vars.palette.primary.contrastText,
          fontWeight: 600,
          borderRadius: '8px',
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: theme.vars.palette.background.default, // Light background for text fields
            '& fieldset': {
              borderColor: theme.vars.palette.divider,
              transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: theme.vars.palette.primary.light,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.vars.palette.primary.main,
              borderWidth: '2px', // Make border thicker when focused
              boxShadow: `0 0 0 3px ${theme.vars.palette.primary.main}4D`, // Subtle glow
            },
          },
          '& .MuiInputLabel-root': {
            color: theme.vars.palette.text.secondary,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.vars.palette.primary.main,
          },
          '& .MuiInputBase-input': {
            color: theme.vars.palette.text.primary,
          },
        }),
      },
    },
  },
});

export default theme;