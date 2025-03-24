import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  Container, 
  Divider, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  useTheme, 
  AppBar, 
  Toolbar,
  createTheme,
  ThemeProvider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom green theme
const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Forest green
      light: '#4caf50', // Medium green
      dark: '#1b5e20', // Dark green
    },
    secondary: {
      main: '#81c784', // Light green
      light: '#a5d6a7', // Lighter green
      dark: '#4caf50', // Medium green
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#263238',
      secondary: '#546e7a',
    },
    success: {
      main: '#00c853',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(0, 0, 0, 0.05)',
    '0px 4px 16px rgba(0, 0, 0, 0.08)',
    // ...rest of the shadows
  ],
});

const PricingPage = () => {
  const theme = greenTheme;

  const plans = [
    {
      title: "Hourly Plan",
      price: "₹200",
      period: "per hour",
      icon: <AccessTimeIcon fontSize="large" />,
      features: [
        "One-to-one business setup guidance (1 hour)",
        "Quick consulting sessions",
        "Instant access to resources",
        "Priority email support during session",
        "Basic business templates"
      ],
      buttonText: "Select Plan",
      color: theme.palette.primary.light
    },
    {
      title: "Weekly Plan",
      price: "₹500",
      period: "6 hours per week",
      icon: <CalendarTodayIcon fontSize="large" />,
      features: [
        "One-to-one business guidance (6 hours per week)",
        "Week-long resource access",
        "Priority email & chat support",
        "Complete business templates pack",
        "Weekly progress check-in",
        "Market analysis report"
      ],
      buttonText: "Select Plan",
      color: theme.palette.primary.main,
      popular: true
    },
    {
      title: "Monthly Plan",
      price: "₹1,000",
      period: "per month",
      icon: <DateRangeIcon fontSize="large" />,
      features: [
        "Comprehensive business setup program",
        "Unlimited consulting sessions",
        "24/7 resource access",
        "Monthly performance reviews",
        "Competitor analysis",
        "Marketing strategy guidance"
      ],
      buttonText: "Select Plan",
      color: theme.palette.primary.dark
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            pt: 15, 
            pb: 12,
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${theme.palette.primary.light}10, ${theme.palette.secondary.light}30)`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.05,
              zIndex: 0
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 70% 30%, ${theme.palette.secondary.light}40 0%, transparent 50%)`,
              zIndex: 1
            }
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
              sx={{
                background: `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3
              }}
            >
              Flexible Plans for Your Business Needs
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              color="text.secondary" 
              paragraph 
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                fontWeight: 'normal',
                mb: 6
              }}
            >
              Choose the perfect plan that fits your schedule and requirements.
              From hourly consultations to comprehensive monthly packages.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  borderRadius: '40px', 
                  px: 5, 
                  py: 1.8,
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 25px rgba(46, 125, 50, 0.3)',
                  background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  '&:hover': {
                    boxShadow: '0 12px 30px rgba(46, 125, 50, 0.4)',
                  }
                }}
                endIcon={<ArrowForwardIcon />}
              >
                View Plans
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Pricing Section */}
        <Container maxWidth="lg" sx={{ py: 12, position: 'relative' }}>
          <Box 
            sx={{
              position: 'absolute',
              top: '15%',
              right: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.light}20, transparent 70%)`,
              zIndex: 0
            }}
          />
          <Box 
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.light}15, transparent 70%)`,
              zIndex: 0
            }}
          />
          
          <Typography
            variant="h3"
            align="center"
            color="text.primary"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Choose Your Plan
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '700px', mx: 'auto', fontWeight: 'normal' }}
          >
            Select the perfect option for your business needs and start growing today
          </Typography>
          
          <Grid container spacing={5} justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
            {plans.map((plan) => (
              <Grid 
                item 
                key={plan.title} 
                xs={12} 
                sm={6} 
                md={4}
              >
                <Card 
                  elevation={plan.popular ? 6 : 2} 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    ':hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    },
                    border: plan.popular ? `2px solid ${plan.color}` : 'none',
                    ...(plan.popular && {
                      transform: 'scale(1.05)',
                    })
                  }}
                >
                  {plan.popular && (
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        right: 0, 
                        bgcolor: plan.color,
                        color: 'white',
                        py: 0.8,
                        px: 3,
                        borderTopLeftRadius: 30,
                        borderBottomLeftRadius: 30,
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 1
                      }}
                    >
                      MOST POPULAR
                    </Box>
                  )}
                  <Box sx={{ 
                    p: 4,
                    backgroundImage: `linear-gradient(120deg, ${plan.color}10, ${plan.color}20)`
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        color: plan.color, 
                        mr: 2, 
                        bgcolor: `${plan.color}15`,
                        p: 1.5,
                        borderRadius: '12px'
                      }}>
                        {plan.icon}
                      </Box>
                      <Typography variant="h5" component="div" fontWeight="bold">
                        {plan.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
                      <Typography component="h2" variant="h3" color="text.primary" fontWeight="bold">
                        {plan.price}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" ml={1}>
                        {plan.period}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <List dense>
                      {plan.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 1.2, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: '36px' }}>
                            <CheckCircleIcon sx={{ color: plan.color, fontSize: '1.3rem' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ fontSize: '0.95rem' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 4, pt: 1, pb: 4 }}>
                    <Button 
                      fullWidth 
                      variant={plan.popular ? "contained" : "outlined"} 
                      sx={{ 
                        borderRadius: '40px', 
                        py: 1.8,
                        fontSize: '1rem',
                        fontWeight: 'medium',
                        bgcolor: plan.popular ? plan.color : 'transparent',
                        borderColor: plan.color,
                        color: plan.popular ? 'white' : plan.color,
                        boxShadow: plan.popular ? `0 10px 20px ${plan.color}40` : 'none',
                        '&:hover': {
                          bgcolor: plan.popular ? plan.color : `${plan.color}15`,
                          borderColor: plan.color,
                          boxShadow: plan.popular ? `0 12px 25px ${plan.color}50` : `0 8px 16px ${plan.color}30`
                        }
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Call to Action */}
        <Box sx={{ 
          py: 12,
          background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
            zIndex: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
            zIndex: 1
          }
        }}>
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h3" align="center" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
              Ready to Grow Your Business?
            </Typography>
            <Typography variant="h6" align="center" paragraph sx={{ mb: 6, fontWeight: 'normal', opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
              Start your journey with BusinessPro today and unlock your full business potential.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  borderRadius: '40px', 
                  px: 6, 
                  py: 2,
                  fontSize: '1.1rem',
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  '&:hover': {
                    bgcolor: 'white',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.25)'
                  }
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Get Started Now
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: '#f0f7f0', p: 8, pt: 10, pb: 8 }} component="footer">
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom fontWeight="bold" color={theme.palette.primary.main}>
                  BusinessPro
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                  Empowering your business journey at every step with tailored solutions and expert guidance.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  {/* Social icons would go here */}
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold" sx={{ mb: 2 }}>
                  Services
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Business Setup</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Marketing Strategy</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Financial Planning</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Growth Consulting</Typography>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold" sx={{ mb: 2 }}>
                  Company
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>About Us</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Team</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Careers</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Contact</Typography>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold" sx={{ mb: 2 }}>
                  Legal
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Privacy Policy</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Terms of Service</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>Cookie Policy</Typography>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 5, opacity: 0.6 }} />
            
            <Typography variant="body2" color="text.secondary" align="center">
              {'© '}
              {new Date().getFullYear()}
              {' BusinessPro. All rights reserved.'}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PricingPage;