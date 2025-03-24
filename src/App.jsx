import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/homepage/homepage';
import AboutUsSection from './components/homepage/aboutus';
import ConsultationPage from './components/homepage/Consultation';
import LandingPage from './components/homepage/services';
import Carousel from './components/schemes/components/Carousel';
import SchemesPage from './components/schemes/components/SchemesPage';
import SchemeFinderApp from './components/schemes/components/SchemeFinderApp';
import CommunityHub from './components/community/CommunityHub';
import PremiumLeftNavbar from './components/navbar';
import Chatbot from './components/chatbot/Chatbot';
import SetupCards from './components/business-setup/setup';
import BusinessInsights from './components/business-setup/insights';
import SuppliersAndWarehouses from './components/shared-resources/resources';
import FinancialPlanDashboard from './components/financial-plan/FinancialPlanDashboard';
import PricingPage from './components/payment/pay';
import Hero from './components/schemes/components/Hero';
import Dashboard from './components/homepage/dashboard';

// Create a Layout component to handle the sidebar + content structure
const DashboardLayout = ({ children }) => {
  return (
    <PremiumLeftNavbar>
      {children}
    </PremiumLeftNavbar>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUsSection />
            <ConsultationPage />
            <LandingPage />
          </>
        } />
        
        {/* Dashboard Pages with Layout */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
        
        <Route path="/community" element={
          <DashboardLayout>
            <CommunityHub />
          </DashboardLayout>
        } />
        
        <Route path="/schemes" element={
          <DashboardLayout>
            <Carousel />
            <Hero />
            <SchemesPage />
            <SchemeFinderApp />
          </DashboardLayout>
        } />
        
        <Route path="/business-setup" element={
          <DashboardLayout>
            <SetupCards />
          </DashboardLayout>
        } />

        <Route path="/business-insights" element={
          <DashboardLayout>
            <BusinessInsights />
          </DashboardLayout>
        } />

        <Route path="/shared-resources" element={
          <DashboardLayout>
            <SuppliersAndWarehouses />
          </DashboardLayout>
        } />

        <Route path="/financial-plan" element={
          <DashboardLayout>
            <FinancialPlanDashboard />
          </DashboardLayout>
        } />

        <Route path="/pay" element={
          <DashboardLayout>
            <PricingPage />
          </DashboardLayout>
        } />
        
        {/* Settings and Notifications can use the same layout */}
        <Route path="/settings" element={
          <DashboardLayout>
            <div>Settings Page Content</div>
          </DashboardLayout>
        } />
        
        <Route path="/notifications" element={
          <DashboardLayout>
            <div>Notifications Page Content</div>
          </DashboardLayout>
        } />
        
        {/* Logout route - redirects to home */}
        <Route path="/logout" element={
          <DashboardLayout>
            <div>Logging out...</div>
          </DashboardLayout>
        } />
      </Routes>
      <Chatbot /> {/* Keep Chatbot persistent across all pages */}
    </Router>
  );
}

export default App;