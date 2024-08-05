import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import boulderingGif from '../assets/videos/bouldering.gif';

const AboutMe = () => {
  return (
       <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} sx={{ textAlign: 'left', mt: 8 }}>
              <Typography variant="h2" color="textPrimary" gutterBottom>
                About Me
              </Typography>
              <Typography variant="h3" color="textSecondary" paragraph>
                <strong>Proven Programmer & Tester</strong>
              </Typography>
              <Typography variant="h4" color="textSecondary" paragraph>
                I am a Comp. Sci graduate with a talent for coding, and if I'm not coding then I'm bouldering.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src={boulderingGif}
                alt="Bouldering"
                sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
};

export default AboutMe;
