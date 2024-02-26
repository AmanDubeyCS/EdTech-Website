import React from "react";
import "./Navbar.css";
import menuIcon from "../Assets/hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo3.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <img src={menuIcon} alt="Menu-Icon" width={30} height={30} />
        </div>
        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={openNav} to="/services">
              Services
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={openNav} to="/careers">
              Careers
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* desktop */}
      <div className="navbar">
        <Link to="/">
        <div className="navbar-logo">
          <img
            src={Logo}
            alt="Logo"
          />
        </div>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="about-link" to="/about">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link className="models-link" to="/services">
              Services
            </Link>
          </li>
          <li>
            {" "}
            <Link className="testi-link" to="/careers">
              Careers
            </Link>
          </li>
          <li>
            {" "}
            <Link className="contact-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-hamb" onClick={openNav}>
          <img src={menuIcon} alt="MenuIcon" width={40} height={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
