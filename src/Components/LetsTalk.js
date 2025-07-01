import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


// form section
const LetsTalk = () => {
  return (
    <>
      <div className="bg-primary text-light text-center">
        <Marquee>
          {" "}
          <h1 id="contact" className="scrowI">
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
            <span className="aboutB span">LET'S TALK</span>
            <span className="aboutW span">LET'S TALK</span>
          </h1>
        </Marquee>
      </div>

      <div className="full-width p-5 bg-dark text-center text-light">
        <h5>
          Do you have a <br /> question, an idea, or <b /> a project you need{" "}
          <br />
          help with? Contact <br /> us!
        </h5>
        <Link to="/Contact">
          <button
            id="talk"
            className="btn rounded p-3 m-4 text-light shadow-small bg-secondary hover"
          >
            Let's Talk <i className='bi bi-chevron-double-right text-light'></i>
          </button>
        </Link>
      </div>

      <div className="full-width bg-primary p-2 text-center">
        <h6 className="text-white">
          bankoleazeezb98@gmail / 5, Iragbiji Osun State, Nigeria / <br />
          +2349061324918
        </h6>
      </div>

      <div className="full-width bg-dark p-3 text-secondary d-flex justify-content-between">
        {/* <div className="flex"> */}
        <p className="text-center text-white">&copy; Copyright 2024 Bankky. || Alright reserved <br/>
        Designed and Developed by Bankole Azeez Babatunde</p>
        <div className="badge bg-primary rounded">
          <a href="#">
            <i className="bi bi-arrow-up text-white"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;
