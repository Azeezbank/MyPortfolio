import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import full_img from '../assets/images (1).png';


// services section
const Progress = () => {
  const [ref, view] = useInView({
    triggerOnce: false,
    threshold: 1
  })

  return (
    <>
      <div className="text-light text-center">
        <Marquee>
          {" "}
          <h1>
            <span className="aboutW span">WORKING PROCESS</span>{" "}
            <span className="aboutB span">WORKING PROCESS</span>
            <span className="aboutW span">WORKING PROCESS</span>
            <span className="aboutB span">WORKING PROCESS</span>
            <span className="aboutW span">WORKING PROCESS</span>
          </h1>
        </Marquee>
      </div>

      <div className="full-width pt-5 pb-5 bg-dark">
        <h2 className="pt-5 bold text-primary">USER CENTRIC DEVELOPMENT</h2>
        <div className="row p-2 pt-3">
          <div className="col-sm-6">
            <div className="row centric-line">
              <div className="col-sm-2 badgeT">
                <div className="badge bg-primary rounded">1</div>
              </div>
              <div className="col-sm-8">
                <h4 className="bold">Research</h4>
                <p className="text-white">
                  Gathering insights through user interviews, personal
                  development and competitive analysis
                </p>
              </div>
            </div>
            <div className="row centric-line">
              <div className="col-sm-2 badgeT">
                <div className="badge bg-primary rounded">2</div>
              </div>
              <div className="col-sm-8">
                <h4 className="bold">Design</h4>
                <p className="text-white">
                  Iterating on low-fidelity wireframes and hight fidelity
                  prototype to validate consept
                </p>
              </div>
            </div>

            <div className="row centric-line">
              <div className="col-sm-2 badgeT">
                <div className="badge bg-primary rounded">3</div>
              </div>
              <div className="col-sm-8">
                <h4 className="bold">Implement</h4>
                <p className="text-white">
                  Translating designs into functional, pixel-perfect user
                  interface and experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src={full_img}
              alt="imag"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
