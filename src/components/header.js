import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header>
        <div className="container">
            <div className="inner-header">
                <div className="logo">
                    <Link to="/">THE RESTAURANT</Link>
                </div>
                <div className="navigation">
                    <nav>
                        <Link to="/restaurant">About</Link>
                        <Link to="/bar">Bar</Link>
                        <Link to="/rooms">Rooms</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/contact-us">Contact Us</Link>
                        <Link to="/press">Press</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

export default Header
