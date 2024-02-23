import Navbar from "./Components/NavBar/Navbar"
import Hero from "./Components/Hero/Hero"
import AboutUs from "./Components/AboutUs/AboutUs"
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs"
import Services from "./Components/Services/Services"
import Testimonials from "./Components/Testimonials/Testimonials"
import ContactUs from "./Components/Contact/ContactUs"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      {/* <Footer /> */}
    </>
  )
}

export default App
