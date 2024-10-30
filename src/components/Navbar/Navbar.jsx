import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [notification,setNotification] = useState(3)
  const user = true;
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
          {user ? (
            <div>
            <div className="user">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user-img" />
              <span>User</span>
              <Link className="profile" to={"/profile"}>
              <div>
                <span className="notification">{notification}</span>
                <span>Profile</span>
                </div></Link>
            </div>
            </div>
          ) : (
            <div>
              <a href="">Sign In</a>
              <a href="" className="register">
                Sign Up
              </a>
            </div>
          )}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="">Sign In</a>
            <a href="">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
