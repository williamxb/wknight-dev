import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
            <Img className="hero-image" fluid={data.datoCmsHomepage.heroImage.fluid} alt="hero" />
            <div className="hero-content-outer container">
                <h1 dangerouslySetInnerHTML={{__html: data.datoCmsHomepage.heroTitle,}}></h1>
                <div dangerouslySetInnerHTML={{__html:data.datoCmsHomepage.heroContentNode.childMarkdownRemark.html,}}></div>
            </div>
        </div>

        <div className="entry-content-container container">
            <h1>The Restaurant</h1>
            <h2>Bar, Restaurant & Rooms in England</h2>
            <div className="menus-container">
                <Link to="/">Main Menu</Link>
                <Link to="/">Second Menu</Link>
                <Link to="/">Third Menu</Link>
            </div>
            <div className="entry-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris pellentesque turpis euismod arcu tincidunt, eget
                    mollis lorem tincidunt. Nunc in tellus eget ipsum faucibus
                    luctus. Pellentesque ut ipsum nunc. Cras dictum, purus
                    tempor convallis tempor, enim diam pharetra est, eleifend
                    tincidunt dui turpis iaculis nibh. Morbi vel porttitor
                    lorem, nec volutpat augue. Morbi facilisis tellus augue, ut
                    vehicula nulla dignissim nec. Quisque eu diam auctor,
                    pharetra nibh sed, placerat leo. Proin commodo porta ipsum
                    eget bibendum. Aliquam sagittis commodo erat, efficitur
                    sollicitudin nunc laoreet in. Phasellus dui libero, varius
                    sed aliquet ac, aliquam nec mi.
                </p>
                <p>
                    Sed vestibulum nunc non porttitor lobortis. Aliquam sagittis
                    quam ut ex blandit tempus nec et neque. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Nam lacinia, elit in condimentum dignissim,
                    nunc turpis ornare eros, sit amet pretium massa erat eu
                    erat. Sed pretium sed eros id accumsan. Cras a turpis id
                    purus vulputate vehicula. Nullam eget accumsan nibh, eget
                    porttitor odio. Mauris euismod massa in lacus ornare tempor.
                    Mauris id efficitur dolor, eu commodo tellus. Praesent
                    placerat, mi ac scelerisque volutpat, est turpis maximus ex,
                    vitae tempor sem nulla sit amet nisi. Suspendisse ultricies
                    nisi ipsum, eu maximus diam ultrices vel. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Integer consectetur, urna nec
                    mattis hendrerit, metus magna rhoncus urna, et pretium
                    mauris lacus nec lacus. Nam feugiat nisi a tortor accumsan,
                    nec eleifend quam volutpat. Donec ipsum nisl, maximus eu mi
                    pulvinar, posuere semper metus.
                </p>
                <p>
                    Integer facilisis interdum tortor ut faucibus. Pellentesque
                    vitae ex eget nibh placerat finibus quis ut velit. Etiam
                    eget ligula egestas, maximus est ac, consectetur arcu. Morbi
                    id massa turpis. Aliquam accumsan nec erat vitae iaculis.
                    Morbi tempus quam felis, sed dapibus lorem egestas nec. Cras
                    porta sapien in quam tincidunt convallis. Nunc nunc nunc,
                    scelerisque ac odio sit amet, fermentum tempus quam. Vivamus
                    iaculis fringilla nulla. Duis tristique tincidunt libero.
                    Aliquam purus justo, ullamcorper sit amet condimentum in,
                    tempor non enim.
                </p>
            </div>
        </div>
    </div>
)

export const query = graphql`
    query HomeQuery {
        datoCmsHomepage {
            heroImage {
                fluid(maxWidth: 1920) {
                    base64
                    ...GatsbyDatoCmsFluid
                }
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
