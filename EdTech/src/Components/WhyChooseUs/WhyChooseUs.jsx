import React from "react";
import "./WhyChooseUs.css";
import timeicon from "../Assets/time.svg";
import accessicon from "../Assets/icon3.svg";
import stackicon from "../Assets/icon2.svg";
import Achiveicon from "../Assets/icon1.svg";
import mainicon from "../Assets/icon0.svg";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section>
      <div className="why-choose-us">
        <div className="container">
          <div className="main">
            <div className="why-choose-program why-choose">
              <div className="text">
                <h1>
                  Why you Choose <br />
                  Our Service
                </h1>
                <p>
                  Choose Vexacore for unparalleled expertise, tailored
                  solutions, and a commitment to your success.
                </p>
                <Link to="/about">
                  <div className="btn">Learn More</div>
                </Link>
              </div>
              <div className="logo-img main-logo">
                <img src={mainicon} alt="Icon" />
              </div>
            </div>
            <div className="why-choose time">
              <div className="logo-img time-logo">
                <img src={timeicon} alt="" />
              </div>
              <h4>Expertise and Experience</h4>
              <p>
                With years of experience in the IT industry, we bring a wealth
                of knowledge and expertise to every project.
              </p>
            </div>
            <div className="why-choose access">
              <div className="logo-img access-logo">
                <img src={accessicon} alt="Acess-Icon" />
              </div>
              <h4>Tailored Solutions</h4>
              <p>
                We understand that every business is unique, which is why we
                take a personalized approach to meet your specific needs.
              </p>
            </div>
            <div className="why-choose organized">
              <div className="logo-img organized-logo">
                <img src={stackicon} alt="Organized-Icon" />
              </div>
              <h4>Cutting-edge Technology</h4>
              <p>
                We stay abreast of the latest technological advancements and
                trends to offer you state-of-the-art solutions that keep you
                ahead of the curve.
              </p>
            </div>
            <div className="why-choose certificate">
              <div className="logo-img certificate-logo">
                <img src={Achiveicon} alt="Certificate-icon" />
              </div>
              <h4>Affordable Pricing</h4>
              <p>
                We believe that top-notch IT services should be accessible to
                businesses of all sizes. That's why we offer competitive and
                transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
