import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import SingleReivew from "../components/single-review.js"

const ContactUs = () => (
  <Layout>
    <SEO title="Resview" />
    <div className="reviews">
      <Container className="hero-section transparent-hero container flexed blue-gradient-background">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="white-text">TESTIMONIALS FROM SATISFIED CLIENTS</h2>
            <p className="white-text subtext">
              These reviews will give you an idea of what it’s like to work with
              us.
            </p>
          </Col>
          <Col className="content-container column phone-img-container">
            <img
              src="https://tdgatsbytest.wpengine.com/wp-content/uploads/svg/reviews/Phone%20Img.svg"
              alt="iphone reviews"
            />
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew className="margin-top-90" number="1" type="half" />
          <SingleReivew className="margin-top-90" number="2" type="half" />
        </Row>
      </Container>
      <Container className="container reviews-container blue-swish">
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="3" type="half" />
          <SingleReivew number="4" type="half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="5" type="half" />
          <SingleReivew number="6" type="half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="7" type="half" />
          <SingleReivew number="8" type="half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="9" type="half" />
          <SingleReivew number="10" type="half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="11" type="half" />
          <SingleReivew number="12" type="half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="13" type="half" />
          <SingleReivew number="14" type="half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="19" type="full" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="15" type="personal-half" />
          <SingleReivew number="16" type="personal-half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="20" type="full" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="17" type="personal-half" />
          <SingleReivew number="18" type="personal-half" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="21" type="full" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="22" type="full" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="23" type="full" />
        </Row>
      </Container>
      <Container className="cta-container">
        <Row className="">
          <Col className="cta-card box-shadow">
            <h2 className="white-text compressed-text">
              It's Time to Meet the Team.
            </h2>
            <a className="white-text blue-button" href="/about-us">
              Meet the Team{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ContactUs
