import './App.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-icons'>
                <a href='https://github.com/aeichman' target='_blank' rel='noopener noreferrer'>
                    <AiFillGithub className='github-icon'  />
                </a>
                <a href='https://www.linkedin.com/in/adameichman/' target='_blank' rel='noopener noreferrer'>
                    <AiFillLinkedin className='linkedin-icon'/>
                </a>
            </div>
        </div>
      )
}
  
export default Footer;