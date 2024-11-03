import React from "react";
import "../App.css";


// Home page section
const LandingPage = () => {
  return (
    <>
      <div
        className="container-fluid p-5 first bg-secondary"
        style={{ height: "700px" }}
      >
        <h1 style={{ paddingTop: "170px" }}>BUILD SOMETHING REMARKABLE</h1>

        <p>
          Full-Stack developer skilled in creating dynamic responsive web application with a focus on seamless user experience and efficient backend solutions.
        </p>
        <div className="flex">
          <button className="btn bg-danger text-light p-3 m-2 hover">
            <a style={{textDecoration:'none', color:'#fff'}} href='https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <i className='bi bi-linkedin'></i> Follow</a>
          </button>
          <button className="btn bg-dark text-light p-3 hover">Hire Me..</button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
