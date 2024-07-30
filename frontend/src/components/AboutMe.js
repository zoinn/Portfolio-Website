// src/components/HomePage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const MainPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h3" color="textSecondary" paragraph>
          <strong>Proven Programmer & Tester</strong>
        </Typography>
        <Typography variant="h4" color="textSecondary" paragraph>
          I am a Comp. Sci graduate with a talent for coding, and if I'm not coding then I'm bouldering.
        </Typography>
      </Box>
    </Container>
  );
};

export default MainPage;
