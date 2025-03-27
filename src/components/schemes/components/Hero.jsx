import React from "react";
import "./Hero.css";
import {useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/form');
  };

return (
  <div className="container">

    {/* Find Schemes Button */}
    <button className="find-schemes-btn" onClick={handleClick}>
  Find Schemes For You →
</button>

      {/* Statistics Cards */}
      <div className="stats-container">
        <StatCard number="3240+" label="Total Schemes" />
        <StatCard number="520+" label="Central Schemes" />
        <StatCard number="2720+" label="States/UTs Schemes" />
      </div>

      {/* Category Tabs */}
      <div className="tabs">
        <button className="tab active">Categories</button>
        <button className="tab">States/UTs</button>
        <button className="tab">Central Ministries</button>
      </div>

      {/* Section Heading */}
      <h2 className="heading">Find schemes based</h2>
      <h2 className="heading1">on categories</h2>

    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{label} →</p>
    </div>
  );
};

export default Hero;
