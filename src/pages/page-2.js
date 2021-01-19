import React from "react"
import { graphql, Link } from "gatsby"
// scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

const SecondPage = () => (
  <>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage