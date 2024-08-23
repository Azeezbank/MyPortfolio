import React from "react";

// testimonial section
const Testimonial = () => {
  return (
    <>
      <div className="container-fluid bg-danger text-light text-center">
        <marquee>
          {" "}
          <h2 className="scrowI">
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
            <span className="aboutW span">TESTIMONIAL</span>
            <span className="aboutB span">TESTIMONIAL</span>
          </h2>
        </marquee>
      </div>

      <div className="container bg-light pt-5 carow">
        <div
          id="demo"
          className="carousel slide text-center"
          data-bs-ride="carousel"
        >
          {/* indicator */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* the slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbLYKsZlulyn5RtEUgDvxnt-sbu8ek55tzQ&s"
                alt="Los"
                className="img2"
                // style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <img className="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&s"
                />
                <h4 className="person">IDRIS ABIODUN</h4>
                <h4 className="star">★★★★★</h4>
                <p className="comment d-block">
                  Working with Bankky on web development was an absolute
                  pleasure
                </p>
                <blockquote>—Company General Manager</blockquote>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbLYKsZlulyn5RtEUgDvxnt-sbu8ek55tzQ&s"
                className="img2 d-block"
                // style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <img className="img"
                  src="https://arabiclanguagecentre.com/wp-content/uploads/2022/10/Testimonial-Img-04-279x300-1.png"
                />
                <h3 className="person" style={{ fontWeight: "border" }}>QUADRI AYOMIDE</h3>
                <h4 className="star">★★★★☆</h4>
                <p className="comment">
                  Bankole's full-stack skills transformed our project.
                </p>
                <blockquote>— Web manager</blockquote>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbLYKsZlulyn5RtEUgDvxnt-sbu8ek55tzQ&s"
                alt="Los"
                className="img2  d-block"
                // style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <img className="img"
                  src="https://hotprintdesign.com/wp-content/uploads/2019/02/testimonial-avatar-3.jpg" 
                />
                <h3 className="person text-uppercase">Jelilat Olajumonke</h3>
                <h4 className="star">★★★★☆</h4>
                <p className="comment">
                  Bankole is a brilliant full-stack developer.{" "}
                </p>
                <blockquote>— Bussiness Owner</blockquote>
              </div>
            </div>
          </div>

          {/* left and right control */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <div className="row text-center">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <button className="btn bg-dark text-light rounded mt-5 mb-5">
              Explore Our Experience
            </button>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
