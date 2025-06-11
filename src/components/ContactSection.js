// src/components/ContactSection.js
import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Paper, Link, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: theme.vars.palette.background.default, // ใช้ background.default จาก theme
        color: theme.vars.palette.text.primary,
        overflow: 'hidden',
        borderTop: `1px solid ${theme.vars.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: { xs: 6, md: 8 },
              color: theme.vars.palette.primary.light, // ใช้ primary.light จาก theme
              textShadow: `0 0 8px ${theme.vars.palette.primary.light}44, 0 4px 10px rgba(0,0,0,0.3)`,
            }}
          >
            ติดต่อผม
          </Typography>

          <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="center">
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: { xs: 3, md: 5 },
                    // borderRadius: 16, // ถูกกำหนดโดย MuiPaper ใน theme แล้ว
                    backgroundColor: theme.vars.palette.background.paper, // ใช้ background.paper จาก theme
                    boxShadow: theme.vars.shadows[8],
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.vars.shadows[12],
                    }
                  }}
                >
                  <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, color: theme.vars.palette.primary.main }}>
                    สนใจร่วมงาน?
                  </Typography>
                  <Typography variant="body1" paragraph color={theme.vars.palette.text.secondary}>
                    ไม่ว่าจะเป็นโปรเจกต์ใหม่ โอกาสในการทำงาน หรือแค่ต้องการทักทาย อย่าลังเลที่จะติดต่อผมได้เลยครับ
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmailIcon sx={{ mr: 2, color: theme.vars.palette.secondary.main }} />
                      <Typography variant="body1">
                        <Link href="mailto:srisukapisit28@gmail.com" color="inherit">srisukapisit28@gmail.com</Link>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PhoneIcon sx={{ mr: 2, color: theme.vars.palette.secondary.main }} />
                      <Typography variant="body1">
                        <Link href="tel:+66958837559" color="inherit">095-883-7559</Link>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon sx={{ mr: 2, color: theme.vars.palette.secondary.main }} />
                      <Typography variant="body1">
                        Bangkok, Thailand
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <IconButton href="https://www.linkedin.com/in/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%82-276bb6274/" target="_blank" rel="noopener" sx={{ color: theme.vars.palette.primary.main, '&:hover': { color: theme.vars.palette.secondary.main } }}> {/* Adjusted hover color */}
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="https://github.com/ApisitSrisuk" target="_blank" rel="noopener" sx={{ color: theme.vars.palette.primary.main, '&:hover': { color: theme.vars.palette.secondary.main } }}> {/* Adjusted hover color */}
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: { xs: 3, md: 5 },
                    // borderRadius: 16, // ถูกกำหนดโดย MuiPaper ใน theme แล้ว
                    backgroundColor: theme.vars.palette.background.paper, // ใช้ background.paper จาก theme
                    boxShadow: theme.vars.shadows[8],
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(3),
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.vars.shadows[12],
                    }
                  }}
                >
                  <Typography variant="h5" component="h4" gutterBottom sx={{ fontWeight: 600, color: theme.vars.palette.primary.main }}>
                    ส่งข้อความถึงผม
                  </Typography>
                  <TextField
                    fullWidth
                    label="ชื่อของคุณ"
                    variant="outlined" // เปลี่ยนเป็น outlined เพื่อใช้ styling จาก theme.js
                    color="primary"
                    InputProps={{ sx: { color: theme.vars.palette.text.primary } }}
                    InputLabelProps={{ sx: { color: theme.vars.palette.text.secondary } }}
                  />
                  <TextField
                    fullWidth
                    label="อีเมลของคุณ"
                    variant="outlined" // เปลี่ยนเป็น outlined
                    color="primary"
                    type="email"
                    InputProps={{ sx: { color: theme.vars.palette.text.primary } }}
                    InputLabelProps={{ sx: { color: theme.vars.palette.text.secondary } }}
                  />
                  <TextField
                    fullWidth
                    label="หัวข้อ"
                    variant="outlined" // เปลี่ยนเป็น outlined
                    color="primary"
                    InputProps={{ sx: { color: theme.vars.palette.text.primary } }}
                    InputLabelProps={{ sx: { color: theme.vars.palette.text.secondary } }}
                  />
                  <TextField
                    fullWidth
                    label="ข้อความ"
                    variant="outlined" // เปลี่ยนเป็น outlined
                    color="primary"
                    multiline
                    rows={5}
                    InputProps={{ sx: { color: theme.vars.palette.text.primary } }}
                    InputLabelProps={{ sx: { color: theme.vars.palette.text.secondary } }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                    type="button"
                  >
                    ส่งข้อความ
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;