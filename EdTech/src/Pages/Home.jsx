import React from 'react'
import Hero from '../Components/Hero/Hero'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import AboutUs from '../Components/AboutUs/AboutUs'
import Services from '../Components/Services/Services'
import Testimonials from '../Components/Testimonials/Testimonials'
import ContactUs from '../Components/Contact/ContactUs'

const Home = () => {
  return (
    <>
        <Hero />
        <WhyChooseUs />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
    </>
  )
}

export default Home
