import './App.css';
import { BiLogoPython, BiLogoReact, BiLogoFlask, BiLogoCPlusPlus} from "react-icons/bi";
import { SiArduino } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Proj = () => {
    return (
        <div className='proj-wrapper'>
            <h5>Projects</h5>
            <div className='proj-container'>
                <div className='project-box'>
                    <img className='project-img' src='/DubCalendarHome.png' />
                    <div className='proj-title'>
                        <p>6 DOF Robotic Arm</p>
                        <div className='proj-icons'>
                            <BiLogoCPlusPlus />
                            <SiArduino />
                        </div>
                    </div>
                </div>
                <div className='project-box'>
                    <img className='project-img' src='/DubCalendarHome.png' />
                    <div className='proj-title'>
                        <p>DubCalendar</p>
                        <div className='proj-icons'>
                            <BiLogoPython />
                            <BiLogoFlask />
                            <BiLogoReact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
  
export default Proj;