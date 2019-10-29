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
        <Row className="two-columns"> 
          <Col className="content-container column">
            <h2 className="white-text">TRIdigital Marketing</h2> 
            <p className="white-text subtext" >TEAM RENDERED INNOVATIONS</p>   
            <p className="white-text bio-content">My name is Giovanni, but if you like, you can call me Gio for short. I’ll pretty much respond to any name that starts with a “G.” I’ve found I’m good at two things, IT Marketing and Sales. Over the past 10 years, I have closed more than $20 million in managed services revenue. I’ve also helped MSPs across 15 countries close over $50 million in managed services revenue. I think that my creative talent combined with my ability to tell stories has helped me be successful.</p>
          </Col>
          <Col className="content-container column video-column">
          <video src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/Sequence-01_2-1.mp4" autoPlay muted >
            <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
          </video>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default AboutUs
