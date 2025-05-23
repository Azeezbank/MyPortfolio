import React from "react";
import "../App.css";
import { easeIn, easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Home page section
const LandingPage = () => {
  const [ref1, view1] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref, view] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <>
      <div
        className="container-fluid p-5 first bg-secondary"
        style={{ height: "700px" }}
      >
    
        <div className="dev-dots">
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
          <div className="d-flex">
          <h5>&lt; &gt; Developer.js</h5>
          </div>
        </div>
  
        <motion.h1
          style={{ paddingTop: "20px" }}
          ref={ref1}
          initial={{ y: -50 }}
          animate={{ y: view1 ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          BUILD SOMETHING REMARKABLE
        </motion.h1>

        <motion.p
          ref={ref}
          initial={{ scale: 0 }}
          animate={{ scale: view ? 1 : 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          Full-Stack developer skilled in creating dynamic responsive web
          application with a focus on seamless user experience and efficient
          backend solutions.
        </motion.p>
        <div className="flex">
          <button className="btn bg-danger text-light p-3 m-2 hover">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <i className="bi bi-linkedin"></i> Follow
            </a>
          </button>
          <button className="btn bg-dark text-light p-3 hover">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="mailto:bankoleazeezb98@gmail.com"
            >
              Hire Me..
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
