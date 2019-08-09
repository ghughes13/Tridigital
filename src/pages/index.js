import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap';

const IndexPage = ({data}) => { 
  return (
    <div className = "home-page">
      <Container className="hero-section transparent-hero container">
        <div class="video-background-container">
          <video autoPlay loop id="video-background" muted playsinline>
            <source src="https://www.gbtech.net//wp-content/uploads/2017/08/GB-Tech-loop.mp4" type="video/mp4" />
          </video>
        </div>  
        <Row>
          <Col className="content-container column">
            <h1 class="white-text centered-text">{data.acf}</h1>
            <a class="orange-outline-btn white-text" href="#">Watch Our Video</a> 
          </Col>
        </Row>
      </Container>
      <Container> 
        <Row>
          <Col className="content-container centered-text compressed-content">
              <h2 class="light-weight blue-text">IT Services Provide <span class="heavy-weight">a Launch Pad for Your Business</span></h2>
              <p>Running a business requires courage, ambition and preparation. With IT services by GB Tech, you can feel confident that your business has the foundation it needs to take to the skies. Our services are wide-ranging, including everything from cloud services and help desk support to virtualization and mobile device management. We can equip you with the tools you need to complete any mission.</p>
          </Col>
        </Row>
      </Container>
      <Container className="rocket-parallax-section">
        <Row className="space-background">
          <Col className="content-container centered-text compressed-content">
          <h2 class="light-weight white-text">Software Quality & Security – The Ultimate Pre-Flight Checklist</h2>
          <p class="white-text">The risk of failure is unacceptable. Software testing, web application security, and ongoing network monitoring ensure that you’ll have a safe launch, no matter how ambitious or complex your goals might be.</p>
          </Col>
          <Col className="content-container centered-text compressed-content">
          <img class="rocket-img" src="https://www.gbtech.net/wp-content/uploads/2014/03/rocket.png" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="content-container centered-text compressed-content">
          <h2 class="light-weight orange-text">Logistics & Project Management – <span class="heavy-weight">With You Every Step of the Way</span></h2>
          <p>Taking on a major project can be daunting, especially when you’re on a budget and a deadline. GB Tech’s project management skills are battle-tested in some of the world’s most demanding industries, and our logistical expertise is designed to keep everything running smoothly – or help you out of a bind. We’ll never leave you hanging.</p>
          </Col>
        </Row>
      </Container>
    </div>
)}

export const query = graphql`
    query HomePageQuery{
      wordpressPage(wordpress_id: {eq: 2}) {
        acf {
          hero_heading
        }
      }
    }
` 

export default IndexPage