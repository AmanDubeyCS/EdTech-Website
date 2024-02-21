import React from 'react'
import "./AboutUs.css"
import Fimage from "../Assets/About.svg"

const AboutUs = () => {
  return (
    <section className='aboutus-section'>
        <div className="container">
            <div className="aboutus-image">
                <img src={Fimage} alt=""/>
            </div>
            <div className="aboutus-text">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in est eligendi dolore a aspernatur! Eveniet velit perferendis provident quos delectus omnis ipsum amet quis, nesciunt possimus expedita. A, necessitatibus.</p>
            </div>
        </div>
      
    </section>
  )
}

export default AboutUs
