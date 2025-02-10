import React, { useState, useEffect } from "react";
import { easeInOut, motion, transform } from "framer-motion";
import { useInView } from "react-intersection-observer";


// skills section component
const Skills = () => {
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [refP, viewP] = useInView({triggerOnce: false});
  const [refP1, viewP1] = useInView({triggerOnce: false});
  const [refP2, viewP2] = useInView({triggerOnce: false});
  const [refP3, viewP3] = useInView({triggerOnce: false});

  useEffect(() => {
    if (viewP) {
      let value = 0;
      const interval = setInterval(() => {
        value += 5;
        setProgress(value);
        if (value >= 95) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
    setProgress1(0);
  }, [viewP]);

  useEffect(() => {
    if (viewP1) {
      let value = 0;
      const interval = setInterval(() => {
        value += 5;
        setProgress1(value);
        if (value >= 85) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
    setProgress1(0);
  }, [viewP1]);

  useEffect(() => {
    if (viewP2) {
      let value = 0;
      const interval = setInterval(() => {
        value += 5;
        setProgress2(value);
        if (value >= 90) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
    setProgress1(0);
  }, [viewP2]);

  useEffect(() => {
    if (viewP3) {
      let value = 0;
      const interval = setInterval(() => {
        value += 5;
        setProgress3(value);
        if (value >= 85) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
    setProgress1(0);
  }, [viewP3]);
  
  const [ref, view] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  const [ref1, view1] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  const [ref2, view2] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  const [ref3, view3] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  const [ref4, view4] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })
 
  return (
    <>
      <div className="container-fluid bg-dark text-light text-center pt-5" style={{position: 'relative', overflow: 'hidden'}}>
        <motion.h2 className="text-center p-5 text-light m-0 text-uppercase" ref={ref} initial={{x: 100, opacity: 0}} animate={{x: view ? 0 : 100, opacity: view? 1 : 0}} transition={{duration: 1}}>
          I craft wonderful <br />
          digital experiences for brands
        </motion.h2>

        <div className="row p-2 ">
          <div className="col-sm-4">
            <motion.h2 className="pt-3 pb-2 text-uppercase" ref={ref1} initial={{y: 50}} animate={{y: view1? 0 : 50}} transition={{duration: 0.5, ease: "easeIn"}}>Soft Skills</motion.h2>
            <div className="text-start">
              <div className="row">
                <div className="col-sm-4 pt-4">
                  <span className="badge bg-primary rounded-pill">1</span>
                </div>
                <div className="col-sm-8 pt-4">
                  <p>Problem Solving</p>
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-sm-4 pt-4">
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div className="col-sm-8 pt-4">
                  <p>Teamwork </p>
                </div>
              </div>

              <div className="row pb-2">
                <div className="col-sm-4 pt-4">
                  <span className="badge bg-primary rounded-pill">3</span>
                </div>
                <div className="col-sm-8 pt-4">
                  <p>Critical Thinking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <motion.h2 className="pt-3 pb-2 text-uppercase" ref={ref2} initial={{y: 50}} animate={{y: view2? 0 : 50}} transition={{duration: 0.5, ease: "easeIn"}}>Technical Skills</motion.h2>

            <div className="row p-3 pb-5">
              <div className="col-sm-6">
                <div className="row text-start">
                  <div className="col-sm-4 pt-4">
                    <span
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        color: "black",
                        padding: "15px",
                      }}
                    >
                      <i className="bi bi-filetype-html"></i>
                    </span>
                  </div>
                  <div className="col-sm-8 pt-3">
                    <h3>Frontend</h3>
                    <p>HTML5, CSS, JavaScript, TypeScript, React, Bootstrap</p>
                  </div>
                </div>
                <h1>95%</h1>
                <div className="spinner-border text-primary"></div>
                <div ref={refP} className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                    style={{width: `${progress}%`}}
                  >
                    95%
                  </div>
                </div>

                <p>User Interface</p>
              </div>
              <div className="col-sm-6">
                <div className="row text-start">
                  <div className="col-sm-4 pt-4">
                    <span
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        color: "black",
                        padding: "15px",
                      }}
                    >
                      <i className="bi bi-terminal"></i>
                    </span>
                  </div>
                  <div className="col-sm-8 pt-3">
                    <h3>Back-end</h3>
                    <p>Node.js, Express, npm, Node exec</p>
                  </div>
                </div>
                <h1>85%</h1>
                <div className="spinner-border text-primary"></div>
                <div ref={refP1} className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                    style={{ width: `${progress1}%` }}
                  >
                    85%
                  </div>
                </div>
                <p>Server</p>
              </div>

              <div className="row p-3 pb-5">
                <div className="col-sm-6">
                  <div className="row text-start">
                    <div className="col-sm-4 pt-4">
                      <span
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                          color: "black",
                          padding: "15px",
                        }}
                      >
                        <i className="bi bi-database"></i>
                      </span>
                    </div>
                    <div className="col-sm-8 pt-3">
                      <h3>Database</h3>
                      <p>SQL, MySQL</p>
                    </div>
                  </div>
                  <h1>90%</h1>
                  <div className="spinner-border text-primary"></div>
                  <div ref={refP2} className="progress">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      style={{ width: `${progress2}%` }}
                    >
                      90%
                    </div>
                  </div>

                  <p>Storage </p>
                </div>

                <div className="col-sm-6">
                  <div className="row text-start">
                    <div className="col-sm-4 pt-4">
                      <span
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                          color: "black",
                          padding: "15px",
                        }}
                      >
                        <i className="bi bi-git"></i>
                      </span>
                    </div>
                    <div className="col-sm-8 pt-3">
                      <h3>V.Control</h3>
                      <p>Git, GitHub</p>
                    </div>
                  </div>
                  <h1>85%</h1>
                  <div className="spinner-border text-primary"></div>
                  <div ref={refP3} className="progress">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      style={{ width: `${progress3}%` }}
                    >
                      85%
                    </div>
                  </div>
                  <p>Version controller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
