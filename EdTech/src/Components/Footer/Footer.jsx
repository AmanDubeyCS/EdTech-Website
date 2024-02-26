import React from "react";
import "./Footer.css";
import Logo from "../Assets/logo3.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <ul className="footer-contaent-1">
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              We offer a diverse range of premier IT services designed to propel
              your business to new heights of success.
            </li>
            <li>
              <a href="tel:123456789">(123) -456-789</a>
            </li>
            <li>
              <a
                href="mailto: 
                info@vexacore.com"
              >
                info@vexacore.com
              </a>
            </li>
          </ul>

          <ul className="footer-content-2">
            <li>IMPORTANT LINKS</li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Internships</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

          <ul className="footer-content-2">
            <li>WORKING HOURS</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 5:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
