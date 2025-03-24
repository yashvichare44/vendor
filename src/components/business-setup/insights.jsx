import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Typography, 
  Grid, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  ThemeProvider,
  createTheme,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Paper
} from '@mui/material';
import { 
  TrendingUp, 
  ShoppingCart, 
  Store, 
  People, 
  Payments, 
  ShoppingBasket,
  Launch,
  YouTube,
  KeyboardArrowRight,
  Close
} from '@mui/icons-material';
import businessInsightsData from './BusinessInsightsData';

// Theme configuration - same as the original
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

// Map of icon names to actual icon components
const IconMap = {
  TrendingUp: <TrendingUp sx={{ fontSize: 60 }} />,
  ShoppingCart: <ShoppingCart sx={{ fontSize: 60 }} />,
  Store: <Store sx={{ fontSize: 60 }} />,
  People: <People sx={{ fontSize: 60 }} />,
  Payments: <Payments sx={{ fontSize: 60 }} />,
  ShoppingBasket: <ShoppingBasket sx={{ fontSize: 60 }} />
};

const BusinessInsights = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Process data to add icon components
  const processedData = businessInsightsData.map(card => ({
    ...card,
    iconComponent: IconMap[card.icon] || <TrendingUp sx={{ fontSize: 60 }} />
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        flexGrow: 1, 
        padding: 4, 
        backgroundColor: 'background.default', 
        minHeight: '100vh' 
      }}>
        <Typography variant="h2" align="center" gutterBottom>
          Business Growth Strategies
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            maxWidth: 800, 
            margin: '0 auto 3rem auto', 
            fontSize: '1.1rem' 
          }}
        >
          Strategic insights and growth opportunities to scale your bakery business and increase revenue.
        </Typography>
        
        
        
        {/* Cards Grid */}
        <Grid container spacing={4}>
          {processedData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  padding: 4
                }}>
                  <Box 
                    sx={{
                      color: 'primary.main',
                      backgroundColor: 'secondary.light',
                      padding: 2,
                      borderRadius: '50%',
                      marginBottom: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {card.iconComponent}
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="h3" 
                    align="center" 
                    sx={{ 
                      color: 'text.secondary',
                      fontWeight: 600,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    align="center" 
                    sx={{ 
                      mb: 2, 
                      height: 80, 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {card.content.substring(0, 120)}...
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  justifyContent: 'center', 
                  paddingBottom: 3 
                }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    endIcon={<KeyboardArrowRight />}
                    onClick={() => handleOpen(card)}
                  >
                    Explore Strategy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Dialog/Popup */}
        {selectedCard && (
          <Dialog 
            open={open} 
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3,
                padding: 2
              }
            }}
          >
            <DialogTitle 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'secondary.light',
                pb: 2
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box 
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'secondary.light',
                    padding: 1,
                    borderRadius: '50%',
                    display: 'flex'
                  }}
                >
                  {selectedCard.iconComponent}
                </Box>
                <Typography variant="h3" component="h2" sx={{ m: 0 }}>
                  {selectedCard.title}
                </Typography>
              </Box>
              <IconButton onClick={handleClose} aria-label="close">
                <Close />
              </IconButton>
            </DialogTitle>
            
            <DialogContent sx={{ mt: 2 }}>
              <Typography variant="body1" paragraph>
                {selectedCard.content}
              </Typography>
              
              <Typography variant="h3" sx={{ mt: 3, mb: 2, color: 'primary.main' }}>
                Implementation Steps
              </Typography>
              <List>
                {selectedCard.steps.map((step, index) => (
                  <ListItem key={index} alignItems="flex-start" sx={{ pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'secondary.main', 
                          borderRadius: '50%', 
                          width: 24, 
                          height: 24, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          color: 'primary.dark',
                          fontWeight: 'bold',
                          fontSize: '0.8rem'
                        }}
                      >
                        {index + 1}
                      </Box>
                    </ListItemIcon>
                    <ListItemText 
                      primary={step} 
                      sx={{ 
                        '& .MuiTypography-root': { 
                          fontWeight: 500, 
                          color: 'text.primary' 
                        }
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
                Recommended Resources
              </Typography>
              <List>
                {selectedCard.resources.map((resource, index) => (
                  <ListItem 
                    key={index} 
                    sx={{ 
                      bgcolor: 'background.paper', 
                      mb: 1, 
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'secondary.light',
                      py: 1
                    }}
                  >
                    <ListItemText 
                      primary={resource.title} 
                      sx={{ 
                        '& .MuiTypography-root': { 
                          fontWeight: 600, 
                          color: 'text.secondary' 
                        }
                      }} 
                    />
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        size="small"
                        startIcon={<Launch />}
                        component={Link}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        startIcon={<YouTube />}
                        component={Link}
                        href={resource.youtubeVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tutorial
                      </Button>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 1 }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleClose}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}

        
      </Box>
    </ThemeProvider>
  );
};

export default BusinessInsights;