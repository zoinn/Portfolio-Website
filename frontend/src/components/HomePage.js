// src/components/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          My work in progress portfolio!
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
