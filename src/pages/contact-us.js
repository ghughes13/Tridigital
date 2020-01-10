import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="contact-us">
      <Container className="container">
        <div className="hook"></div>
        <Row className="pink-blob-background">
          <Col className="content-container column ">
            <h2 className="white-text uppercase">
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
                    <label className="second-label">
                      What company are you with?
                    </label>
                    <input type="text"></input>
                  </div>
                </div>
                <br />
                <label>What’s your email address?</label>
                <input type="text"></input>
                <br />
                <label className="textarea-label">
                  What question can we answer for you?
                </label>
                <textarea type="text"></textarea>
                <br />
                <div className="checkbox-part">
                  <input type="checkbox" className="checkbox" />
                  <label>Keep Me Updated with Emails and Newsletters</label>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="pink-button">
                    Take the First Step
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle contact-row">
          <Col className="content-container centered-text contact-method-container">
            <Row className="contact-method">
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203453.svg" />
              <a href="tel:212997399">214-299-7399</a>
            </Row>
            <Row className="contact-method">
              <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group%203452.svg" />
              <a href="https://goo.gl/maps/9KwWjzXNR7a4tNsK7" target="_blank">
                101 E Park Blvd. STE. 101 <br /> Plano, TX 75074
              </a>
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
          <Col className="content-container brochure-img">
            <a href="http://www.itepubs.com/tridigital_brochure_digital/page/1" target="_blank">
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
              target="_blank"
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
