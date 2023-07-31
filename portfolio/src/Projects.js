import './Projects.css';
import { BiLogoPython, BiLogoReact, BiLogoFlask, BiLogoCPlusPlus} from "react-icons/bi";
import { SiArduino } from "react-icons/si";


const Projects = () => {
    return (
        <div className='proj-wrapper'>
            <div className='proj-container'>
                <div className='project-box'>
                    <a className='proj-links' href='/robotarm' >
                        <img className='project-img' src='/DubCalendarHome.png' />
                        <div className='proj-title'>
                            <p>6 DOF Robotic Arm</p>
                            <div className='proj-icons'>
                                <BiLogoCPlusPlus />
                                <SiArduino />
                            </div>
                        </div>
                    </a>
                </div>
                <div className='project-box'>
                    <a className='proj-links' href='/dubcalendar' >
                        <img className='project-img' src='/DubCalendarHome.png' />
                        <div className='proj-title'>
                            <p>DubCalendar</p>
                            <div className='proj-icons'>
                                <BiLogoPython />
                                <BiLogoFlask />
                                <BiLogoReact />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      )
}
  
export default Projects;