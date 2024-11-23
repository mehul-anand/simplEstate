import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../contexts/AuthContext";

function Layout() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
    {/* <div className="navbar">
      <Navbar />
    </div> */}
    <div className="content">
      <Outlet />
    </div>
  </div>
  );
}

export { Layout, RequireAuth };
