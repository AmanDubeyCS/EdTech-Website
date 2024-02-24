import React from 'react'
import ContactUs from '../Components/Contact/ContactUs'
import HeroPage from '../Components/HeroPage/HeroPage'

const ContactPage = () => {
  return (
    <section className="contact-page">
        <HeroPage name="Contact"/>
        <ContactUs />
    </section>
  )
}

export default ContactPage
