// src/components/HomePage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h1" color="textPrimary" gutterBottom>
          Zain Siu's Portfolio
        </Typography>
        <Typography variant="h4" color="textSecondary" paragraph>
          Welcome to my portfolio!
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
