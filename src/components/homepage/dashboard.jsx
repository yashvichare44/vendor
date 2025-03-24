import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Avatar, 
  Paper,
  Container,
  useTheme
} from '@mui/material';
import { 
  MonetizationOn, 
  Person, 
  Security, 
  ShoppingCart,
  TrendingUp,
  ArrowUpward,
  ArrowDownward
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Theme definition
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
    success: {
      main: '#2a7d7d',
      light: '#4a9d9d'
    },
    error: {
      main: '#e57373',
    }
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

// Custom styled components
const StyledAvatar = styled(Avatar)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || theme.palette.primary.main,
  color: '#ffffff',
  width: 56,
  height: 56,
  borderRadius: 12,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
}));

const GradientBox = styled(Box)(({ theme }) => ({
  height: 300,
  position: 'relative',
  marginTop: 20,
  '& svg': {
    width: '100%',
    height: '100%'
  }
}));

const StatCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#ffffff',
  border: 'none',
  position: 'relative',
  overflow: 'visible',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 16,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    background: `linear-gradient(45deg, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.secondary.light, 0.1)})`,
  },
  '&:hover::after': {
    opacity: 1,
  }
}));

const TrendIndicator = styled(Box)(({ theme, positive }) => ({
  display: 'flex',
  alignItems: 'center',
  color: positive ? theme.palette.success.main : theme.palette.error.main,
  fontWeight: 500,
  fontSize: '0.875rem',
}));

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    // Generate sample data for the chart
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const generateData = () => {
      return months.map((month, index) => {
        const baseValue = 200;
        const randomFactor = Math.sin(index / 2) * 150 + Math.random() * 50;
        return {
          month,
          value: Math.max(50, Math.round(baseValue + randomFactor))
        };
      });
    };
    
    setChartData(generateData());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">


          {/* Stat Cards Row */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* Today's Money Card */}
            <Grid item xs={12} sm={6} md={3}>
              <StatCard elevation={1}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary" fontWeight="medium" sx={{ mb: 0.5 }}>
                        TODAY'S REVENUE
                      </Typography>
                      <Typography variant="h5" fontWeight="bold" color="text.primary">
                        $53,000
                      </Typography>
                    </Box>
                    <StyledAvatar bgcolor={theme.palette.primary.main}>
                      <MonetizationOn />
                    </StyledAvatar>
                  </Box>
                  <TrendIndicator positive={true}>
                    <ArrowUpward sx={{ fontSize: 16, mr: 0.5 }} />
                    55% since yesterday
                  </TrendIndicator>
                </CardContent>
              </StatCard>
            </Grid>
            
            {/* Today's Users Card */}
            <Grid item xs={12} sm={6} md={3}>
              <StatCard elevation={1}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary" fontWeight="medium" sx={{ mb: 0.5 }}>
                        TODAY'S USERS
                      </Typography>
                      <Typography variant="h5" fontWeight="bold" color="text.primary">
                        2,300
                      </Typography>
                    </Box>
                    <StyledAvatar bgcolor="#2a7d7d">
                      <Person />
                    </StyledAvatar>
                  </Box>
                  <TrendIndicator positive={true}>
                    <ArrowUpward sx={{ fontSize: 16, mr: 0.5 }} />
                    3% since last week
                  </TrendIndicator>
                </CardContent>
              </StatCard>
            </Grid>
            
            {/* New Clients Card */}
            <Grid item xs={12} sm={6} md={3}>
              <StatCard elevation={1}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary" fontWeight="medium" sx={{ mb: 0.5 }}>
                        NEW CLIENTS
                      </Typography>
                      <Typography variant="h5" fontWeight="bold" color="text.primary">
                        +3,462
                      </Typography>
                    </Box>
                    <StyledAvatar bgcolor={theme.palette.secondary.dark}>
                      <Security />
                    </StyledAvatar>
                  </Box>
                  <TrendIndicator positive={false}>
                    <ArrowDownward sx={{ fontSize: 16, mr: 0.5 }} />
                    2% since last quarter
                  </TrendIndicator>
                </CardContent>
              </StatCard>
            </Grid>
            
            {/* Sales Card */}
            <Grid item xs={12} sm={6} md={3}>
              <StatCard elevation={1}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary" fontWeight="medium" sx={{ mb: 0.5 }}>
                        TOTAL SALES
                      </Typography>
                      <Typography variant="h5" fontWeight="bold" color="text.primary">
                        $103,430
                      </Typography>
                    </Box>
                    <StyledAvatar bgcolor={theme.palette.primary.dark}>
                      <ShoppingCart />
                    </StyledAvatar>
                  </Box>
                  <TrendIndicator positive={true}>
                    <ArrowUpward sx={{ fontSize: 16, mr: 0.5 }} />
                    5% than last month
                  </TrendIndicator>
                </CardContent>
              </StatCard>
            </Grid>
          </Grid>
          
          {/* Sales Overview Chart */}
          <Card elevation={1} sx={{ mb: 4, borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
            <Box 
              sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                height: '100%', 
                width: '100%', 
                opacity: 0.03, 
                background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)` 
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Box>
                  <Typography variant="h6" fontWeight="600" color="text.primary">
                    Sales Overview
                  </Typography>
                  <TrendIndicator positive={true} sx={{ mt: 0.5 }}>
                    <TrendingUp sx={{ fontSize: 16, mr: 0.5 }} />
                    4% more in 2024
                  </TrendIndicator>
                </Box>
              </Box>
              
              {/* Chart */}
              <GradientBox>
                <svg viewBox="0 0 800 300">
                  <path
                    d="M0,250 Q50,260 100,200 Q150,140 200,180 Q250,220 300,140 Q350,60 400,80 Q450,100 500,180 Q550,260 600,180 Q650,100 700,160 Q750,220 800,100"
                    fill="none"
                    stroke={theme.palette.primary.main}
                    strokeWidth="3"
                  />
                  <path
                    d="M0,250 Q50,260 100,200 Q150,140 200,180 Q250,220 300,140 Q350,60 400,80 Q450,100 500,180 Q550,260 600,180 Q650,100 700,160 Q750,220 800,100 V300 H0 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={theme.palette.primary.main} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={theme.palette.primary.main} stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Chart points */}
                  {[
                    { x: 100, y: 200 },
                    { x: 200, y: 180 },
                    { x: 300, y: 140 },
                    { x: 400, y: 80 },
                    { x: 500, y: 180 },
                    { x: 600, y: 180 },
                    { x: 700, y: 160 }
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#ffffff"
                      stroke={theme.palette.primary.main}
                      strokeWidth="2"
                    />
                  ))}
                  
                  {/* X-axis grid lines */}
                  {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
                    <line
                      key={i}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="270"
                      stroke="#e0e0e0"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  ))}
                  
                  {/* Y-axis grid lines */}
                  {[70, 120, 170, 220, 270].map((y, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={y}
                      x2="800"
                      y2={y}
                      stroke="#e0e0e0"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  ))}
                  
                  {/* X-axis labels */}
                  {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                    <text
                      key={month}
                      x={50 + index * 90}
                      y={290}
                      fontSize="12"
                      textAnchor="middle"
                      fill="#757575"
                      fontFamily="Poppins, sans-serif"
                      fontWeight="500"
                    >
                      {month}
                    </text>
                  ))}
                  
                  {/* Y-axis labels */}
                  {[0, 100, 200, 300, 400, 500].map((value) => (
                    <text
                      key={value}
                      x={25}
                      y={250 - value/2}
                      fontSize="12"
                      textAnchor="end"
                      fill="#757575"
                      fontFamily="Poppins, sans-serif"
                      fontWeight="500"
                    >
                      {value}
                    </text>
                  ))}
                </svg>
              </GradientBox>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;