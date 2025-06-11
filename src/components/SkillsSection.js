// src/components/SkillsSection.js
import React from 'react';
import { Box, Typography, Container, Grid, useTheme, Stack } from '@mui/material';
import { motion } from 'framer-motion';

// Icons for Categories (Material-UI Icons)
import CodeIcon from '@mui/icons-material/Code';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import LayersIcon from '@mui/icons-material/Layers';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BarChartIcon from '@mui/icons-material/BarChart';
import AppsIcon from '@mui/icons-material/Apps'; // AppsIcon is used here

// UPDATED: Import Icons for individual skills from react-icons
// Font Awesome Icons (Fa)
import {
  FaReact, FaPython, FaHtml5, FaNodeJs,
  FaPhp, FaLaravel,
  FaCode
} from 'react-icons/fa';
// Simple Icons (Si) - REMOVED SiMicrosoftpowerautomate from here
import {
  SiNextdotjs, SiTailwindcss, SiMysql,
  SiChakraui, SiXampp // SiMicrosoftpowerautomate ถูกลบออกไป
}
from 'react-icons/si';


// Motion Variants - (No changes here, remains the same)
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// UPDATED: skillsData with new categories and items
const skillsData = [
  {
    category: 'Programming Languages',
    icon: <CodeIcon />,
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'SQL', icon: <FaCode /> },
    ],
  },
  {
    category: 'Web Technologies',
    icon: <WebAssetIcon />,
    items: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Web Design', icon: <DesignServicesIcon /> },
      { name: 'Web Development', icon: <WebAssetIcon /> },
      { name: 'Responsive Web Design', icon: <WebAssetIcon /> },
      { name: 'Back-End Web Development', icon: <CodeIcon /> },
      { name: 'Web Applications', icon: <WebAssetIcon /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <LayersIcon />,
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Laravel', icon: <FaLaravel /> },
      { name: 'MUI', icon: <LayersIcon /> },
      { name: 'Chakra UI', icon: <SiChakraui /> },
    ],
  },
  {
    category: 'Databases',
    icon: <StorageIcon />,
    items: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Microsoft SQL Server', icon: <StorageIcon /> },
    ],
  },
  {
    category: 'Business Intelligence & Data Analysis',
    icon: <BarChartIcon />,
    items: [
      { name: 'IBM Cognos Analytics', icon: <BarChartIcon /> },
      { name: 'Pandas', icon: <FaPython /> },
      { name: 'Power BI', icon: <BarChartIcon /> },
    ],
  },
  {
    category: 'Microsoft Power Platform',
    icon: <CloudQueueIcon />,
    items: [
      { name: 'Microsoft Power Apps', icon: <AppsIcon /> },
      { name: 'Microsoft Power Automate', icon: <AppsIcon /> }, // <--- แก้ไขตรงนี้: ใช้ AppsIcon แทน
    ],
  },
  {
    category: 'Development Tools & Servers',
    icon: <CodeIcon />,
    items: [
      { name: 'XAMPP', icon: <SiXampp /> },
    ],
  },
];

const SkillsSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="skills"
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
            ทักษะและความสามารถ
          </Typography>

          <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} alignItems="stretch">
            {skillsData.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: theme.spacing(3),
                    minHeight: '280px',
                    borderRadius: '16px',
                    transition: 'transform 0.3s cubic-bezier(.17,.67,.83,.67)',
                    cursor: 'default',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: theme.vars.palette.action.hover,
                    }
                  }}
                >
                  <Box sx={{
                    color: theme.vars.palette.primary.main,
                    fontSize: '4.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2.5,
                    borderRadius: '50%',
                    backgroundColor: theme.vars.palette.primary.dark + '20',
                    boxShadow: `0 0 30px ${theme.vars.palette.primary.main}50`,
                    mb: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                  }}>
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    align="center"
                    sx={{
                      fontWeight: 600,
                      color: theme.vars.palette.text.primary,
                      mb: 2.5,
                    }}
                  >
                    {category.category}
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={1.2}
                    sx={{ mt: 2 }}
                  >
                    {category.items.map((skill, skillIndex) => (
                      <Box
                        key={skillIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          py: 0.75,
                          px: 1,
                          borderRadius: '6px',
                          color: theme.vars.palette.text.secondary,
                          transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
                          '&:hover': {
                            color: theme.vars.palette.primary.main,
                            backgroundColor: theme.vars.palette.action.selected,
                          },
                          '& svg': {
                              fontSize: '1.2rem',
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {skill.icon}
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection;