import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <motion.section className="banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <div className="banner-content">
          <h1>Welcome to DataSphere Research</h1>
          <p>Center for Research in Behavioural Studies and Complex Networks</p>
          <motion.a href="/about" className="cta-button"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            Learn More
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;
