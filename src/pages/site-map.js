import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <div className="sla-page">
        <Container className="container">
          <h3 className="sitemap">Main Pages</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/process">Process</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms Of Service</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </Container>
      </div>
    </Layout>
  )
}

export default AboutUs
