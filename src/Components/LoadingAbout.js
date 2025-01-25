import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from 'framer-motion';
import CountUp from "react-countup";


const LoadingAbout = () => {
// about page section
const AnimatedCount = ({start, end, duration, label}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  return (
    <>
    <div ref={ref}>
      {isInView && (
        <motion.div
        initial={{opacity:0, y:0}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5}}>
          <p>
          <CountUp start={start} end={end} duration={duration} />
          
          {label}+</p>
        </motion.div>
      )}
    </div>
    </>
  )
};

  return (
    <>
      <div className="scrow">
        <marquee>
          {" "}
          <h1 id="about" className="scrowI">
            <span className="aboutW span">ABOUT ME</span>{" "}
            <span className="aboutB span">ABOUT ME</span>
            <span className="aboutW span">ABOUT ME</span>
            <span className="aboutB span">ABOUT ME</span>
            <span className="aboutW span">ABOUT ME</span>
            <span className="aboutB span">ABOUT ME</span>
            <span className="aboutW span">ABOUT ME</span>
          </h1>
        </marquee>
      </div>

      <div className="container-fluid">
        <div className="row aboutt pt-5 pb-5 ps-2 pe-2">
          <div className="col-sm-6 pt-3">
            <img
              className="img2"
              src='https://github.com/Azeezbank/Images/raw/main/my_headshot.png'
              alt="profile"
            />
          </div>
          <div className="col-sm-6 pt-3">
            <p>
              <b>Hello! I’m Bankole Azeez</b>, a full-stack software developer from Osun State, Nigeria. With extensive experience
              in  building responsive, high-quality websites and applications, i'm passionate about crafting solution that 
              are both functional anf visually engaging. As a lifelong learner, i'm always exploring new technologies to 
              enhance my skills, including expertise in wordpress development. Let's connect-i'd love to share what makes my approach unique.
            </p>
            </div>

            <div className="row">
              <div className="col-sm-6 pt-4">
                <h3 className="bold">Passionate Coder</h3>
                <p>
                  I thrive on the challenge of translating complex ideas into
                  functional, user-friendly web applications.
                </p>
              </div>
              <div className="col-sm-6 pt-4">
                <h3 className="bold"> Creative Problem-solver </h3>
                <p>
                  {" "}
                  With an analytical mindset and an eye for design, I tackle
                  projects with innovation and efficiency.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 pt-4">
                <h3 className="bold"><AnimatedCount start={0} end={4} duration={0.5} /></h3>
                <p>Years of experience</p>
              </div>
              <div className="col-sm-4 pt-4">
                <h3 className="bold"><AnimatedCount start={0} end={100} duration={4} /></h3>
                <p>Successful projects</p>
              </div>
              <div className="col-sm-4 pt-4">
                <h3 className="bold"><AnimatedCount start={0} end={20} duration={2} /></h3>
                <p>Hornor and awards</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 pt-5">
                <button className="btn bg-dark rounded-pill text-light hover">
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="https://eu.docworkspace.com/d/sIDrG9quRAYfdnrkG?sa=601.1123"
                  >
                    {" "}
                    <i className='bi bi-download'> </i> Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoadingAbout;
