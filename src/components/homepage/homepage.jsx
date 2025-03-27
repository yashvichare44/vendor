import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  Menu,
  MenuItem,
  IconButton,
  MobileStepper,
  Fade
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// Create a custom theme matching the teal color scheme
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

// Carousel slide data
const carouselSlides = [
  {
    heading: "Accelerating Your Business Growth and Performance",
    description: "We help businesses achieve rapid growth and improve overall performance with expert strategies.",
    imageSrc: "https://consaltip.boomdevstheme.com/wp-content/uploads/2023/07/slider_img_2.png",
    imageAlt: "Business Professional"
  },
  {
    heading: "Strategic Consulting for Sustainable Results",
    description: "Our expert consulting services drive long-term success through well-planned strategies.",
    imageSrc: "https://consaltip.boomdevstheme.com/wp-content/uploads/2023/07/slider_img.png",
    imageAlt: "Business Strategy"
  },
  {
    heading: "Transforming Challenges into Opportunities",
    description: "We turn obstacles into growth opportunities, helping businesses thrive in any market.",
    imageSrc: "https://consaltip.boomdevstheme.com/wp-content/uploads/2023/07/slider_img_4.png",
    imageAlt: "Business Transformation"
  }
];

const HeroSection = () => {
 
  // Dropdown menu states
  const [anchorEl, setAnchorEl] = React.useState({
    home: null,
    services: null,
    pages: null,
    blog: null
  });

  // Carousel state
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselSlides.length;

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSteps]);

  // Demo data for dropdown menus
  const menuItems = {
    home: ['Home 1', 'Home 2', 'Home 3'],
    services: ['Service 1', 'Service 2', 'Service 3', 'Service 4'],
    pages: ['About', 'Team', 'Pricing', 'FAQ', 'Contact'],
    blog: ['Blog Grid', 'Blog List', 'Blog Single']
  };
  
  // Handle opening menu
  const handleMenuOpen = (menu) => (event) => {
    setAnchorEl({
      ...anchorEl,
      [menu]: event.currentTarget
    });
  };
  
  // Handle closing menu
  const handleMenuClose = (menu) => {
    setAnchorEl({
      ...anchorEl,
      [menu]: null
    });
  };

  // Handle carousel navigation
  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  // Render navigation item with optional dropdown
  const renderNavItem = (label, menuKey) => {
    const hasDropdown = menuItems[menuKey];
    
    return (
      <Box sx={{ mx: 1 }}>
        <Button 
          color="inherit"
          endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : null}
          onClick={hasDropdown ? handleMenuOpen(menuKey) : undefined}
          aria-controls={Boolean(anchorEl[menuKey]) ? `${menuKey}-menu` : undefined}
          aria-haspopup={hasDropdown ? "true" : undefined}
          aria-expanded={Boolean(anchorEl[menuKey]) ? 'true' : undefined}
        >
          {label}
        </Button>
        
        {hasDropdown && (
          <Menu
            id={`${menuKey}-menu`}
            anchorEl={anchorEl[menuKey]}
            open={Boolean(anchorEl[menuKey])}
            onClose={() => handleMenuClose(menuKey)}
            MenuListProps={{
              'aria-labelledby': `${menuKey}-button`,
            }}
            PaperProps={{
              sx: {
                bgcolor: 'primary.main',
                color: 'text.primary',
              }
            }}
          >
            {menuItems[menuKey].map((item) => (
              <MenuItem 
                key={item} 
                onClick={() => handleMenuClose(menuKey)}
                sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: 'primary.main',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Navigation */}
        <AppBar position="static" color="transparent" elevation={0} sx={{color: 'white'}}>
          <Container maxWidth="xl"> 
            <Toolbar sx={{ justifyContent: 'center', padding: 1, marginLeft: 2, marginRight: 2 }}>
              <Box component="img" 
                src="https://i.ibb.co/wZsffbqW/erasebg-transformed-1.png"
                alt="Logo"
                width={250}
                sx={{ position: 'absolute', left: 0, mt: 5, marginleft:3   }}
              />
              
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 3}}>
                {renderNavItem('Home', 'home')}
                {renderNavItem('About Us')}
                {renderNavItem('Services', 'services')}
                {renderNavItem('Pages', 'pages')}
                {renderNavItem('Blog', 'blog')}
                {renderNavItem('Contact Us')}
              </Box>
              
              <Button 
                variant="contained"
                startIcon={<SpaceDashboardIcon />}
                component="a" 
                href="/dashboard"
              
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  borderRadius: '30px',
                  px: 2,
                  mt: 3,
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  position: 'absolute',
                  right: 0
                }}
              >
                Dashboard
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Carousel */}
<Box sx={{ width: '100%', position: 'relative' }}>
  {/* Carousel Slides */}
  <Box sx={{ 
    position: 'relative', 
    height: 'calc(100vh - 64px)', // Subtract navbar height
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft: 14,
  }}>
    {carouselSlides.map((slide, index) => (
      <Fade 
        key={index} 
        in={activeStep === index} 
        timeout={800}
        style={{ 
          display: activeStep === index ? 'block' : 'none',
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            height: '100%',
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center', // Center the content horizontally
            position: 'relative',
            pt: 4, // Add padding top to match the image
            pb: 10 // Add padding bottom to account for the dots
          }}
        >
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center', // Center content instead of space-between
            width: '100%',
            maxWidth: { xs: '100%', md: '1200px' }, // Control max width on different screen sizes
            textAlign: { xs: 'center', md: 'center' } // Center text alignment
          }}>
            {/* Text Content */}
                    <Box sx={{ 
          width: { xs: '100%', md: '60%' },
          px: { xs: 2, md: 4 },
          zIndex: 2,
          mb: { xs: 4, md: 0 },
          textAlign: 'left'  // Change to left-align text
        }}>
              <Typography 
                variant="h1" 
                color="text.primary" 
                sx={{ 
                  mb: 3,
                  mt: 10, 
                  lineHeight: 1.1,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  fontWeight: 700
                }}
              >
                {slide.heading}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.primary" 
                sx={{ 
                  opacity: 0.8, 
                  mb: 5,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  mx: 'auto', // Center the paragraph
                  maxWidth: '800px' // Limit width for better readability
                }}
              >
                {slide.description}
              </Typography>
              <Box sx={{ 
    display: 'flex', 
    gap: 3,
    flexWrap: { xs: 'wrap', sm: 'nowrap' },
    justifyContent: { xs: 'center', md: 'flex-start' }  // Left-align on desktop, center on mobile
  }}>
                <Button 
                  variant="contained" 
                  color="secondary"
                  size="large"
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1.5
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  sx={{ 
                    borderColor: 'text.primary',
                    color: 'text.primary',
                    borderWidth: 2,
                    px: 3,
                    py: 1.5
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Box>
            
            {/* Image */}
            <Box sx={{ 
              width: { xs: '80%', md: '50%' }, // Show on all screen sizes with appropriate width
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              mt: { xs: 2, md: 6 } // Add margin top
            }}>
              <Box sx={{ 
                width: { xs: 280, sm: 350, md: 450 }, // Responsive image size
                height: { xs: 280, sm: 350, md: 450 },
                borderRadius: '50%',
                bgcolor: 'white',
                mt : 2,
                overflow: 'hidden',
                boxShadow: '0 0 30px rgba(0,0,0,0.1)'
              }}>
                <Box 
                  component="img" 
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
              
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Fade>
    ))}
  </Box>
          {/* Navigation Arrows */}
          <IconButton 
            onClick={handleBack}
            sx={{ 
              position: 'absolute', 
              left: 20, 
              top: '50%', 
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
              zIndex: 10
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          
          <IconButton 
            onClick={handleNext}
            sx={{ 
              position: 'absolute', 
              right: 20, 
              top: '50%', 
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
              zIndex: 10
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
          
          {/* Carousel Dots */}
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ 
              bgcolor: 'transparent', 
              justifyContent: 'center',
              '& .MuiMobileStepper-dot': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                mx: 0.5
              },
              '& .MuiMobileStepper-dotActive': {
                backgroundColor: 'white'
              },
              position: 'absolute',
              bottom: 20,
              width: '100%',
              zIndex: 10
            }}
            nextButton={<Box />}
            backButton={<Box />}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;