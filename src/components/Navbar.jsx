import { useState, useRef } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';
import hope3 from '../assets/hope3.png';
import usericon from '../assets/usericon.png';
import GetInvolvedMenu from './GetInvolvedMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [isCircularMode, setIsCircularMode] = useState(true);
  const getInvolvedRef = useRef(null);

  const menuItems = [
    {
      title: 'Our Work',
      items: ['Education', 'Healthcare', 'Community Development']
    },
    {
      title: 'Our Impact',
      items: ['Success Stories', 'Statistics', 'Testimonials']
    },
    {
      title: 'Services',
      items: ['Consulting', 'Training', 'Support']
    },
    {
      title: 'About Us',
      items: ['Mission', 'Team', 'Contact']
    }
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        
        <button 
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar-left">
          <div className="navbar-section">
            <span className="section-title">Our Impact</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="navbar-section">
            <span className="section-title">Our Work</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <img src={hope3} alt="HOPE3" className="navbar-center-logo" />

        <div className="navbar-right">
          <div className="navbar-section">
            <span className="section-title">Services</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="navbar-section">
            <span className="section-title">About</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <button 
          ref={getInvolvedRef}
          className="getinv-btn"
          onClick={() => {
            setHideText(!hideText);
            setIsCardFrozen(!isCardFrozen);
          }}
          onMouseEnter={() => !isCardFrozen && setShowGetInvolved(true)}
          onMouseLeave={() => !isCardFrozen && setShowGetInvolved(false)}
        >
          <img src={usericon} alt="" className="btn-icon" />
          {!hideText && "Get Involved"}
        </button>
        
        {(showGetInvolved || isCardFrozen) && (
          <div className="get-involved-card">
            <div className="quote-text">
              "Together we can make a difference and create lasting change in our communities."
            </div>
            <div className="gradient-box">
              {isCardFrozen ? (
                <div className={isCircularMode ? "circular-menu" : "list-menu"}>
                  <button 
                    className="menu-button" 
                    style={{"--delay": "0s"}}
                    onClick={() => setIsCircularMode(false)}
                  >
                    Donate
                  </button>
                  <button 
                    className="menu-button" 
                    style={{"--delay": "0.3s"}}
                    onClick={() => setIsCircularMode(false)}
                  >
                    Apply
                  </button>
                  <button 
                    className="menu-button" 
                    style={{"--delay": "0.6s"}}
                    onClick={() => setIsCircularMode(false)}
                  >
                    Join Us
                  </button>
                </div>
              ) : (
                <>
                  <div className="menu-item">Donate</div>
                  <div className="menu-item">Apply</div>
                  <div className="menu-item">Join Us</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
