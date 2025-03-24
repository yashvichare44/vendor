import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  Avatar,
  Tooltip,
  Badge,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Import icons
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
  Folder as ProjectsIcon,
  CalendarMonth as CalendarIcon,
  Email as EmailIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';


import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsightsIcon from '@mui/icons-material/Insights';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const drawerWidth = 260;

// Custom styled components
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#d6ff80',
    color: '#d6ff80',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

// Navigation bar component with routing
const NavbarWithRouting = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, badge: null, path: '/dashboard' },
    { text: 'Schemes', icon: <AutoAwesomeIcon />, badge: null, path: '/schemes' },
    { text: 'Shared Resources', icon: <FolderSharedIcon />, badge: null, path: '/shared-resources' },
    { text: 'Business Setup', icon: <BusinessCenterIcon />, badge: null, path: '/business-setup' },
    { text: 'Business Insights', icon: <InsightsIcon />, badge: null, path: '/business-insights' },
    { text: 'Financial Plan', icon: <AccountBalanceWalletIcon />, badge: null, path: '/financial-plan' },
    { text: 'Community Hub', icon: <PeopleIcon />, badge: null, path: '/community' },
    // { text: 'Form', icon: <AssignmentIcon />, badge: 5, path: '/form' },
    { text: 'Subscription', icon: <AccountBalanceWalletIcon />, badge: null, path: '/pay' },
  ];

  const bottomNavItems = [
 
    { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
    { text: 'Logout', icon: <LogoutIcon />, badge: null, path: '/logout' },
  ];

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : theme.spacing(9),
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : theme.spacing(9),
            overflowX: 'hidden',
            backgroundColor: '#004d4d',
            color: '#fff',
            borderRight: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42)',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        <DrawerHeader sx={{ minHeight: '64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {open ? (
            <>
              <Typography variant="h6" sx={{ 
                fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
                fontWeight: 600, 
                background: 'linear-gradient(45deg, #d6ff80, #a0e57c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                HaathSarathi
              </Typography>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'rgba(255,255,255,0.7)' }}>
                <ChevronLeftIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleDrawerToggle} sx={{ mx: 'auto', color: 'rgba(255,255,255,0.7)' }}>
              <MenuIcon />
            </IconButton>
          )}
        </DrawerHeader>
        
        {open && (
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', mb: 1 }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar 
                alt="User Profile" 
                src="https://i.pravatar.cc/300" 
                sx={{ width: 42, height: 42 }}
              />
            </StyledBadge>
            <Box sx={{ ml: 2, lineHeight: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Mahesh Singh
              </Typography>
              <Typography variant="caption" sx={{ color: "#d6ff80", ml: -4.3 }}>
                Craftsman
              </Typography>
            </Box>
          </Box>
        )}
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        
        {/* Main navigation items */}
        <List sx={{ py: 1 }}>
          {navItems.map((item, index) => (
            <ListItem 
              key={item.text} 
              disablePadding 
              sx={{ 
                display: 'block',
                px: 1,
                py: 0.5
              }}
            >
              <Tooltip title={open ? "" : item.text} placement="right">
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    borderRadius: '12px',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(214, 255, 128, 0.15)',
                      '&:hover': {
                        backgroundColor: 'rgba(214, 255, 128, 0.25)',
                      },
                      '& .MuiListItemIcon-root': {
                        color: '#d6ff80',
                      },
                      '& .MuiTypography-root': {
                        fontWeight: 600,
                        color: '#fff',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {item.badge ? 
                      <Badge badgeContent={item.badge} color="secondary">
                        {item.icon}
                      </Badge> : 
                      item.icon
                    }
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      opacity: open ? 1 : 0,
                      color: 'rgba(255,255,255,0.7)',
                      '& .MuiTypography-root': {
                        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
                      }
                    }} 
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mt: 'auto' }} />
        
        {/* Bottom navigation items */}
        <List sx={{ py: 1 }}>
          {bottomNavItems.map((item, index) => (
            <ListItem 
              key={item.text} 
              disablePadding 
              sx={{ 
                display: 'block',
                px: 1,
                py: 0.5
              }}
            >
              <Tooltip title={open ? "" : item.text} placement="right">
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    borderRadius: '12px',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(214, 255, 128, 0.15)',
                      '&:hover': {
                        backgroundColor: 'rgba(214, 255, 128, 0.25)',
                      },
                      '& .MuiListItemIcon-root': {
                        color: '#d6ff80',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {item.badge ? 
                      <Badge badgeContent={item.badge} color="secondary">
                        {item.icon}
                      </Badge> : 
                      item.icon
                    }
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      opacity: open ? 1 : 0,
                      color: 'rgba(255,255,255,0.7)',
                      '& .MuiTypography-root': {
                        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
                      }
                    }} 
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {/* Main content area with proper spacing */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          bgcolor: '#f8faf7',
          width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${theme.spacing(9)}px)`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

// Logout page with redirect functionality
const LogoutPage = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Handle logout logic here
    const handleLogout = () => {
      // Implement your logout logic
      console.log("Logging out...");
      
      // Redirect to login page after logout
      setTimeout(() => {
        navigate('/');
      }, 1000);
    };
    
    handleLogout();
  }, [navigate]);
  
  return (
    <Box sx={{ color: '#ffffff', textAlign: 'center', mt: 4 }}>
      <Typography variant="h6">Logging out...</Typography>
    </Box>
  );
};

// Main app component that accepts children
const PremiumLeftNavbar = ({ children }) => {
  return (
    <NavbarWithRouting>
      {children}
    </NavbarWithRouting>
  );
};

export default PremiumLeftNavbar;