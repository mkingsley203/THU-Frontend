import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/contact"
import StyledBackgroundSection from '../components/BackgroundSection'
import Display from "../components/shopDisplay"

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -27.464320,
  lng: 153.011270
};

const custom = ({data}) => {
    return (
      <Layout>
        <SEO title="Contact Us" />
        <StyledBackgroundSection class="header">
            <h1>Bespoke Pieces</h1>
        </StyledBackgroundSection>
        <div class="container" id="contact-us">
            <div class="large-body">
                <p>Nothing fits you perfectly? We make custom bespoke pieces that are tailor made for you and your needs. Take a look at our base pieces to get started or get in touch with us to begin the process.</p>
            </div>
            <div class="flex separator space_between">
                <Form />
                <div class="half-width">
                    <div class="location-info">
                        <h2>Our Location</h2>
                        <div id="map">
                            <LoadScript googleMapsApiKey="AIzaSyBaLBI6hzrNKKCL5wFZbYj1LN13PJK7RV4">
                                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                                    { /* Child components, such as markers, info windows, etc. */ }
                                    <Marker position={center}/>
                                </GoogleMap>
                            </LoadScript>
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
            <div class="separator">
              <Display items={data.products}/>
            </div>
        </div>
      </Layout>
  )
}

export const query = graphql `
  {
    products: allContentfulProduct {
      edges {
        node {
          path
          price
          price2
          type
          size
          collection
          colours
          customisable
          category
          style
          productName
          productImages {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default custom
