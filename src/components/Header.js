// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useScrollTrigger, Slide, useTheme, useMediaQuery, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode'; // Icon for Light mode
import DarkModeIcon from '@mui/icons-material/DarkMode';  // Icon for Dark mode
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useColorScheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

// Social Media Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Highlight when the middle of the screen hits the section
        threshold: 0,
      }
    );

    // UPDATED: Added 'articles' back into the sections array
    const sections = ['home', 'about', 'skills', 'experience', 'contact']; // Re-added articles
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mobileOpen) setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinkStyle = (sectionId) => ({
    color: activeSection === sectionId ? theme.vars.palette.primary.light : theme.vars.palette.text.primary,
    fontWeight: activeSection === sectionId ? 700 : 600,
    fontSize: '1.05rem',
    mx: 1.5,
    position: 'relative',
    borderRadius: '8px',
    padding: activeSection === sectionId ? '8px 20px' : '0px 0px',
    transition: 'all 0.3s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(0)',
    perspective: '1000px',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: activeSection === sectionId ? '100%' : '0%',
      height: '3px',
      bottom: '-5px',
      left: '0',
      backgroundColor: theme.vars.palette.primary.main,
      transition: 'width 0.3s ease-in-out, transform 0.3s ease-in-out',
      borderRadius: '2px',
      transform: 'translateZ(0)',
    },
    '&:hover': {
      color: theme.vars.palette.primary.light,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      transform: 'translateY(-3px) translateZ(5px)',
      boxShadow: `0 5px 15px ${theme.vars.palette.primary.main}4D`,
      '&::after': {
        width: '100%',
        transform: 'translateZ(2px)',
      }
    }
  });

  const socialIconStyle = {
    color: theme.vars.palette.text.primary,
    transition: 'color 0.3s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
    borderRadius: '50%',
    padding: '8px',
    '&:hover': {
      color: theme.vars.palette.primary.main,
      transform: 'scale(1.2) rotateY(15deg) translateZ(10px)',
      boxShadow: `0 0 15px ${theme.vars.palette.primary.main}66`,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    }
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.vars.palette.text.primary,
    transition: 'transform 0.3s ease-in-out',
    transformStyle: 'preserve-3d',
    '&:hover': {
        transform: 'rotateY(-5deg) translateZ(10px)',
    }
  };

  const appBarBackgroundStyle = (trigger, currentMode) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: trigger
      ? (currentMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(13, 13, 31, 0.8)')
      : (currentMode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(13, 13, 31, 0.1)'),
    backdropFilter: trigger ? 'blur(20px)' : 'blur(10px)',
    boxShadow: trigger
      ? `0px 4px 30px rgba(0,0,0,0.6), inset 0 0 20px ${currentMode === 'light' ? 'rgba(0,0,0,0.1)' : theme.vars.palette.primary.main + '4D'}`
      : 'none',
    borderBottom: trigger ? `1px solid ${currentMode === 'light' ? theme.vars.palette.divider : 'rgba(255,255,255,0.15)'}` : 'none',
    transition: 'all 0.4s ease-in-out',
    borderRadius: 0,
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  });

  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed" sx={appBarBackgroundStyle(trigger, mode)}>
        <Toolbar sx={{
            maxWidth: 'xl',
            width: '100%',
            margin: '0 auto',
            px: { xs: 2, sm: 3 },
            justifyContent: 'space-between',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            position: 'relative',
        }}>
          <Box
            sx={logoStyle}
            onClick={() => scrollToSection('home')}
          >
            <Box sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: `2px solid ${theme.vars.palette.primary.main}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1,
                fontSize: 24,
                fontWeight: 'bold',
                color: theme.vars.palette.primary.main,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(0)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1) rotateX(10deg) translateZ(10px)',
                    boxShadow: `0 0 10px ${theme.vars.palette.primary.main}4D`,
                }
            }}>
                A
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 800,
                color: theme.vars.palette.text.primary,
                textShadow: '0 1px 3px rgba(0,0,0,0.05)',
                letterSpacing: '-0.02em',
                display: { xs: 'none', sm: 'block' },
                transformStyle: 'preserve-3d',
                transform: 'translateZ(0)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateZ(5px)',
                }
              }}
            >
              Apisit Srisuk
            </Typography>
          </Box>


          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, color: theme.vars.palette.text.primary,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(0)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1) rotateZ(10deg) translateZ(5px)',
                }
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center',
                  transformStyle: 'preserve-3d',
                  perspective: '500px',
              }}>
                <Button sx={navLinkStyle('home')} onClick={() => scrollToSection('home')}>HOME</Button>
                <Button sx={navLinkStyle('about')} onClick={() => scrollToSection('about')}>ABOUT ME</Button>
                <Button sx={navLinkStyle('skills')} onClick={() => scrollToSection('skills')}>SKILLS</Button>
                <Button sx={navLinkStyle('experience')} onClick={() => scrollToSection('experience')}>EXPERIENCE</Button>
                // <Button sx={navLinkStyle('articles')} onClick={() => scrollToSection('articles')}>ARTICLES</Button> {/* ADDED: Articles menu item */}
                <Button sx={navLinkStyle('contact')} onClick={() => scrollToSection('contact')}>CONTACT</Button>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center',
                  transformStyle: 'preserve-3d',
                  perspective: '500px',
              }}>
                <Link href="https://www.linkedin.com/in/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%82-276bb6274/" target="_blank" rel="noopener" sx={{ mr: 1 }}>
                  <IconButton sx={socialIconStyle}>
                    <LinkedInIcon />
                  </IconButton>
                </Link>
                <Link href="https://github.com/ApisitSrisuk" target="_blank" rel="noopener" sx={{ mr: 1 }}>
                  <IconButton sx={socialIconStyle}>
                    <GitHubIcon />
                  </IconButton>
                </Link>
                <Link href="https://www.facebook.com/apisit.srisuk.2025/" target="_blank" rel="noopener" sx={{ mr: 1 }}>
                  <IconButton sx={socialIconStyle}>
                    <FacebookIcon />
                  </IconButton>
                </Link>
                <IconButton
                  sx={{ ml: 2, color: theme.vars.palette.text.primary,
                    borderRadius: '50%',
                    padding: '8px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0)',
                    '&:hover': {
                        transform: 'scale(1.1) rotateX(15deg) translateZ(10px)',
                        boxShadow: `0 0 15px ${theme.vars.palette.secondary.main}66`,
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }
                  }}
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                >
                  {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: mobileOpen ? 1 : 0, height: mobileOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <Box
              sx={{
                width: '100%',
                bgcolor: theme.vars.palette.background.paper,
                color: theme.vars.palette.text.primary,
                py: 2,
                px: 3,
                boxShadow: theme.shadows[3],
                borderTop: `1px solid ${theme.vars.palette.divider}`,
              }}
            >
              <Button fullWidth sx={{ color: theme.vars.palette.text.primary, py: 1 }} onClick={() => scrollToSection('home')}>Home</Button>
              <Button fullWidth sx={{ color: theme.vars.palette.text.primary, py: 1 }} onClick={() => scrollToSection('about')}>About Me</Button>
              <Button fullWidth sx={{ color: theme.vars.palette.text.primary, py: 1 }} onClick={() => scrollToSection('skills')}>Skills</Button>
              <Button fullWidth sx={{ color: theme.vars.palette.text.primary, py: 1 }} onClick={() => scrollToSection('experience')}>EXPERIENCE</Button>
              // <Button fullWidth sx={{ color: theme.vars.palette.text.primary, py: 1 }} onClick={() => scrollToSection('articles')}>ARTICLES</Button> {/* ADDED: Articles menu item for mobile */}
              <Button fullWidth sx={{ color: theme.vars.palette.text.primary, py: 1 }} onClick={() => scrollToSection('contact')}>Contact</Button>
              <Button
                fullWidth
                sx={{ color: theme.vars.palette.text.primary, py: 1, mt: 1 }}
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                startIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              >
                {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Button>
              <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                <Link href="https://www.linkedin.com/in/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C-%E0%B8%A8%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%82-276bb6274/" target="_blank" rel="noopener">
                  <IconButton sx={socialIconStyle}><LinkedInIcon /></IconButton>
                </Link>
                <Link href="https://www.facebook.com/apisit.srisuk.2025/" target="_blank" rel="noopener">
                  <IconButton sx={socialIconStyle}><FacebookIcon /></IconButton>
                </Link>
                <Link href="https://github.com/ApisitSrisuk" target="_blank" rel="noopener">
                  <IconButton sx={socialIconStyle}><GitHubIcon /></IconButton>
                </Link>
              </Stack>
            </Box>
          </motion.div>
        )}
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
