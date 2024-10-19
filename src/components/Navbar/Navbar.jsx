import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="logo" />
            <span>SimplEstate</span>
          </a>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
        </div>
        <div className="right">
          <a href="">Sign In</a>
          <a href="" className="register">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
