import './Projects.css';
import { BiLogoPython, BiLogoReact, BiLogoFlask, BiLogoCPlusPlus} from "react-icons/bi";
import { SiArduino } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Robotarm = () => {
    return (
        <div className='project-wrapper'>
            <div className='project-header'></div>
            <div className='gutter'>
                <div className='proj-intro'>
                    <p>The goal of this project was to be able to build an accurate robotic arm capable of precise movements. The purpose is for this to eventually be able to assist in 3d printing, CNC, and soldering applications but for now, it mimics a controller for real-time motion control. Combining two existing robotic arm projects, is has both the precision and responsive user control features.</p>
                </div>
                <div className='proj-parts'>
                    <h5>Parts</h5>
                    <div className='parts'>
                        <ul>
                            <li>Arduino Mega</li>
                            <li>Ramps 1.4</li>
                            <li>DRV8825 (x6)</li>
                            <li>10k Ohm Potentiometers (x5)</li>
                            <li>608 Bearings (x2)</li>
                            <li>625 Bearings (x6)</li>
                            <li>51104 Thrust Bearing</li>
                            <li>6002-2RS Bearing (x4)</li>
                            <li>5mm Aluminum Rod</li>
                            <li>GT2 Belt</li>
                            <li>Micro Limit Switch</li>
                            <li>Nema 17 Bipolar 40mm 45Ncm 2A (x2)</li>
                            <li>Nema 17 Stepper Motor with 5:1 Planetary Gearbox</li>
                            <li>Nema 14 Stepper Motor Bipolar 0.5A 7Ncm 0.9deg</li>
                            <li>Nema 14 Bipolar 1.8deg 5Ncm 0.4A</li>
                            <li>9g Micro Servo</li>
                            <li>5mm to 5mm shaft connector</li>
                            <li>Wire Loom Cable Sleeve</li>
                            <li>M3, M4 and M8 bolts</li>
                        </ul>
                    </div>
                </div>
                <div className='instruct-container'>
                    <h5>CAD and Printing</h5>
                    <div className='two-col'>
                        <div className='col'>
                            <p>The CAD design and files for this project can be found on the YouTube Channel <a href='https://www.youtube.com/watch?v=wI4Jh-T0Tlo&list=LL&index=8&t=6s' target='_blank' rel="noopener noreferrer">here</a>. There are a few files I had to alter to fit my application which can be found in the GitHub repository. These parts are a modified 32T pulley and the J6 housing (which is a part of the gripper for this application). The controller was based on the design from <a href='https://www.youtube.com/watch?v=5toNqaGsGYs&t=227s' target='_blank' rel="noopener noreferrer">Build Some Stuff’s servo based robotic arm</a>. However, his design does not include a 6th degree of freedom and a pen styled controller. The updated controller can be found under Models in the repository. All parts were printed with 20% infill and 2mm layer height.</p>
                        </div>
                        <div className='col'>
                            <div className='two-img-overlay'>
                                <div className='image1'></div>
                                <div className='image2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='one-col'>
                        <h5>Assembly</h5>
                        <div className='sub-one-col'>
                        <p>The assembly was very straightforward If you follow the video I linked previously. Some parts may not print perfectly so to fit bearings, rods, bolts, and prints into other prints, I used a drill press and some sandpaper to take away some of the plastic. If sections of the print are too large, bearings will need to be superglued into place before assembly. One issue I found out, later on, was the belt slipping on the shoulder joint located on the base (powered by the Nema with the planetary gearbox). To fix this I added hot glue to the printed gear to increase the diameter which therefore increases tension.</p>
                        </div>
                    </div>
                    <div className='multi-row'>
                        <h5>Wiring</h5>
                        <div className='two-col'>
                            <div className='col'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies enim finibus elit interdum sollicitudin. Mauris ornare porttitor libero ut consequat. Aliquam facilisis varius nulla, eu venenatis metus lacinia id. Donec lorem leo, cursus a orci ac, sagittis pretium nulla. Pellentesque commodo faucibus consequat. Donec maximus cursus nunc et tincidunt. Cras posuere in risus egestas sollicitudin. Vivamus lorem ex, luctus non laoreet et, elementum et tortor. Fusce imperdiet neque sit amet lacus vestibulum accumsan. Sed quis erat eget nulla faucibus mattis. Suspendisse sed sem mattis, finibus erat eu, dictum eros.</p>
                                <div className='image1'></div>
                            </div>
                        </div>
                        <div className='sub-one-col'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies enim finibus elit interdum sollicitudin. Mauris ornare porttitor libero ut consequat. Aliquam facilisis varius nulla, eu venenatis metus lacinia id. Donec lorem leo, cursus a orci ac, sagittis pretium nulla. Pellentesque commodo faucibus consequat. Donec maximus cursus nunc et tincidunt. Cras posuere in risus egestas sollicitudin. Vivamus lorem ex, luctus non laoreet et, elementum et tortor. Fusce imperdiet neque sit amet lacus vestibulum accumsan. Sed quis erat eget nulla faucibus mattis. Suspendisse sed sem mattis, finibus erat eu, dictum eros.</p>
                        </div>
                        <div className='two-col'>
                            <div className='image1'></div>
                            <div className='image1'></div>
                        </div>
                    </div>
                    <div className='one-col'>
                        <h5>Programming</h5>
                        <div className='sub-one-col'>
                        <p>Curabitur et nunc nisi. Suspendisse laoreet purus lobortis nunc vestibulum, at aliquet tortor pretium. Nunc placerat, arcu vel porttitor pretium, ante nisi sagittis sem, ac iaculis libero turpis eget urna. Mauris pulvinar lorem sed facilisis sodales. Fusce nec congue ex. Sed elementum mauris non diam malesuada, et vestibulum orci sodales. Pellentesque semper varius consequat. Fusce rutrum, ligula ac lacinia posuere, ligula nisi sagittis ipsum, ac sollicitudin tellus ligula sed ligula. Maecenas nulla libero, varius et urna in, laoreet accumsan justo. Mauris et venenatis ipsum. Sed condimentum est eget metus vestibulum egestas. Vivamus luctus, elit quis bibendum dapibus, nunc dui blandit est, at feugiat mauris nisi iaculis purus. Maecenas lacinia pulvinar tristique.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
      )
}
  
export default Robotarm;