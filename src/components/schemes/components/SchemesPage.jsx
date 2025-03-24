import React from 'react';
import './SchemesPage.css';

const SchemesPage = () => {
  const categories = [
    {
      id: 1,
      icon: "🌱",
      schemes: 422,
      title: "Agriculture, Rural & Environment"
    },
    {
      id: 2,
      icon: "🏦",
      schemes: 216,
      title: "Financial Services and Insurance"
    },
    {
      id: 3,
      icon: "🤝",
      schemes: 491,
      title: "Business & Entrepreneurship"
    },
    {
      id: 4,
      icon: "🎓",
      schemes: 792,
      title: "Education & Learning"
    },
    {
      id: 5,
      icon: "➕",
      schemes: 220,
      title: "Health & Wellness"
    },
    {
      id: 6,
      icon: "🏠",
      schemes: 92,
      title: "Housing & Shelter"
    },
    {
      id: 7,
      icon: "⚖️",
      schemes: 9,
      title: "Public Safety, Law & Justice"
    },
    {
      id: 8,
      icon: "🔬",
      schemes: 64,
      title: "Science, IT & Communications"
    },
    {
      id: 9,
      icon: "👥",
      schemes: 261,
      title: "Skills & Employment"
    },
    {
      id: 10,
      icon: "✊",
      schemes: 1255,
      title: "Social welfare & Empowerment"
    },
    {
      id: 11,
      icon: "🎾",
      schemes: 116,
      title: "Sports & Culture"
    },
    {
      id: 12,
      icon: "🚌",
      schemes: 52,
      title: "Transport & Infrastructure"
    },
    {
      id: 13,
      icon: "🌐",
      schemes: 37,
      title: "Travel & Tourism"
    },
    {
      id: 14,
      icon: "🔧",
      schemes: 37,
      title: "Utility & Sanitation"
    },
    {
      id: 15,
      icon: "👪",
      schemes: 366,
      title: "Women and Child"
    },
  ];

  return (
    <div className="container">
      <div className="grid">
        {categories.map((category) => (
          <div key={category.id} className="card">
            <div className="icon-container">
              <span className="icon">{category.icon}</span>
            </div>
            <div className="scheme-count">
              {category.schemes} Schemes
            </div>
            <div className="title">
              {category.title}
            </div>
          </div>
        ))}
      </div>
      <div className="floating-button">
      </div>
    </div>
  );
};

export default SchemesPage;