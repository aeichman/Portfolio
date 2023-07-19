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
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
                <div className='proj-parts'>
                    <h5>Parts</h5>
                    <div className='parts'>
                        <ul>
                            <li>Arduino Mega</li>
                            <li>Ramps 1.4</li>
                            <li>DRV8825 (x6)</li>
                            <li>10k Ohm Potentiometers</li>
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
                            <li>M3, M4 and M8 bolts</li>
                        </ul>
                    </div>
                </div>
                <div className='instruct-container'>
                    <h5>CAD and Printing</h5>
                    <div className='two-col'>
                        <div className='col'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies enim finibus elit interdum sollicitudin. Mauris ornare porttitor libero ut consequat. Aliquam facilisis varius nulla, eu venenatis metus lacinia id. Donec lorem leo, cursus a orci ac, sagittis pretium nulla. Pellentesque commodo faucibus consequat. Donec maximus cursus nunc et tincidunt. Cras posuere in risus egestas sollicitudin. Vivamus lorem ex, luctus non laoreet et, elementum et tortor. Fusce imperdiet neque sit amet lacus vestibulum accumsan. Sed quis erat eget nulla faucibus mattis. Suspendisse sed sem mattis, finibus erat eu, dictum eros.</p>
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
                        <p>Curabitur et nunc nisi. Suspendisse laoreet purus lobortis nunc vestibulum, at aliquet tortor pretium. Nunc placerat, arcu vel porttitor pretium, ante nisi sagittis sem, ac iaculis libero turpis eget urna. Mauris pulvinar lorem sed facilisis sodales. Fusce nec congue ex. Sed elementum mauris non diam malesuada, et vestibulum orci sodales. Pellentesque semper varius consequat. Fusce rutrum, ligula ac lacinia posuere, ligula nisi sagittis ipsum, ac sollicitudin tellus ligula sed ligula. Maecenas nulla libero, varius et urna in, laoreet accumsan justo. Mauris et venenatis ipsum. Sed condimentum est eget metus vestibulum egestas. Vivamus luctus, elit quis bibendum dapibus, nunc dui blandit est, at feugiat mauris nisi iaculis purus. Maecenas lacinia pulvinar tristique.</p>
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