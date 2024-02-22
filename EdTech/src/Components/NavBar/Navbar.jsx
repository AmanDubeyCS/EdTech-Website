import React  from "react";
import "./Navbar.css";
import menuIcon from "../Assets/hamburger.svg"
import { useState } from "react";

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
          <img src={menuIcon} alt="" width={30} height={30}/>
        </div>
        <ul className="mobile-navbar-links">
          <li onClick={openNav}><a href="">Home</a></li>
          <li onClick={openNav}><a href="">About Us</a></li>
          <li onClick={openNav}><a href="">Services</a></li>
          <li onClick={openNav}><a href="">Internships</a></li>
          <li onClick={openNav}><a href="">Contact</a></li>
        </ul>
      </div>

      {/* desktop */}
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
        <div className="mobile-hamb" onClick={openNav}>
        <img src={menuIcon} alt="" width={40} height={40}/>   
      </div>
      </div>

      
    </nav>

    
  );
};

export default Navbar;
