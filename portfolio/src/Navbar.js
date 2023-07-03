import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react'
import './App.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
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
      </nav>
    )
  }
  
  export default Navbar