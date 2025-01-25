import React from "react";
import "../App.css";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";


// Home page section
const LandingPage = () => {
  const [ref1, view1] = useInView({
    triggerOnce: false,
    threshold: 0.5
});
  return (
    <>
      <div
        className="container-fluid p-5 first bg-secondary"
        style={{ height: "700px" }}
      >
        <motion.h1 style={{ paddingTop: "170px" }} ref={ref1} initial={{scale: 1.5}} animate={{scale: view1? 1 : 1.5}} transition={{duration: 1.5, ease: 'easeInOut'}}>BUILD SOMETHING REMARKABLE</motion.h1>

        <p>
          Full-Stack developer skilled in creating dynamic responsive web application with a focus on seamless user experience and efficient backend solutions.
        </p>
        <div className="flex">
          <button className="btn bg-danger text-light p-3 m-2 hover">
            <a style={{textDecoration:'none', color:'#fff'}} href='https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <i className='bi bi-linkedin'></i> Follow</a>
          </button>
          <button className="btn bg-dark text-light p-3 hover"><a style={{textDecoration:'none', color:'#fff'}} href="mailto:bankoleazeezb98@gmail.com">Hire Me..</a></button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
