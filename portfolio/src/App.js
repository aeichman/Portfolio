import React from 'react';
import Navbar from './Navbar';
import HeaderU from './HeaderU';
import About from './About';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import {CgMenuRight, CgClose} from "react-icons/cg";
import { useState, useEffect } from 'react';



function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
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
        <About />
      </div>
    </>
  );
}

export default App;
