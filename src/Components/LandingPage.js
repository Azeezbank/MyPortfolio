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
        <h1 style={{ paddingTop: "170px" }}>BUILD SOMETHING REMAERKABLE</h1>

        <p>
          Hello, I’m Azeez Bankole, UFull-Stack developer and Graphic designer
          based in Nigeria.
        </p>
        <div className="flex">
          <button className="btn bg-danger text-light p-3 m-2">
            <a style={{textDecoration:'none', color:'#fff'}} href='https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <i className='bi bi-linkedin'></i> Follow</a>
          </button>
          <button className="btn bg-dark text-light p-3">Hire Me..</button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
