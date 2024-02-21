import React from 'react'
import "./WhyChooseUs.css"
import timeicon from "../Assets/time.svg";
import accessicon from "../Assets/icon3.svg";
import stackicon from "../Assets/icon2.svg";
import Achiveicon from "../Assets/icon1.svg";
import mainicon from "../Assets/icon0.svg";

const WhyChooseUs = () => {
  return (
    <section>
        <div className="why-choose-us">
        <div className="container">
          <div className="main">
          <div className="sec-1">
            <div className="why-choose why-choose-program">
              <div className="text">
                <h1>Why you Choose <br />Our Program</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta consequatur possimus
                </p>
                <div className="btn">Learn More</div>
              </div>
              <div className="logo-img main-logo">
                <img src={mainicon} alt="" />
              </div>
            </div>
            <div className="why-choose time">
              <div className="logo-img time-logo">
                <img src={timeicon} alt="" />
              </div>
              <h4>Flexible Time</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                odit corporis repudiandae
              </p>
            </div>
          </div>
          <div className="sec-2">
            <div className="why-choose access">
              <div className="logo-img access-logo">
                <img src={accessicon} alt="" />
              </div>
              <h4>Access Any Where</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                odit corporis repudiandae
              </p>
            </div>
            <div className="why-choose organized">
              <div className="logo-img organized-logo">
                <img src={stackicon} alt="" />
              </div>
              <h4>Organized Program</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                odit corporis repudiandae
              </p>
            </div>
            <div className="why-choose certificate">
              <div className="logo-img certificate-logo">
                <img src={Achiveicon} alt="" />
              </div>
              <h4>Cretificate</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                odit corporis repudiandae
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
