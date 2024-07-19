// src/components/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          Github Repositories (Updates Dynamically)
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>

        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
