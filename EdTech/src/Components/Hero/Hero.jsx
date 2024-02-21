import React from "react";
import "./Hero.css";
import Heroimg from "../Assets/HeroPrimary.png";


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
              Empowering Students Through <span>Education</span> and{" "}
              <span>Experience</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint
              deleniti, sit recusandae incidunt voluptatibus voluptate fugit
              possimus
            </p>
          </div>
          <div className="hero-content-btn btn">
            INTERNSHIPS
          </div>
        </div>
        <div className="hero-image">
          <img src={Heroimg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
