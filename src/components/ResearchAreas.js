import React from 'react';
import '../styles/ResearchAreas.css';

const ResearchAreas = () => {
  return (
    <div className="research">
      <h2>Our Research Areas</h2>
      <div className="research-grid">
        <div className="research-card">
          <h3>Social Network Analysis</h3>
          <p>Analyzing social and behavioral networks to uncover hidden insights.</p>
        </div>
        <div className="research-card">
          <h3>AI in Decision Making</h3>
          <p>Using AI to help solve complex decision-making problems.</p>
        </div>
        <div className="research-card">
          <h3>Behavioral Data Science</h3>
          <p>Applying data science techniques to study behavioral patterns.</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAreas;
