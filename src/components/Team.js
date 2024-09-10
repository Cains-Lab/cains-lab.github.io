import React from 'react';
import '../styles/Team.css';

// Importing images directly
import prof1 from '../assets/prof1.png';
import prof2 from '../assets/prof2.jpeg';
import prof3 from '../assets/prof3.gif';

const Team = () => {
  return (
    <div className="team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src={prof2} alt="Avijit Gayen" />
          <h3>Avijit Gayen</h3>
          <p>Lead Researcher</p>
        </div>
        <div className="team-member">
          <img src={prof3} alt="Angshuman Jana" />
          <h3>Angshuman Jana</h3>
          <p>Lead Researcher</p>
        </div>
        <div className="team-member">
          <img src={prof1} alt="Somyajit Chakraborty" />
          <h3>Somyajit Chakraborty</h3>
          <p>Researcher /PhD fellow</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
