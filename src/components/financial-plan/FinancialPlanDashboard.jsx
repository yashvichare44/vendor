import React, { useState } from 'react';
// The error occurred because the CSS file wasn't properly imported
// Make sure this file exists in the same directory as this component
import './FinancialPlanDashboard.css';

const FinancialPlanDashboard = () => {
  const [activeTab, setActiveTab] = useState('forecasting');
  
  // Sample data from your JSON
  const data = {
    "financial_plan": {
      "financial_plan": {
        "revenue_forecasting": {
          "methodology": "Time series analysis based on past harvest yields, incorporating seasonal weather patterns, market demand, competitor pricing, and external factors such as government policies and global commodity trends.",
          "predictions": [
            {
              "period": "Next 3 Months",
              "projected_revenue": "50,000 - ₹80,000",
              "notes": "Peak harvest season. Consider bulk sales to wholesalers and local markets. Explore farm-to-table direct selling opportunities."
            },
            {
              "period": "Next 6 Months",
              "projected_revenue": "40,000 - ₹70,000",
              "notes": "Off-season impact. Use cold storage for perishable crops and focus on value-added products like processed goods."
            },
            {
              "period": "Next 12 Months",
              "projected_revenue": "80,000 - ₹1,20,000",
              "notes": "Expansion to new distribution channels. Invest in organic certification and export potential."
            }
          ]
        },
        "cost_breakdown": {
          "fixed_costs": [
            {
              "item": "Land Lease/Maintenance",
              "estimated_cost": "₹10,000 - ₹30,000 per month, depending on location and land size."
            },
            {
              "item": "Equipment & Machinery",
              "estimated_cost": "₹5,000 - ₹20,000 per month (loan repayments or maintenance)."
            },
            {
              "item": "Labor & Wages",
              "estimated_cost": "₹15,000 - ₹50,000 per month, depending on workforce size."
            },
            {
              "item": "Insurance",
              "estimated_cost": "₹2,000 - ₹8,000 per month (weather, crop, and asset insurance)."
            }
          ],
          "variable_costs": [
            {
              "item": "Seeds & Saplings",
              "estimated_cost": "₹500 - ₹5,000 per acre, depending on crop variety."
            },
            {
              "item": "Fertilizers & Pesticides",
              "estimated_cost": "₹2,000 - ₹10,000 per season, organic alternatives may vary."
            },
            {
              "item": "Irrigation & Water Supply",
              "estimated_cost": "₹3,000 - ₹15,000 per month, depending on farm size and method."
            },
            {
              "item": "Transportation & Logistics",
              "estimated_cost": "₹5,000 - ₹20,000 per month, considering distance to markets."
            }
          ]
        },
        "investment_opportunities": [
          {
            "investment": "Agri-Tech & Smart Irrigation",
            "roi": "High",
            "strategy": "Invest ₹50,000 - ₹2,00,000 in automated irrigation, soil health sensors, and data-driven farming solutions to improve yield efficiency."
          },
          {
            "investment": "Organic Farming Certification",
            "roi": "High",
            "strategy": "₹75,000 - ₹1,50,000 for certification and transition costs. Target premium pricing and export opportunities."
          },
          {
            "investment": "Farm-to-Consumer Direct Sales",
            "roi": "Medium-High",
            "strategy": "₹30,000 - ₹75,000 for setting up an online store and home delivery logistics to maximize profits by cutting out middlemen."
          }
        ],
        "backup_strategies": [
          {
            "strategy": "Diversify crop selection or integrate livestock farming.",
            "trigger": "Unfavorable weather conditions or market price drop."
          },
          {
            "strategy": "Set up a cooperative or partner with other farmers for bulk selling.",
            "trigger": "High competition or oversupply in the local market."
          },
          {
            "strategy": "Apply for government agricultural subsidies or low-interest loans.",
            "trigger": "Unexpected financial shortfall."
          }
        ],
        "market_price_comparison": {
          "methodology": "Analyzed competitor pricing across local markets, online farm produce platforms, and commodity exchanges. Compared pricing strategies and value-added processing.",
          "recommendations": "Introduce bulk pricing and direct-to-consumer models to increase profitability. Consider value-added processing for premium pricing."
        }
      }
    },
    "market_prices": {
      "Amazon": "https://www.amazon.in/s?k=organic+farm+produce",
      "IndiaMART": "https://dir.indiamart.com/search.mp?ss=agriculture+products",
      "Flipkart": "https://www.flipkart.com/search?q=fresh+farm+produce"
    },
    "youtube_videos": [
      {
        "title": "How To Start Organic Farming In India",
        "url": "https://www.youtube.com/watch?v=xyz123",
        "channel": "AgriGuru",
        "published_date": "2024-07-15T10:00:33Z"
      },
      {
        "title": "Smart Farming: The Future of Agriculture",
        "url": "https://www.youtube.com/watch?v=abc456",
        "channel": "Farming Innovations",
        "published_date": "2023-05-10T14:23:03Z"
      },
      {
        "title": "Maximizing Crop Yields with Technology",
        "url": "https://www.youtube.com/watch?v=pqr789",
        "channel": "AgriTech Solutions",
        "published_date": "2024-06-18T12:30:00Z"
      },
      {
        "title": "How to Start a Profitable Farming Business",
        "url": "https://www.youtube.com/watch?v=def567",
        "channel": "Farm Business Guide",
        "published_date": "2023-09-20T18:05:47Z"
      }
    ]
  };
  

  const plan = data.financial_plan.financial_plan;
  
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Fashion Business Financial Plan</h1>
        <p>Interactive dashboard for your fashion business planning</p>
      </header>
      
      <div className="dashboard-container">
        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <button 
            className={`tab ${activeTab === 'forecasting' ? 'active' : ''}`}
            onClick={() => setActiveTab('forecasting')}
          >
            Revenue Forecasting
          </button>
          <button 
            className={`tab ${activeTab === 'costs' ? 'active' : ''}`}
            onClick={() => setActiveTab('costs')}
          >
            Cost Breakdown
          </button>
          <button 
            className={`tab ${activeTab === 'investments' ? 'active' : ''}`}
            onClick={() => setActiveTab('investments')}
          >
            Investment Opportunities
          </button>
          <button 
            className={`tab ${activeTab === 'backup' ? 'active' : ''}`}
            onClick={() => setActiveTab('backup')}
          >
            Backup Strategies
          </button>
          <button 
            className={`tab ${activeTab === 'market' ? 'active' : ''}`}
            onClick={() => setActiveTab('market')}
          >
            Market Analysis
          </button>
          <button 
            className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>
        
        {/* Content Section */}
        <div className="content-panel">
          {activeTab === 'forecasting' && (
            <div>
              <h2>Revenue Forecasting</h2>
              <div className="methodology-section">
                <h3>Methodology</h3>
                <p>{plan.revenue_forecasting.methodology}</p>
              </div>
              
              <h3>Predictions</h3>
              <div className="prediction-cards">
                {plan.revenue_forecasting.predictions.map((pred, index) => (
                  <div key={index} className="prediction-card">
                    <h4>{pred.period}</h4>
                    <div className="revenue-amount">₹{pred.projected_revenue}</div>
                    <p className="notes">{pred.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'costs' && (
            <div>
              <h2>Cost Breakdown</h2>
              
              <div className="costs-section">
                <h3>Fixed Costs</h3>
                <table className="costs-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.cost_breakdown.fixed_costs.map((cost, index) => (
                      <tr key={index}>
                        <td>{cost.item}</td>
                        <td>{cost.estimated_cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="costs-section">
                <h3>Variable Costs</h3>
                <table className="costs-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.cost_breakdown.variable_costs.map((cost, index) => (
                      <tr key={index}>
                        <td>{cost.item}</td>
                        <td>{cost.estimated_cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'investments' && (
            <div>
              <h2>Investment Opportunities</h2>
              
              <div className="investment-cards">
                {plan.investment_opportunities.map((inv, index) => (
                  <div key={index} className="investment-card">
                    <div className="card-header">
                      <h3>{inv.investment}</h3>
                      <span className="roi-badge">ROI: {inv.roi}</span>
                    </div>
                    <p>{inv.strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'backup' && (
            <div>
              <h2>Backup Strategies</h2>
              
              <div className="strategy-cards">
                {plan.backup_strategies.map((strat, index) => (
                  <div key={index} className="strategy-card">
                    <div className="trigger">Trigger: {strat.trigger}</div>
                    <p>{strat.strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'market' && (
            <div>
              <h2>Market Price Comparison</h2>
              
              <div className="methodology-section">
                <h3>Methodology</h3>
                <p>{plan.market_price_comparison.methodology}</p>
              </div>
              
              <div className="methodology-section">
                <h3>Recommendations</h3>
                <p>{plan.market_price_comparison.recommendations}</p>
              </div>
              
              <div className="market-links">
                <h3>Market Research Links</h3>
                <ul>
                  {Object.entries(data.market_prices).map(([site, url], index) => (
                    <li key={index}>
                      <a href={url} target="_blank" rel="noopener noreferrer">{site}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div>
              <h2>Learning Resources</h2>
              
              <div className="video-resources">
                <h3>Recommended Videos</h3>
                <ul className="video-list">
                  {data.youtube_videos.map((video, index) => (
                    <li key={index} className="video-item">
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        {video.title}
                      </a>
                      <div className="video-meta">
                        <span>Channel: {video.channel}</span>
                        <span>Published: {new Date(video.published_date).toLocaleDateString()}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          <div className="disclaimer">
            <small>This financial plan is for informational purposes only and should not be construed as professional financial advice. Consult with a qualified financial advisor for personalized guidance.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanDashboard;
