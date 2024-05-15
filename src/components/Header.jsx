import { useState } from 'react';
import caslogo from '../images/cas-logo.png';

function Header() {
  const [menuState, setMenuState] = useState("closed");
  
  function toggleMenu() {
    if (menuState === "open") {
      setMenuState("closed");
    } else {
      setMenuState("open");
    }
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={caslogo} />
      </div>
      <div className="menu" onClick={toggleMenu}>
        <div className="mobileMenu">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-bg ${menuState}`}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Customer Message</li>
            <li>Samples Submission</li>
            <li>Certification</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;