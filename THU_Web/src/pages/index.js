import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="carousel"></div>
  </Layout>
)

export default IndexPage
