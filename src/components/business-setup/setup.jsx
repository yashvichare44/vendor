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
  IconButton
} from '@mui/material';
import { 
  LightbulbOutlined, 
  StorefrontOutlined, 
  AccountBalanceOutlined, 
  CampaignOutlined, 
  PeopleOutlined, 
  QueryStatsOutlined,
  Launch,
  YouTube,
  KeyboardArrowRight,
  Close
} from '@mui/icons-material';

// Theme configuration as provided
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

// New data from the JSON
const businessData = [
  {
    id: 1,
    title: "Agribusiness Idea & Planning",
    icon: <LightbulbOutlined sx={{ fontSize: 60 }} />,
    content: "Choosing a profitable agribusiness and validating its demand is crucial for success. Identify high-demand crops or livestock based on market trends, climate suitability, and available resources. Conduct research on soil quality, irrigation methods, and government support schemes. Validate your idea by analyzing market prices, supply chains, and local demand. Finally, create a business plan covering crop cycles, investment needs, revenue potential, and risk management strategies.",
    steps: [
      "1. Identify Profitable Crops/Livestock: Research climate suitability and market trends.",
      "2. Validate Demand: Analyze local and global market prices and assess supply chain gaps.",
      "3. Create an Agribusiness Plan: Define crop cycles, investment, and revenue strategy."
    ],
    resources: [
      {
        title: "FAO Market & Crops Analysis",
        url: "https://www.fao.org/",
        youtubeVideo: "https://www.youtube.com/watch?v=xyz123"
      },
      {
        title: "Agri Market Research - ICAR",
        url: "https://icar.org.in/",
        youtubeVideo: "https://www.youtube.com/watch?v=abc456"
      }
    ]
  },
  {
    id: 2,
    title: "Farm Registration & Legal Setup",
    icon: <AccountBalanceOutlined sx={{ fontSize: 60 }} />,
    content: "Registering your farm or agribusiness legally is essential for accessing subsidies, loans, and ensuring smooth operations. Choose a suitable legal structure such as a farmer cooperative, sole proprietorship, or agro-enterprise. Register your farm with the local agricultural department and obtain necessary certifications like organic farming licenses or food safety approvals. This enables you to legally sell your produce in national and international markets.",
    steps: [
      "1. Choose a Business Structure (Farmer Cooperative, Sole Proprietorship, Agro-Enterprise, etc.)",
      "2. Register Your Farm via Government Agriculture Portal",
      "3. Apply for Farming Licenses & Subsidies (Organic Certification, Food Safety Approvals)"
    ],
    resources: [
      {
        title: "Govt Agriculture Registration",
        url: "https://agricoop.nic.in/",
        youtubeVideo: "https://www.youtube.com/watch?v=uvw321"
      }
    ]
  },
  {
    id: 3,
    title: "Market Access & Online Selling",
    icon: <StorefrontOutlined sx={{ fontSize: 60 }} />,
    content: "Expand your farm's reach by listing your produce on online agricultural marketplaces and platforms like eNAM, AgriBazaar, and WhatsApp Business. Registering on Google My Business helps customers and wholesalers find your farm location easily. Optimizing your marketplace listings with high-quality images, accurate pricing, and descriptions increases sales opportunities and builds customer trust.",
    steps: [
      "1. Register on Agri Marketplaces (eNAM, AgriBazaar, Krishify)",
      "2. Set Up Google My Business for Farm Visibility",
      "3. Optimize Listings with High-Quality Images and Detailed Descriptions"
    ],
    resources: [
      {
        title: "eNAM - Online Agriculture Market",
        url: "https://enam.gov.in/",
        youtubeVideo: "https://www.youtube.com/watch?v=klm654"
      },
      {
        title: "AgriBazaar - Sell Crops Online",
        url: "https://agribazaar.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=rst789"
      }
    ]
  },
  {
    id: 4,
    title: "Farm Website & Social Media Presence",
    icon: <CampaignOutlined sx={{ fontSize: 60 }} />,
    content: "Building a digital presence is key to reaching consumers, wholesalers, and investors. Create a website to showcase your farm's products, sustainable practices, and pricing. Utilize platforms like Facebook, Instagram, and YouTube to engage customers with farm updates, harvesting videos, and educational content. Digital marketing can help attract new buyers and expand your agribusiness reach.",
    steps: [
      "1. Create a Farm Website (Wix, WordPress, Shopify)",
      "2. Register a Domain & Hosting (GoDaddy, Bluehost)",
      "3. Use Social Media for Marketing (Facebook, Instagram, YouTube)"
    ],
    resources: [
      {
        title: "Wix - Build a Farm Website",
        url: "https://www.wix.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=qwe567"
      },
      {
        title: "Agriculture Digital Marketing Guide",
        url: "https://wordpress.org/",
        youtubeVideo: "https://www.youtube.com/watch?v=yza987"
      }
    ]
  },
  {
    id: 5,
    title: "AI-Powered Precision Farming & Automation",
    icon: <QueryStatsOutlined sx={{ fontSize: 60 }} />,
    content: "Leverage AI and automation to improve farm productivity and efficiency. AI-driven tools like satellite-based crop monitoring, automated irrigation, and pest detection systems help optimize yields. AI-powered market forecasting tools can predict price trends and suggest the best time to sell produce. Automation in farming reduces labor costs and increases productivity through precision agriculture techniques.",
    steps: [
      "1. Use AI for Crop Monitoring (Satellite Data, IoT Sensors, Drones)",
      "2. Automate Irrigation & Pest Control with Smart Farming Systems",
      "3. Analyze Market Trends with AI for Better Pricing Strategies"
    ],
    resources: [
      {
        title: "Precision Farming AI Tools",
        url: "https://www.smartfarmingtech.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=bvc321"
      }
    ]
  }
];

const SetupCards = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        flexGrow: 1, 
        padding: 4, 
        backgroundColor: 'background.default', 
        minHeight: '100vh' 
      }}>
        <Typography variant="h2" align="center" gutterBottom>
          Business Setup & Online Presence
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            maxWidth: 800, 
            margin: '0 auto 4rem auto', 
            fontSize: '1.1rem' 
          }}
        >
          A step-by-step guide for entrepreneurs to set up a business, register online, and grow their digital presence.
        </Typography>
        
        <Grid container spacing={4}>
          {businessData.map((card) => (
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
                    {card.icon}
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
                    Know More
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
                  {selectedCard.icon}
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
                Key Steps
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
                      primary={step.substring(3)} 
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

export default SetupCards;