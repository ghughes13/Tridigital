import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout opaqueHeader="true">
      <SEO title="Sitemap" />
      <div className="sla-page">
        <Container className="container">
          <h3 className="sitemap">Main Pages</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/process">Process</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            {/* -- DO NOT USE GATSBY'S Link HERE --*/}
            {/* Changing the a tags to privacy policy, sitemap, or footer to gatsby's Link component breaks the header transparency fix   */}
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
  );
};

export default AboutUs;
