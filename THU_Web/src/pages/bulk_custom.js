import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div class="header">
        <h1>Large Custom Piece Orders</h1>
    </div>
    <div class="container" id="contact-us">
        <div class="center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt vel sem in placerat. Fusce consectetur ultricies tempus. In et purus felis. Curabitur pellentesque mollis porttitor. Nulla sed elit eu quam porttitor porta. Nam dignissim, urna semper rhoncus facilisis, ipsum turpis ornare lacus, aliquam egestas sem nibh vel dolor.</p>
        </div>
        <div class="flex separator space_between">
            <div class="half-width" id="message">
                <h2>Send Us a Message</h2>
                <form>
                    <div class="flex space_between">
                        <div>
                            <p>Your Name<span class="red">*</span></p>
                            <input type="text" name="name" class="half-width" required/>
                        </div>
                        <div>
                            <p>Your Email<span class="red">*</span></p>
                            <input type="text" name="email" class="half-width" required/>
                        </div>
                    </div>
                    <p>Message<span class="red">*</span></p>
                    <textarea name="message" required></textarea>
                </form>
            </div>
            <div class="half-width">
                <div class="location-info">
                    <h2>Our Location</h2>
                    <div id="map">
                    </div>
                </div>
                <div class="separator location-info">
                    <h2>Business Hours</h2>
                    <p>Monday - Friday: 9:00am - 5:00pm</p>
                    <p>Saturday & Sunday: Closed</p>
                    <p>Public Holidays: Closed</p>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default SecondPage
