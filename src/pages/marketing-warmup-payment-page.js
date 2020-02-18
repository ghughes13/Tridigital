import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";

const WarmUpPayment = () => (
  <Layout>
    <SEO title="Warm Up" />
    <div className="warmup-signup">
      <Container className="container pink-gradient-background hero swish">
        <Row className=""></Row>
      </Container>
      <Container className="container white-section">
        <Row>
          <div className="form-container">
            <h1 class="hide-me">
              Complete The Sign Up Form to Get Your Marketing Started
            </h1>
            <form
              id="contact-form"
              className="Consultation"
              onSubmit={e => {
                e.preventDefault();
                document.querySelector("#contact-form").style.display = "none";
                document.querySelector(".contact-thank-you").style.display =
                  "block";
                return false;
              }}
            >
              <h3 className="blue-text form-title">
                Complete The Sign Up Form to Get Your Marketing Started
              </h3>
              <div className="what-do-we-call-you">
                <div className="field name-field">
                  <label>First Name</label>
                  <input type="text" className="theInput" required></input>
                </div>
                <div className="field">
                  <label className="second-label">Last Name</label>
                  <input type="text" className="theInput"></input>
                </div>
              </div>
              <br />
              <div className="field email-field">
                <label>Company Name</label>
                <input type="text" className="theInput" required></input>
              </div>
              <div className="field email-field">
                <label>What’s your email address?</label>
                <input type="email" className="theInput" required></input>
              </div>
              <div className="field email-field">
                <label>Select Price Tier</label>
                <select
                  id="warmup-level"
                  name="warmup-level"
                  form="warmup-signup"
                  className="theInput"
                  required
                >
                  <option default>
                    TESTIN' IT: 3-Months Investment | $1,500.00/mo
                  </option>
                  <option>
                    FEELIN' IT: 6-Months Investment | $1,400.00/mo
                  </option>
                  <option>
                    LOVIN' IT: 12-Months Investment | $1,300.00/mo
                  </option>
                </select>
                <div className="total">
                  <p>TOTAL</p>
                  <p className="price-hook"></p>
                </div>
                <div className="billing-info"></div>
                <div className="field email-field">
                  <label>Card Number</label>
                  <input type="email" className="theInput" required></input>
                </div>
              </div>

              <div className="checkbox-part">
                <input type="checkbox" className="checkbox" />
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
            <div class="contact-thank-you">
              <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  </Layout>
);

export default WarmUpPayment;
