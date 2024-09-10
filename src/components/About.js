import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <h2>About DataSphere Research</h2>
        <p>We focus on interdisciplinary research in behavioural studies, complex networks, AI, and data science.</p>
      </section>
      <section className="about-features">
        <div className="feature-card">
          <h3>Behavioural Studies</h3>
          <p>Understanding human behaviour to drive better AI systems and networks.</p>
        </div>
        <div className="feature-card">
          <h3>Complex Networks</h3>
          <p>Our research explores social, trust, and information networks using advanced analytics.</p>
        </div>
        <div className="feature-card">
          <h3>Artificial Intelligence</h3>
          <p>We apply AI to solve real-world challenges in human behavior and decision-making.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
