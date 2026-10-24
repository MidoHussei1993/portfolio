import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { scrollDuration } from "../../../config/commonConfig";

const FullScreenDefaultIntro = () => {
  return (
    <section
      id="home"
      className="bg-primary d-flex fullscreen position-relative py-5"
    >
      <div className="container my-auto py-4">
        <div className="row">
          <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">
            <h1 className="text-12 fw-300 mb-0 text-uppercase">
              Hi, I'm Mohamed Hussein
              <span className="visually-hidden">
                {" "}
                – Senior Front-End &amp; Software Developer
              </span>
            </h1>
            <div className="text-21 fw-600 text-uppercase mb-0 ms-n1">
              <Typewriter
                options={{
                  strings: ["Front-End Developer", "Software Developer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-5">
              Senior Front-End &amp; Software Developer based in Egypt.
            </p>
            <Link
              className="btn btn-dark rounded-0 smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="portfolio"
            >
              View My Works
            </Link>
            <Link
              className="btn btn-link text-dark smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="contact"
            >
              Contact Me
              <span className="text-4 ms-2">
                <i className="far fa-arrow-alt-circle-down" />
              </span>
            </Link>
          </div>
          <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
            <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/profileImg.jpg"
                title="Mohamed Hussein"
                alt="Mohamed Hussein – Senior Front-End Developer"
                width="593"
                height="596"
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        className="scroll-down-arrow text-dark smooth-scroll"
        smooth="easeInOutQuint"
        duration={scrollDuration}
        style={{ cursor: "pointer" }}
        to="about"
      >
        <span className="animated">
          <i className="fas fa-arrow-down" />
        </span>
      </Link>
    </section>
  );
};

export default FullScreenDefaultIntro;
