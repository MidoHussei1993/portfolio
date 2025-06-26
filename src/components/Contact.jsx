import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Velustro } from "uvcanvas";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_i0hq7no",
        "template_5lx7x7m",
        form.current,
        "Cs03__wGMi-Y0X7r8"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section id="contact" className="section bg-primary">
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <Velustro />
      </div>
      <div className="contct-us-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
              <h2 className="text-10 fw-600 mb-5">Let's get in touch</h2>
              <p className="text-5 mb-5">
                I enjoy discussing new projects and design challenges. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </p>
              <h3 className="text-5 fw-600">Living In:</h3>
              <address className="text-4">10TH of Ramadan city, Egypt.</address>
              <h3 className="text-5 fw-600">Call:</h3>
              <p className="text-4">
                <a
                  className="text-4 text-dark header-whatsapp"
                  href="https://web.whatsapp.com/send?phone=201062672600&text&app_absent=0"
                >
                  <span className="text-4 me-2">
                    <i className="fab fa-whatsapp h3" />
                  </span>
                  <span>(+20) 1062672600</span>
                </a>
              </p>
              <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
                <li className="social-icons-twitter">
                  <Tooltip text="Twitter" placement="top">
                    <a
                      href="https://twitter.com/MElminom"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-facebook">
                  <Tooltip text="Facebook" placement="top">
                    <a
                      href="https://www.facebook.com/mhamed.abdelmonem/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </Tooltip>
                </li>
                {/* upwork */}
                <li className="social-icons-upwork">
                  <Tooltip text="Upwork" placement="top">
                    <a
                      href="https://www.upwork.com/freelancers/~01d6b60cdaa987a467"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33px"
                        height="33px"
                        viewBox="0 0 32 32"
                      >
                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path>
                        <script xmlns=""></script>
                      </svg>
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-instagram">
                  <Tooltip text="Instagram" placement="top">
                    <a
                      href="https://www.instagram.com/mhamedabdelmonem/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-github">
                  <Tooltip text="Github" placement="top">
                    <a
                      href="https://github.com/MidoHussei1993"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-linkedin">
                  <Tooltip text="Linkedin" placement="top">
                    <a
                      href="https://www.linkedin.com/in/mohamed-hussein-8b0b2b12b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-whatsapp">
                  <Tooltip text="whatsapp" placement="top">
                    <a
                      href="https://web.whatsapp.com/send?phone=201062672600&text&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp" />
                    </a>
                  </Tooltip>
                </li>
                {/* upwork link */}
                <li className="social-icons-upwork">
                  <Tooltip text="Upwork" placement="top">
                    <a
                      href="https://www.upwork.com/freelancers/~01d6b60cdaa987a467"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33px"
                        height="33px"
                        viewBox="0 0 32 32"
                      >
                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path>
                        <script xmlns=""></script>
                      </svg>
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
                Estimate your Project?
              </h2>
              {/* Contact Form */}
              <form
                id="contact-form"
                className="form-border"
                method="post"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label" htmlFor="name">
                      What is Your Name:
                    </label>
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      className="form-control py-1"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      Your Email Address:
                    </label>
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      className="form-control py-1"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="form-message">
                      How can I Help you?:
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      className="form-control py-1"
                      rows={4}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 text-center text-lg-start">
                    <button
                      id="submit-btn"
                      className="btn btn-dark rounded-0"
                      type="submit"
                    >
                      {sendingMail ? (
                        <>
                          <span
                            role="status"
                            aria-hidden="true"
                            className="spinner-border spinner-border-sm align-self-center me-2"
                          ></span>
                          Sending......
                        </>
                      ) : (
                        <>
                          Send{" "}
                          <span className="ms-3">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
              {/* Contact Form end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
