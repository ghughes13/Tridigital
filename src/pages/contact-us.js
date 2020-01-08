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
    <div className="contact-us">
      <Container className="container">
        <Row className="pink-blob-background">
          <div class="hook"></div>
          <Col className="content-container column ">
            <h2 className="white-text">
              Get In Touch With An IT Marketing Professional
            </h2>
          </Col>
          <Col className="content-container column ">
            <div className="form-container">
              <form>
                <h3 className="blue-text form-title">
                  Speak with an MSP Marketer to learn more
                </h3>
                <div class="what-do-we-call-you">
                  <div>
                    <label>What’s your name?</label>
                    <input type="text"></input>
                  </div>
                  <div>
                    <label>What company are you with?</label>
                    <input type="text"></input>
                  </div>
                </div>
                <br />
                <label>What’s your email address?</label>
                <input type="text"></input>
                <br />
                <label>What question can we answer for you?</label>
                <textarea type="text"></textarea>
                <br />
                <input type="checkbox" />
                <label>Keep Me Updated with Emails and Newsletters</label>
                <button type="submit">Take the First Step</button>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container centered-text">
            <Row className="contact-method">
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203453.svg" />
              <a href="tel:212997399">214-299-7399</a>
            </Row>
            <Row className="contact-method">
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203452.svg" />
              <a href="#">101 E Park Blvd. STE. 101 Plano, TX 75074</a>
            </Row>
            <Row className="contact-method">
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203451.svg" />
              <a href="mailto:info@tridigitalmarketing.com">
                info@tridigitalmarketing.com
              </a>
            </Row>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle download-brochure">
          <Col className="content-container">
            <a href="http://www.itepubs.com/tridigital_brochure_digital/page/1">
              <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Image-95.png" />
            </a>
          </Col>
          <Col className="content-container centered-text download-col">
            <h2 className="blue-text centered-text core-values">
              Download Our Brochure
            </h2>
            <p>
              For more information on all of our services and pricing, please
              download our IT Marketing Proposal.
            </p>
            <a
              className="white-text pink-button"
              href="http://www.itepubs.com/tridigital_brochure_digital/page/1"
            >
              View Online Version
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ContactUs
