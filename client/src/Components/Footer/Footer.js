import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div id="Footer">
      <footer className="bg-light text-center text-white">
        <div className="container">
          <section>
            <a
              target="_blank" rel="noopener noreferrer"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/ksachin___/"
              role="button"
            >
              <i className="fab fa-instagram "></i>
            </a>

            <a
              target="_blank" rel="noopener noreferrer"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/sachinsr56/"
              role="button"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>

            <a
              target="_blank" rel="noopener noreferrer"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Sachinsr56"
              role="button"
            >
              <i className="fab fa-github "></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google "></i>
            </a>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="/">
            sachinsmr56@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
