import React from 'react';
import geuImage from '/geuimg.jpg';
import './Logo.css';

function Logo() {
  return (
    <div className="geu-logo-container">
     <a  
     style={{textDecoration:"none"}} 
     href= "https://geumca.in/"> 
     <img src={geuImage} className='geu-logo' alt="geu logo" /> 
     </a>
      <div className="text-container">
        <span className="geu-text">
          <a className="geu-text" 
          style={{textDecoration:"none"}} 
          href= "https://geumca.in/">Department of Computer Application</a>
          </span>
        <p className="geu-paragraph">Graphic Era deemed to be University, Dehradun</p>
      </div>
    </div>
  );
}

export default Logo;
