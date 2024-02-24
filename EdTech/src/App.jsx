import Navbar from "./Components/NavBar/Navbar"
import Footer from "./Components/Footer/Footer"
import AboutUsPage from "./Pages/AboutUsPage"
import ServicesPage from "./Pages/ServicesPage"
import ContactPage from "./Pages/ContactPage"
import Careers from "./Pages/Careers"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
