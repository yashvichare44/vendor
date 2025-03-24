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
          "methodology": "Time series analysis based on past sales data, incorporating seasonal trends, competitor trends, and external factors such as economic conditions, inflation, and consumer behavior shifts.",
          "predictions": [
            {
              "period": "Next 3 Months",
              "projected_revenue": "12,000 - ₹18,000",
              "notes": "Festive season sales boost. Consider launching discount campaigns and special festive collections."
            },
            {
              "period": "Next 6 Months",
              "projected_revenue": "9,500 - ₹15,000",
              "notes": "Post-festive dip expected. Use loyalty programs and clearance sales to retain customer interest."
            },
            {
              "period": "Next 12 Months",
              "projected_revenue": "15,000 - ₹22,000",
              "notes": "Expansion to new platforms and international markets. Invest in influencer marketing and trend-driven inventory."
            }
          ]
        },
        "cost_breakdown": {
          "fixed_costs": [
            {
              "item": "Rent/Mortgage",
              "estimated_cost": "₹15,000 - ₹25,000 per month (varies by location)"
            },
            {
              "item": "Utilities",
              "estimated_cost": "₹3,000 - ₹7,000 per month"
            },
            {
              "item": "Insurance",
              "estimated_cost": "₹2,000 - ₹5,000 per month"
            },
            {
              "item": "Salaries (if applicable)",
              "estimated_cost": "₹30,000 - ₹50,000 per month (for 2-5 employees)"
            }
          ],
          "variable_costs": [
            {
              "item": "Supplier Costs (Materials)",
              "estimated_cost": "₹50 - ₹300 per unit, depending on fabric and quality."
            },
            {
              "item": "Marketing & Advertising",
              "estimated_cost": "₹10,000 - ₹30,000 per month. Focus on influencer collaborations and paid ads."
            },
            {
              "item": "Shipping & Handling",
              "estimated_cost": "₹50 - ₹150 per order, based on shipping location and provider."
            },
            {
              "item": "Transaction Fees (Digital Payments)",
              "estimated_cost": "2% - 3% per transaction. Consider negotiating lower rates for high volumes."
            }
          ]
        },
        "investment_opportunities": [
          {
            "investment": "E-commerce Platform Expansion",
            "roi": "High",
            "strategy": "Invest ₹1,00,000 - ₹3,00,000 in website development, SEO, and integrated payment & shipping solutions. Expand beyond India by targeting international customers."
          },
          {
            "investment": "New Collection Launch",
            "roi": "High",
            "strategy": "₹50,000 - ₹1,50,000 for sourcing and manufacturing. Conduct pre-orders and influencer marketing to create demand before launch."
          },
          {
            "investment": "AI-Driven Customer Insights",
            "roi": "Medium-High",
            "strategy": "₹30,000 - ₹75,000 for AI analytics tools. Use AI to predict fashion trends, improve inventory management, and personalize recommendations."
          }
        ],
        "backup_strategies": [
          {
            "strategy": "Negotiate better terms with suppliers or switch to bulk purchasing discounts.",
            "trigger": "Sudden increase in raw material costs."
          },
          {
            "strategy": "Launch flash sales, influencer partnerships, and ad campaigns.",
            "trigger": "Sales stagnation or seasonal downturn."
          },
          {
            "strategy": "Apply for short-term business loans or secure investor funding.",
            "trigger": "Unexpected financial shortfall."
          }
        ],
        "market_price_comparison": {
          "methodology": "Analyzed competitor pricing across Amazon, Flipkart, IndiaMART, and boutique stores. Compared pricing strategies and discount models.",
          "recommendations": "Introduce tiered pricing (budget, mid-range, premium) to cater to different customer segments. Offer competitive pricing on high-demand items."
        }
      }
    },
    "market_prices": {
      "Amazon": "https://www.amazon.in/s?k=women's+fashion,+accessories",
      "IndiaMART": "https://dir.indiamart.com/search.mp?ss=women's+fashion,+accessories",
      "Flipkart": "https://www.flipkart.com/search?q=women's+fashion,+accessories"
    },
    "youtube_videos": [
      {
        "title": "How To Launch Your Fashion Brand: 7 Easy Steps to Start Clothing Business in India #FashionStartup",
        "url": "https://www.youtube.com/watch?v=VX9d0L2VuEI",
        "channel": "Think Wings",
        "published_date": "2024-08-19T14:00:33Z"
      },
      {
        "title": "5 Steps to Start a Clothing Brand in India 🇮🇳",
        "url": "https://www.youtube.com/watch?v=MlzE9fpqp-o",
        "channel": "Dumb Fox",
        "published_date": "2023-06-30T16:23:03Z"
      },
      {
        "title": "👚 Start Your Clothing Brand | The Ultimate Blueprint 🚀",
        "url": "https://www.youtube.com/watch?v=-W66NS4jCUw",
        "channel": "Indiamaan",
        "published_date": "2024-09-18T13:30:00Z"
      },
      {
        "title": "How to Start a Clothing Line in 3 EASY Steps 👕",
        "url": "https://www.youtube.com/watch?v=qp9y-eSzJDc",
        "channel": "WRLDINVSN Network",
        "published_date": "2022-03-20T23:05:47Z"
      },
      {
        "title": "Boutique Shop Business Plan - Tips and Tricks for Success",
        "url": "https://www.youtube.com/watch?v=XPcajfG8zYY",
        "channel": "New Business Ideas",
        "published_date": "2023-01-05T12:30:07Z"
      },
      {
        "title": "How To Build A Clothing Brand That Actually Makes Money 💰",
        "url": "https://www.youtube.com/watch?v=93hJPy3ekq8",
        "channel": "Startup Hustle",
        "published_date": "2023-11-10T10:15:20Z"
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
