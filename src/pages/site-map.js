import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout>
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
            <li>
              <Link to="/terms-of-service">Terms Of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutUs;
