import React from 'react'

const ContactUs = () => {
  return (
    <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div-text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                (123) 456-7869
              </a>
              <a href="/">
               carrental@carmail.com
              </a>
              <a href="/">
                Belgrade, Serbia
              </a>
            </div>
            <div className="contact-div-form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner-overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactUs
