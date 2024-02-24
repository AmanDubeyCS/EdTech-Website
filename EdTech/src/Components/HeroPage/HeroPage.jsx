import React from 'react'
import "./HeroPage.css"
import { Link } from 'react-router-dom'

const HeroPage = ({name}) => {
  return (
    <section className="hero-pages">
        <div className="hero-pages-verlay"></div>
        <div className="container">
          <div className="hero-page-text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
  )
}

export default HeroPage
