import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import LetsTalk from "./LetsTalk";

// contact secction component
const Contact = () => {
  const [text, setText] = useState("");
  function click(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name != "" && email != "") {
      alert("Message submited successfuly \n Welcome");
    } else {
      alert("All field are required");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      alert('Message submitted thanks')
    }
  }
  return (
    <>
      <NavBar />
      <div
        id="top"
        className="container-fluid bg-secondary text-light text-center p-5"
      >
        <h1 style={{ paddingTop: "100px", fontWeight: "bold", color: "#000" }}>
          HAVE SOMETHING TO ASK ?
        </h1>
        <p style={{ color: "#000" }}>
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <span>Home</span>
          </Link>{" "}
          <span>{'>'}</span> <span>Contact</span>
        </p>
        <h5 style={{ paddingTop: "30px", color: "#000" }}>
          You're launching a <br /> business and we <br /> can help you <br />{" "}
          make it look <br /> pretty.
        </h5>
        <h3 style={{ paddingTop: "35px", color: "#000" }} className="bold">
          Frequently Asked Quetions
        </h3>

        <div className="container">
          <div id="accordion">
            <div className="card">
              <div className="card-header bg-primary bold">
                <a
                  style={{ color: "#fff", fontWeight: "bold" }}
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#one"
                >
                  What happens if the website goes down or something breaks?
                </a>
              </div>
              <div
                id="one"
                className="collapse show"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  I can set up monitoring and alerts to quickly detect any
                  issues. Additionally, I can implement a backup and recovery
                  plan to restore the website if anything goes wrong.
                </div>
              </div>
            </div>

            <div className="card mt-1">
              <div className="card-header bg-primary">
                <a
                  style={{ color: "#fff", fontWeight: "bold" }}
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#two"
                >
                  How will we manage and update content on the website?
                </a>
              </div>
              <div id="two" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                  I can integrate a content management system (CMS) that allows
                  you to easily add, edit, or remove content without needing to
                  touch the code. This makes managing the website more
                  straightforward and less dependent on technical skills.
                </div>
              </div>
            </div>

            <div className="card mt-1">
              <div className="card-header bg-primary">
                <a
                  style={{ color: "#fff", fontWeight: "bold" }}
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#three"
                >
                  How secure is website website? Can someone hack into it?
                </a>
              </div>
              <div id="three" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                  I have implemented security measures such as encryption,
                  secure authentication, and regular updates to protect the
                  website. While no system is 100% invulnerable, these measures
                  significantly reduce the risk of unauthorized access.
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-1">
            <div className="card-header bg-primary">
              <a
                style={{ color: "#fff", fontWeight: "bold" }}
                className="btn"
                data-bs-toggle="collapse"
                href="#four"
              >
                Can you make the website load faster?
              </a>
            </div>
            <div id="four" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                Yes, I can optimize the website by minimizing file sizes, using
                efficient coding practices, and leveraging caching. This will
                improve loading times and provide a better user experience.
              </div>
            </div>
          </div>
        </div>

        <div className="container text-start bg-light mt-5 p-3 rounded">
          <div className="row">
            <div className="col-sm-4 pt-4">
              <h6 className="text-muted bold">Contact</h6>
              <h6 className="text-dark bold">+2349061324918</h6>
            </div>
            <div className="col-sm-4 pt-4">
              <h6 className="text-muted bold">Email</h6>
              <h6 className="text-dark bold">bankoleazeezb98</h6>
            </div>
            <div className="col-sm-4 pt-4">
              <h6 className="text-muted bold">Address</h6>
              <h6 className="text-dark bold">
                5, Secretariat, Iragbiji, Osun State, Nigeria
              </h6>
            </div>
          </div>
        </div>
        <div className="container text-start bg-dark p-3">
          <form>
           <div className="form mt-3">
            <div className="row">
              <div className="col-sm-6">
                <input
                  id="name"
                  className="form-control bg-primary text-light mt-1"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-sm-6">
                <input
                  id="email"
                  className="form-control bg-primary text-light mt-1"
                  type="email"
                  placeholder="Your Mail"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea
                  className="form-control mt-3 mb-3 bg-primary"
                  rows={5}
                  placeholder="Your Message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <input
                  onClick={handleSubmit}
                  type="submit"
                  className="btn form-control bg-primary"
                  value="Send"
                />
              </div>
              <div className="col-8"></div>
            </div>
          </div>
          </form>
        </div>
      </div>
      <LetsTalk />
    </>
  );
};

export default Contact;
