import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man1 from '../assets/man1-96b747a3.png';
import man2 from '../assets/man2-cc1f3830.png';
import man3 from '../assets/man3-3627602a.png';

// testimonial section
const Testimonial = () => {

  const TextCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000, // Show each slide for 5 seconds
      speed: 1500,         // 1.5 seconds to slide in/out
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease-in-out" // Smooth gentle transition
    };

    return (
      <Slider {...settings}>
        <div>
          <div className="d-flex">
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3><i className="bi bi-star star-color"></i></h3>
          </div>

          <h3 className="text-danger">Idris Abiodun</h3>
          <h6 className="text-light">Bussiness Owner</h6>

          <p className="cauro-text text-white">Working with Azeez was a game-changer. His attention to detail and ability to turn ideas into functional, user-friendly web apps is outstanding. Highly recommended!</p>
        </div>
        <div>
          <div className="d-flex">
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3><i className="bi bi-star star-color"></i></h3>
          </div>

          <h3 className="text-danger">Ridwan Abiola</h3>
          <h6 className="text-muted">Bussiness Owner</h6>

          <p className="cauro-text text-white">His full-stack expertise is top-notch. From frontend design to backend logic and database integration — everything was seamless and well-executed</p>
        </div>
        <div>
          <div className="d-flex">
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3 className="me-2"><i className="bi bi-star-fill star-color"></i></h3>
            <h3><i className="bi bi-star star-color"></i></h3>
          </div>

          <h3 className="text-danger">Ayomide Quadri</h3>
          <h6 className="text-muted">Bussiness Owner</h6>

          <p className="cauro-text text-white">I was impressed by his creativity and professionalism. He not only built the features we asked for but also suggested better alternatives that improved user experience</p>
        </div>
      </Slider>
    );
  };

  return (
    <>
      <div className="full-width bg-danger text-light text-center">
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
          </h2>
        </marquee>
      </div>

      <div className="full-width bg-black p-5">

        <div>
        <div className="testimonial">
          <span></span>
          <h5>TESTIMONIAL</h5>
          <span ></span>
        </div>

        <h6 className="text-white text-center pb-4">What Peoples Says About Me</h6>
        </div>

        <div className="full-width bg-dark carow p-3 pb-5">
          <div>

            <img src={man1} alt="man1" className="mb-5 cam1" /> <br />
            <img src={man3} alt="man3" className=" cam3" />

          </div>
          <div>
            <TextCarousel />
          </div>
          <div>
            <img src={man2} alt="man2" className="cam2" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Testimonial;
