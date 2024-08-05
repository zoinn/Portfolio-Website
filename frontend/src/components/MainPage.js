import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const MainPage = () => {
  return (
    <Container
        maxWidth="md"
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          wordBreak: 'break-word'
        }}>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h1" color="textPrimary" gutterBottom>
          Zain Siu's Portfolio
        </Typography>
        <Typography variant="h3" color="textSecondary" paragraph>
          <strong>Software / QA Engineer </strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default MainPage;
