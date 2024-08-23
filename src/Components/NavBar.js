import React from "react";
import { Link } from "react-router-dom";


// NavBar section component
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ fontSize: "2.2rem", fontWeight: "bold" }}
            href="#"
          >
            Bankky.
          </a>
          <button
            className="navbar-toggler bg-danger"
            type=" button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav">
              <hr />
<<<<<<< HEAD
              <Link to="/">
                <li className="nav-item">HOME</li>
=======
              <Link to="/" style={{textDecoration: none}}>
                <li className="nav-item"><a className='nav-link'>HOME</a></li>
>>>>>>> 427e36ea449894b334fac4de8b2885de9ad3a140
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
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
              <Link to="/Contact">
                <button className="btn btn-dark rounded-pill">
                  LET'S TALK
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
