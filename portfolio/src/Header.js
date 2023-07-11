import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";



const Header = () => {
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
            <div className='intro-graphic'></div>
        </div>
      )
}
  
export default Header;