import './index.css';
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from 'react';

const HeaderU = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
      }, []);

    return (
        <div className='header-wrap'>
            <div className='header-text'>
                <p className={`name1 ${loaded ? 'animate' : ''}`}>Adam Eichman</p>
                <p className={`name2 ${loaded ? 'animate' : ''}`}>Adam Eichman</p>
                <p className={`name3 ${loaded ? 'animate' : ''}`}>Adam Eichman</p>
                <p className={`name4 ${loaded ? 'animate' : ''}`}>Adam Eichman</p>
                <p className={`name5 ${loaded ? 'animate' : ''}`}>Adam Eichman</p>              
            </div>
        </div>
      )
}
  
export default HeaderU;