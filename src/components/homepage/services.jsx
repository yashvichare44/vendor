// pages/index.js
import React, { useRef, useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Box, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Avatar,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import HandshakeIcon from '@mui/icons-material/Handshake';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40', // Dark teal color from consultation page
    },
    secondary: {
      main: '#e6ee9c', // Light yellow from consultation page
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: '1.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default function LandingPage() {
  // Create refs for each section for smooth scrolling
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const eventsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  
  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Auto-scroll effect for features section
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    if (!scrollContainer) return;
    
    const interval = setInterval(() => {
      const cardWidth = scrollContainer.querySelector('.MuiGrid-item').offsetWidth;
      const newIndex = (scrollIndex + 1) % 6; // Total of 6 cards now
      
      scrollContainer.scrollTo({
        left: cardWidth * newIndex,
        behavior: 'smooth'
      });
      
      setScrollIndex(newIndex);
    }, 3000); // Change card every 5 seconds
    
    return () => clearInterval(interval);
  }, [scrollIndex]);

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ flexGrow: 1, bgcolor: "background.default", mt: "-64px" }}>
      
        {/* Features Section */}
        <Box ref={featuresRef} sx={{ py: 10, bgcolor: "white" }}>
          <Container>
            <Typography variant="h2" component="h2" align="center" gutterBottom color='primary.main' sx={{mb: 5}}>
              Everything You Need to Stay Connected
            </Typography>
            
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <Box 
                ref={scrollContainerRef}
                sx={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  scrollbarWidth: 'none', 
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                  scrollSnapType: 'x mandatory',
                  pb: 2 // Add padding to bottom to accommodate scroll indicators
                }}
              >
                <Grid container spacing={4} sx={{ flexWrap: 'nowrap', width: 'max-content' }}>
                  <Grid item xs={12} md={4} sx={{ minWidth: 300, scrollSnapAlign: 'start' }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            bgcolor: "rgba(0, 77, 64, 0.1)", // Light teal background
                            mb: 2,
                            margin:"auto",
                          }}
                        >
                          <PeopleIcon
                            sx={{ color: "primary.main", fontSize: 30 }}
                          />
                        </Box>
                        <Typography variant="h3" component="h3" gutterBottom sx={{mt:2, color: "primary.main"}}>
                          Alumni Directory
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Search and connect with alumni based on industry,
                          location, and expertise.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={4} sx={{ minWidth: 300, scrollSnapAlign: 'start' }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            bgcolor: "rgba(0, 77, 64, 0.1)", // Light teal background
                            mb: 2,
                            margin:"auto"
                          }}
                        >
                          <HandshakeIcon
                            sx={{ color: "primary.main", fontSize: 30 }}
                          />
                        </Box>
                        <Typography variant="h3" component="h3" gutterBottom sx={{mt:2, color: "primary.main"}}>
                          Mentorship Program
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Find mentors or become one. Share knowledge and guide
                          others to success.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={4} sx={{ minWidth: 300, scrollSnapAlign: 'start' }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            bgcolor: "rgba(0, 77, 64, 0.1)", // Light teal background
                            mb: 2,
                            margin:"auto"
                          }}
                        >
                          <WorkIcon sx={{ color: "primary.main", fontSize: 30 }} />
                        </Box>
                        <Typography variant="h3" component="h3" gutterBottom sx={{mt:2, color: "primary.main"}}>
                          Referral Jobs
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Access job opportunities posted specifically by our alumni
                          network.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  {/* New Card 1: Event Calendar */}
                  <Grid item xs={12} md={4} sx={{ minWidth: 300, scrollSnapAlign: 'start' }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            bgcolor: "rgba(0, 77, 64, 0.1)",
                            mb: 2,
                            margin:"auto"
                          }}
                        >
                          <EventIcon sx={{ color: "primary.main", fontSize: 30 }} />
                        </Box>
                        <Typography variant="h3" component="h3" gutterBottom sx={{mt:2, color: "primary.main"}}>
                          Event Calendar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Stay updated with networking events, webinars, and alumni reunions
                          happening throughout the year.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  {/* New Card 2: Learning Resources */}
                  <Grid item xs={12} md={4} sx={{ minWidth: 300, scrollSnapAlign: 'start' }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            bgcolor: "rgba(0, 77, 64, 0.1)",
                            mb: 2,
                            margin:"auto"
                          }}
                        >
                          <SchoolIcon sx={{ color: "primary.main", fontSize: 30 }} />
                        </Box>
                        <Typography variant="h3" component="h3" gutterBottom sx={{mt:2, color: "primary.main"}}>
                          Learning Resources
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Access exclusive courses, workshops, and educational materials
                          to enhance your professional development.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  {/* New Card 3: Discussion Forums */}
                  <Grid item xs={12} md={4} sx={{ minWidth: 300, scrollSnapAlign: 'start' }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            bgcolor: "rgba(0, 77, 64, 0.1)",
                            mb: 2,
                            margin:"auto"
                          }}
                        >
                          <ForumIcon sx={{ color: "primary.main", fontSize: 30 }} />
                        </Box>
                        <Typography variant="h3" component="h3" gutterBottom sx={{mt:2, color: "primary.main"}}>
                          Discussion Forums
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Engage in industry-specific discussions, share insights, and
                          seek advice from fellow alumni in specialized forums.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
              
              {/* Scroll Indicators */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 2,
                gap: 1
              }}>
                {[...Array(3)].map((_, index) => (
                  <Box 
                    key={index}
                    onClick={() => {
                      const cardWidth = scrollContainerRef.current.querySelector('.MuiGrid-item').offsetWidth;
                      scrollContainerRef.current.scrollTo({
                        left: cardWidth * index,
                        behavior: 'smooth'
                      });
                      setScrollIndex(index);
                    }}
                    sx={{ 
                      width: 12, 
                      height: 12, 
                      borderRadius: '50%',
                      bgcolor: index === scrollIndex ? 'primary.main' : 'primary.light',
                      opacity: index === scrollIndex ? 1 : 0.5,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box ref={testimonialsRef} sx={{ py: 10, bgcolor: "white" }}>
          <Container>
            <Typography variant="h2" component="h2" align="center" gutterBottom color='primary.main' sx={{mb: 5}}>
              What Our Members Say
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
                      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSkmBlsD7y4uWMI2UVfkhr2oEqiw4HRDVkg&s" alt="Rohan Jain" />
                      <Box sx={{ mt: 2, textAlign: "center" }}>
                        <Typography variant="h6" color="primary.main">Rohan Jain</Typography>
                        <Typography variant="body2" color="text.secondary">
                        Micro-entrepreneur, Handcraft Business

                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: "italic", textAlign: "center" }}
                    >
                      "This platform's financial tools and funding access transformed my handcraft business. I secured a micro-loan in days and used AI-guided budgeting to cut production costs by 25%. Now, I'm confident about scaling."
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
  <CardContent>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
      <Avatar src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg" alt="Yash Vichare" />
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="h6" color="primary.main">Yash Vichare</Typography>
        <Typography variant="body2" color="text.secondary">
          Small Business Owner
        </Typography>
      </Box>
    </Box>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ fontStyle: "italic", textAlign: "center" }}
    >
      "The AI market insights helped me identify new customer segments and optimize my pricing strategy. My revenue increased by 32% in just three months!"
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid item xs={12} md={4}>
<Card sx={{ height: "100%" }}>
  <CardContent>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSkmBlsD7y4uWMI2UVfkhr2oEqiw4HRDVkg&s" alt="Rohan Jain" />
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="h6" color="primary.main">Rohan Jain</Typography>
        <Typography variant="body2" color="text.secondary">
          Organic Farmer
        </Typography>
      </Box>
    </Box>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ fontStyle: "italic", textAlign: "center" }}
    >
      "The resource sharing features allowed me to collaborate with other farmers. We now share equipment and transportation costs, making our businesses more sustainable."
    </Typography>
  </CardContent>
</Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box
  component="footer"
  sx={{ bgcolor: "#004d40", color: "white", py: 6, paddingBottom: 3 }}
>
  <Container>
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Typography variant="h6" gutterBottom component="h3">
          HathSarthi
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 2 }}>
        Empowering Small Businesses with AI-Driven Insights, Smart Financial Planning, and Sustainable Growth.
        </Typography>
      </Grid>
      <Grid 
        item 
        xs={12} 
        sm={6} 
        md={3} 
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}
      >
        <Typography variant="h6" gutterBottom component="h3">
          Quick Links
        </Typography>
        <List disablePadding>
          {["About Us", "Directory", "Events", "Mentorship"].map((item) => (
            <ListItem key={item} disablePadding disableGutters>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  variant: "body2",
                  sx: { color: "rgba(255, 255, 255, 0.7)" },
                }}
                sx={{ my: 0.5 }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid 
        item 
        xs={12} 
        sm={6} 
        md={3} 
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}
      >
        <Typography variant="h6" gutterBottom component="h3" sx={{ textAlign: "left" }}>
          Resources
        </Typography>
        <List disablePadding>
          {[
            "Help Center",
            "Privacy Policy",
            "Terms of Service",
            "Contact Us",
          ].map((item) => (
            <ListItem key={item} disablePadding disableGutters>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  variant: "body2",
                  sx: { color: "rgba(255, 255, 255, 0.7)" },
                }}
                sx={{ my: 0.5 }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid 
        item 
        xs={12} 
        md={3} 
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}
      >
        <Typography variant="h6" gutterBottom component="h3" sx={{ textAlign: "left" }}>
          Follow Us
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <IconButton size="small" sx={{ color: "secondary.main" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: "secondary.main" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: "secondary.main" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: "secondary.main" }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
    <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />
    <Typography
      variant="body2"
      align="center"
      sx={{ color: "rgba(255, 255, 255, 0.6)"}}
    >
      © 2025 VendorHub. All rights reserved.
    </Typography>
  </Container>
</Box>
      </Box>
    </ThemeProvider>
  );
}