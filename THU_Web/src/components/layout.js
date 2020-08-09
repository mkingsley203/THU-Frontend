/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagramSquare, faPinterest } from "@fortawesome/free-brands-svg-icons"

import { Header, Navigation } from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Navigation/>
        <main>{children}</main>
        <div class="flex" id="social">
            <div>
                <Link to=""><FontAwesomeIcon icon={ faFacebook }/></Link>
            </div>
            <div>
                <Link to=""><FontAwesomeIcon icon={ faInstagramSquare }/></Link>
            </div>
            <div>
                <Link to=""><FontAwesomeIcon icon={ faPinterest }/></Link>
            </div>
        </div>
        <footer>
            <div id="footer-lists">
                <div class="list">
                    <h3>Product</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/about_us/">Our Company</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/">Custom Pieces</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/">Bulk Custom Items</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>About</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/about_us/">Our Company</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/about_kangaroo/">Sustainability</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Legal</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/">Privacy Policy</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/">Terms and Conditions</Link></li>
                        <li><FontAwesomeIcon icon={ faCaretRight }/><Link to="/">Return and Exchange Policy</Link></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Contact</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={ faPhoneAlt }/>0402 904 970</li>
                        <li><FontAwesomeIcon icon={ faEnvelope }/>tpngueyn1312@gmail.com</li>
                        <li><FontAwesomeIcon icon={ faMapMarkerAlt }/>37 Judge Street Petrie Terrace, QLD</li>
                    </ul>
                </div>
            </div>
            <div id="copy">
                © TRUE HEART UNLIMITED {new Date().getFullYear()} | ABN 27 459 675 260
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
