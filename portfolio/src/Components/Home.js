import './index.css';
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from 'react';

const HeaderU = () => {
    const [loaded, setLoaded] = useState(false);
    const [waveActive, setWaveActive] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const handleWaveClick = () => {
        setWaveActive(true);
    };

    const handleAnimationEnd = () => {
        setWaveActive(false);
    };

    const fontSizeIncrement = 8; // Increase in font size for each name in the wave

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
            <div className='nav-links'>
                <a><p>About</p></a>
                <p className='spacer'></p>
                <a><p>Skills</p></a>
                <p className='spacer'></p>
                <a><p>Projects</p></a>
                <p className='spacer'></p>
                <a><p>Resume</p></a>
            </div>
        </div>
  );
};

export default HeaderU;
