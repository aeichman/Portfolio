import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import './Nav.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for React Router v6

  const scrollToSection = (className) => {
    const section = document.querySelector(className);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateToHomepageAndScrollToProjects = async () => {
    // Navigate to the homepage
    await navigate('/');
  
    // Scroll to the projects section
    scrollToSection('.proj-wrapper');
  };

  return (
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <div className="logoContainer">
          <img src='/logo.png' alt='logo' className='logo' />
        </div>
        <Hamburger className='hamburger' toggled={isOpen} toggle={setOpen} size={24} color="#000" />
      </div>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="#" onClick={() => scrollToSection('.about-wrapper')}>About</NavLink></li>
            {/* Use the new function for the onClick event */}
            <li><NavLink to="#" onClick={navigateToHomepageAndScrollToProjects}>Projects</NavLink></li>
            <li><NavLink to="/" onClick={() => setOpen(false)}>Resume</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
