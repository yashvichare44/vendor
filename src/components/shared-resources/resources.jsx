import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Container, 
  Typography, 
  Button, 
  LinearProgress, 
  Stack, 
  Chip, 
  Grid,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  ListItemButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tab,
  Tabs,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  TextField
} from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// ProjectCard component with buy modal functionality
function ProjectCard({ project, onUpdate }) {
  const theme = useTheme();
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [unitsToBuy, setUnitsToBuy] = useState(1);
  const [projectData, setProjectData] = useState(project || {
    title: "Save the Forests",
    description: "A crowdfunding campaign to support reforestation projects.",
    imageURL: "https://example.com/project-image.jpg",
    expiresAt: 1711238400,
    backers: 120,
    statusText: "Open",
    raised: 5.2,
    cost: 10,
    progressPercentage: 52
  });

  // Calculate how new units will affect the progress
  const remainingUnits = projectData.cost - projectData.raised;
  const previewPercentage = Math.min(
    100,
    ((projectData.raised + unitsToBuy) / projectData.cost) * 100
  );

  // Handle opening the buy modal
  const handleOpenBuyModal = () => {
    setOpenBuyModal(true);
  };

  // Handle closing the buy modal
  const handleCloseBuyModal = () => {
    setOpenBuyModal(false);
    setUnitsToBuy(1); // Reset to 1 unit when closing
  };

  // Handle unit change
  const handleUnitChange = (event, newValue) => {
    setUnitsToBuy(newValue);
  };

  // Handle manual input of units
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    const maxValue = Math.min(remainingUnits, 1000); // Set a reasonable upper limit
    setUnitsToBuy(Math.min(value, maxValue));
  };

  // Handle unit increment/decrement
  const handleIncrement = () => {
    const maxValue = Math.min(remainingUnits, 1000);
    setUnitsToBuy(Math.min(unitsToBuy + 1, maxValue));
  };

  const handleDecrement = () => {
    setUnitsToBuy(Math.max(unitsToBuy - 1, 1));
  };

  // Handle confirmation of purchase
  const handleConfirmPurchase = () => {
    const updatedProject = {
      ...projectData,
      raised: projectData.raised + unitsToBuy,
      progressPercentage: Math.min(
        100,
        ((projectData.raised + unitsToBuy) / projectData.cost) * 100
      ),
      backers: projectData.backers + 1
    };
    
    setProjectData(updatedProject);
    
    // If there's an onUpdate callback from parent, call it
    if (onUpdate) {
      onUpdate(updatedProject);
    }
    
    handleCloseBuyModal();
  };

  return (
    <>
      <Card 
        elevation={2} 
        sx={{ 
          borderRadius: 2,
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.2s ease',
          transform: 'translateX(50px)',

        
        }}
      >
        <CardMedia
          component="img"
          height={160}
          image={projectData.imageURL}
          alt={projectData.title}
          sx={{ 
            objectFit: 'contain',
            width: '100%',
            height: '160px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5'
          }}
        />
          
        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
            <Typography variant="h6" component="h2" fontWeight={600} noWrap>
              {projectData.title}
            </Typography>
            <Chip
              label={projectData.statusText}
              color="primary"
              size="small"
              sx={{ fontSize: '0.7rem', height: 22, fontWeight: 500 }}
            />
          </Box>

          <Box display="flex" alignItems="center" mb={1.5}>
            <AccessTimeIcon sx={{ color: 'text.secondary', fontSize: 16, mr: 0.75 }} />
            <Typography variant="caption" color="text.secondary">
              Expires Soon
            </Typography>
          </Box>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.5
            }}
          >
            {projectData.description}
          </Typography>
          
          <Box mb={2.5} mt="auto">
            <Box display="flex" justifyContent="space-between" mb={0.75}>
              <Typography variant="caption" fontWeight={500}>
                {projectData.raised} Units Raised
              </Typography>
              <Typography variant="caption" fontWeight={500}>
                {projectData.progressPercentage.toFixed(1)}%
              </Typography>
            </Box>
            
            <LinearProgress 
              variant="determinate" 
              value={projectData.progressPercentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                }
              }}
            />
            
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'right', mt: 0.75 }}>
              Goal: {projectData.cost} Units
            </Typography>
          </Box>
          
          <Button 
            variant="contained" 
            color="success" 
            fullWidth
            onClick={handleOpenBuyModal}
            sx={{ 
              py: 0.75,
              borderRadius: 2,
              fontWeight: 600,
              fontSize: '0.8rem',
              boxShadow: theme.shadows[2]
            }}
          >
            BUY
          </Button>
        </CardContent>
      </Card>

      {/* Buy Modal Dialog */}
      <Dialog 
        open={openBuyModal} 
        onClose={handleCloseBuyModal}
        PaperProps={{ sx: { borderRadius: 2, maxWidth: 480 } }}
      >
        <DialogTitle sx={{ pb: 1, pt: 2, fontWeight: 600 }}>
          Buy Units - {projectData.title}
        </DialogTitle>
        
        <DialogContent>
          <Box sx={{ mb: 3, mt: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Adjust the number of units you want to buy. This will support the project's progress toward its goal.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography id="units-slider" gutterBottom>
              Units to Buy
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <IconButton 
                onClick={handleDecrement} 
                disabled={unitsToBuy <= 1}
                size="small"
              >
                <RemoveIcon />
              </IconButton>
              
              <TextField
                value={unitsToBuy}
                onChange={handleInputChange}
                type="number"
                inputProps={{ 
                  min: 1, 
                  max: remainingUnits,
                  style: { textAlign: 'center' } 
                }}
                sx={{ mx: 2, width: 80 }}
              />
              
              <IconButton 
                onClick={handleIncrement} 
                disabled={unitsToBuy >= remainingUnits}
                size="small"
              >
                <AddIcon />
              </IconButton>
            </Box>
            
            <Slider
              value={unitsToBuy}
              onChange={handleUnitChange}
              aria-labelledby="units-slider"
              min={1}
              max={Math.min(remainingUnits, 100)} // Limit slider to 100 or remaining units, whichever is less
              marks={[
                { value: 1, label: '1' },
                { value: Math.min(remainingUnits, 100), label: `${Math.min(remainingUnits, 100)}` }
              ]}
            />
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              Progress Preview
            </Typography>
            
            <Box display="flex" justifyContent="space-between" mb={0.75}>
              <Typography variant="caption" fontWeight={500}>
                {(projectData.raised + unitsToBuy).toFixed(1)} Units Raised
              </Typography>
              <Typography variant="caption" fontWeight={500}>
                {previewPercentage.toFixed(1)}%
              </Typography>
            </Box>
            
            <LinearProgress 
              variant="determinate" 
              value={projectData.progressPercentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                }
              }}
            />
            
            <LinearProgress 
              variant="determinate" 
              value={previewPercentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                mt: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  backgroundImage: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                }
              }}
            />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Current
              </Typography>
              <Typography variant="caption" color="success.main">
                After Purchase
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ mt: 3, backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              Order Summary
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">Units</Typography>
              <Typography variant="body2">{unitsToBuy}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">Total Cost</Typography>
              <Typography variant="body2" fontWeight={600}>₹{(unitsToBuy * 100).toLocaleString()}</Typography>
            </Box>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleCloseBuyModal} variant="outlined" sx={{ borderRadius: 2 }}>
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmPurchase} 
            variant="contained" 
            color="success"
            sx={{ borderRadius: 2 }}
          >
            Confirm Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// Modified SuppliersAndWarehouses component to include the updated ProjectCard
function SuppliersAndWarehouses() {
  const theme = useTheme();
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [activeTab, setActiveTab] = useState('suppliers');
  const [projectsData, setProjectsData] = useState({});
  
  // Sample suppliers data
  const suppliers = [
    { id: 1, name: "Home Essentials", type: "Crockery Products" },
    { id: 2, name: "Textile & Apparel Hub", type: "Wearables" },
    { id: 3, name: "Mobile Accessories Traders", type: "Electronics" },
    { id: 4, name: "Stationery Suppliers", type: "Stationery products" },
  ];
  
  // Warehouse data
  const warehouses = [
    {
      id: 1,
      name: "Shree Storage",
      owner: "Rajesh Sharma",
      location: "Andheri, Mumbai",
      area: "465 sq.m",
      rent: "₹1,50,000/month",
      image: "https://imagecdn.99acres.com/media1/23353/7/467067400M-1737618462281.jpg"
    },
    {
      id: 2,
      name: "Mehta Logistics",
      owner: "Priya Mehta",
      location: "Whitefield, Bangalore",
      area: "604 sq.m",
      rent: "₹1,85,000/month",
      image: "https://imagecdn.99acres.com/media1/28934/10/578690401M-1742379035920.jpg"
    },
    {
      id: 3,
      name: "Suraksha Hub",
      owner: "Vikram Patel",
      location: "Gurgaon, Haryana",
      area: "446 sq.m",
      rent: "₹1,35,000/month",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWOU35izyCPvOGugHUW7ccZ3kCxMgOQwOrg&s"
    },
    {
      id: 4,
      name: "SafeWare India",
      owner: "Anjali Desai",
      location: "Ambattur, Chennai",
      area: "483 sq.m",
      rent: "₹1,60,000/month",
      image: "https://www.gurgaonapartments.in/admin/upload/project/1617259425-warehouse-for-rent-in-gurgaon.jpg"
    },
    {
      id: 5,
      name: "Krishna Depot",
      owner: "Arjun Reddy",
      location: "Uppal, Hyderabad",
      area: "650 sq.m",
      rent: "₹2,10,000/month",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/10/full/1615397966-5551.jpg?im=FeatureCrop,size=(826,465)"
    },
  ];
  
  // Unique products for each supplier
  const initialSupplierProjects = {
    // Home Essentials - Crockery Products
    1: [
      {
        "title": "Premium Cookware Set",
        "description": "Professional-grade stainless steel cookware set with non-stick coating and heat-resistant handles.",
        "imageURL": "https://m.media-amazon.com/images/I/91vWeAHa6mL._AC_UF894,1000_QL80_.jpg",
        "expiresAt": 1711238400,
        "statusText": "Open",
        "raised": 763,
        "cost": 1000,
        "progressPercentage": 76.3
      },
      {
        "title": "Ceramic Dinner Set",
        "description": "Elegant 24-piece ceramic dinner set with hand-painted designs for special occasions.",
        "imageURL": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-668486,resizemode-75,msid-114823142/top-trending-products/kitchen-dining/dinner-set/best-ceramic-dinner-sets-to-elevate-your-dining-experience.jpg",
        "expiresAt": 1711238400,
        "statusText": "Open",
        "raised": 283,
        "cost": 1000,
        "progressPercentage": 28.3
      },
      {
        "title": "Glass Bakeware Collection",
        "description": "Tempered glass bakeware collection including casserole dishes, pie plates, and loaf pans.",
        "imageURL": "https://m.media-amazon.com/images/I/61J3guiLl1L._AC_UF894,1000_QL80_.jpg",
        "expiresAt": 1711238400,
        "statusText": "Open",
        "raised": 990,
        "cost": 1000,
        "progressPercentage": 99.0
      },
      {
        "title": "Cast Iron Skillet Set",
        "description": "Pre-seasoned cast iron skillet set in three different sizes for versatile cooking.",
        "imageURL": "https://static.toiimg.com/thumb/msid-103863867,width-400,resizemode-4/103863867.jpg",
        "expiresAt": 1711238400,
        "statusText": "Open",
        "raised": 352,
        "cost": 1000,
        "progressPercentage": 35.2
      },
      {
        "title": "Coffee Mug Collection",
        "description": "Set of 6 artisanal ceramic coffee mugs with unique designs and comfortable handles.",
        "imageURL": "https://images.saymedia-content.com/.image/t_share/MTc4MjQyMTY2MzI4Nzk2Nzc2/four-reasons-to-collect-coffee-mugs.jpg",
        "expiresAt": 1711238400,
        "statusText": "Open",
        "raised": 526,
        "cost": 1000,
        "progressPercentage": 52.6
      },
      {
        "title": "Kitchen Utensil Set",
        "description": "Complete set of bamboo and silicone kitchen utensils that are heat-resistant and eco-friendly.",
        "imageURL": "https://m.media-amazon.com/images/I/71ZyF793oUL.jpg",
        "expiresAt": 1711238400,
        "statusText": "Open",
        "raised": 524,
        "cost": 1000,
        "progressPercentage": 52.4
      }
    ],
    // Textile & Apparel Hub items
    2: [
      {
        title: "Organic Cotton T-Shirts",
      imageURL: "https://mms-images.out.customink.com/mms/images/catalog/styles/176100/catalog_detail_image_medium.jpg?digest=1741869157",
      raised: 173,
      cost: 1000,
      progressPercentage: 17.3,
      category: "Apparel"
      },
      {
        title: "Winter Jacket Collection",
      imageURL: "https://img.pikbest.com/wp/202345/winter-jackets-the-design-for-a-new-coat-or-jacket_9575583.jpg!w700wp",
      raised: 318,
      cost: 1000,
      progressPercentage: 31.8,
      category: "Apparel"
      },
      {
        title: "Handcrafted Leather Belts",
      imageURL: "https://www.bullhidebelts.com/cdn/shop/files/bullhidebelts_homepagemini_hero1-min_1080x.jpg?v=1664216045",
      raised: 133,
      cost: 1000,
      progressPercentage: 13.3,
      category: "Apparel"
      },
      {
        title: "Eco-friendly Swimwear",
        imageURL: "https://www.thegoodtrade.com/wp-content/uploads/2024/07/sustainable-mens-swim-trunks-industry-of-all-nations-edited.jpeg",
        raised: 390,
        cost: 1000,
        progressPercentage: 39.0,
        category: "Apparel"
      },
      {
        title: "Performance Athletic Socks",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfymzNcf-NDpSC77K-1Gt9vDqJsieENdwTiQ&s",
      raised: 718,
      cost: 1000,
      progressPercentage: 71.8,
      category: "Apparel"
      },
      {
        title: "Silk Scarves Collection",
      imageURL: "https://m.media-amazon.com/images/I/71E0wq5TA-L._AC_UY1100_.jpg",
      raised: 673,
      cost: 1000,
      progressPercentage: 67.3,
      category: "Apparel"
      }
    ],
    // Mobile Accessories Traders - Electronics
    3: [
      {
        title: "Wireless Earbuds Pro",
        imageURL: "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-001-6792869accae0.jpg?crop=0.587xw:0.782xh;0.199xw,0.179xh&resize=640:*",
        raised: 202,
        cost: 1000,
        progressPercentage: 20.2,
        category: "Electronics"
      },
      {
        title: "Phone Camera Lens Kit",
      imageURL: "https://www.electroniksindia.com/cdn/shop/files/apexel-10-in-1-phone-camera-lens-kit-fisheye-wide-angle-macro-lens-cpl-filter-kaleidoscope-and-2x-telescope-lens-for-smartphone-by-electroniksindia-121.webp?v=1739159087&width=1080",
      raised: 642,
      cost: 1000,
      progressPercentage: 64.2,
      category: "Electronics"
      },
      {
        title: "Fast Charging Power Bank",
        imageURL: "https://www.hindustantimes.com/ht-img/img/2024/01/24/1600x900/power_banks_1706089348897_1706089433591.png",
        raised: 374,
        cost: 1000,
        progressPercentage: 37.4,
        category: "Electronics"
      },
      {
        title: "Premium Phone Cases",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2wrZVRHBICnLv7juf74AbazR_8QFg8sU3w&s",
        raised: 812,
        cost: 1000,
        progressPercentage: 81.2,
        category: "Electronics"
      },
      {
        title: "Tablet Stand with Speakers",
      imageURL: "https://images.jdmagicbox.com/buying_guide/tablet_stand_rep_5.jpg",
      raised: 174,
      cost: 1000,
      progressPercentage: 17.4,
      category: "Electronics"
      },
      {
        title: "Smart Watch Bands",
        imageURL: "https://i01.appmifile.com/webfile/globalimg/products/m/mi-smart-band-6/section08.png",
        raised: 19,
        cost: 1000,
        progressPercentage: 1.9,
        category: "Electronics"
      }
    ],
    // Stationery Suppliers - Stationery products
    4: [
      {
        title: "Fountain Pen Collection",
      imageURL: "https://images.squarespace-cdn.com/content/v1/5349ba13e4b095a3fb0ba65c/06ac2fe5-e3e2-4ae6-a609-676728d31656/Recent-vintage-pen-finds.jpg",
      raised: 378,
      cost: 1000,
      progressPercentage: 37.8,
      category: "Stationery"
      },
      {
        title: "Leather-bound Journals",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPLPw4YqFbbYTgYPdfVrR7sdREQXw7B_3YQ&s",
      raised: 641,
      cost: 1000,
      progressPercentage: 64.1,
      category: "Stationery"
      },
      {
        title: "Ergonomic Office Set",
      imageURL: "https://www.moglix.com/blog/wp-content/uploads/2020/11/blog-banner-office-chairs.jpg",
      raised: 275,
      cost: 1000,
      progressPercentage: 27.5,
      category: "Stationery"
      },
      {
        title: "Artist Sketch Kit",
      imageURL: "https://m.media-amazon.com/images/I/91IU3wis5aL._AC_UF1000,1000_QL80_.jpg",
      raised: 895,
      cost: 1000,
      progressPercentage: 89.5,
      category: "Stationery"
      },
      {
        title: "Calligraphy Starter Set",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7Wvv0WAuFSHJKNsyy7-v2yupGPnXasvXdQ&s",
      raised: 143,
      cost: 1000,
      progressPercentage: 14.3,
      category: "Stationery"
      },
      {
        title: "Eco-friendly Planner",
      imageURL: "https://marketplace.canva.com/EAFOWOercM0/1/0/1131w/canva-beige-simple-minimalist-daily-planner-Arln5OBnbS8.jpg",
      raised: 527,
      cost: 1000,
      progressPercentage: 52.7,
      category: "Stationery"
      }
    ],
  };
  
  // Initialize project data state
  React.useEffect(() => {
    setProjectsData(initialSupplierProjects);
  }, []);
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    // Reset selections when switching tabs
    if (newValue === 'suppliers') {
      setSelectedWarehouse(null);
    } else {
      setSelectedSupplier(null);
    }
  };

  // Handle supplier selection
  const handleSupplierSelect = (supplier) => {
    setSelectedSupplier(supplier);
  };

  // Handle warehouse selection
  const handleWarehouseSelect = (warehouse) => {
    setSelectedWarehouse(warehouse);
  };

  // Handle project update
  const handleProjectUpdate = (supplierId, updatedProject) => {
    // Find the project in the supplier's projects array and update it
    const updatedProjects = [...projectsData[supplierId]];
    const projectIndex = updatedProjects.findIndex(p => p.title === updatedProject.title);
    
    if (projectIndex !== -1) {
      updatedProjects[projectIndex] = updatedProject;
      setProjectsData({
        ...projectsData,
        [supplierId]: updatedProjects
      });
    }
  };

  return (
    <Container  sx={{ py: 4, marginLeft:3, marginRight:0,  minWidth: '95%'}}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
        Suppliers & Warehouses Marketplace
      </Typography>
      
      <Tabs 
        value={activeTab} 
        onChange={handleTabChange} 
        sx={{ 
          mb: 4,
          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.primary.main,
            height: 3,
            borderRadius: '3px 3px 0 0'
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            minWidth: 100,
            px: 2,
            '&.Mui-selected': {
              color: theme.palette.primary.main
            }
          }
        }}
      >
        <Tab 
          label="Suppliers" 
          value="suppliers" 
          icon={<StorefrontIcon />} 
          iconPosition="start" 
        />
        <Tab 
          label="Warehouses" 
          value="warehouses" 
          icon={<WarehouseIcon />} 
          iconPosition="start" 
        />
      </Tabs>
      
      {activeTab === 'suppliers' && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={1} 
              sx={{ 
                borderRadius: 2, 
                height: '100%',
                overflow: 'hidden' 
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  p: 2, 
                  backgroundColor: theme.palette.primary.main, 
                  color: 'white',
                  fontWeight: 600 
                }}
              >
                Select a Supplier
              </Typography>
              
              <List component="div" sx={{ p: 0 }}>
                {suppliers.map((supplier, index) => (
                  <React.Fragment key={supplier.id}>
                    <ListItemButton
                      selected={selectedSupplier?.id === supplier.id}
                      onClick={() => handleSupplierSelect(supplier)}
                      sx={{ 
                        py: 1.5,
                        '&.Mui-selected': {
                          backgroundColor: `${theme.palette.primary.light}30`,
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.light}50`,
                          }
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <BusinessIcon />
                      </ListItemIcon>
                      
                      <ListItemText 
                        primary={supplier.name} 
                        secondary={supplier.type}
                        primaryTypographyProps={{ fontWeight: 500 }} 
                      />
                    </ListItemButton>
                    
                    {index < suppliers.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={8} >
            {selectedSupplier ? (
              <>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" component="h2" fontWeight={600}>
                    {selectedSupplier.name}
                  </Typography>
                  
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedSupplier.type} Supplier
                  </Typography>
                </Box>
                
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Available Products
                </Typography>
                
                <Grid container spacing={3}>
                  {projectsData[selectedSupplier.id]?.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <ProjectCard 
                        project={project} 
                        onUpdate={(updatedProject) => handleProjectUpdate(selectedSupplier.id, updatedProject)} 
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            ) : (
              <Paper 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2,
                  
                }}
              >
                <StorefrontIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Select a supplier from the list
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  View supplier products and make purchases
                </Typography>
              </Paper>
            )}
          </Grid>
        </Grid>
      )}
      
      {activeTab === 'warehouses' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={1} 
              sx={{ 
                borderRadius: 2, 
                height: '100%',
                overflow: 'hidden' 
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  p: 2, 
                  backgroundColor: theme.palette.primary.main, 
                  color: 'white',
                  fontWeight: 600 
                }}
              >
                Available Warehouses
              </Typography>
              
              <List component="div" sx={{ p: 0 }}>
                {warehouses.map((warehouse, index) => (
                  <React.Fragment key={warehouse.id}>
                    <ListItemButton
                      selected={selectedWarehouse?.id === warehouse.id}
                      onClick={() => handleWarehouseSelect(warehouse)}
                      sx={{ 
                        py: 1.5,
                        '&.Mui-selected': {
                          backgroundColor: `${theme.palette.primary.light}30`,
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.light}50`,
                          }
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <WarehouseIcon />
                      </ListItemIcon>
                      
                      <ListItemText 
                        primary={warehouse.name} 
                        secondary={warehouse.location}
                        primaryTypographyProps={{ fontWeight: 500 }} 
                      />
                    </ListItemButton>
                    
                    {index < warehouses.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={8}>
            {selectedWarehouse ? (
              <Card 
                elevation={2} 
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  height={300}
                  image={selectedWarehouse.image}
                  alt={selectedWarehouse.name}
                  sx={{ objectFit: 'cover' }}
                />
                
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
                    {selectedWarehouse.name}
                  </Typography>
                  
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {selectedWarehouse.location}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Owner
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {selectedWarehouse.owner}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Area
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {selectedWarehouse.area}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Rent
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {selectedWarehouse.rent}
                      </Typography>
                    </Grid>
                  </Grid>
                  
                  <Stack direction="row" spacing={2}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      sx={{ 
                        py: 1,
                        px: 3,
                        borderRadius: 2,
                        fontWeight: 600
                      }}
                    >
                      Contact Owner
                    </Button>
                    
                    <Button 
                      variant="outlined" 
                      color="primary"
                      sx={{ 
                        py: 1,
                        px: 3,
                        borderRadius: 2,
                        fontWeight: 600
                      }}
                    >
                      Schedule Visit
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ) : (
              <Paper 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2
                }}
              >
                <WarehouseIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Select a warehouse from the list
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  View warehouse details and contact information
                </Typography>
              </Paper>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

// Export the component
export default SuppliersAndWarehouses;