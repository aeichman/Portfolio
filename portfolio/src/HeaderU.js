import './index.css';
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from 'react';
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
                <p className={`name2 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`}>Adam Eichman</p>
                <p className={`name3 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`}>Adam Eichman</p>
                <p className={`name4 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`}>Adam Eichman</p>
                <p className={`name5 ${loaded ? 'animate' : ''} ${waveActive ? 'wave' : ''}`}>Adam Eichman</p>
            </div>
        </div>
  );
};

export default HeaderU;
