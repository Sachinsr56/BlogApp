import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a className="link" href="/posts?cat=Life">
              Life
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" href="/posts?cat=Music">
              Music
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" href="/posts?cat=Sport">
              Sport
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" href="/posts?cat=Style">
              Style
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" href="/posts?cat=Tech">
              Tech
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" href="/posts?cat=Cinema">
              Cinema
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar