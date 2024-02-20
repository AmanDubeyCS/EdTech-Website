import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
            alt=""
          />
        </div>

        <ul className="navbar-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Internships</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
