import React, { useState } from 'react';

const SchemeFinder = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  // Data from the JSON file
  const schemeData = {
    "Feature_Name": "Customized Government Scheme Finder",
    "Description": "A tailored guide for finding and applying for government schemes based on the user's profile.",
    "Sections": [
        {
            "Section_Name": "Overview of Relevant Schemes",
            "Content": "A summary of schemes available based on the user's profile. Note: Scheme availability and details can change. Always refer to official government websites for the most up-to-date information.",
            "Schemes": [
                {
                    "Name": "PM SVANidhi Scheme (Street Vendor's AtmaNirbhar Nidhi)",
                    "Description": "Provides affordable working capital loans to street vendors.",
                    "Eligibility": "Street vendors in urban areas, including those belonging to OBC categories.",
                    "Benefits": "Collateral-free loan up to ₹10,000, interest subsidy on timely/early repayment, and digital transaction incentives.",
                    "Application_Link": "https://pmsvanidhi.mohua.gov.in/",
                    "YouTube_Video": "https://www.youtube.com/watch?v=xxxxx"
                },
                {
                    "Name": "MUDRA Loan (Micro Units Development & Refinance Agency Ltd.)",
                    "Description": "Provides loans to small businesses for income-generating activities.",
                    "Eligibility": "Non-corporate, non-farm small/micro enterprises engaged in manufacturing, trading, and services activities. Eligibility includes OBC category.",
                    "Benefits": "Collateral-free loans up to ₹10 lakh, different loan products (Shishu, Kishor, Tarun) based on business needs.",
                    "Application_Link": "https://www.mudra.org.in/",
                    "YouTube_Video": "https://www.youtube.com/watch?v=xxxxx"
                }
            ],
            "YouTube_Videos": [
                {
                    "title": "Major Government Schemes | RECAP 2024 | UPSC Prelims 2025 | Drishti IAS English",
                    "url": "https://www.youtube.com/watch?v=0pRewfdPbaU"
                },
                {
                    "title": "Government Schemes in India 🇮🇳 #shorts #india #scheme",
                    "url": "https://www.youtube.com/watch?v=JFntjPEzVWk"
                },
                {
                    "title": "Government Schemes in India 🇮🇳 #shorts #india #scheme",
                    "url": "https://www.youtube.com/watch?v=HsVz2EsuvUA"
                }
            ]
        },
        {
            "Section_Name": "Application Process",
            "Content": "Steps to apply for the selected schemes. These are general steps and may vary slightly based on the specific scheme.",
            "Steps": [
                "Step 1: Check eligibility criteria on the respective scheme's official website.",
                "Step 2: Gather required documents (Aadhaar card, PAN card, business proof, caste certificate etc.).",
                "Step 3: Apply online via the official portal or designated offline application centers."
            ],
            "Resources": [
                {
                    "Title": "Example: How to Apply for PM SVANidhi",
                    "URL": "https://pmsvanidhi.mohua.gov.in/",
                    "YouTube_Video": "https://www.youtube.com/watch?v=xxxxx"
                }
            ],
            "YouTube_Videos": [
                {
                    "title": "🔴 నిరుద్యోగులకి తెలంగాణ ప్రభుత్వం 3 లక్షలు | TG Govt Rajiv Yuva Vikasam Scheme Details & Application",
                    "url": "https://www.youtube.com/watch?v=t76C8RICcOA"
                },
                {
                    "title": "5 Government scheme for business funding YouTube : Neha Nagar",
                    "url": "https://www.youtube.com/watch?v=SpwPqbAf5rI"
                },
                {
                    "title": "Alert🤯 Government Schemes | Everyone Can Apply🥳🔥 #shorts",
                    "url": "https://www.youtube.com/watch?v=AgsL-tyyxbg"
                }
            ]
        },
        {
            "Section_Name": "Tracking and Staying Updated",
            "Content": "Methods to track your application and receive updates. Use the scheme's official website for the most accurate tracking information.",
            "Resources": [
                {
                    "Title": "Example: Track Your PM SVANidhi Application",
                    "URL": "https://pmsvanidhi.mohua.gov.in/",
                    "YouTube_Video": "https://www.youtube.com/watch?v=xxxxx"
                }
            ],
            "YouTube_Videos": [
                {
                    "title": "Biggest EPFO Update ! ₹15,000 Joining Bonus |  Employment Linked Incentive Scheme | Budget 2024",
                    "url": "https://www.youtube.com/watch?v=UQuxvv9xhNU"
                },
                {
                    "title": "25 Lakh LOAN with 35% Subsidy PMEGP Government Yojana Scheme #businessman #fact",
                    "url": "https://www.youtube.com/watch?v=0yhSr-eHPOA"
                },
                {
                    "title": "Saubhagya Yojana – Prelims SCHEME Revision        #upsc #upscprelims #modi",
                    "url": "https://www.youtube.com/watch?v=fEEG_JqKr3c"
                }
            ]
        }
    ]
  };

  // Function to extract YouTube video ID
  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-3">{schemeData.Feature_Name}</h1>
          <div className="w-24 h-1 bg-teal-300 mx-auto mb-4"></div>
          <p className="text-teal-100 max-w-2xl mx-auto">{schemeData.Description}</p>
        </div>
        
        {/* Section Sliders */}
        <div className="px-6 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {schemeData.Sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                  ${activeSection === index 
                    ? "bg-teal-700 text-white shadow-lg transform -translate-y-1" 
                    : "bg-gray-100 text-teal-800 hover:bg-gray-200"}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                  ${activeSection === index ? "bg-teal-500" : "bg-teal-200"}`}>
                  {index + 1}
                </span>
                {section.Section_Name}
              </button>
            ))}
          </div>
          
          {/* Active Section Content */}
          <div className="transition-all duration-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                {schemeData.Sections[activeSection].Section_Name}
              </h2>
              <p className="text-gray-600 mb-6 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                {schemeData.Sections[activeSection].Content}
              </p>
            </div>
            
            {/* Section Specific Content */}
            {activeSection === 0 && (
              <div>
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Available Schemes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {schemeData.Sections[0].Schemes.map((scheme, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5">
                      <h4 className="text-lg font-semibold text-teal-800 mb-2">{scheme.Name}</h4>
                      <p className="text-gray-600 mb-3 text-sm">{scheme.Description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex gap-2">
                          <span className="font-medium text-teal-700 text-sm">Eligibility:</span>
                          <span className="text-gray-600 text-sm">{scheme.Eligibility}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-medium text-teal-700 text-sm">Benefits:</span>
                          <span className="text-gray-600 text-sm">{scheme.Benefits}</span>
                        </div>
                      </div>
                      <a 
                        href={scheme.Application_Link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-700 transition-colors"
                      >
                        Apply Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeSection === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Application Steps</h3>
                <div className="space-y-4 mb-8">
                  {schemeData.Sections[1].Steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-semibold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Resources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {schemeData.Sections[1].Resources.map((resource, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5">
                      <h4 className="text-lg font-semibold text-teal-800 mb-3">{resource.Title}</h4>
                      <a 
                        href={resource.URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-700 transition-colors"
                      >
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeSection === 2 && (
              <div>
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Tracking Resources</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {schemeData.Sections[2].Resources.map((resource, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5">
                      <h4 className="text-lg font-semibold text-teal-800 mb-3">{resource.Title}</h4>
                      <a 
                        href={resource.URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-700 transition-colors"
                      >
                        Track Application
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Video Tutorials for All Sections */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Video Tutorials</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {schemeData.Sections[activeSection].YouTube_Videos.map((video, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={`/api/placeholder/400/225`} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-teal-600 bg-opacity-90 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2 h-10">
                        {video.title}
                      </h4>
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full gap-1 bg-gray-100 text-teal-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        Watch Video
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm border-t">
          <p>Note: Always verify information on official government websites before applying.</p>
        </div>
      </div>
    </div>
  );
};

export default SchemeFinder;