import plpCert from "../assets/Screenshot (2).png";
import altCert from "../assets/Screenshot (4).png";
import Marquee from "react-fast-marquee";
import bankysub from '../assets/Screenshot 2025-06-28 131225.png';
import react from '../assets/react-vite.png';
import github from '../assets/github.png';
import ts from '../assets/ts-js.png';
import html from '../assets/html-css.png';
import js from '../assets/js.png';
import node_expres from '../assets/node.png';
import blog from '../assets/blog.png';
import vobb from '../assets/vobb.png';
import postman from '../assets/postman.jfif';
import boostalk from '../assets/social.png';
import swagger from '../assets/swagger.png';
import mysql from '../assets/mysql.jfif';
import convertion from '../assets/convertion.png';
import next from '../assets/nextjs.jpeg';
import cutting_edge from '../assets/cutting-edge.png';
import { motion } from "framer-motion";

// award section component
const Awards = () => {
  return (
    <>
      <div className="bg-primary text-light text-center">
        <Marquee>
          {" "}
          <span className="aboutW span">AWARDS</span>
          <span className="aboutB span">AWARDS</span>
          <span className="aboutW span">AWARDS</span>
          <span className="aboutB span">AWARDS</span>
          <span className="aboutW span">AWARDS</span>
          <span className="aboutB span">AWARDS</span>
          <span className="aboutW span">AWARDS</span>
          <span className="aboutB span">AWARDS</span>
          <span className="aboutW span">AWARDS</span>
          <span className="aboutB span">AWARDS</span>
        </Marquee>

      </div>

      <div className="full-width bg-dark text-light text-center pt-5 pb-5">
        <div className="row pt-3 pb-3">
          <div className="col-sm-4">
            <h5>Site Of The Day</h5>
          </div>
          <div className="col-sm-4">
            <h5>CSS & Animation</h5>
          </div>
          <div className="col-sm-4">
            <h5>2024</h5>
          </div>
        </div>

        <div className="row pb-3 pt-3">
          <div className="col-sm-4">
            <h5>Best Business Model</h5>
          </div>
          <div className="col-sm-4">
            <h5>New Strategy</h5>
          </div>
          <dive className="col-sm-4">
            <h5>2023</h5>
          </dive>
        </div>

        <div className="row pb-3 pt-3">
          <div className="col-sm-4">
            <h5>Motion Graphics</h5>
          </div>
          <div className="col-sm-4">
            <h5>3D & Visual Effects</h5>
          </div>
          <div className="col-sm-4">
            <h5>2022</h5>
          </div>
        </div>

        <div className="row pb-3 pt-3">
          <div className="col-sm-4">
            <h5>Video Design</h5>
          </div>
          <div className="col-sm-4">
            <h5>CSS & Animation</h5>
          </div>
          <div className="col-sm-4">
            <h5>2021</h5>
          </div>
        </div>
      </div>

      <div className="full-width bg-black">
        <div className="text-white pb-5 pt-5 ps-3 pe-3">
          <div className="fw-bold ps-5 pe-5 pt-5 pb-1 text-white text-center education">
            <motion.i
              className="bi bi-mortarboard me-3"
              style={{ fontSize: "40px", fontWeight: "bold" }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.i>
            <motion.h2
            initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >My Education</motion.h2>
          </div>

          <div className="mt-4 bg-dark grid-edu-container me-3 ms-3">
            <div>
              <p>2017 - 2023</p>
            </div>
            <div>
              <h5 className="bold">Bachelor degree</h5>
              <div className="d-flex">
                <img className="awardPlacement" src="https://th.bing.com/th/id/OIP.xZmecZfOx49ESLKn8F0YjwHaEo?rs=1&pid=ImgDetMain" />
                <p>FUOYE</p>
              </div>
            </div>
          </div>


          {/* license and certification */}
          <div id="edu" className="fw-bold pt-5 text-white text-center education">
            <motion.i
              className="bi bi-mortarboard me-3"
              style={{ fontSize: "40px", fontWeight: "bold" }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.i>{" "}
            <motion.h2
            initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >Licenses and certification</motion.h2>
          </div>

          <div className="grid-cert mt-4">

            <div className="shadow-sm ms-2 me-2 mb-5 cert-bg bg-dark">
              <h5 className="bold">FullStack development</h5>
              <div className="d-flex">
                <img className="awardPlacement" src="https://th.bing.com/th/id/OIP.KyxsqHbhtJXJD5hgs7lnKwHaEK?rs=1&pid=ImgDetMain" />
                <p>Power Learn Project</p>
              </div>
              <p className="text-primary">Issued Jan 2024</p>
              <img className="certificate" src={plpCert} alt="certificate" />
            </div>



            <div className="shadow-sm ms-2 me-2 mb-5 cert-bg bg-dark">
              <h5 className="bold">Front-End Web Development</h5>
              <div className="d-flex">
                <img className="awardPlacement" src="https://th.bing.com/th/id/OIP.SL4wHW9HIiv2ObA6CqdV4gAAAA?rs=1&pid=ImgDetMain" />
                <p>DevCareer</p>
              </div>
              <p className="text-primary">Issued Jan 2024</p>
              <img className="certificate" src={altCert} alt="certificate" />
            </div>

          </div>

          <motion.div
          initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={{duration: 1, ease: "easeIn"}}
          id="edu" className="ps-5 pe-5 pt-5 text-white cert-line">
            <span></span>
            <h4>Certification</h4>
          </motion.div>
          <div className="shadow-sm me-2 ms-2 mb-5 p-2">
            <div className="row mt-4 border-bottom">
              <div className="col-sm-6 pt-2">
                <p>2024 - 2025</p>
              </div>
              <div className="col-sm-6">
                <h5 className="bold">Backend Courses</h5>
                <div className="d-flex">
                  <img className="awardPlacement" src="https://th.bing.com/th/id/OIP.KyxsqHbhtJXJD5hgs7lnKwHaEK?rs=1&pid=ImgDetMain" />
                  <p>Power Learn Project</p>
                </div>
              </div>
            </div>

            <div className="row mt-4 border-bottom">
              <div className="col-sm-6 pt-2">
                <p>2023 - 2024</p>
              </div>
              <div className="col-sm-6">
                <h5 className="bold">Database courses</h5>
                <div className="d-flex">
                  <img className="awardPlacement" src="https://th.bing.com/th/id/OIP.KyxsqHbhtJXJD5hgs7lnKwHaEK?rs=1&pid=ImgDetMain" />
                  <p>Power learn project</p>
                </div>
              </div>
            </div>

            <div className="row mt-4 border-bottom">
              <div className="col-sm-6 pt-2">
                <p>2022 - 2023</p>
              </div>
              <div className="col-sm-6">
                <h5 className="bold">Frontend courses</h5>
                <div className="d-flex">
                  <img className="awardPlacement" src="https://th.bing.com/th/id/OIP.SL4wHW9HIiv2ObA6CqdV4gAAAA?rs=1&pid=ImgDetMain" />
                  <p>DevCareer</p>
                </div>
              </div>
            </div>

            <div className="row mt-4 border-bottom">
              <div className="col-sm-6">
                <p>2020 - 2021</p>
              </div>
              <div className="col-sm-6">
                <h5 className="bold">WordPress course</h5>
                <div className="d-flex">
                  <img className="awardPlacement" src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png" />
                  <p>Udemy</p>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-6">
                <p>2019 - 2022</p>
              </div>
              <div className="col-sm-6">
                <h5 className="bold">Programming courses</h5>
                <div className="d-flex">
                  <img className="awardPlacement" src="https://th.bing.com/th/id/R.47b77c342731043d534498d1be41c67f?rik=h%2f5mngi7y0nvng&pid=ImgRaw&r=0" />
                  <p>W3schools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-width bg-dark project pt-5">
        <h2 id="experience" className="project-span">
          <span></span>
          <h2>Portfolio</h2>
          <span></span>
        </h2>
        <h4 className="text-white text-center">Look At My Potfolio And Give Me Your Feedback.</h4>

        <div className="experience pb-5">
          <div className="grid-port pb-3">
            <div>
              <div className="card mb-3 mt-2">
                <div className="card-header text-white bg-primary">
                  <h3 className="bold">BankyConnect</h3>
                  <h5 className="bold">FullStack Project</h5>
                </div>
                <div className="card-body">
                  <img src={bankysub} alt="Bankysub" className="prog-img" />
                </div>
                <div className="card-footer bg-primary">
                  <img src={react} alt="react" className="pro-foot-img me-2" />
                  <img src={ts} alt="ts-js" className="pro-foot-img me-2" />
                  <img src={node_expres} alt="node js" className="pro-foot-img me-2" />
                  <img src={github} alt="github" className="pro-foot-img me-2" />
                  <a href="https://bankysub.vercel.app/" className="card-link text-white float-end">
                    Live Preview<i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="card mb-3 mt-2">
                <div className="card-header text-white bg-primary">
                  <h3 className="bold">BankyBlog </h3>
                  <h5 className="bold">FullStack Project</h5>
                </div>
                <div className="card-body">
                  <img src={blog} alt="Banky Blog" className="prog-img" />
                </div>
                <div className="card-footer bg-primary">
                  <img src={react} alt="react" className="pro-foot-img me-2" />
                  <img src={ts} alt="ts-js" className="pro-foot-img me-2" />
                  <img src={node_expres} alt="node js" className="pro-foot-img me-2" />
                  <img src={github} alt="github" className="pro-foot-img me-2" />
                  <a
                    href="https://bankkyblog.vercel.app/"
                    className="card-link text-white float-end"
                  >
                    Live Preview <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card mt-2">
                <div className="card-header text-white bg-primary">
                  <h3 className="bold">Car Selling Api </h3>
                  <h5 className="bold">Backend Project</h5>
                </div>
                <div className="card-body">
                  <img src={vobb} alt="car Selling API" className="prog-img" />
                </div>
                <div className="card-footer bg-primary">
                  <img src={node_expres} alt="Node.js" className="pro-foot-img me-2" />
                  <img src={ts} alt="ts" className="pro-foot-img me-2" />
                  <img src={postman} alt="node js" className="pro-foot-img me-2" />
                  <img src={github} alt="github" className="pro-foot-img me-2" />
                  <a href="https://documenter.getpostman.com/view/45496448/2sB2qgedpB" className="card-link text-white float-end">
                    Preview Docs <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card mt-2">
                <div className="card-header text-white bg-primary">
                  <h3 className="bold">Social Media App </h3>
                  <h5 className="bold">Backend Project</h5>
                </div>
                <div className="card-body">
                  <img src={boostalk} alt="Social Media" className="prog-img" />
                </div>
                <div className="card-footer bg-primary">
                  <img src={node_expres} alt="Node.js" className="pro-foot-img me-2" />
                  <img src={ts} alt="ts" className="pro-foot-img me-2" />
                  <img src={mysql} alt="Mysql" className="pro-foot-img me-2" />
                  <img src={swagger} alt="Swagger" className="pro-foot-img me-2" />
                  <img src={github} alt="github" className="pro-foot-img me-2" />
                  <a className="card-link text-white float-end">
                    N.D.A <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card mt-2">
                <div className="card-header text-white bg-primary">
                  <h3 className="bold">Currency Converter </h3>
                  <h5 className="bold">FullStack Project</h5>
                </div>
                <div className="card-body">
                  <img src={convertion} alt="Exchange Rate" className="prog-img" />
                </div>
                <div className="card-footer bg-primary">
                  <img src={next} alt="Next.js" className="pro-foot-img me-2" />
                  <img src={ts} alt="ts" className="pro-foot-img me-2" />
                  <img src={mysql} alt="Mysql" className="pro-foot-img me-2" />
                  <img src={github} alt="github" className="pro-foot-img me-2" />
                  <a href="https://convertion-app.vercel.app/" className="card-link text-white float-end">
                    Live Preview <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card mt-2">
                <div className="card-header text-white bg-primary">
                  <h3 className="bold">Pioneering Agriculture </h3>
                  <h5 className="bold">FullStack Project</h5>
                </div>
                <div className="card-body">
                  <img src={cutting_edge} alt="Pioneering Agriculture" className="prog-img" />
                </div>
                <div className="card-footer bg-primary">
                  <img src={html} alt="HTML & CSS" className="pro-foot-img me-2" />
                  <img src={js} alt="js" className="pro-foot-img me-2" />
                  <img src={mysql} alt="Mysql" className="pro-foot-img me-2" />
                  <img src={github} alt="github" className="pro-foot-img me-2" />
                  <a href="https://cutting-edge-tech.vercel.app/" className="card-link text-white float-end">
                    Live Preview <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <motion.div
            initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: false}} transition={{duration: 1, ease: "easeIn"}}
            className="mt-5 mb-5">
              <span className="more-proj d-flex"></span>
              <span className="more-proj1 d-flex"></span>
              <p className="need-more-p">Need More?</p>
              <div className="more-git">
                <a href="https://github.com/Azeezbank" target="_blank">
                <img src={github} alt="github" />
                <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
