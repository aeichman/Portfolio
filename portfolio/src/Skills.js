import './App.css';
import { BiLogoPython, BiLogoJavascript, BiLogoJava, BiLogoHtml5, BiLogoCss3, BiLogoReact } from "react-icons/bi";


const Skills = () => {
    return (
        <div className='skills-wrapper'>
            <h5>Technical Skills</h5>
            <div className='skills-container'>
                <div className='skills-logos'>
                    <div className='logo-container'>
                        <BiLogoPython />
                    </div>
                    <div className='logo-container'>
                        <BiLogoJava />
                    </div>
                    <div className='logo-container'>
                        <BiLogoJavascript />
                    </div>
                    <div className='logo-container'>
                        <BiLogoHtml5 />
                    </div>
                    <div className='logo-container'>
                        <BiLogoCss3 />
                    </div>
                    <div className='logo-container'>
                        <BiLogoReact />
                    </div>
                </div>
            </div>
        </div>
      )
}
  
export default Skills;