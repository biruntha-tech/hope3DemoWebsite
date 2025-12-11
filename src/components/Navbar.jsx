import { useState, useRef } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';
import hope3 from '../assets/hope3.png';
import getinvolveicon from '../assets/getinvolveicon.png';
import GetInvolvedMenu from './GetInvolvedMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [animationState, setAnimationState] = useState('hidden'); // 'hidden', 'cycling', 'buttons'
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
            <span className="section-icon">📊</span>
            <span className="section-title">Our Impact</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="navbar-section">
            <span className="section-icon">🏗️</span>
            <span className="section-title">Our Work</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <img src={hope3} alt="HOPE3" className="navbar-center-logo" />

        <div className="navbar-right">
          <div className="navbar-section">
            <span className="section-icon">⚙️</span>
            <span className="section-title">Services</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="navbar-section">
            <span className="section-icon">ℹ️</span>
            <span className="section-title">About</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <div className="profile-dropdown-container">
          <button 
            ref={getInvolvedRef}
            className={`getinv-btn ${showGetInvolved ? 'active' : ''}`}
            onClick={() => setShowGetInvolved(!showGetInvolved)}
          >
            <img src={getinvolveicon} alt="" className="btn-icon" />
            <span className="btn-text">Get Involved</span>
          </button>
          
          <div className={`get-involved-card ${showGetInvolved ? 'show' : ''}`}>
            <div className="icon-wrapper">
              <img src={getinvolveicon} alt="" className="popup-user-icon" />
            </div>
            <div className="quote-text">
              "Together we can make a difference and create lasting change in our communities."
            </div>
            <div 
              className="gradient-box"
              onMouseEnter={() => {
                if (animationState === 'hidden') {
                  setAnimationState('cycling');
                  setTimeout(() => {
                    setAnimationState('buttons');
                  }, 6000); // 2 cycles at 3s each
                }
              }}
            >
              {animationState === 'cycling' && (
                <div className="circular-menu cycling">
                  <div className="cycling-text" style={{"--delay": "0s"}}>Donate</div>
                  <div className="cycling-text" style={{"--delay": "1s"}}>Apply</div>
                  <div className="cycling-text" style={{"--delay": "2s"}}>Join Us</div>
                </div>
              )}
              {animationState === 'buttons' && (
                <div className="button-menu">
                  <button className="action-button">Donate</button>
                  <button className="action-button">Apply</button>
                  <button className="action-button">Join Us</button>
                </div>
              )}
              {animationState === 'hidden' && (
                <>
                  <div className="menu-item">Donate</div>
                  <div className="menu-item">Apply</div>
                  <div className="menu-item">Join Us</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
