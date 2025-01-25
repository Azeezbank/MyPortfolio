import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


// services section
const Services = () => {
  const [ref, view] = useInView({
    triggerOnce: false,
    threshold: 1
  })
  
  const backgroundImageStyle = {
    backgroundImage: `url('https://tunstelecom.com.ng/wp-content/uploads/2024/08/images-15.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <div className="container-fluid bg-danger text-light text-center">
        <marquee>
          {" "}
          <h1 id="service" className="scrowI">
            <span className="aboutW span">SERVICES</span>{" "}
            <span className="aboutB span">ABOUT ME</span>
            <span className="aboutW span">SERVICES</span>
            <span className="aboutB span">SERVICES</span>
            <span className="aboutW span">SERVICES</span>
            <span className="aboutB span">SERVICES</span>
            <span className="aboutW span">SERVICES</span>
            <span className="aboutB span">SERVICES</span>
            <span className="aboutW span">SERVICES</span>
            <span className="aboutB span">SERVICES</span>
            <span className="aboutW span">SERVICES</span>
            <span className="aboutB span">SERVICES</span>
            <span className="aboutW span">SERVICES</span>
          </h1>
        </marquee>
      </div>

      <div className="container-fluid bg-light" style={backgroundImageStyle}>
        <div
          className="pt-5 pb-5 ps-2 pe-2 text-dark"
          style={{
            opacity: "1",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8",
          }}
        >
          <h2 className="pt-5 bold">RESPONSIVE DESIGN</h2>

          <div className="row p-2 pt-3">
            <div className="col-sm-4">
              <h4 className="bold">
                <span
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    color: "white",
                    padding: "7px",
                  }}
                >
                  <i className="bi bi-phone"></i>
                </span>{" "}
                Mobile-first
              </h4>
              <p>
                Designing for small screens first, then scaling up ensures a
                seamless experience across devices.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="bold">
                <span
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    color: "white",
                    padding: "7px",
                  }}
                >
                  <i className="bi bi-layers"></i>
                </span>{" "}
                Adaptive Layout
              </h4>
              <p>
                Flexible grids, fluid typography, and dynamic media queries
                create layouts that adapt to any screen size.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="bold">
                <span
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    color: "white",
                    padding: "7px",
                  }}
                >
                  <i className="bi bi-speedometer"></i>
                </span>{" "}
                Intuitive Navigation
              </h4>
              <p>
                Simplified menus and touch-friendly interaction make navigation
                a breeze on any device.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5 ps-2 pe-2 bg-light">
        <h2 className="pt-5 bold">USER CENTRIC DEVELOPMENT</h2>
        <div className="row p-2 pt-3">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-2">
                <div className="badge bg-secondary rounded">1</div>
              </div>
              <div className="col-sm-8">
                <h4 className="bold">Research</h4>
                <p>
                  Gathering insights through user interviews, personal
                  development and competitive analysis
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <div className="badge bg-secondary rounded">2</div>
              </div>
              <div className="col-sm-8">
                <h4 className="bold">Design</h4>
                <p>
                  Iterating on low-fidelity wireframes and hight fidelity
                  prototype to validate consept
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <div className="badge bg-secondary rounded">3</div>
              </div>
              <div className="col-sm-8">
                <h4 className="bold">Implement</h4>
                <p>
                  Translating designs into functional, pixel-perfect user
                  interface and experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src="https://tunstelecom.com.ng/wp-content/uploads/2024/08/images-15.jpeg"
              alt="imag"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <h3 className="bold">THOUGHTFUL BRANDING</h3>
        <div className="row p-2"></div>
      </div>
    </>
  );
};

export default Services;
