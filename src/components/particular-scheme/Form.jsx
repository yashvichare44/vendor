import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Link,
  Avatar,
  Divider,
  styled,
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled components for enhanced results view
const HeaderBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, #003838 0%, #004d4d 100%)`,
  padding: '48px',
  textAlign: 'center',
  color: '#fff',
}));

const SectionButton = styled(Button)(({ active }) => ({
  padding: '12px 24px',
  borderRadius: 24,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  backgroundColor: active ? '#004d4d' : '#f5f5f5',
  color: active ? '#fff' : '#004d4d',
  transform: active ? 'translateY(-4px)' : 'none',
  boxShadow: active ? '0 4px 12px rgba(0, 77, 77, 0.25)' : 'none',
  '&:hover': {
    backgroundColor: active ? '#003838' : '#e0e0e0',
  },
  transition: 'all 0.3s ease',
  marginRight: 8,
  marginBottom: 8,
}));

const ButtonIndex = styled(Avatar)(({ active }) => ({
  width: 24,
  height: 24,
  fontSize: '0.75rem',
  backgroundColor: active ? '#d6ff80' : '#2a7d7d',
  color: active ? '#004d4d' : '#fff',
  marginRight: 8,
}));

const ContentBox = styled(Paper)(() => ({
  padding: '16px 24px',
  marginBottom: 16,
  borderLeft: '4px solid #004d4d',
  backgroundColor: 'rgba(0, 77, 77, 0.05)',
  borderRadius: 8,
}));

const StepItem = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 16,
  padding: 16,
  backgroundColor: '#ffffff',
  borderRadius: 8,
  marginBottom: 16,
  border: '1px solid #e0e0e0',
}));

const StepNumber = styled(Avatar)(() => ({
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  backgroundColor: 'rgba(0, 77, 77, 0.1)',
  color: '#004d4d',
  fontWeight: 600,
}));

const VideoCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const VideoThumbnail = styled(Box)(() => ({
  position: 'relative',
  height: 180,
  backgroundColor: '#f5f5f5',
}));

const PlayButton = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 77, 77, 0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
}));

const SchemeFinderForm = () => {
  // Form data state
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    state: "",
    area: "",
    category: "",
    differently_abled: "",
    minority: "",
    business: ""
  });
  
  // API response state
  const [apiResponse, setApiResponse] = useState(null);
  
  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  
  // Notification state
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  
  // Active section for results view
  const [activeSection, setActiveSection] = useState(0);

  // Handle input changes for all form fields
  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    // Check if all fields are filled
    const requiredFields = ["gender", "age", "state", "area", "category", "differently_abled", "minority", "business"];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      setNotification({
        open: true,
        message: `Please fill in all required fields: ${emptyFields.join(", ")}`,
        severity: "error"
      });
      return false;
    }
    
    // Validate age is a number
    if (isNaN(parseInt(formData.age))) {
      setNotification({
        open: true,
        message: "Age must be a valid number",
        severity: "error"
      });
      return false;
    }
    
    return true;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    // Prepare data for API
    const apiData = {
      ...formData,
      age: parseInt(formData.age) // Convert age to integer as required by API
    };
    
    setIsLoading(true);
    
    try {
      // Call the API endpoint
      const response = await fetch('/api/get-scheme-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'An error occurred');
      }
      
      const data = await response.json();
      setApiResponse(data);
      setActiveSection(0); // Reset to first section when new data is loaded
      
      // Show success notification
      setNotification({
        open: true,
        message: "Successfully retrieved scheme recommendations",
        severity: "success"
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show error notification
      setNotification({
        open: true,
        message: error.message || "Failed to submit data. Please try again.",
        severity: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle notification close
  const handleCloseNotification = () => {
    setNotification(prev => ({
      ...prev,
      open: false
    }));
  };

  // Function to render scheme sections with enhanced UI
  const renderSchemeResults = () => {
    if (!apiResponse) return null;
    
    return (
      <Box sx={{ mt: 4, animation: 'fadeIn 0.5s ease' }}>
        {/* Enhanced Header */}
        <HeaderBox>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            {apiResponse.Feature_Name || "Recommended Schemes"}
          </Typography>
          <Box 
            sx={{ 
              width: 96, 
              height: 4, 
              bgcolor: '#d6ff80', 
              mx: 'auto', 
              mb: 3 
            }} 
          />
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', color: 'rgba(255, 255, 255, 0.9)' }}>
            {apiResponse.Description}
          </Typography>
        </HeaderBox>
        
        {/* Section Buttons */}
        <Box sx={{ px: 3, py: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 2, 
              mb: 4 
            }}
          >
            {apiResponse.Sections && apiResponse.Sections.map((section, index) => (
              <SectionButton
                key={index}
                active={activeSection === index ? 1 : 0}
                onClick={() => setActiveSection(index)}
              >
                <ButtonIndex active={activeSection === index ? 1 : 0}>
                  {index + 1}
                </ButtonIndex>
                {section.Section_Name}
              </SectionButton>
            ))}
          </Box>
          
          {/* Active Section Content */}
          {apiResponse.Sections && apiResponse.Sections.length > 0 && (
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ mb: 3, color: '#004d4d', fontWeight: 600 }}>
                {apiResponse.Sections[activeSection].Section_Name}
              </Typography>
              <ContentBox>
                <Typography variant="body1">
                  {apiResponse.Sections[activeSection].Content}
                </Typography>
              </ContentBox>
              
              {/* Display schemes if available */}
              {apiResponse.Sections[activeSection].Schemes && (
                <Box>
                  <Typography variant="h6" sx={{ mb: 3, color: '#004d4d', fontWeight: 600 }}>
                    Available Schemes
                  </Typography>
                  <Grid container spacing={3}>
                    {apiResponse.Sections[activeSection].Schemes.map((scheme, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" sx={{ color: '#004d4d', mb: 1 }}>
                              {scheme.Name}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                              {scheme.Description}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                              <Typography variant="body2" sx={{ display: 'flex', mb: 1 }}>
                                <Box component="span" sx={{ fontWeight: 500, color: '#004d4d', mr: 1, minWidth: 75 }}>
                                  Eligibility:
                                </Box>
                                {scheme.Eligibility}
                              </Typography>
                              <Typography variant="body2" sx={{ display: 'flex' }}>
                                <Box component="span" sx={{ fontWeight: 500, color: '#004d4d', mr: 1, minWidth: 75 }}>
                                  Benefits:
                                </Box>
                                {scheme.Benefits}
                              </Typography>
                            </Box>
                          </CardContent>
                          {scheme.Application_Link && (
                            <CardContent sx={{ pt: 0 }}>
                              <Button 
                                variant="contained" 
                                color="primary" 
                                endIcon={<ArrowForwardIcon />}
                                component={Link}
                                href={scheme.Application_Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ bgcolor: '#004d4d', '&:hover': { bgcolor: '#003838' } }}
                              >
                                Apply Now
                              </Button>
                            </CardContent>
                          )}
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
              
              {/* Display steps if available */}
              {apiResponse.Sections[activeSection].Steps && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ mb: 3, color: '#004d4d', fontWeight: 600 }}>
                    Application Steps
                  </Typography>
                  <Box>
                    {apiResponse.Sections[activeSection].Steps.map((step, idx) => (
                      <StepItem key={idx}>
                        <StepNumber>{idx + 1}</StepNumber>
                        <Typography variant="body1">{step}</Typography>
                      </StepItem>
                    ))}
                  </Box>
                </Box>
              )}
              
              {/* Display resources if available */}
              {apiResponse.Sections[activeSection].Resources && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ mb: 3, color: '#004d4d', fontWeight: 600 }}>
                    Resources
                  </Typography>
                  <Grid container spacing={3}>
                    {apiResponse.Sections[activeSection].Resources.map((resource, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" sx={{ color: '#004d4d', mb: 2 }}>
                              {resource.Title}
                            </Typography>
                          </CardContent>
                          <CardContent sx={{ pt: 0 }}>
                            <Button 
                              variant="contained" 
                              color="primary" 
                              endIcon={<OpenInNewIcon />}
                              component={Link}
                              href={resource.URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ bgcolor: '#004d4d', '&:hover': { bgcolor: '#003838' } }}
                            >
                              {activeSection === 2 ? "Track Application" : "Visit Website"}
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
              
              {/* Video Tutorials */}
              {apiResponse.Sections[activeSection].YouTube_Videos && apiResponse.Sections[activeSection].YouTube_Videos.length > 0 && (
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h6" sx={{ mb: 3, color: '#004d4d', fontWeight: 600 }}>
                    Video Tutorials
                  </Typography>
                  <Grid container spacing={3}>
                    {apiResponse.Sections[activeSection].YouTube_Videos.map((video, idx) => (
                      <Grid item xs={12} sm={6} md={4} key={idx}>
                        <VideoCard>
                          <VideoThumbnail>
                            <Box 
                              component="img" 
                              src="/api/placeholder/400/225" 
                              alt={video.title}
                              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.3)' }} />
                            <PlayButton>
                              <PlayArrowIcon />
                            </PlayButton>
                          </VideoThumbnail>
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography 
                              variant="subtitle2" 
                              sx={{ 
                                mb: 2, 
                                height: 40, 
                                overflow: 'hidden', 
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                              }}
                            >
                              {video.title}
                            </Typography>
                          </CardContent>
                          <CardContent sx={{ pt: 0 }}>
                            <Button 
                              fullWidth
                              variant="outlined" 
                              color="primary" 
                              endIcon={<OpenInNewIcon />}
                              component={Link}
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              sx={{ color: '#004d4d', borderColor: '#004d4d' }}
                            >
                              Watch Video
                            </Button>
                          </CardContent>
                        </VideoCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Box>
          )}
          
          {/* Footer */}
          <Box 
            sx={{ 
              bgcolor: 'rgba(0, 77, 77, 0.05)', 
              p: 2, 
              textAlign: 'center',
              borderTop: 1,
              borderColor: 'divider',
              mt: 4
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Note: Always verify information on official government websites before applying.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const genders = [
    { label: "Male", icon: "♂" },
    { label: "Female", icon: "♀" },
    { label: "Transgender", icon: "⚧" },
  ];

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
    "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];

  const businessTypes = [
    "Small Retail Shop", 
    "Restaurant/Food Service", 
    "IT/Software", 
    "Manufacturing", 
    "Agriculture", 
    "Service Industry", 
    "Healthcare", 
    "Education", 
    "Construction", 
    "Other"
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f8faf7 0%, #e0f2f1 100%)",
        display: "flex",
        justifyContent: "center",
        py: 3,
      }}
    >
      <Container maxWidth={apiResponse ? "lg" : "sm"}>
        <Card
          elevation={0}
          sx={{
            overflow: "visible",
            p: 1,
            maxWidth: apiResponse ? "100%" : 450,
            mx: "auto",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            {!apiResponse && (
              <>
                <Typography variant="h2" align="center" gutterBottom sx={{ color: '#004d4d', fontWeight: 700, fontSize: '1.8rem', mb: '1.5rem' }}>
                  Find Eligible Schemes
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h3" sx={{ color: '#004d4d', mb: 1.5, fontWeight: 600, fontSize: '1rem' }}>
                    Gender
                  </Typography>
                  <Grid container spacing={1} justifyContent="center">
                    {genders.map((gender) => (
                      <Grid item xs={4} key={gender.label}>
                        <Paper
                          elevation={0}
                          onClick={() => handleInputChange("gender", gender.label)}
                          sx={{
                            p: 1.5,
                            textAlign: "center",
                            cursor: "pointer",
                            borderRadius: 3,
                            border: `2px solid ${formData.gender === gender.label ? '#004d4d' : '#e0e0e0'}`,
                            backgroundColor: formData.gender === gender.label ? 'rgba(0, 77, 77, 0.05)' : 'transparent',
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: '#2a7d7d',
                            },
                          }}
                        >
                          <Typography
                            variant="h3"
                            component="div"
                            sx={{
                              fontSize: "1.5rem",
                              color: formData.gender === gender.label ? '#004d4d' : "#757575",
                              mb: 0.5,
                            }}
                          >
                            {gender.icon}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="div"
                            sx={{
                              fontWeight: 500,
                              color: formData.gender === gender.label ? '#004d4d' : "#555555",
                            }}
                          >
                            {gender.label}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Age"
                      variant="outlined"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="state-label">State</InputLabel>
                      <Select
                        labelId="state-label"
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        label="State"
                      >
                        <MenuItem value="" disabled><em>Select state</em></MenuItem>
                        {statesOfIndia.map((state) => (
                          <MenuItem key={state} value={state}>{state}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="area-label">Area</InputLabel>
                      <Select
                        labelId="area-label"
                        id="area"
                        value={formData.area}
                        onChange={(e) => handleInputChange("area", e.target.value)}
                        label="Area"
                      >
                        <MenuItem value="" disabled><em>Select area</em></MenuItem>
                        <MenuItem value="Urban">Urban</MenuItem>
                        <MenuItem value="Rural">Rural</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="category-label">Category</InputLabel>
                      <Select
                        labelId="category-label"
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        label="Category"
                      >
                        <MenuItem value="" disabled><em>Select category</em></MenuItem>
                        <MenuItem value="General">General</MenuItem>
                        <MenuItem value="OBC">OBC</MenuItem>
                        <MenuItem value="PVTG">PVTG</MenuItem>
                        <MenuItem value="SC">SC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="differently-abled-label">Differently Abled</InputLabel>
                      <Select
                        labelId="differently-abled-label"
                        id="differently-abled"
                        value={formData.differently_abled}
                        onChange={(e) => handleInputChange("differently_abled", e.target.value)}
                        label="Differently Abled"
                      >
                        <MenuItem value="" disabled><em>Select option</em></MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                      <InputLabel id="minority-label">Minority</InputLabel>
                      <Select
                        labelId="minority-label"
                        id="minority"
                        value={formData.minority}
                        onChange={(e) => handleInputChange("minority", e.target.value)}
                        label="Minority"
                      >
                        <MenuItem value="" disabled><em>Select option</em></MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                      <InputLabel id="business-label">Business Type</InputLabel>
                      <Select
                        labelId="business-label"
                        id="business"
                        value={formData.business}
                        onChange={(e) => handleInputChange("business", e.target.value)}
                        label="Business Type"
                      >
                        <MenuItem value="" disabled><em>Select business type</em></MenuItem>
                        {businessTypes.map((type) => (
                          <MenuItem key={type} value={type}>{type}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    sx={{
                      py: 1,
                      px: 4,
                      fontWeight: 600,
                      backgroundColor: '#004d4d',
                      color: "#ffffff",
                      "&:hover": {
                        backgroundColor: '#003838',
                      },
                      borderRadius: 2,
                      minWidth: 180,
                      textTransform: 'none',
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Find Schemes"
                    )}
                  </Button>
                </Box>
              </>
            )}

            {/* Render API response data */}
            {renderSchemeResults()}

            {/* Back button when showing results */}
            {apiResponse && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setApiResponse(null)}
                  sx={{ 
                    borderRadius: 2, 
                    minWidth: 180, 
                    textTransform: 'none', 
                    color: '#004d4d', 
                    borderColor: '#004d4d',
                    mb: 3
                  }}
                >
                  Back to Form
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>

      {/* Notification */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SchemeFinderForm;