// src/components/PortfolioSection.js
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

// Motion Variants
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CustomCard = styled(motion(Card))(({ theme }) => ({
  borderRadius: 16,
  backgroundColor: theme.vars.palette.background.paper,
  boxShadow: theme.vars.shadows[6], // Shadow เข้มขึ้นเล็กน้อย
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s cubic-bezier(.17,.67,.83,.67), box-shadow 0.3s cubic-bezier(.17,.67,.83,.67)',
  '&:hover': {
    transform: 'translateY(-12px)', // ยกขึ้นมากกว่าเดิม
    boxShadow: theme.vars.shadows[12], // Shadow เข้มขึ้นอีก
  },
}));

// ข้อมูลโปรเจกต์ (คุณสามารถเพิ่ม/แก้ไขได้ตามต้องการ)
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'พัฒนาแพลตฟอร์มอีคอมเมิร์ซเต็มรูปแบบด้วย React และ Node.js พร้อมระบบจัดการสินค้าและตะกร้าสินค้า',
    image: process.env.PUBLIC_URL + '/images/project1.jpg',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description: 'แอปพลิเคชันแชทแบบเรียลไทม์ที่สร้างด้วย React, Socket.IO และ Express.js',
    image: process.env.PUBLIC_URL + '/images/project2.jpg',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'สร้างบล็อกส่วนตัวที่เน้นประสิทธิภาพและ SEO ด้วย Next.js และ Markdown rendering',
    image: process.env.PUBLIC_URL + '/images/project3.jpg',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'ระบบจัดการงานที่ช่วยให้ติดตามโปรเจกต์และทำงานร่วมกันได้อย่างมีประสิทธิภาพ',
    image: process.env.PUBLIC_URL + '/images/project4.jpg',
    demoLink: '#',
    githubLink: '#',
  },
];

const PortfolioSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="portfolio"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: theme.vars.palette.background.default,
        color: theme.vars.palette.text.primary,
        overflow: 'hidden',
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
            ผลงานของผม
          </Typography>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <CustomCard variants={cardVariants}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, color: theme.vars.palette.primary.main }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color={theme.vars.palette.text.secondary}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, justifyContent: 'flex-end', borderTop: `1px solid ${theme.vars.palette.divider}` }}>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LaunchIcon />}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        '&:hover': {
                          background: `linear-gradient(90deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 100%)`, // เปลี่ยนเป็น primary gradient
                          color: theme.vars.palette.primary.contrastText,
                          boxShadow: theme.vars.shadows[4],
                        }
                      }}
                    >
                      Demo
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        '&:hover': {
                          background: `linear-gradient(90deg, ${theme.vars.palette.secondary.light} 0%, ${theme.vars.palette.secondary.main} 100%)`, // เปลี่ยนเป็น secondary gradient
                          color: theme.vars.palette.secondary.contrastText,
                          boxShadow: theme.vars.shadows[4],
                        }
                      }}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PortfolioSection;