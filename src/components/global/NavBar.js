import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="logo" /> 
          </Link>
        </div>
      </div>
    </div>
  );
}
