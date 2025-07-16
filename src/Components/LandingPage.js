// import React from "react";
import "../App.css";
import { easeIn, easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import animation from '../assets/dark_blue_bg_3.mp4';


// Home page section
const LandingPage = () => {

  return (
    <>
      <div className="animation-div">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="animation"
        >
          <source src={animation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="p-5 page-b"
        style={{ height: "735px" }}
      >
        <div>
          <div className="dev-dots">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <div className="d-flex">
              <h5 style={{ fontFamily: "sans-serif" }}>&lt; &gt; Developer.js</h5>
            </div>
          </div>

          <motion.h1
            style={{ paddingTop: "20px" }}
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            BUILD SOMETHING REMARKABLE
          </motion.h1>

          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            Full-Stack developer skilled in creating dynamic responsive web
            application with a focus on seamless user experience and efficient
            backend solutions.
          </motion.p>
          <div className="flex ">
            <button className="btn text-light p-3 me-2">
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                className="hover1 p-3 "
                href="https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <i className="bi bi-linkedin"></i> Follow
              </a>
            </button>
            <button className="btn bg-dark text-light p-3">
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                className="p-1 hover2"
                href="mailto:bankoleazeezb98@gmail.com"
              >
                Hire Me..
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
