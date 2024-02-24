import React from 'react'
import HeroPage from '../Components/HeroPage/HeroPage'
import Career from '../Components/Internships/Career'

const Careers = () => {
  return (
    <section className="careers-page">
        <HeroPage name="career"/>
        <Career />
    </section>
  )
}

export default Careers
