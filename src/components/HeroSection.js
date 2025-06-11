// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button, Avatar, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const HeroBackground = styled(Box)(({ theme }) => ({
  height: '100vh',
  minHeight: '700px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/galaxy-hero-bg.jpg)`, // พื้นหลังที่เป็นรูปกาแล็กซี่
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: theme.vars.palette.text.primary,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // ปรับปรุง Radial Gradient ให้มีความลึกและกลมกลืนกับพื้นหลังหลักมากขึ้น
    background: `radial-gradient(circle at center,
      ${theme.vars.palette.background.default}50 0%,
      ${theme.vars.palette.background.default}C0 50%, /* เพิ่มความเข้มตรงกลาง */
      ${theme.vars.palette.background.default} 100%)`, /* ขอบมืด */
    zIndex: 1,
  },
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(5),
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const avatarVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -90 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring',
      stiffness: 70,
      damping: 10,
    },
  },
};

const HeroSection = () => {
  const theme = useTheme();

  return (
    <HeroBackground id="home">
      <HeroContent maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar Section */}
          <motion.div variants={avatarVariants}>
            <Avatar
              src={process.env.PUBLIC_URL + '/images/profile-photo.jpg'}
              alt="Apisit Srisuk"
              sx={{
                width: { xs: 160, sm: 200, md: 220 },
                height: { xs: 160, sm: 200, md: 220 },
                margin: '0 auto',
                border: `8px solid ${theme.vars.palette.primary.light}`,
                boxShadow: theme.vars.shadows[6],
                animation: 'pulse-avatar-border 3s infinite ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                }
              }}
            />
          </motion.div>

          {/* ชื่อและคำบรรยาย */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mt: { xs: 4, md: 6 },
                fontWeight: 800,
                // ปรับปรุง Text Shadow ให้ดูมี Glow Effect
                textShadow: `0 0 10px ${theme.vars.palette.primary.light}55, 0 0 20px ${theme.vars.palette.primary.main}44, 0 4px 15px rgba(0,0,0,0.7)`,
                color: theme.vars.palette.text.primary,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              สวัสดีครับ, ผม Apisit Srisuk
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mt: { xs: 2, md: 3 },
                mb: { xs: 5, md: 7 },
                maxWidth: 'md',
                mx: 'auto',
                opacity: 0.9,
                fontWeight: 400,
                color: theme.vars.palette.text.primary,
                lineHeight: 1.7,
              }}
            >
              ยินดีต้อนรับสู่เว็บไซต์ส่วนตัวของผม ที่นี่คุณจะได้รู้จักผมและผลงานของผมมากขึ้น
              ในฐานะ Web Developer และผู้หลงใหลใน UI/UX
            </Typography>
          </motion.div>

          {/* ปุ่ม Call to Action */}
          <motion.div variants={itemVariants}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: { xs: 6, md: 8 },
                py: { xs: 1.8, md: 2.2 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 700,
                boxShadow: theme.vars.shadows[6],
                background: `linear-gradient(135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 100%)`,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.vars.shadows[10],
                  background: `linear-gradient(135deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.primary.dark} 100%)`,
                }
              }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              รู้จักผมเพิ่มเติม
            </Button>
          </motion.div>
        </motion.div>
      </HeroContent>

      {/* Keyframes สำหรับ animation ของ Avatar border */}
      <style>{`
        @keyframes pulse-avatar-border {
          0% { border-color: ${theme.vars.palette.primary.light}; box-shadow: ${theme.vars.shadows[6]}; }
          50% { border-color: ${theme.vars.palette.secondary.light}; box-shadow: ${theme.vars.shadows[10]}; }
          100% { border-color: ${theme.vars.palette.primary.light}; box-shadow: ${theme.vars.shadows[6]}; }
        }
      `}</style>
    </HeroBackground>
  );
};

export default HeroSection;