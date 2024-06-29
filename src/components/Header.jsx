import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import caslogo from '../images/cas-logo.png';

function Header() {
  const [menuState, setMenuState] = useState("closed");
  const [isChecked, setIsChecked] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  
  function toggleMenu(e) {
    if (menuState === "open" && isChecked) {
      setMenuState("closed");
      setIsChecked(false);
    } else {
      setMenuState("open");
    }
  }

  function checkHandler() {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        setWindowSize(true);
      }
    })
  }, [])

  return (
    <div className="header">
      <div className="logo">
        <img src={caslogo} alt="Carolina Analytics" />
      </div>
      <div className="menu" onClick={toggleMenu}>
        <div className="mobileMenu">
          <input type="checkbox" checked={isChecked} onChange={checkHandler} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`menu-bg ${!windowSize ? menuState : ""}`}>
          <ul>
            <li><Link onClick={toggleMenu} to="/">Home</Link></li>
            <li><Link onClick={toggleMenu} to="/about">About Us</Link></li>
            <li><Link onClick={toggleMenu} to="/services">Services</Link></li>
            <li><Link onClick={toggleMenu} to="/contact">Contact Us</Link></li>
            <li><Link onClick={toggleMenu} to="/customers">Customer Message</Link></li>
            <li><Link onClick={toggleMenu} to="/samples">Samples Submission</Link></li>
            <li><Link onClick={toggleMenu} to="/certification">Certification</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;