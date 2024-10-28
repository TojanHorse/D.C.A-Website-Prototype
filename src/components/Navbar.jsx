import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menuImage from '../assets/menuImage.png'; // Adjust the path to your image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        <img src={menuImage} alt="Menu icon" className="menu-icon" /> {/* Use the image here */}
      </button>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/vision-mission">Vision and Mission</Link></li>
        <li className="navbar-item"><Link to="/students">Students</Link></li>
        <li className="navbar-item"><Link to="/syllabus">Syllabus</Link></li>
        <li className="navbar-item"><Link to="/timetable">Timetable</Link></li>
        <li className="navbar-item"><Link to="/contact-us">Contact Us</Link></li>
        <li className="navbar-item"><Link to="/disclaimer">Disclaimer</Link></li>
        <li className="navbar-item"><Link to="/feedback">Feedback</Link></li>
        <li className="navbar-item"><Link to="/po">PO, PSO and PEO</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
