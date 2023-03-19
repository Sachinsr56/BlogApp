import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import "./Header.css";

function Header() {
  const { user, dispatch } = useContext(Context);
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:5000/images/";
  return (
    <div className="Header">
      <div className="header-left">
        <a
          className="btn text-black btn-floating m-1"
          href="https://www.instagram.com/ksachin___/"
          role="button"
        >
          <i className="fab fa-instagram "></i>
        </a>

        <a
          className="btn text-black btn-floating m-1"
          href="https://www.linkedin.com/in/sachinsr56/"
        >
          <i className="fab fa-linkedin-in "></i>
        </a>

        <a
          className="btn text-black btn-floating m-1"
          href="https://github.com/Sachinsr56"
          role="button"
        >
          <i className="fab fa-github "></i>
        </a>
        <a className="btn text-black btn-floating m-1" href="#!" role="button">
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
              Create
            </a>
          </li>
          <li className="header-listItem" onClick={handleLogOut}>
            {user && "LOGOUT"}
          </li>
        </div>
      </div>
      <div className="header-right">
        {user ? (
          <a href="/settings">
            <img
              src={PF + user.profilePic}
              className="headerImg"
              alt="Profile"
            ></img>
          </a>
        ) : (
          <ul className="header-list">
            <li className="header-listItem">
              <a href="/login" className="link">
                Login
              </a>
            </li>
            <li className="header-listItem">
              <a href="/register" className="link">
                Signup
              </a>
            </li>
          </ul>
        )}
        <i className="headerSearchIcon fa-2x fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Header;
