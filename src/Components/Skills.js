import React from "react";

// skills section component
const Skills = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light text-center pt-5">
        <h2 className="text-center p-5 text-light m-0 text-uppercase">
          I craft wonderful <br />
          digital experiences for brands
        </h2>

        <div className="row p-2 ">
          <div className="col-sm-4">
            <h2 className="pt-3 pb-2 text-uppercase">Soft Skills</h2>
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
            <h2 className="pt-3 pb-2 text-uppercase">Technical Skills</h2>

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
                    <p>HTML5, CSS, JavaScript, React, Bootstrap</p>
                  </div>
                </div>
                <h1>95%</h1>
                <div className="spinner-border text-primary"></div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                    style={{ width: "95%" }}
                  >
                    95%
                  </div>
                </div>

                <p>User interface</p>
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
                <div className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                    style={{ width: "90%" }}
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
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      style={{ width: "85%" }}
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
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      style={{ width: "85%" }}
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
