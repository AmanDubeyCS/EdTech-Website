import React from 'react'
import Services from '../Components/Services/Services'
import HeroPage from '../Components/HeroPage/HeroPage'

const ServicesPage = () => {
  return (
    <section className="services-page">
        <HeroPage name="Services"/>
        <Services />
    </section>
  )
}

export default ServicesPage
