import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';


// about page section
const LoadingAbout = () => {
  const [Years, setYears] = useState(0);

  useEffect(() => {
    if (Years < 100) {
      const timer = setTimeout(() => {
        setYears(Years + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [Years]);


  const [hornor, setHornor] = useState(0);

  useEffect(() => {
    if (hornor < 20) {
      const many = setTimeout(() => {
        setHornor(hornor + 1);
      }, 1000);
      return () => clearTimeout(many);
    }
  }, [hornor]);
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
        <div className="row aboutt p-5">
          <div className="col-sm-6 pt-3">
            <img
              className="img2"
              src="https://tunstelecom.com.ng/wp-content/uploads/2024/08/IMG_20240809_114901_386-scaled.jpg"
              alt="profile"
            />
          </div>
          <div className="col-sm-6 pt-3">
            <p>
              Hello! I’m Bankole Azeez. Web designer from Osun State, Nigeria. I
              have rich experience in website design (Full-stack) and building,
              am a life longer learner, Also. I am good at wordpress. I will
              love to talk with you about my uniqueness.
            </p>

            <div className="row">
              <div className="col-sm-6 pt-4">
                <h3>Passionate Coder</h3>
                <p>
                  I thrive on the challenge of translating complex ideas into
                  functional, user-friendly web applications.
                </p>
              </div>
              <div className="col-sm-6 pt-4">
                <h3> Creative Problem-solver </h3>
                <p>
                  {" "}
                  With an analytical mindset and an eye for design, I tackle
                  projects with innovation and efficiency.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 pt-4">
                <h3>4+</h3>
                <p>Years of experience</p>
              </div>
              <div className="col-sm-4 pt-4">
                <h3>{Years}</h3>
                <p>Successful projects</p>
              </div>
              <div className="col-sm-4 pt-4">
                <h3>{hornor}+</h3>
                <p>Hornor and awards</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 pt-5">
                <button className="btn bg-dark rounded-pill text-light">
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="https://eu.docworkspace.com/d/sIITG9quRAbeOnrYG"
                  >
                    {" "}
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingAbout;
