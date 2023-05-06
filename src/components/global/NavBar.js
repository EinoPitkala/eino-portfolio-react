import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Button from "../../modules/Button";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="logo" /> 
          </Link>
        </div>
        <div className="navbar-middle">
          <a className="nav-link" href="/">
            Link
          </a>
          <a className="nav-link" href="/">
            Link
          </a>
          <a className="nav-link" href="/">
            Link
          </a>
        </div>
        <div className="navbar-right">
          <Button href="/" content="Button" />
        </div>
      </div>
    </div>
  );
}
