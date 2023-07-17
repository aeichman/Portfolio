import './App.css';
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


const Header = () => {
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
            <div className='header-icons'>
                <a href='https://github.com/aeichman' target='_blank' rel='noopener noreferrer'>
                        <AiFillGithub className='github-header'  />
                </a>
                <a href='https://www.linkedin.com/in/adameichman/' target='_blank' rel='noopener noreferrer'>
                        <AiFillLinkedin className='linkedin-header'/>
                </a>
            </div>
            
            </div>
            <div className='intro-graphic'>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        fullScreen: { enable: false },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#FFFF00",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 650,
                                },
                                value: 125,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 0.5, max: 3},
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </div>
      )
}
  
export default Header;