import React from 'react';
import '../styles/Footer.css';
import tiuLogo from '../assets/tiu-logo.png'; // Example logo paths
import iiitLogo from '../assets/iiit-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-institutions">
        <div className="host-institutions">
          <h4>Host Institutions</h4>
          <div className="institution-logos">
            <img src={tiuLogo} alt="TIU Logo" />
            {/* Add more host institution logos */}
          </div>
        </div>

        <div className="partner-institutions">
          <h4>Partner Institutions</h4>
          <div className="institution-logos">
            {/* Partner logos here */}
            <img src={iiitLogo} alt="IIIT Guwahati Logo" />
            {/* Add more partner institution logos */}
          </div>
        </div>
      </div>

      {/* Footer Links (like privacy, copyright) */}
      <div className="footer-legal">
        <a href="/privacy">Privacy Statement</a>
        <a href="/copyright">Copyright Statement</a>
        <a href="/data-protection">Data Protection Notice</a>
        <a href="/accessibility">Accessibility Statement</a>
      </div>
    </footer>
  );
};

export default Footer;