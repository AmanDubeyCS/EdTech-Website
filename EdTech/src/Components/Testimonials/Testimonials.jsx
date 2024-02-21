import React from 'react'
import "./Testimonials.css"
import P1 from "../Assets/p1.jpg"
import P2 from "../Assets/p2.jpg"

const Testimonials = () => {
  return (
    <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content-title">
              <h2>Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials-box">
                {/* <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span> */}
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="all-testimonials-box-name">
                  <div className="all-testimonials-box-name-profile">
                    <img src={P1} alt="user_img" />
                    <span>
                      <h4>Parry Hotter</h4>
                      <p>Belgrade</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials-box box-2">
                {/* <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span> */}
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="all-testimonials-box-name">
                  <div className="all-testimonials-box-name-profile">
                    <img src={P2} alt="use-img" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Novi Sad</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
