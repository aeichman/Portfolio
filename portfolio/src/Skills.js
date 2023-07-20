import './App.css';
import { BiLogoPython, BiLogoJavascript, BiLogoJava, BiLogoHtml5, BiLogoCss3, BiLogoReact } from "react-icons/bi";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Fade from 'react-reveal/Fade';
const Skills = () => {
    return (
        <div className='skills-wrapper'>
            <h5>Technical Skills</h5>
            <div className='skills-container'>
                <Fade left>
                <div className='skills-logos'>
                        <div className='logo-container'>
                            <BiLogoPython />
                            <p className='logo-text'>Python</p>
                        </div>
                        <div className='logo-container'>
                            <BiLogoJava />
                            <p className='logo-text'>Java</p>
                        </div>
                        <div className='logo-container-js'>
                            <BiLogoJavascript />
                            <p className='logo-text'>JavaScript</p>
                        </div>
                        <div className='logo-container'>
                            <BiLogoHtml5 />
                            <p className='logo-text'>HTML5</p>
                        </div>
                        <div className='logo-container'>
                            <BiLogoCss3 />
                            <p className='logo-text'>CSS3</p>
                        </div>
                        <div className='logo-container'>
                            <BiLogoReact />
                            <p className='logo-text'>React</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
      )
}
  
export default Skills;