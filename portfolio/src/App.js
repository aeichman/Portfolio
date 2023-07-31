import React from 'react';
import Navbar from './Navbar';
import HeaderU from './HeaderU';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import {CgMenuRight, CgClose} from "react-icons/cg";
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';


function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    // Add a resize event listener to detect changes in the screen size
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsMenuVisible(false); // Close the menu if screen size is greater than 1000px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <label htmlFor="active" className={`menu-btn ${isMenuVisible ? 'transparent-bg' : ''}`} onClick={handleMenuClick}>
        <span>
          {isMenuVisible ? (
            <CgClose size={30} className='menu-icon' />
          ) : (
            <CgMenuRight size={30} className='menu-icon' />
          )}
        </span>
      </label>
      <input type="checkbox" id="active" checked={isMenuVisible} readOnly />
      <div className="wrapper">
        <div className={isMenuVisible ? 'menu-wrapper active' : 'menu-wrapper'}>
          <ul className="menu">
            <li><a>About</a></li>
            <li><a>Skills</a></li>
            <li><a>Projects</a></li>
            <li><a>Resume</a></li>
          </ul>
        </div>
        <Navbar />
        <HeaderU />
      </div>
    </>
  );
}

export default App;
