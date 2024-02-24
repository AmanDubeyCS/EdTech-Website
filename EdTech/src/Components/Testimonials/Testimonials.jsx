import React from "react";
import "./Testimonials.css";
import P1 from "../Assets/p1.jpg";
import P2 from "../Assets/p2.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content-title">
            <h1>Testimonials</h1>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>

          <div className="all-testimonials">
            <div className="all-testimonials-box">
              <p>
                "Choosing Vexacore for our web development needs was the best
                decision we made. Their team delivered a stunning website that
                perfectly captures our brand identity. Professional, efficient,
                and a pleasure to work with!"
              </p>
              <div className="all-testimonials-box-name">
                <div className="all-testimonials-box-name-profile">
                  <img src={P1} alt="user_img" />
                  <span>
                    <h4>Emili Johns</h4>
                    <p>Marketing Manager</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="all-testimonials-box box-2">
              <p>
                "Thanks to Vexacore, our cybersecurity concerns are a thing of
                the past. Their proactive approach and expertise in the field
                ensured our systems are now fortified against cyber threats.
                Highly recommended!"
              </p>
              <div className="all-testimonials-box-name">
                <div className="all-testimonials-box-name-profile">
                  <img src={P2} alt="use-img" />
                  <span>
                    <h4>John Dean</h4>
                    <p> IT Director</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
