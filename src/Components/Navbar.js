import React from "react";
import Navlogo from "../SVG/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={Navlogo} alt="/" />
      </div>
      <ul className="nav_link">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
      </ul>
      <button className="nav_button">Request Invite</button>
    </div>
  );
}

export default Navbar;
