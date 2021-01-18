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
                    <span>The</span>Restaurant<span>in England</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam sit amet urna venenatis, viverra tortor eget, hendrerit 
                    ipsum. Morbi sed consequat nibh, finibus imperdiet risus. 
                    Donec a tempor quam, eget feugiat nunc. Sed dapibus, massa 
                    in scelerisque condimentum, felis neque vehicula ante, ut 
                    incidunt augue augue at augue.
                </p>
            </div>
        </div>
    </div>
)

export default IndexPage
