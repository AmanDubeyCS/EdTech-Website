import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-div">
          <div className="contact-div-text">
            <h1>Need additional information?</h1>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="tel:+91 123-456-789">(123) 456-7869</a>
            <a href="mailto: info@vexacore.com">info@vexacore.com</a>
            <a href="https://maps.app.goo.gl/9VPjkRStmdZhLo1o7" target="_blank">Bengaluru, India</a>
          </div>
          <div className="contact-div-form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Joe Smith"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
