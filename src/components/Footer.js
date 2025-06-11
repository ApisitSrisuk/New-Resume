// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container, Link, IconButton, Stack, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter'; // Removed TwitterIcon import
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: theme.vars.palette.background.default,
        color: theme.vars.palette.text.secondary,
        textAlign: 'center',
        borderTop: `1px solid ${theme.vars.palette.divider}`,
        position: 'relative',
        zIndex: 1, // Ensure footer is above main body background
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 700, color: theme.vars.palette.text.primary, mb: 2 }}>
          Apisit Srisuk
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Link href="https://www.linkedin.com/in/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%82-276bb6274/" target="_blank" rel="noopener"> {/* UPDATED LINKEDIN LINK */}
            <IconButton sx={{ color: theme.vars.palette.text.secondary, '&:hover': { color: theme.vars.palette.primary.main } }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link href="https://github.com/ApisitSrisuk" target="_blank" rel="noopener"> {/* UPDATED GITHUB LINK */}
            <IconButton sx={{ color: theme.vars.palette.text.secondary, '&:hover': { color: theme.vars.palette.primary.main } }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Link>
          {/* REMOVED: Twitter Link and IconButton */}
          <Link href="https://www.facebook.com/apisit.srisuk.2025/" target="_blank" rel="noopener">
            <IconButton sx={{ color: theme.vars.palette.text.secondary, '&:hover': { color: theme.vars.palette.primary.main } }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Link>
        </Stack>

       
      </Container>
    </Box>
  );
};

export default Footer;