import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap';
import * as PropTypes from "prop-types";
import { Parallax, Background } from 'react-parallax';


const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div className = "about-us-page"> 
      <Container className="hero-section container blue-background">
        <Row className="two-columns pink-banner"> 
          <Col className="content-container column ">
              <h2 className="white-text">TRIdigital Marketing</h2> 
              <p className="white-text subtext" >TEAM RENDERED INNOVATIONS</p>   
              <p className="likes heavy-weight white-text">Leads, Marketing, Sales, Honey CRM</p>
            <p className="white-text bio-content">My name is Giovanni, but if you like, you can call me Gio for short. I’ll pretty much respond to any name that starts with a “G.” I’ve found I’m good at two things, IT Marketing and Sales. Over the past 10 years, I have closed more than $20 million in managed services revenue. I’ve also helped MSPs across 15 countries close over $50 million in managed services revenue. I think that my creative talent combined with my ability to tell stories has helped me be successful.</p>
          </Col>
          <Col className="content-container column video-column">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/Sequence-01_2-1.mp4" autoPlay muted >
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
        </Row>
      </Container>
      <Container className="container">
        <Row className=""> 
          <Col className="content-container column ">
              <h2 className="blue-text centered-text">Our Core Values</h2>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container video-container">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/Heartv03.mp4" autoPlay muted loop>
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
          <Col className="content-container">
              <div class="values-card">
                <h3 className="pink-text" >Love Your Work</h3>
                <p >Cherish and protect your creations. Do not compromise its quality.</p>
              </div> 
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container">
              <div class="values-card left-align">
                <h3 className="purple-text" >Create Superheroes</h3>
                <p>People come first. We support, train, protect, and empower people to unlock their superhuman potential.</p>
              </div> 
          </Col>
          <Col className="content-container video-container">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/Maskv03.mp4" autoPlay muted loop>
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container video-container">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/EggR.mp4" autoPlay muted loop>
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
          <Col className="content-container">
              <div class="values-card">
                <h3 className="light-blue-text" >Break Eggs</h3>
                <p>Creating something meaningful and innovative doesn’t come without frequent failure.</p>
              </div> 
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container">
              <div class="values-card left-align">
                <h3 className="yellow-text">Make Your Mark</h3>
                <p>Come in every day and make a difference. When you work with passion, you create a legacy for all of those we touch.</p>
              </div> 
          </Col>
          <Col className="content-container video-container">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/PencilR.mp4" autoPlay muted loop>
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Col className="content-container video-container">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/PaintR.mp4" autoPlay muted loop>
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
          <Col className="content-container">
              <div class="values-card">
                <h3 className="light-blue-text" >Mix Paint</h3>
                <p>Through collaboration we take people’s most unique qualities and mix them to create something new and beautiful.</p>
              </div> 
          </Col>
        </Row>
      </Container>
      <Container className="cta-container"> 
        <Row className="">
          <Col className="cta-card box-shadow"> 
              <h2 className="white-text compressed-text" >Don’t Be Shy. Contact Us Today!</h2>
              <a className="white-text blue-button" href="#">Contact Us</a> 
          </Col>
        </Row> 
      </Container>
    </div>
  </Layout>
)

export default AboutUs
