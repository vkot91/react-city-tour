import React from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
export default function index() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Tours</a>
        </li>
      </ul>
    </nav>
  );
}
