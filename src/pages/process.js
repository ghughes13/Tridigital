import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"

const Process = () => (
  <Layout>
    <SEO title="Our Process" />
    <div className="process-page">
      <Container className="hero-section container ">
        <Row>
          <Col className="content-container column centered-text">
            <h1 className="white-text">
              HOW WE CREATE MARKETING <br />
              MAGIC FOR YOU
            </h1>
            <p className="white-text subtext">
              How we create unique and creative strategy for your company.
            </p>
          </Col>
        </Row>
        <img
          className="scroll-indicator"
          src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/scroll-indicator.svg"
          alt="scroll indicator"
        ></img>
      </Container>

      <Container className="container step-section knowledge-section flexed">
        <Row className="two-columns full-width-row content-left align-middle margin-left one">
          <Col className="content-container">
            <p className="gold-text heavy-weight step one">Step 1:</p>
            <h2 className="white-text ">The Knowledge Transfer</h2>
            <p className="white-text">
              This is where we ask our clients to fill out a series of
              questionnaires designed to help the TRIdigital team learn more
              about your company, your unique qualities, your differentiators,
              and Target Audience.
            </p>
          </Col>
          <Col>
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/knowledge.png"
              className="desktop-img"
              alt="websites and questionaires"
            />
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3451-1.png"
              className="mobile-img"
              alt="websites and questionaires"
            />
          </Col>
        </Row>
      </Container>

      <Container className="container step-section story-section">
        <Row className="two-columns full-width-row content-right align-middle two">
          <Col>
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/story-arc.png"
              className="desktop-img"
              alt="slide"
            />
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3452-1.png"
              className="mobile-img"
              alt="slide"
            />
          </Col>
          <Col className="content-container">
            <p className="gold-text heavy-weight step">Step 2:</p>
            <h2 className="white-text ">Execute a Story Arc</h2>
            <p className="white-text">
              This exercise is designed to dig deeper into the true motivations
              of why your company exists and why you serve your target audience.
              We analyze the data collected in the story arc to create an
              underlining theme that becomes the foundation of your entire go to
              market message and strategy.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="container step-section moodboard-section flexed margin-left">
        <Row className="two-columns full-width-row content-left align-middle three">
          <Col className="content-container">
            <p className="gold-text heavy-weight step">Step 3:</p>
            <h2 className="white-text ">Create a Moodboard</h2>
            <p className="white-text">
              The Moodboard is designed to be a collage of various visual
              elements and design approaches that best supports the theme and
              your desired aesthetic. We use the mood board as a collaboration
              tool to hone in the final design elements that will be used in
              your new look and feel.
            </p>
          </Col>
          <Col className="static-position">
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/moodboard.png"
              className="desktop-img"
              alt="moodboard"
            />
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-849.png"
              className="mobile-img"
              alt="moodboard"
            />
          </Col>
        </Row>
      </Container>

      <Container className="container step-section marketing-plan-section">
        <Row className="two-columns full-width-row content-right align-middle four">
          <Col className="static-position">
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/marketing-plan.png"
              className="desktop-img"
              alt="plan"
            />
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-3455-1.png"
              className="mobile-img"
              alt="plan"
            />
          </Col>
          <Col className="content-container">
            <p className="gold-text heavy-weight step">Step 4:</p>
            <h2 className="white-text ">Create a Go to Market Plan</h2>
            <p className="white-text">
              The plan we create lays out several ways in which we can use the
              theme and the new look and feel through various marketing vehicles
              to help achieve the most optimal marketing results.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="container step-section deliverables-section flexed margin-left">
        <Row className="two-columns full-width-row content-left align-middle five">
          <Col className="content-container">
            <p className="gold-text heavy-weight step">Step 5:</p>
            <h2 className="white-text ">Create and Execute Deliverables</h2>
            <p className="white-text">
              When a theme and a plan in-tact we can begin creating the desired
              deliverables in accordance to the new identity, theme and go to
              market approach.
            </p>
          </Col>
          <Col className="static-position">
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/deliverables.png"
              className="desktop-img"
              alt="deliverables"
            />
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/01/Group-853.png"
              className="mobile-img"
              alt="deliverables"
            />
          </Col>
        </Row>
      </Container>

      <Container className="cta-container">
        <Row className="">
          <Col className="cta-card box-shadow">
            <h2 className="white-text compressed-text">
              Here’s What the Results Look Like.
            </h2>
            <a className="white-text blue-button" href="/reviews">
              See the Results
            </a>
          </Col>
        </Row>
        <Waypoint
          onEnter={() =>
            document.querySelector(".cta-card").classList.add("slide-up")
          }
        />
      </Container>
    </div>
  </Layout>
)

export default Process
