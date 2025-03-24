import React from 'react';
import { 
  Typography, 
  Box, 
  Container,
  Button,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Using the same theme as the HeroSection component
const theme = createTheme({
  palette: {
    primary: {
      main: '#004d4d',
    },
    secondary: {
      main: '#d6ff80',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d6ff80',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
});

const AboutUsSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: 'white',
        py: 10,
      }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}>
            {/* Left Side - Image */}
            <Box sx={{ 
              width: { xs: '100%', md: '45%' },
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              ml: 15,
            }}>
              {/* Fallback placeholder if image is missing */}
           
                <Box component="img" 
                  src="https://i.ibb.co/HTP8SX0j/7000961.jpg"
                  alt="Business consulting"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Box>
              
              
           

            {/* Right Side - Content */}
            <Box sx={{ 
              width: { xs: '100%', md: '55%' },
              pl: { xs: 0, md: 4 },
              mt: { xs: 4, md: 0 },
              textAlign: 'left',
              ml: 5,
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    color: '#000',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    position: 'relative',
                    mb: 4,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: 100,
                      height: 4,
                      bgcolor: theme.palette.primary.main,
                      bottom: -16,
                      left: 0,
                    }
                  }}
                >
                  The story behind<br />our consulting firm
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    fontSize: '1.1rem',
                    mb: 4,
                    maxWidth: 600,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit arcu eleifend quis elementum elementum massa facilisi more cras ullamcorper nibh egestas et cursus praesent.
                </Typography>
                
                <Box sx={{
                  display: 'flex',
                  gap: { xs: 4, md: 8 },
                  mb: 4,
                }}>
                  {/* Stats - Companies helped */}
                  <Box>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '3.5rem',
                        lineHeight: 1,
                      }}
                    >
                      10+
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#666',
                        fontSize: '1rem',
                      }}
                    >
                      Companies helped
                    </Typography>
                  </Box>
                  
                  {/* Stats - Team members */}
                  <Box>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '3.5rem',
                        lineHeight: 1,
                      }}
                    >
                      30+
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#666',
                        fontSize: '1rem',
                      }}
                    >
                      Team members
                    </Typography>
                  </Box>
                </Box>
                
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    py: 1.5,
                    px: 4,
                    alignSelf: 'flex-start',
                    borderRadius: '4px',
                    '&:hover': {
                      bgcolor: '#c0e870',
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUsSection;