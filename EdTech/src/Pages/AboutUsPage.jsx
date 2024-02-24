import React from 'react'
import HeroPage from '../Components/HeroPage/HeroPage'
import AboutUs from '../Components/AboutUs/AboutUs'

const AboutUsPage = () => {
  return (
    <section className="about-page">
        <HeroPage name="About"/>
        <AboutUs />
    </section>
  )
}

export default AboutUsPage
