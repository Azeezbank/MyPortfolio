import React from "react";
import { Link } from "react-router-dom";


// form section
const LetsTalk = () => {
  return (
    <>
      <div className="container-fluid bg-danger text-light text-center">
        <marquee>
          {" "}
          <h1 id="contact" className="scrowI">
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
          </h1>
        </marquee>
      </div>

      <div className="container-fluid p-5 bg-dark text-center text-light">
        <h5>
          Do you have a <br /> question, an idea, or <b /> a project you need{" "}
          <br />
          help with? Contact <br /> us!
        </h5>
        <Link to="/Contact">
          <button
            id="talk"
            className="btn rounded p-3 m-4 text-light shadow-small bg-secondary"
          >
            Let's Talk <i className='bi bi-chevron-double-right text-light'></i>
          </button>
        </Link>
      </div>

      <div className="container-fluid bg-danger p-2 text-center">
        <h6>
          bankoleazeezb98@gmail / 5, Iragbiji Osun State, Nigeria / <br />
          +2349061324918
        </h6>
      </div>

      <div className="container-fluid bg-light p-5"></div>
      <div className="container-fluid bg-dark p-3 text-secondary d-flex justify-content-between">
        {/* <div className="flex"> */}
        <p>Copyright 2024 Bankky. || Alright reserved </p>
        <div className="badge bg-danger rounded">
          <a href="#">
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;
