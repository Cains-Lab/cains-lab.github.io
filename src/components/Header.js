import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Assuming you have your CSS stored in /styles/Header.css

import logo from '../assets/logo.png'; // Replace with your actual logo path
import linkedInIcon from '../assets/linkedin.png'; // Replace with your actual LinkedIn icon
import twitterIcon from '../assets/twitter.png'; // Replace with your actual Twitter icon

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section - Logo */}
        <div className="header-left">
          <img src={logo} alt="DataSphere Research Logo" className="logo" />
        </div>

        {/* Center Section - Navigation */}
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/research">Research Areas</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/publications">Publications</Link></li>
          </ul>
        </nav>

        {/* Right Section - Social Icons and Search */}
        <div className="header-right">
          <a href="https://linkedin.com"><img src={linkedInIcon} alt="LinkedIn" className="social-icon" /></a>
          <a href="https://twitter.com"><img src={twitterIcon} alt="Twitter" className="social-icon" /></a>
          <a href="/search" className="search-icon">🔍</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
