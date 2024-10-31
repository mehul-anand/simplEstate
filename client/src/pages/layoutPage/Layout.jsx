import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss"
import Navbar from "../../components/Navbar/Navbar";

function Layout() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
