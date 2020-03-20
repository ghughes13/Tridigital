import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Container, Row } from "react-bootstrap";

const WarmUpQuestionaire = () => {
  return (
    <Layout>
      <SEO title="Warm Up Questionaire" />
      <div className="warmup-questionaire">
        <Container className="container blue-gradient-background hero swish">
          <div className="first background-row"></div>
          <div className="second background-row"></div>
          <div className="third background-row"></div>
          <div className="fourth background-row"></div>
          <Row className="">
            <h1 className="hide-me">Section 1 Out Of 3: The Basics</h1>
          </Row>
        </Container>
        <Container className="container white-section">
          <Row>
            <div className="form-container">
              <form
                id="contact-form"
                className="Consultation"
                onSubmit={e => {
                  e.preventDefault();
                  document.querySelector("#contact-form").style.display =
                    "none";
                  document.querySelector(".contact-thank-you").style.display =
                    "block";
                  return false;
                }}
              >
                <div className="field email-field">
                  <label>What’s your name?</label>
                  <input type="text" className="theInput" required></input>
                </div>
                <div className="field email-field">
                  <label>What’s your title?</label>
                  <input type="text" className="theInput" required></input>
                </div>
                <br />
                <div className="field email-field">
                  <label>What’s your work email address</label>
                  <input type="text" className="theInput" required></input>
                </div>
                <div className="field email-field">
                  <label>What’s your company name?</label>
                  <input type="email" className="theInput" required></input>
                </div>
                <div className="field email-field">
                  <label>What’s your website URL?</label>
                  <input type="email" className="theInput" required></input>
                </div>
                <div className="field email-field">
                  <label>Do you have a slogan or tagline? Type it below</label>
                  <input type="email" className="theInput" required></input>
                </div>
                <div className="field email-field">
                  <label>
                    What phone number would you like to display on emails and
                    landing pages?
                  </label>
                  <input type="text" className="theInput" required></input>
                </div>
                <div className="first-checkbox-part">
                  <p>Do you have a marketing list?</p>
                  <input type="checkbox" className="checkbox" />
                  <label>Yes</label>
                  <input type="checkbox" className="checkbox" />
                  <label>No</label>
                </div>
                <div className="second-checkbox-part">
                  <p>
                    What’s the priority of solutions/services you would like to
                    market? Number 1 - 12. *Note: your priority will determine
                    the month it will be sent out. Example: 1= Month 1 of your
                    engagement. This cannot be changed once set.
                  </p>
                  <input type="checkbox" className="checkbox" />
                  <label>Yes</label>
                  <input type="checkbox" className="checkbox" />
                  <label>No</label>
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
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default WarmUpQuestionaire;
