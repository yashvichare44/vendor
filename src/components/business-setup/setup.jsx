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
    title: "Business Idea & Planning",
    icon: <LightbulbOutlined sx={{ fontSize: 60 }} />,
    content: "Choosing a profitable business idea and validating its demand is crucial for success. Start by identifying your niche market and conducting thorough research on current trends. Validate your idea by surveying potential customers, analyzing search volume, and assessing the competitive landscape. Finally, create a comprehensive business plan that outlines your goals, target audience, revenue model, and marketing strategies. This plan serves as your roadmap for growth and helps secure funding.",
    steps: [
      "1. Identify Your Niche: Research market trends using Google Trends, SEMrush, and competitor analysis.",
      "2. Validate the Idea: Conduct surveys, check Google search volume, and analyze potential demand.",
      "3. Create a Business Plan: Outline your goals, target audience, revenue model, and marketing strategy."
    ],
    resources: [
      {
        title: "Google Trends",
        url: "https://trends.google.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=xyz123"
      },
      {
        title: "SEMrush - Market Research",
        url: "https://www.semrush.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=abc456"
      }
    ]
  },
  {
    id: 2,
    title: "Business Registration & Legal Setup",
    icon: <AccountBalanceOutlined sx={{ fontSize: 60 }} />,
    content: "Registering your business legally is essential for establishing credibility and operating within the law. This process involves selecting the appropriate business structure, such as a sole proprietorship, LLC, or private limited company. You'll need to register your business name with the relevant government authority and obtain the necessary licenses and tax identification numbers. This ensures compliance and allows you to conduct business legally.",
    steps: [
      "1. Choose a Business Structure (Sole Proprietor, LLC, Private Limited, etc.)",
      "2. Register Your Business Name via Government Portal (e.g., MCA in India, SEC in the USA)",
      "3. Apply for Business Licenses & Tax ID"
    ],
    resources: [
      {
        title: "Govt Business Registration",
        url: "https://www.mca.gov.in/",
        youtubeVideo: "https://www.youtube.com/watch?v=uvw321"
      }
    ]
  },
  {
    id: 3,
    title: "Google My Business & Marketplace Registration",
    icon: <StorefrontOutlined sx={{ fontSize: 60 }} />,
    content: "Enhance your online visibility by listing your business on platforms like Google My Business and popular marketplaces. Creating a Google My Business profile allows customers to find your business easily on Google Search and Maps. Listing your products on marketplaces like Amazon, Flipkart, and using WhatsApp Business expands your reach and connects you with a wider audience. Optimizing your profiles with accurate information and engaging visuals is key to attracting customers.",
    steps: [
      "1. Sign up on Google My Business at business.google.com",
      "2. Verify your location (Postcard or phone verification)",
      "3. Optimize your profile (Add business hours, photos, and products)"
    ],
    resources: [
      {
        title: "Google My Business",
        url: "https://business.google.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=klm654"
      },
      {
        title: "Amazon Seller Registration",
        url: "https://sell.amazon.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=rst789"
      }
    ]
  },
  {
    id: 4,
    title: "Website & Social Media Setup",
    icon: <CampaignOutlined sx={{ fontSize: 60 }} />,
    content: "Establishing a strong online presence requires a professional website and active social media profiles. Choose a website builder like Wix, Shopify, or WordPress, and secure a domain name and hosting. Create engaging content and optimize your website for search engines. Set up social media accounts on platforms relevant to your target audience, such as Facebook, Instagram, LinkedIn, and TikTok. Regularly update your content to keep your audience engaged.",
    steps: [
      "1. Choose a Website Builder (Wix, Shopify, WordPress, Squarespace)",
      "2. Get a Domain & Hosting (GoDaddy, Bluehost, Hostinger)",
      "3. Set Up Social Media Accounts (Facebook, Instagram, LinkedIn, TikTok)"
    ],
    resources: [
      {
        title: "Shopify",
        url: "https://www.shopify.com/",
        youtubeVideo: "https://www.youtube.com/watch?v=qwe567"
      },
      {
        title: "WordPress Setup Guide",
        url: "https://wordpress.org/",
        youtubeVideo: "https://www.youtube.com/watch?v=yza987"
      }
    ]
  },
  {
    id: 5,
    title: "AI-Powered Marketing & Automation",
    icon: <QueryStatsOutlined sx={{ fontSize: 60 }} />,
    content: "Leverage the power of AI to streamline your marketing efforts and automate repetitive tasks. AI-powered tools like Hootsuite, Buffer, and Canva AI can help schedule social media posts, analyze performance, and create engaging visuals. Utilize AI-generated ad campaigns on platforms like Google Ads and Meta Ads to target specific demographics and optimize your ad spend. This allows you to reach a wider audience efficiently.",
    steps: [
      "1. Use AI for Social Media Automation (Hootsuite, Buffer, Canva AI)",
      "2. Run AI-Generated Ad Campaigns (Google Ads, Meta Ads)"
    ],
    resources: [
      {
        title: "Hootsuite - AI Social Media Scheduler",
        url: "https://hootsuite.com/",
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