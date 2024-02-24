import React from "react";
import "./Hero.css";
import Heroimg from "../Assets/HeroPrimary.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content-text">
            <h4>
              Welcome To <span>Vexacore</span>!
            </h4>
            <h1>
              Empowering Your <span>Digital Journey</span> with Innovative{" "}
              <span>IT Solutions</span>
            </h1>
            <p>
              We offer a diverse range of premier IT services designed to propel
              your business to new heights of success.
            </p>
          </div>
          <Link to="/services">
            <div className="hero-content-btn btn">SERVICES</div>
          </Link>
        </div>
        <div className="hero-image">
          <img src={Heroimg} alt="Primary-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
