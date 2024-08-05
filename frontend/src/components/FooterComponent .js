import React from 'react';
import {Container, Box, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const FooterComponent  = () => {
  return (
      <footer>
          <Container maxWidth="md">
              <Box display="flex" justifyContent="center" alignItems="center" m={2}>
                  <Typography variant="body1">Zain Siu's Portfolio</Typography>
                  <Box m={1}>
                    <HorizontalRuleIcon fontSize="large" sx={{ transform: 'rotate(90deg)' }}/>
                  </Box>
                  <Box m={1}>
                      <a href="https://www.linkedin.com/in/zainsiu" target="_blank" rel="noopener noreferrer">
                          <LinkedInIcon fontSize="large"/></a>
                  </Box>
                  <Box m={1}>
                      <a href="https://github.com/zoinn" target="_blank" rel="noopener noreferrer" >
                          <GitHubIcon fontSize="large"/></a>
                  </Box>
                  <Box m={1}>
                    <HorizontalRuleIcon fontSize="large" sx={{ transform: 'rotate(90deg)' }}/>
                  </Box>
                  <Typography variant="body1">Built on Django & React</Typography>
              </Box>
          </Container>
      </footer>
  );
};

export default FooterComponent;
