import React from "react"
import { graphql } from 'gatsby'
// scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

// Import components
import Header from "../components/header"

const Homepage = ({ data }) => (
    <div>
        <Header />
        <div className="hero-container">
            <img className="hero-image" src={data.datoCmsHomepage.heroImage.url} alt="hero"></img>
            <div className="hero-content-outer">
                <h1 dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.heroTitle }}></h1>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.heroContentNode.childMarkdownRemark.html}}></div>
            </div>
        </div>
    </div>
)

export const query = graphql`
query HomeQuery {
	datoCmsHomepage {
		heroImage {
			url
		}
		heroTitle
		heroContentNode {
			childMarkdownRemark {
				html
			}
		}
	}
}
`

export default Homepage
