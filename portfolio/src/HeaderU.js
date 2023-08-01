import './index.css';
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Dubcalendar from './Dubcalendar';
import Robotarm from './Robotarm';
import App from './App';
import './Nav.css';
import {Link} from 'react-router-dom';
import transition from './transition';


const HeaderU = () => {
  const [loaded, setLoaded] = useState(false);
  const [waveActive, setWaveActive] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleWaveClick = () => {
    setWaveActive(true);
  };

  const handleAnimationEnd = () => {
    setWaveActive(false);
  };

  const fontSizeIncrement = 8;
  const nameRefs = useRef([]);

  useEffect(() => {
    nameRefs.current = nameRefs.current.slice(0, 5); // Ensure we have a maximum of 5 elements in the array

    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the transformation based on the scrollOffset
    nameRefs.current.forEach((nameRef, index) => {
      if (nameRef && index >= 0) {
        const shift = (index + 1) * scrollOffset; // Increase the shift based on the index (+1 to make name2 move)
        nameRef.style.transform = `translateX(-50%) translateY(-${shift}px)`;
      }
    });
  }, [scrollOffset]);

  return (
    <div className='header-wrap'>
      <div className='header-text'>
        <p
          className={`name1 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`}
          onClick={handleWaveClick}
          onAnimationEnd={handleAnimationEnd}
        >
          Adam Eichman
        </p>
        <p className={`name2 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`} ref={(el) => (nameRefs.current[0] = el)}>
          Adam Eichman
        </p>
        <p className={`name3 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`} ref={(el) => (nameRefs.current[1] = el)}>
          Adam Eichman
        </p>
        <p className={`name4 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`} ref={(el) => (nameRefs.current[2] = el)}>
          Adam Eichman
        </p>
        <p className={`name5 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`} ref={(el) => (nameRefs.current[3] = el)}>
          Adam Eichman
        </p>
      </div>
    </div>
  );
};

export default HeaderU;


