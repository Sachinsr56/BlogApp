import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-light text-center text-white">
        <div class="container">
          <section>
            <a
              class="btn text-white btn-floating m-1"
              style={{ "background-color": "#3b5998" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn text-white btn-floating m-1"
              style={{ "background-color": "#55acee" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn text-white btn-floating m-1"
              style={{ "background-color": "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>
            <a
              class="btn text-white btn-floating m-1"
              style={{ "background-color": "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn text-white btn-floating m-1"
              style={{ "background-color": "#0082ca" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              class="btn text-white btn-floating m-1"
              style={{ "background-color": "#333333" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div
          class="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a class="text-white" href="/">
            sachinsmr56@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
