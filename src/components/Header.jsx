import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <nav className={`menu-bg ${menuState}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/customers">Customer Message</Link></li>
            <li><Link to="/samples">Samples Submission</Link></li>
            <li><Link to="/certification">Certification</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;