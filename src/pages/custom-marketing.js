import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";

const CustomMarketing = () => (
  <Layout>
    <SEO title="Custom Marketing" />
    <div className="contact-us custom-marketing-page">
      <Container className="container">
        <div className="hook"></div>
        <Row className="pink-blob-background">
          <Col className="content-container column">
            <h2 className="white-text uppercase">
              Let’s Collaborate On What You’re Envisioning
            </h2>

            <h3 className="white-text">Expectations</h3>
            <p className="white-text">
              We are a boutique marketing agency. Everything is custom and
              hand-made in-house. Because of this, we are very selective with
              the clients we work with. Our custom marketing engagements start
              at $300,000 per year.
            </p>
            <p className="white-text">
              If you’re interested in learning more, bring us your ideas and
              let’s make some magic.
            </p>
          </Col>
          <Col className="content-container column ">
            <div className="form-container">
              <form
                id="contact-form"
                className="Consultation"
                method="POST"
                onSubmit={e => {
                  document.querySelector("#contact-form").style.display =
                    "none";
                  document.querySelector(".contact-thank-you").style.display =
                    "block";
                }}
                name="custom-marketing-form"
                data-netlify="true"
              >
                <h3 className="blue-text form-title">
                  Speak with a Channel Marketing Expert
                </h3>
                <div className="what-do-we-call-you">
                  <div className="field name-field">
                    <label>What’s your name?</label>
                    <input
                      type="text"
                      className="theInput"
                      name="firstName"
                      required
                    ></input>
                  </div>
                  <div className="field">
                    <label className="second-label">
                      What company are you with?
                    </label>
                    <input
                      type="text"
                      className="theInput"
                      name="company"
                    ></input>
                  </div>
                </div>
                <br />
                <div className="field email-field">
                  <label>What’s your email address?</label>
                  <input
                    type="email"
                    className="theInput"
                    name="email"
                    required
                  ></input>
                </div>
                <div className="field comment-field">
                  <label className="textarea-label">
                    What question can we answer for you?
                  </label>
                  <textarea
                    type="text"
                    className="theInput"
                    name="message"
                  ></textarea>
                </div>

                <div className="checkbox-part">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="keep-me-updated"
                  />
                  <label>Keep Me Updated with Emails and Newsletters</label>
                </div>
                <div className="hide-me field">
                  <input
                    data-form-type="Consultation"
                    className="formcat"
                  ></input>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="pink-button">
                    Take the First Step
                  </button>
                </div>
              </form>
              <div className="contact-thank-you">
                <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle download-brochure">
          <Col className="content-container brochure-img">
            <a
              href="http://www.itepubs.com/tridigital_brochure_digital/page/1"
              target="_blank"
            >
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Image-95.png"
                alt="brochure img"
              />
            </a>
          </Col>
          <Col className="content-container centered-text download-col">
            <h2 className="blue-text centered-text core-values">
              Download Our Brochure
            </h2>
            <p>
              For more information about our studio, artists, experts, and
              services, please view our brochure.
            </p>
            <a
              className="white-text pink-button"
              href="http://www.itepubs.com/tridigital_brochure_digital/page/1"
              target="_blank"
            >
              View Online
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
);

export default CustomMarketing;
