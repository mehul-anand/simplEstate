import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(3);
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="logo" />
            <span>SimplEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/list">Listings</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div>
              <div className="user">
                <img
                  src={currentUser.avatar || "./emptyPfp.jpg"}
                  alt="user-img"
                />
                <span>{currentUser.username}</span>
                <Link className="profile" to={"/profile"}>
                  <div>
                    <span className="notification">{notification}</span>
                    <span>Profile</span>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="user">
              <a href="/login">Sign In</a>
              <a href="/register" className="register">
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
            <a href="/list">Listings</a>
            <a href="/login">Sign In</a>
            <a href="/register">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
