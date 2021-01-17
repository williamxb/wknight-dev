import React from "react"
// scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

// Import components
import Header from "../components/header"
import hero from "../images/hero.jpg"


const IndexPage = () => (
    <div>
        <Header />
        <div className="hero-container">
            <img className="hero-image" src={hero} alt="hero image"></img>
            <div className="hero-content-outer">
                <h1>
                    <span>The</span>Crown Inn<span>Church Enstone</span>
                </h1>
                <p>
                    A hidden gem located in the rural Oxfordshire village of
                    Church Enstone, the perfect spot for any occasion from a
                    spontaneous lunch to celebratory dinner, in either our flag
                    stoned bar area, restaurant, conservatory, or weather
                    permitting our secluded garden area.
                </p>
            </div>
        </div>
    </div>
)

export default IndexPage
