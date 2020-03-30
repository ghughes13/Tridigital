import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import WarmupVideo from "../components/WarmupVideoPlayer.js";
import SingleReivew from "../components/SingleReview.js";
import { Waypoint } from "react-waypoint";

const WarmUp = () => (
  <Layout>
    <SEO title="Warm Up" />
    <div className="warmup-page">
      <Container className="container blue-background first-swish hero">
        <Row className="">
          <Col className="content-container column z-index-999">
            <h2 className="white-text core-values margin-top-100 uppercase">
              The MSP <br />
              Marketing Warmup
            </h2>
            <p className="white-text subtext">
              A quickstart marketing program guaranteed to generate qualified
              leads every month
            </p>
            <WarmupVideo />
          </Col>
          <Col className="content-container column second-col">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/collateral.png"
              alt="collaterals"
            />
          </Col>
        </Row>
      </Container>
      <Container className="container">
        <Row className="margin-top-minus-400">
          <Col className="content-container column center-vert-col-fix">
            <h2 className="blue-text core-values">What it is</h2>
            <p className="grey-text">
              Over the past 5 years, TRIdigital has executed thousands of
              campaigns that have generated over 100,000 qualified leads for our
              clients.
            </p>
            <p className="grey-text">
              We’ve collected all of our best performing campaigns and marketing
              materials and have put them together in this amazingly affordable
              package to generate{" "}
              <span className="pink-text bold">
                up to 10 leads a month guaranteed.
              </span>
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
                name="marketing-warmup-lp-form"
                netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <h3 className="blue-text form-title">
                  Speak with an MSP Marketer to learn more
                </h3>
                <div className="field name-field">
                  <label htmlFor="name">What’s your name?</label>
                  <input
                    type="text"
                    className="theInput"
                    name="name"
                    id="name"
                    required
                  ></input>
                </div>
                <div className="field">
                  <label className="second-label" htmlFor="company">
                    What company are you with?
                  </label>
                  <input
                    type="text"
                    className="theInput"
                    name="company"
                    id="company"
                  ></input>
                </div>
                <br />
                <div className="field email-field">
                  <label htmlFor="email">What’s your email address?</label>
                  <input
                    type="email"
                    className="theInput"
                    name="email"
                    id="email"
                    required
                  ></input>
                </div>
                <div className="field comment-field">
                  <label className="textarea-label" htmlFor="message">
                    What question can we answer for you?
                  </label>
                  <textarea
                    type="text"
                    className="theInput"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <div className="checkbox-part">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="keep-me-updated"
                    id="keep-me-updated"
                  />
                  <label htmlFor="keep-me-updated">
                    Keep me updated with emails and newsletters
                  </label>
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
      </Container>
      <Container className="container pink-marketing-gradient second-swish third-swish what-you-get">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="white-text core-values centered-text">
              What you get
            </h2>
          </Col>
        </Row>
        <Row className="">
          <Col className="content-container column">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/landing-pages.png"
              alt="collaterals"
            />
            <p>Landing Pages</p>
          </Col>
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/whitepapers.png"
              alt="collaterals"
            />
            <p>Whitepapers</p>
          </Col>
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/ebooks.png"
              alt="collaterals"
            />
            <p>eBooks</p>
          </Col>
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/videos.png"
              alt="collaterals"
            />
            <p>Videos</p>
          </Col>
        </Row>
        <Row className="">
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/email-campaigns.png"
              alt="collaterals"
            />
            <p>Email Campaigns</p>
          </Col>
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/coordinator.png"
              alt="collaterals"
            />
            <p>Marketing Coordinator</p>
          </Col>
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/honey-crm.png"
              alt="collaterals"
            />
            <p>Honey CRM</p>
          </Col>
          <Col className="content-container column ">
            <img
              className="collaterals"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/videos.png"
              alt="collaterals"
            />
            <p>10 Qualified Leads /mo</p>
          </Col>
        </Row>
      </Container>
      <Container className="container">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="white-text core-values centered-text margin-bottom-75">
              What it costs
            </h2>
          </Col>
        </Row>
        <Row className="">
          <Col className="content-container column price-option">
            <span className="bold pink-text top-months">3 Months</span>
            <span className="price pink-text">
              <span className="dollar-sigh">$</span>1,500
            </span>
            <p className="per-month">Per month</p>
            <ul className="checkmark-li">
              <li>3 Landing Pages</li>
              <li>3 Whitepapers</li>
              <li>1 eBooks</li>
              <li>6 Email Campaigns</li>
              <li>6 Follow-up Campaigns</li>
              <li>3 Solution Videos</li>
              <li>Marketing Coordinator</li>
              <li>Quarterly Consultation</li>
              <li>Fully set-up Honey CRM</li>
              <li>30 Qualified Leads</li>
            </ul>
            <a className="pink-btn btn" href="/marketing-warmup-signup/?l=0">
              Sign Up
            </a>
          </Col>
          <Col className="content-container column price-option second six-months">
            <span className="bold light-blue-text top-months">6 Months</span>
            <span className="price light-blue-text">
              <span className="dollar-sigh">$</span>1,400
            </span>
            <p className="per-month">Per month</p>
            <ul className="checkmark-li">
              <li>6 Landing Pages</li>
              <li>6 Whitepapers</li>
              <li>2 eBooks</li>
              <li>12 Email Campaigns</li>
              <li>12 Follow-up Campaigns</li>
              <li>6 Solution Videos</li>
              <li>Marketing Coordinator</li>
              <li>Quarterly Consultation</li>
              <li>Fully set-up Honey CRM</li>
              <li>60 Qualified Leads</li>
            </ul>
            <a className="pink-btn btn" href="/marketing-warmup-signup/?l=1">
              Sign Up
            </a>
          </Col>
          <Col className="content-container column price-option third twelve-months">
            <span className="bold gold-text top-months">12 Months</span>
            <span className="price gold-text">
              <span className="dollar-sigh">$</span>1,300
            </span>
            <p className="per-month">Per month</p>
            <ul className="checkmark-li">
              <li>12 Landing Pages</li>
              <li>12 Whitepapers</li>
              <li>4 eBooks</li>
              <li>24 Email Campaigns</li>
              <li>24 Follow-up Campaigns</li>
              <li>10 Solution Videos</li>
              <li>Marketing Coordinator</li>
              <li>Quarterly Consultation</li>
              <li>Fully set-up Honey CRM</li>
              <li>120 Qualified Leads</li>
            </ul>
            <a className="pink-btn btn" href="/marketing-warmup-signup/?l=2">
              Sign Up
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="container reviews-container mrkt-wrmup first blue-swish">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="white-text blue-text centered-text margin-bottom-75">
              What the results are
            </h2>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew className="margin-top-90" number="1" type="half" />
          <SingleReivew className="margin-top-90" number="2" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-0")
                .classList.add("slide-up");
              document
                .querySelector(".review-container.number-1")
                .classList.add("slide-up", "odd");
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="3" type="half" />
          <SingleReivew number="4" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-2")
                .classList.add("slide-up", "odd");
              document
                .querySelector(".review-container.number-3")
                .classList.add("slide-up");
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="5" type="half" />
          <SingleReivew number="6" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-4")
                .classList.add("slide-up");
              document
                .querySelector(".review-container.number-5")
                .classList.add("slide-up", "odd");
            }}
          />
        </Row>
        <a
          className="btn pink-btn this-btn"
          onClick={() => {
            document.querySelector(".more-reviews").style.display = "initial";
            document.querySelector(".this-btn").style.display = "none";
            document.querySelector(".mrkt-wrmup.first").style.paddingBottom = 0;
          }}
        >
          Load More
        </a>
      </Container>
      <Container className="more-reviews container reviews-container mrkt-wrmup blue-swish">
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="7" type="half" />
          <SingleReivew number="8" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-6")
                .classList.add("slide-up", "odd");
              document
                .querySelector(".review-container.number-7")
                .classList.add("slide-up");
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="9" type="half" />
          <SingleReivew number="10" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-8")
                .classList.add("slide-up");
              document
                .querySelector(".review-container.number-9")
                .classList.add("slide-up", "odd");
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="11" type="half" />
          <SingleReivew number="12" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-10")
                .classList.add("slide-up", "odd");
              document
                .querySelector(".review-container.number-11")
                .classList.add("slide-up");
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="13" type="half" />
          <SingleReivew number="14" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-12")
                .classList.add("slide-up");
              document
                .querySelector(".review-container.number-13")
                .classList.add("slide-up", "odd");
            }}
          />
        </Row>
      </Container>
    </div>
  </Layout>
);

export default WarmUp;
