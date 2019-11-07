import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap';
import * as PropTypes from "prop-types";
import { Parallax, Background } from 'react-parallax';


const Process = () => (
  <Layout>
    <SEO title="About Us" />
    <div className = "process-page"> 
        <Container className="hero-section container ">
            <Row > 
                <Col className="content-container column centered-text">
                    <h1 className="white-text">HOW WE CREATE MARKETING MAGIC FOR YOU</h1>
                    <p className="white-text">How we create unique and creative strategy for your company.</p>
                </Col>
            </Row>
            <img class="scroll-indicator" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/scroll-indicator.svg"></img>
        </Container>

        <Container className="container step-section knowledge-section flexed">
            <Row className="two-columns full-width-row content-left align-middle">
                <Col className="content-container">
                    <p class="gold-text heavy-weight">Step 1:</p>
                    <h2 className="white-text ">The Knowledge Transfer</h2>
                    <p class="white-text">This is where we ask our clients to fill out a series of questionnaires designed to help the TRIdigital team learn more about your company, your unique qualities, your differentiators, and Target Audience.</p>
                </Col>
                <Col>
                    <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/knowledge.png"/>
                </Col>
            </Row>
        </Container>

        <Container className="container step-section story-section">
            <Row className="two-columns full-width-row content-right align-middle">
                <Col>
                    <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/story-arc.png"/>
                </Col>
                <Col className="content-container">
                    <p class="gold-text heavy-weight">Step 2:</p>
                    <h2 className="white-text ">Execute a Story Arc</h2>
                    <p class="white-text">This exercise is designed to dig deeper into the true motivations of why your company exists and why you serve your target audience. We analyze the data collected in the story arc to create an underlining theme that becomes the foundation of your entire go to market message and strategy.</p>
                </Col>
            </Row>
        </Container>

        <Container className="container step-section moodboard-section flexed">
            <Row className="two-columns full-width-row content-left align-middle">
                <Col className="content-container">
                    <p class="gold-text heavy-weight">Step 3:</p>
                    <h2 className="white-text ">Create a Moodboard</h2>
                    <p class="white-text">The Moodboard is designed to be a collage of various visual elements and design approaches that best supports the theme and your desired aesthetic. We use the mood board as a collaboration tool to hone in the final design elements that will be used in your new look and feel.</p>
                </Col>
                <Col className="static-position">
                    <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/moodboard.png" class="" />
                </Col>
            </Row>
        </Container>

        <Container className="container step-section marketing-plan-section">
            <Row className="two-columns full-width-row content-right align-middle">
                <Col className="static-position">
                    <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/marketing-plan.png" class="" />
                </Col>
                <Col className="content-container">
                    <p class="gold-text heavy-weight">Step 4:</p>
                    <h2 className="white-text ">Create a Go to Market Plan</h2>
                    <p class="white-text">The plan we create lays out several ways in which we can use the theme and the new look and feel through various marketing vehicles to help achieve the most optimal marketing results.</p>
                </Col>
            </Row>
        </Container>

        <Container className="container step-section deliverables-section flexed">
            <Row className="two-columns full-width-row content-left align-middle">
                <Col className="content-container">
                    <p class="gold-text heavy-weight">Step 5:</p>
                    <h2 className="white-text ">Create and Execute Deliverables</h2>
                    <p class="white-text">When a theme and a plan in-tact we can begin creating the desired deliverables in accordance to the new identity, theme and go to market approach.</p>
                </Col>
                <Col className="static-position">
                    <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/deliverables.png" class="" />
                </Col>
            </Row>
        </Container>

        <Container className="cta-container"> 
            <Row className="">
                <Col className="cta-card box-shadow"> 
                    <h2 className="white-text compressed-text" >Here’s What the Results Look Like.</h2>
                    <a className="white-text blue-button" href="#">See the Results</a> 
                </Col>
            </Row> 
      </Container>
      
    </div>
  </Layout>
)

export default Process
