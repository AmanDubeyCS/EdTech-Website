import React from "react";
import "./AboutUs.css";
import Fimage from "../Assets/About.svg";

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="container">
        <div className="aboutus-image">
          <img src={Fimage} alt="" />
        </div>
        <div className="aboutus-text">
          <h1>About Us</h1>
          <p>
            Welcome to Vexacore, where innovation meets excellence in
            IT solutions. Established with a vision to redefine the digital landscape, we are a leading provider of comprehensive IT services ranging from web development to cybersecurity. 
          </p>
          <p>At Vexacore, we believe in leveraging cutting-edge technology to empower businesses and individuals alike. With a dedicated team of experts and a commitment to delivering unparalleled results, we strive to exceed our clients' expectations in every project we undertake.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
