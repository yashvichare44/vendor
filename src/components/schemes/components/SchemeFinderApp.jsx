import React, { useState, useEffect } from 'react';
import './SchemeFinderApp.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaRocket, FaChartLine, FaClipboardCheck, FaExternalLinkAlt, FaPlay, FaArrowRight, FaFileAlt, FaGlobe, FaBookmark, FaLongArrowAltRight } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { schemeData } from '../data/schemeData';

const SchemeFinderApp = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedResources, setExpandedResources] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const toggleResource = (sectionIndex, resourceType, resourceIndex) => {
    const key = `${sectionIndex}-${resourceType}-${resourceIndex}`;
    setExpandedResources(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sectionIcons = {
    0: <FaLightbulb className="section-icon" />,
    1: <FaRocket className="section-icon" />,
    2: <FaChartLine className="section-icon" />,
    3: <FaClipboardCheck className="section-icon" />
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loader"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
        <h2>Loading Amazing Content...</h2>
      </div>
    );
  }

  return (
    <div className="scheme-finder-app">
      <div className="animated-background">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere-2"></div>
      </div>

      <motion.header 
        className="app-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="main-title">
            <span className="gradient-text">{schemeData.Feature_Name}</span>
          </h1>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <p className="header-description">{schemeData.Description}</p>
        </motion.div>
      </motion.header>

      <nav className="navigation-tabs">
        {schemeData.Sections.map((section, index) => (
          <motion.button
            key={index}
            className={`nav-tab ${activeSection === index ? 'active' : ''}`}
            onClick={() => setActiveSection(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="tab-icon">{sectionIcons[index]}</div>
            <span className="tab-label">{section.Section_Name}</span>
          </motion.button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          className="main-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <section className="content-section">
            <motion.div 
              className="section-header"
              layoutId="section-header"
            >
              {sectionIcons[activeSection]}
              <h2>{schemeData.Sections[activeSection].Section_Name}</h2>
            </motion.div>

            <motion.div 
              className="content-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <IoDocumentText className="content-icon" />
              <p>{schemeData.Sections[activeSection].Content}</p>
            </motion.div>

            <ApplicationSteps />

            <section className="resources-section">
              <h3 className="section-subtitle">
                <span className="gradient-text">Official Resources</span>
              </h3>
              <div className="resources-grid">
                {schemeData.Sections[activeSection].Resources.map((resource, index) => (
                  <motion.div 
                    key={index} 
                    className="resource-card"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 77, 77, 0.15)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="card-header">
                      <div className="card-icon">
                        <FaRocket />
                      </div>
                      <h4>{resource.Title}</h4>
                    </div>
                    <div className="card-actions">
                      <a 
                        href={resource.URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-button primary"
                      >
                        <FaExternalLinkAlt /> Visit Website
                      </a>
                      <button 
                        className="action-button secondary"
                        onClick={() => toggleResource(activeSection, 'resources', index)}
                      >
                        <FaPlay /> Watch Guide
                      </button>
                    </div>
                    {expandedResources[`${activeSection}-resources-${index}`] && (
                      <motion.div 
                        className="video-embed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <iframe
                          src={resource.YouTube_Video}
                          title={resource.Title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="video-tutorials">
              <h3 className="section-subtitle">
                <span className="gradient-text">Video Tutorials</span>
              </h3>
              <div className="video-grid">
                {schemeData.Sections[activeSection].YouTube_Videos.map((video, index) => (
                  <motion.div 
                    key={index} 
                    className="video-card"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="video-thumbnail">
                      <img 
                        src={`https://img.youtube.com/vi/${getYouTubeID(video.url)}/maxresdefault.jpg`} 
                        alt={video.title}
                      />
                      <div className="play-overlay">
                        <FaPlay className="play-icon" />
                      </div>
                    </div>
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <button 
                        className="watch-button"
                        onClick={() => toggleResource(activeSection, 'videos', index)}
                      >
                        {expandedResources[`${activeSection}-videos-${index}`] ? 'Hide Video' : 'Watch Now'}
                      </button>
                    </div>
                    {expandedResources[`${activeSection}-videos-${index}`] && (
                      <motion.div 
                        className="video-embed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          </section>
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

// Helper function to extract YouTube video ID
const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Application process section
const ApplicationSteps = () => {
  const steps = [
    {
      icon: <FaClipboardCheck className="step-icon" />,
      title: "Check Eligibility",
      description: "Check the eligibility criteria for the scheme.",
      color: "#004d4d"
    },
    {
      icon: <FaFileAlt className="step-icon" />,
      title: "Gather Documents",
      description: "Gather necessary documents (business registration, Aadhaar, financial records).",
      color: "#2a7d7d"
    },
    {
      icon: <FaGlobe className="step-icon" />,
      title: "Online Application",
      description: "Apply online at the official portal (e.g., MSME, PM SVANidhi, Mudra Loan).",
      color: "#003838"
    },
    {
      icon: <FaBookmark className="step-icon" />,
      title: "Track Application",
      description: "Keep a copy of the application reference number and track status regularly.",
      color: "#004d4d"
    }
  ];

  return (
    <div className="application-steps">
      <h2 className="steps-title">Application Process</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon-wrapper" style={{ backgroundColor: `${step.color}15` }}>
                {React.cloneElement(step.icon, { style: { color: step.color } })}
              </div>
              <h3 className="step-title" style={{ color: step.color }}>{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="step-arrow">
                <FaLongArrowAltRight className="arrow-icon" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SchemeFinderApp;