import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.css';
import { Fade } from 'react-reveal';

const About = () => {

  return (
    <>
      <div className="about-color-fade"></div>
      <div className="about-wrapper" >
        <div className="about-gutter">
        <Fade bottom>
            <div className='two-col'>
              <div className="col-img"></div>
              <div className="col-text">
                <p className="section-title">ABOUT ME</p>
                <p className="section-header">An aspiring Software and Computer Engineer at NCSU</p>
                <p className="section-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
