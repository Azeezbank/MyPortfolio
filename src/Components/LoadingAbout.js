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

  const [honor, setHonor] = useState(0);

  useEffect(() => {
    if (honor < 20) {
      const many = setTimeout(() => {
        setHonor(honor + 1);
      }, 800);
      return () => clearTimeout(many);
    }
  }, [honor]);
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
              src="https://github.com/Azeezbank/Images/raw/main/my_headshot.png"
              alt="profile"
            />
          </div>
          <div className="col-sm-6 pt-3">
            <p>
              Hello! I’m Bankole Azeez, a full-stack software developer from Osun State, Nigeria. With extensive experience
              in  building responsive, high-quality websites and applications, i'm passionate about crafting solution that 
              are both functional anf visually engaging. As a lifelong learner, i'm always exploring new technologies to 
              enhance my skills, including expertise in wordpress development. Let's connect-i'd love to share what makes my approach unique.
            </p>

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
                <h3 className="bold">4+</h3>
                <p>Years of experience</p>
              </div>
              <div className="col-sm-4 pt-4">
                <h3 className="bold">{Years}+</h3>
                <p>Successful projects</p>
              </div>
              <div className="col-sm-4 pt-4">
                <h3 className="bold">{honor}+</h3>
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
      </div>
    </>
  );
};

export default LoadingAbout;
