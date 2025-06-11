// src/App.js
import React, { useState, useMemo, createContext, useContext } from 'react';
import { ThemeProvider, CssBaseline, Box, IconButton } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for Dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for Light mode

import theme from './theme'; // Import your custom theme

// Import all your components
import Header from './components/Header'; // Assuming you have this
import HeroSection from './components/HeroSection'; // Assuming you have this
import AboutSection from './components/AboutSection'; // Assuming you have this
import SkillsSection from './components/SkillsSection'; // Assuming you have this
import ExperienceSection from './components/ExperienceSection'; // Your new Experience/Career Path section
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Optional: Context for toggling color mode if you need to pass it deeply
// const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const { mode, setMode } = useColorScheme(); // Use useColorScheme from Material-UI

  // Function to toggle between light and dark mode
  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    // ThemeProvider from Material-UI for managing the theme
    // CssBaseline for resetting basic browser CSS and enabling color schemes
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      {/* Floating button for Dark/Light Mode toggle */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for the button
          borderRadius: '50%',
          p: 1,
          boxShadow: 3,
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {mode === 'dark' ? (
            <Brightness7Icon sx={{ color: '#fff' }} /> // Light icon for dark mode
          ) : (
            <Brightness4Icon sx={{ color: '#fff' }} /> // Dark icon for light mode
          )}
        </IconButton>
      </Box>

      {/* Your main content sections */}
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection /> {/* This is your "Career Path" section */}
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;