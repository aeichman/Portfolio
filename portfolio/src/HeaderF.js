import './App.css';
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


const HeaderF = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className='intro-wrapper'>
            <div className='intro-text'>
                <div className='intro-sub-container'>
                    <TypeAnimation
                    className='intro-header'
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Hello, my name is Adam Eichman',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '32px', display: 'inline-block' }}
                    />
                </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
            
            </div>
        </div>
      )
}
  
export default HeaderF;