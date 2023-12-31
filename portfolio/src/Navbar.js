import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {CgMenuRight} from "react-icons/cg";

const Navbar = () => {
  

  return (
    <div className='nav'>
      <div className='logoContainer'>
        <img className='logo' src='/logo.png' alt='logo' />
      </div>
      <div className='nav-links'>
        <div className='nav-item'>
          <Link className='nav-link' to="/about">ABOUT</Link>
        </div>
        <div className='nav-item'>
          <Link className='nav-link' to="/skills">SKILLS</Link>
        </div>
        <div className='nav-item'>
          <Link className='nav-link' to="/projects">PROJECTS</Link>
        </div>
        <div className='nav-item'>
          <Link className='nav-link' to="/resume">RESUME</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
