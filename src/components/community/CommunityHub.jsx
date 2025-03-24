import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip, Avatar } from "@mui/material";

// Create a custom theme matching the teal color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#004d4d',
      light: '#2a7d7d',
      dark: '#003838',
    },
    secondary: {
      main: '#d6ff80',
      light: '#e0ff99',
      dark: '#b2d966',
    },
    background: {
      default: '#f8faf7',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#004d4d',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#004d4d',
      marginBottom: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '0.95rem',
      color: '#666666',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      borderRadius: 8,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          borderRadius: 8,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 77, 77, 0.2)',
          },
        },
      },
    },
  },
});

const CommunityHub = () => {
  const communityData = [
    { img: "images/online-meeting.png", title: "Live Workshops", desc: "Join interactive sessions with experts" },
    { img: "images/group.png", title: "Discussion Forums", desc: "Share experiences and get advice" },
    { img: "images/videoconference.png", title: "Meetup Events", desc: "Connect with the local community" },
    { img: "images/bc.png", title: "Bootcamps", desc: "Intensive Wellness Programs" },
  ];

  const eventData = [
    { img: "images/bmm.png", title: "Business Matchmaking", desc: "Connect with like-minded professionals, explore partnership opportunities, and foster strategic collaborations to drive business growth.", domain: "Business", deadline: "April 5, 2025" },
    { img: "images/skills.webp", title: "Skills Sharing and Mentorship Programs", desc: "Gain valuable insights, enhance your skills, and connect with experienced mentors to accelerate your entrepreneurial journey.", domain: "Entrepreneurship", deadline: "April 5, 2025" },
    { img: "images/ic.png", title: "Industry Experts & Investor Connections", desc: "Get matched with top industry experts and potential investors through AI-driven recommendations to boost your business growth.", domain: "Tech & Finance", deadline: "April 5, 2025" }
  ];

  const consultantData = [
    { img: "https://thumbs.dreamstime.com/b/portrait-happy-businessman-standing-seminar-hall-78727113.jpg", name: "Mr. Yash Vichare", desc: "Business consultant specializing in small-scale vendor growth and market expansion." },
    { img: "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=", name: "Mr. Parth", desc: "Expert in financial planning and budgeting to help vendors maximize profits." },
    { img: "https://www.shutterstock.com/image-photo/young-happy-businesswoman-using-digital-600nw-2262007147.jpg", name: "Ms. Yashvi", desc: "E-commerce expert guiding small vendors to set up and scale online businesses." }
  ];

  const collaborationOpportunities = [
    {
        title: "Handmade Crafts by Ayesha",
        img: "https://media.istockphoto.com/id/1297409754/photo/a-woman-artisan-making-bamboo-made-baskets-and-other-handicrafts-at-saras-mela-in-kolkata.jpg?s=612x612&w=0&k=20&c=wL733-W2PRMqd5uW6dAC8feWtlUHnGc84QVKa2fgeNI="
        ,industry: "Handmade & Artisanal Products",
        collaboration: "Online Retailers & Exporters",
        goal: "Expand market reach through e-commerce platforms."
    },
    {
        title: "Green Agro Solutions",
        img:"https://content.jdmagicbox.com/comp/kottayam/l5/9999px481.x481.181130113226.e2l5/catalogue/kisco-agro-shop-kottayam-bdyw8knxeo.jpg",
        industry: "Organic Farming",
        collaboration: "Local Restaurants & Health Stores",
        goal: "Supply fresh organic produce and promote sustainable farming."
    },
    {
        title: "Smart Tailors & Boutique",
        img:"https://kayakafrica.co.za/wp-content/uploads/sites/3/2019/10/Billy-the-tailor-small.jpg",
        industry: "Fashion & Clothing",
        collaboration: "Fashion Designers & Online Clothing Stores",
        goal: "Develop a unique, locally-made clothing brand."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          {/* Community Hub Section */}
          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h2" align="center" sx={{ mb: 4 }}>Community Hub</Typography>
            <Grid container spacing={4} justifyContent="center">
              {communityData.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1}}>
                    <Box 
                      sx={{ 
                        bgcolor: 'primary.light', 
                        width: 80, 
                        height: 80, 
                        borderRadius: '50%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        mb: 2,
                        marginTop: 3,
                        paddingBottom: 0,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={item.img}
                        alt={item.title}
                        sx={{ width: 40, height: 40, filter: 'brightness(0) invert(1)' }}
                      />
                    </Box>
                    <CardContent sx={{ textAlign: 'center', p: 0, flexGrow: 1,}}>
                      <Typography variant="h3" component="h3" sx={{ color: 'primary.main', }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1">{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Upcoming Events Section */}
          <Box component="section" sx={{ mb: 8, bgcolor: 'primary.main', py: 6, px: 3, borderRadius: 4 }}>
            <Typography variant="h2" align="center" sx={{ color: 'white', mb: 4 }}>Upcoming Events</Typography>
            <Grid container spacing={4} justifyContent="center">
              {eventData.map((event, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      image={event.img}
                      alt={event.title}
                      sx={{ height: 160, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 3, flexGrow: 1, textAlign: 'justify' }}>
                      <Typography variant="h3" component="h3" sx={{ color: 'primary.main', textAlign: 'center', marginBottom: 2 }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>{event.desc}</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Chip 
                          label={event.domain} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'secondary.main', 
                            color: 'primary.dark',
                            fontWeight: 'bold'
                          }} 
                        />
                        <Chip 
                          label={`Deadline: ${event.deadline}`} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'primary.light', 
                            color: 'white',
                          }} 
                        />
                      </Box>
                      <Button 
                        variant="contained" 
                        fullWidth 
                        color="primary"
                        sx={{ mt: 'auto' }}
                        onClick={() => alert("You have joined the event!")}
                      >
                        Register
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Schedule a Meet Section */}
          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h2" align="center" sx={{ mb: 4 }}>Schedule a Meet</Typography>
            <Grid container spacing={4} justifyContent="center">
              {consultantData.map((consultant, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                      <Avatar 
                        src={consultant.img} 
                        alt={consultant.name} 
                        sx={{ 
                          width: 120, 
                          height: 120, 
                          border: '4px solid', 
                          borderColor: 'primary.light',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }} 
                      />
                    </Box>
                    <CardContent sx={{ textAlign: 'center', p: 3, flexGrow: 1 }}>
                      <Typography variant="h3" component="h3" sx={{ color: 'primary.main' }}>
                        {consultant.name}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3 }}>{consultant.desc}</Typography>
                      <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        sx={{ mt: 'auto' }}
                      >
                        Schedule Meet
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Micro-Entrepreneur Section */}
          <Box component="section" sx={{ bgcolor: 'background.paper', py: 6, px: 3, borderRadius: 4 }}>
            <Typography variant="h2" align="center" sx={{ mb: 4, fontSize: '2.2rem' }}>
              Micro-Entrepreneur Collaboration Opportunities
            </Typography> 
            <Grid container spacing={4} justifyContent="center">
              {collaborationOpportunities.map((opportunity, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 0.5 }}>
                    {/* Image Section */}
          <CardMedia
            component="img"
            height="200"
            image={opportunity.img}
            alt={opportunity.title}
            sx={{ borderRadius: '12px 12px 1 0' }}
          />
                    <Box 
                      sx={{ 
                        bgcolor: 'secondary.light', 
                        borderRadius: '0 0 12px 12px',
                        p: 2
                      }}
                    >
                      <Typography variant="h3" component="h3" sx={{ color: 'primary.dark' }}>
                        {opportunity.title}
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 3, flexGrow: 1, textAlign: 'justify' }}>
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', display: 'inline' }}>
                          Industry:
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ display: 'inline', ml: 1 }}>
                          {opportunity.industry}
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', display: 'inline' }}>
                          Looking to Collaborate With:
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ display: 'inline', ml: 1 }}>
                          {opportunity.collaboration}
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', display: 'inline' }}>
                          Goal:
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ display: 'inline', ml: 1 }}>
                          {opportunity.goal}
                        </Typography>
                      </Box>
                      <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        sx={{ mt: 'auto' }}
                      >
                        Connect
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))} 
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CommunityHub;