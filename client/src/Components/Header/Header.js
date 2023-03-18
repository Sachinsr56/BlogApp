import React from "react";
import "./Header.css";

function Header() {
  const user = true;
  return (
    <div className="Header">
      <div className="header-left">
        <a
          className="btn text-black btn-floating m-1"
          // style={{ "backgroundColor": "#ac2bac" }}
          href="https://www.instagram.com/ksachin___/"
          role="button"
        >
          <i className="fab fa-instagram "></i>
        </a>

        <a
          className="btn text-black btn-floating m-1"
          // style={{ "backgroundColor": "#0082ca" }}
          href="https://www.linkedin.com/in/sachinsr56/"
          role="button"
        >
          <i className="fab fa-linkedin-in "></i>
        </a>

        <a
          className="btn text-black btn-floating m-1"
          // style={{ "backgroundColor": "#333333" }}
          href="https://github.com/Sachinsr56"
          role="button"
        >
          <i className="fab fa-github "></i>
        </a>
        <a
          className="btn text-black btn-floating m-1"
          // style={{ "backgroundColor": "#3b5998" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f "></i>
        </a>
      </div>
      <div className="header-center">
        <div className="header-list">
          <li className="header-listItem">
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li className="header-listItem">About</li>
          <li className="header-listItem">Contact</li>
          <li className="header-listItem">
            <a className="link" href="/create">
              Blog
            </a>
          </li>
        </div>
      </div>
      <div className="header-right">
        {user ? (
          <a href="/settings">
          <img
            src="https://images.pexels.com/photos/1274113/pexels-photo-1274113.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="headerImg"
            alt="njasdkv"
          ></img></a>
        ) : (
          <ul className="headerList">
            <li className="headerListItem">
              <a href="/login" className="link">
                Login
              </a>
            </li>
            <li href="/register" className="lnk">
              Signup
            </li>
          </ul>
        )}
        <i className="headerSearchIcon fa-2x fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Header;
