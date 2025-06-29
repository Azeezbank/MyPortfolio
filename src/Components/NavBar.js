import React from "react";
import { Link } from "react-router-dom";


// NavBar section component
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light fixed-top">
        <div className="container-fluid">
          <h3 className="banktech">
            <a
              className="navbar-brand text-primary"
              style={{ fontSize: "2.0rem", fontWeight: "bold", fontFamily: "sans-serif" }}
              href="#"
            >
              &lt;BankyTech./&gt;
            </a>
          </h3>
          <button
            className="navbar-toggler bg-primary"
            type=" button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav d-flex grid-nav">
              <hr />
              <div className="d-flex">
                <Link to="/" className="link">
                  <li className="nav-item"><a className='nav-link'>HOME</a></li>
                </Link>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT ME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#edu">
                    EDUCATION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    SERVICE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    PROJECT
                  </a>
                </li>

              </div>
              <div className="oya">
                <Link to="/Contact">
                  <button className="btn btn-primary rounded-pill d-flex float-end" style={{fontFamily: "sans-serif"}}>
                    LET'S TALK
                  </button>
                </Link>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
