import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="section bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center text-lg-start wow fadeInUp mx-auto d-flex justify-content-center align-items-center">
            <div>
              <img
                src="mylogo.svg"
                width="75px"
                height="75px"
                alt="Mohamed Hussein logo"
                className="mx-2 img-fluid"
              />
            </div>
            <p className="mb-2 mb-lg-0">
              Copyright © {new Date().getFullYear()}{" "}
              <a className="fw-600" href="https://midohussei1993.github.io/portfolio/">
                Mohamed Hussein
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
