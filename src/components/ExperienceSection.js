// src/components/ExperienceSection.js
import React from 'react';
import { Box, Typography, Container, Paper, Chip, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// ข้อมูลประสบการณ์ทำงานของคุณ - ลบ 'logo' ออก
const experiences = [
  {
    id: 1,
    title: 'System Solutions Specialist',
    company: 'Metro Machinery Group',
    type: 'เต็มเวลา',
    dates: 'ธ.ค. 2024 - ปัจจุบัน',
    duration: '7 เดือน',
    skills: ['Consulting', 'Microsoft Power Apps', 'CRM', 'ERP', 'Azure', 'Data Analysis', 'Problem Solving', 'Project Management', 'Business Process', 'SQL', 'Dynamics 365', 'Power BI'],
  },
  {
    id: 2,
    title: 'Solutions Consultant',
    company: 'Metro Systems Corporation Public Company Limited',
    type: 'เต็มเวลา',
    dates: 'พ.ค. 2024 - ธ.ค. 2024',
    duration: '8 เดือน',
    skills: ['Consulting', 'Microsoft Power Apps', 'Business Analysis', 'Requirement Gathering', 'System Design', 'Client Management', 'Presentations'],
  },
  {
    id: 3,
    title: 'Application Developer',
    company: 'ZyGen Co., Ltd.',
    type: 'การฝึกงาน',
    dates: 'พ.ค. 2023 - มี.ค. 2024',
    duration: '11 เดือน',
    workMode: 'ทำงานแบบผสม',
    skills: ['Consulting', 'Microsoft Power Apps', 'Frontend Development', 'Backend Development'],
  },
  {
    id: 4,
    title: 'Software Developer',
    company: 'Billion B Property',
    type: 'การฝึกงาน',
    dates: 'มิ.ย. 2021 - ส.ค. 2021',
    duration: '3 เดือน',
    skills: ['C++', 'Python', 'Algorithm Development'], // สมมติว่ามีทักษะเหล่านี้
  },
];

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
  hidden: { opacity: 0, x: -50 }, // เลื่อนมาจากด้านซ้าย
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ExperienceSection = () => {
  const theme = useTheme();
  // ค่าเหล่านี้ถูกกำหนดโดยตรงใน sx ด้านล่าง แต่จะคงตัวแปรไว้เผื่อต้องการใช้ในอนาคต
  const dotSize = 28;
  const halfDotSize = dotSize / 2;

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: theme.vars.palette.background.default, // พื้นหลังโดยรวมยังคงตาม Theme
        color: theme.vars.palette.text.primary,
        overflow: 'hidden',
        borderTop: `1px solid ${theme.vars.palette.divider}`,
      }}
    >
      <Container maxWidth="lg"> {/* maxWidth="lg" คือ 1280px แต่ Timeline Box จะถูกจำกัดด้วย maxWidth อีกที */}
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
            เส้นทางอาชีพของผม
          </Typography>

          <Box
            sx={{
              position: 'relative',
              // ปรับ maxWidth ของ Timeline Container ให้กว้างขึ้นตามที่คุณต้องการ
              // โดยอาจจะกำหนดเป็นค่าคงที่ หรือเป็น '100%' เพื่อให้ใช้พื้นที่ทั้งหมดของ Container "lg"
              // ในที่นี้ ผมจะกำหนดเป็นค่าคงที่ที่กว้างขึ้น เช่น 900px หรือ 1000px
              maxWidth: '900px', // ทำให้ Timeline รวมกว้างขึ้น
              margin: '0 auto',
              px: { xs: 0, sm: 2 }, // padding รอบๆ timeline container
              '&::after': { // เส้นแนวตั้งของ Timeline
                content: '""',
                position: 'absolute',
                width: '4px',
                backgroundColor: theme.vars.palette.primary.main,
                top: 0,
                bottom: 0,
                left: { xs: '20px', sm: '28px' }, // ตำแหน่งเส้นยังคงอยู่ด้านซ้ายเสมอ
                zIndex: 0,
              },
            }}
          >
            {experiences.map((exp) => ( // ลบ index ออก เพราะไม่ได้ใช้ isEven แล้ว
              <motion.div variants={itemVariants} key={exp.id}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: { xs: 4, md: 6 }, // ช่องว่างระหว่างแต่ละรายการ
                    position: 'relative',
                    // ปรับ pl ให้มีพื้นที่สำหรับจุดและเส้นแนวนอน
                    pl: { xs: '60px', sm: '80px' }, // 20px (left for line) + 30px (line width) + 30px (gap)
                    '&:last-child': {
                      mb: 0,
                    }
                  }}
                >
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '8px', sm: '16px' }, // 20px (left for main line) - halfDotSize (14px) = 6px. ลองใช้ 16px สำหรับ sm+
                      top: '10px',
                      width: dotSize,
                      height: dotSize,
                      backgroundColor: theme.vars.palette.primary.main,
                      border: `3px solid ${theme.vars.palette.primary.light}`,
                      borderRadius: '50%',
                      zIndex: 1,
                      boxShadow: `0 0 15px ${theme.vars.palette.primary.light}CC, 0 0 25px ${theme.vars.palette.primary.main}88`,
                      transform: 'translateZ(0)',
                      transition: 'all 0.4s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.4) translateZ(10px)',
                        boxShadow: `0 0 25px ${theme.vars.palette.primary.light}FF, 0 0 40px ${theme.vars.palette.primary.main}DD`,
                      }
                    }}
                  />
                  {/* Horizontal Connector Line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '32px', sm: '40px' }, // ตำแหน่งเริ่มต้นของเส้นแนวนอน (หลัง Dot)
                      top: '21px', // ตรงกลาง Dot
                      width: { xs: '20px', sm: '30px' }, // ความยาวเส้นแนวนอน
                      height: '2px',
                      backgroundColor: theme.vars.palette.primary.main,
                      zIndex: 0,
                      transform: 'translateZ(0)',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  />
                  <Paper
                    sx={{
                      flexGrow: 1, // การ์ดจะขยายเต็มพื้นที่ที่เหลือ
                      p: { xs: 2, md: 3 },
                      backgroundColor: theme.vars.palette.common.white, // การ์ดเป็นสีขาวเสมอ
                      boxShadow: theme.vars.shadows[6],
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out',
                      borderRadius: '12px',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: theme.vars.shadows[15],
                        border: `1px solid ${theme.vars.palette.primary.main}CC`,
                        backgroundColor: theme.vars.palette.common.white,
                      },
                      // กำหนดความกว้างของการ์ดให้เป็น 100% ลบด้วยพื้นที่ด้านซ้ายสำหรับ Timeline
                      width: { xs: 'calc(100% - 60px)', sm: 'calc(100% - 80px)' }, // ใช้ค่า pl ตรงกัน
                    }}
                  >
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: theme.vars.palette.primary.dark, mb: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.vars.palette.grey[800], mb: 0.5 }}>
                      {exp.company} - {exp.type}
                    </Typography>
                    <Typography variant="body2" color={theme.vars.palette.grey[600]} sx={{ mb: 1 }}>
                      {exp.dates} ({exp.duration}) {exp.workMode && ` • ${exp.workMode}`}
                    </Typography>
                    {exp.skills && exp.skills.length > 0 && (
                      <Stack direction="row" flexWrap="wrap" spacing={1} useFlexGap sx={{ mt: 1 }}>
                        {exp.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            variant="filled"
                            size="small"
                            sx={{
                                backgroundColor: theme.vars.palette.primary.light,
                                color: theme.vars.palette.primary.dark,
                                fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    )}
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExperienceSection;