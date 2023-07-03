import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Cross as Hamburger } from 'hamburger-react'
import './App.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <nav className='navbar'>
        <div className='nav-wrapper'>
          <div className="logoContainer"><p>LOGO</p></div>
          <div className={isOpen ? 'nav-links open' : 'nav-links'}>
            <ul>
              <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
              <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink></li>
            </ul>
          </div>
          <Hamburger className='hamburger' toggled={isOpen} toggle={setOpen} size={24} color="#fff" />
        </div>
        {isOpen && window.innerWidth <= 900 && (
        <div className="sidebar">
          <ul>
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink></li>
          </ul>
        </div>
        )}
      </nav>
    )
  }
  
  export default Navbar