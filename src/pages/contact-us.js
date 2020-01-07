import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import * as PropTypes from "prop-types"
import { Parallax, Background } from "react-parallax"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="contact-us blue-sway">
      <Container className="container">
        <Row className="pink-blob-background">
          <Col className="content-container column ">
            <h2 className="white-text">
              Get In Touch With An IT Marketing Professional
            </h2>
          </Col>
          <Col className="content-container column ">
            <h2 className="blue-text centered-text">Form Goes Here</h2>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container centered-text">
            <Row>
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203453.svg" />
            </Row>
            <Row>
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203452.svg" />
            </Row>
            <Row>
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203451.svg" />
            </Row>
          </Col>
          <Col className="content-container">
            <div className="values-card">
              <h3 className="pink-text">Love Your Work</h3>
              <p>
                Cherish and protect your creations. Do not compromise its
                quality.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container">
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Image-95.png" />
          </Col>
          <Col className="content-container centered-text">
            <h2 className="blue-text centered-text core-values">
              Download Our Brochure
            </h2>
            <p>
              For more information on all of our services and pricing, please
              download our IT Marketing Proposal.
            </p>
            <a className="white-text pink-button" href="#">
              View Online Version
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ContactUs
