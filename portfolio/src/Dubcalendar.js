import './Projects.css';
import { BiLogoPython, BiLogoReact, BiLogoFlask, BiLogoCPlusPlus} from "react-icons/bi";
import { SiArduino } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Dubcalendar = () => {
    return (
        <div className='project-wrapper'>
            <div className='project-header'></div>
            <div className='gutter'>
                <div className='proj-intro'>
                    <p>This project was developed in part for the Capstone course CSC: 450 Software Engineering at the University of North Carolina Wilmington. With a team size of five students, our goal was to create a social-based web application that allows students to access and analyze their peers’ schedules while also providing valuable insights into course difficulty relative to the teaching professor. A working version is no longer deployed as of July 2023 due to an expired database.</p>
                </div>
            </div>
        </div>
      )
}
  
export default Dubcalendar;