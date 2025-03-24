import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  useTheme, 
  createTheme, 
  ThemeProvider 
} from '@mui/material';

// Custom theme to match the design
const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40', // Dark teal color
    },
    secondary: {
      main: '#e6ee9c', // Light yellow for the button
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});

const ConsultationPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          height: '90vh',
          display: 'flex',
          overflow: 'hidden',
          padding: 10,
          backgroundColor: 'white', justifyContent: 'center',
        }}
      >
        {/* Left Section with Teal Background */}
        <Box 
          sx={{ 
            width: '40%', 
            height: '90%',
            bgcolor: 'primary.main',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            px: 5,
        
     
          }}
        >
          {/* Background Pattern */}
          <Box 
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'url("/path-to-wavy-pattern.svg")',
              backgroundSize: 'cover',
              zIndex: 0,
            }} 
          />
          
          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 1, paddingLeft: 4 }}>
            <Typography 
              variant="h1" 
              color="white" 
              sx={{ mb: 3 }}
            >
              Free consultation
              <Box 
                component="span" 
                sx={{ 
                  display: 'block',
                  position: 'relative',
                }}
              >
                for today
                <Box 
                  component="span"
                  sx={{
                    position: 'absolute',
                    right: 0,
                    bottom: -5,
                    width: '50%',
                    height: '3px',
                    bgcolor: 'secondary.main',
               
                  }}
                />
              </Box>
            </Typography>
            
            <Typography 
              variant="body1" 
              color="white" 
              sx={{ mb: 6, opacity: 0.9 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit non
              nulla nulla nisi, habitant massa eros tempus.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="secondary"
                sx={{ 
                  borderRadius: 1,
                  color: 'text.primary',
                  py: 1.5,
                  px: 3,
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
              >
                Get In Touch
              </Button>
              
              <Button 
                variant="outlined" 
                sx={{ 
                  borderRadius: 1,
                  borderColor: 'white',
                  color: 'white',
                  py: 1.5,
                  px: 3,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'white',
                    opacity: 0.9,
                  }
                }}
              >
                Our Services
              </Button>
            </Box>
          </Box>
          
          {/* Decorative elements bottom right */}
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: 30,
              right: 30,
              zIndex: 1,
            }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50">
              <g fill="white" opacity="0.3">
                <circle cx="5" cy="5" r="3" />
                <circle cx="5" cy="15" r="3" />
                <circle cx="5" cy="25" r="3" />
                <circle cx="5" cy="35" r="3" />
                <circle cx="15" cy="5" r="3" />
                <circle cx="15" cy="15" r="3" />
                <circle cx="15" cy="25" r="3" />
                <circle cx="15" cy="35" r="3" />
              </g>
            </svg>
          </Box>
        </Box>
        
        {/* Right Section with Image */}
        <Box 
          sx={{ 
            width: '44%',
            height: '90%',
            backgroundImage: 'url("https://consaltip.boomdevstheme.com/wp-content/uploads/2023/08/Image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default ConsultationPage;