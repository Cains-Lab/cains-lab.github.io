import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Team from './components/Team';
import Publications from './components/Publications'; // Import the new Publications page
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<ResearchAreas />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
