// src/components/AboutSection.js
import React from 'react';
import { Box, Typography, Container, Grid, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

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

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
};

const AboutSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: theme.vars.palette.background.paper, // ใช้สี Paper สำหรับ Section นี้
        color: theme.vars.palette.text.primary,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
        borderTop: `1px solid ${theme.vars.palette.divider}`,
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
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
              color: theme.vars.palette.primary.light,
              textShadow: `0 0 8px ${theme.vars.palette.primary.light}44, 0 4px 10px rgba(0,0,0,0.3)`,
            }}
          >
            เกี่ยวกับผม
          </Typography>

          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={imageVariants}>
                <Avatar
                  src={process.env.PUBLIC_URL + '/images/profile-photo.jpg'}
                  alt="Apisit Srisuk Profile"
                  sx={{
                    width: '100%',
                    height: { xs: 300, sm: 400, md: 500 },
                    maxWidth: 500,
                    mx: 'auto',
                    borderRadius: 4,
                    boxShadow: theme.vars.shadows[8], // Shadow ที่ชัดเจนขึ้น
                    objectFit: 'cover',
                    border: `4px solid ${theme.vars.palette.primary.dark}`,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)', // ยกขึ้นเล็กน้อย
                        boxShadow: theme.vars.shadows[12], // Shadow เข้มขึ้นอีก
                    }
                  }}
                  variant="rounded"
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={textVariants}>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: theme.vars.palette.primary.main,
                    mb: 3,
                  }}
                >
                  สวัสดีครับ, ผมชื่อ อภิสิทธิ์ ศรีสุข
                </Typography>
                {/* ข้อความที่ถูกแก้ไขตามที่คุณต้องการ */}
                <Typography variant="body1" paragraph>
                  ผมจบมาจาก คณะครุศาสตร์อุตสาหกรรม เทคโนโลยีคอมพิวเตอร์ ภาควิชาคอมพิวเตอร์ศึกษา
                  มีความถนัดในการพัฒนาเว็บไซต์ โดยใช้ React, HTML, CSS, JavaScript, PHP, Laravel และ Node.js เป็นหลัก
                </Typography>
                <Typography variant="body1">
                  ผมเชื่อมั่นในการเรียนรู้สิ่งใหม่ๆ และการพัฒนาตัวเองอยู่เสมอ เพื่อให้มั่นใจว่าผลงานของผมจะตอบโจทย์ความต้องการของลูกค้าและผู้ใช้งานได้อย่างดีที่สุด
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;