import React, { useState } from "react";
import "./FinancialPlanDashboard.css";

const FinancialPlanDashboard = () => {
  const [activeTab, setActiveTab] = useState("forecasting");
  const [plan, setPlan] = useState(null);
  const [data, setData] = useState({ market_prices: {}, youtube_videos: [] });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({
    business_type: "",
    products_sold: "",
    monthly_sales: "",
    business_goal: "",
    business_challenges: "",
    online_presence: "",
    digital_payments: "",
    interested_in_schemes: "",
    past_sales_data_available: "",
    investment_interest: "",
    supplier_preferences: "",
    risk_tolerance: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("http://127.0.0.1:8000/business-insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(businessInfo),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setPlan(result.financial_plan?.financial_plan || {}); // Access the nested financial_plan
      setData({
        market_prices: result.market_prices || {},
        youtube_videos: result.youtube_videos || [],
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error generating plan:", error);
      setError("Failed to generate plan. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!formSubmitted) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Fashion Business Financial Plan</h1>
          <p>Interactive dashboard for your fashion business planning</p>
        </header>
        
        <div className="input-form">
          <h2>Enter Business Details</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            {Object.entries(businessInfo).map(([key, value]) => (
              <div className="form-group" key={key}>
                <label htmlFor={key}>
                  {key.replace(/_/g, " ").toUpperCase()}
                </label>
                <input
                  id={key}
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  placeholder={`Enter ${key.replace(/_/g, " ")}`}
                  required
                />
              </div>
            ))}
            <button type="submit" disabled={loading}>
              {loading ? "Generating..." : "Generate Plan"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Access the nested financial plan data correctly
  const financialPlan = plan?.financial_plan || {};

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Fashion Business Financial Plan</h1>
        <p>Interactive dashboard for your fashion business planning</p>
      </header>

      <div className="dashboard-container">
        <div className="nav-tabs">
          {["forecasting", "costs", "investments", "backup", "market", "resources"].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("_", " ")}
            </button>
          ))}
        </div>

        <div className="content-panel">
          {activeTab === "forecasting" && (
            <div>
              <h2>Revenue Forecasting</h2>
              <div className="methodology-section">
                <h3>Methodology</h3>
                <p>{financialPlan.revenue_forecasting?.methodology || "No methodology available"}</p>
              </div>
              
              <h3>Predictions</h3>
              <div className="prediction-cards">
                {financialPlan.revenue_forecasting?.predictions?.map((pred, index) => (
                  <div key={index} className="prediction-card">
                    <h4>{pred.period}</h4>
                    <div className="revenue-amount">{pred.projected_revenue}</div>
                    <p className="notes">{pred.notes}</p>
                  </div>
                )) || <p>No revenue predictions available</p>}
              </div>
            </div>
          )}
          
          {activeTab === "costs" && (
            <div>
              <h2>Cost Breakdown</h2>
              
              <div className="costs-section">
                <h3>Fixed Costs</h3>
                <table className="costs-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Estimated Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialPlan.cost_breakdown?.fixed_costs?.map((cost, index) => (
                      <tr key={index}>
                        <td>{cost.category}</td>
                        <td>{cost.estimated_amount}</td>
                      </tr>
                    )) || (
                      <tr>
                        <td colSpan="2">No fixed costs data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              <div className="costs-section">
                <h3>Variable Costs</h3>
                <table className="costs-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Estimated Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialPlan.cost_breakdown?.variable_costs?.map((cost, index) => (
                      <tr key={index}>
                        <td>{cost.category}</td>
                        <td>{cost.estimated_amount}</td>
                      </tr>
                    )) || (
                      <tr>
                        <td colSpan="2">No variable costs data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === "investments" && (
            <div>
              <h2>Investment Opportunities</h2>
              
              <div className="investment-cards">
                {financialPlan.investment_opportunities?.map((inv, index) => (
                  <div key={index} className="investment-card">
                    <div className="card-header">
                      <h3>{inv.area}</h3>
                      <span className="roi-badge">Potential ROI: {inv.potential_roi}</span>
                    </div>
                    <p>{inv.description}</p>
                    <div className="resources">
                      <strong>Resources:</strong> {inv.resources}
                    </div>
                  </div>
                )) || <p>No investment opportunities available</p>}
              </div>
            </div>
          )}
          
          {activeTab === "backup" && (
            <div>
              <h2>Backup Strategies</h2>
              
              <div className="strategy-cards">
                {financialPlan.backup_strategies?.map((strat, index) => (
                  <div key={index} className="strategy-card">
                    <h3>{strat.strategy}</h3>
                    <p>{strat.description}</p>
                  </div>
                )) || <p>No backup strategies available</p>}
              </div>
            </div>
          )}
          
          {activeTab === "market" && (
            <div>
              <h2>Market Price Comparison</h2>
              
              <div className="methodology-section">
                <h3>Methodology</h3>
                <p>{financialPlan.market_price_comparison?.methodology || "No methodology available"}</p>
              </div>
              
              <div className="methodology-section">
                <h3>Recommendations</h3>
                <p>{financialPlan.market_price_comparison?.recommendations || "No recommendations available"}</p>
              </div>
              
              <div className="market-links">
                <h3>Market Research Links</h3>
                <ul>
                  {Object.entries(data.market_prices || {}).map(([site, url], index) => (
                    <li key={index}>
                      <a href={url} target="_blank" rel="noopener noreferrer">{site}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === "resources" && (
            <div>
              <h2>Learning Resources</h2>
              
              <div className="video-resources">
                <h3>Recommended Videos</h3>
                <ul className="video-list">
                  {data.youtube_videos?.map((video, index) => (
                    <li key={index} className="video-item">
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        {video.title}
                      </a>
                      <div className="video-meta">
                        <span>Channel: {video.channel}</span>
                        <span>Published: {new Date(video.published_date).toLocaleDateString()}</span>
                      </div>
                    </li>
                  )) || <p>No video resources available</p>}
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