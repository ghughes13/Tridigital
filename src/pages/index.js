import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap';
import * as PropTypes from "prop-types";
import { Parallax, Background } from 'react-parallax';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const heading = this.props.data.wordpressPage.acf

    return (
      <Layout>
        <div className = "home-page"> 
          <Container className="hero-section transparent-hero container">
            <Row className="two-columns">
              <Col className="content-container column">
                <h1 className="white-text">We Are the IT Industry’s Custom Marketing Agency</h1> 
                <p className="white-text subtext" >We’ve generated over 100,000 MSP leads. . . and counting.</p>   
                <a className="white-text blue-button" href="#">Watch Video <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/play-button.png" alt="play button"></img></a>   
                <img src="https://tdgatsbytest.wpengine.com/wp-content/uploads/svg/as-seen.svg"></img>
              </Col>
              <Col className="content-container column">
                <img class="play-icon" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/video-team.png" alt="TRIdigital media team"></img>
              </Col>
            </Row>
            <img class="scroll-indicator" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/scroll-indicator.svg"></img>
            <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
              <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stop-color="rgb(255,22,136)" stop-opacity="1" />
                <stop offset="100%" stop-color="rgb(254,122,6)" stop-opacity="1" />
              </linearGradient>
              <path fill="url(#PSgrad_0)">

                <animate  repeatCount="indefinite" attributeName="d" dur="10s"
                
                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                
                
                M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                C48.9,198.6,57.8,191,51,171.3z;
                
                M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"/>

                </path>

            </svg>
            <img class="accent-gradient-circle" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/gradient-circle.svg"></img>

          </Container>
          <Container className="blue-background collateral-section"> 
            <Row>
              <Col className="content-container centered-text compressed-content">
                  <h2 className="white-text" >Marketing As Unique As YOU Are</h2>
                  <p class="white-text">The biggest mistake IT companies make when developing their marketing strategy is that they build it around marketing the services they offer.</p>
                  <p class="white-text">But the services you offer don’t make you different, in-fact it is the one thing that makes you just like everyone else. Any company of any size can partner with any vendor and offer what you offer and offer cheaper if they are smaller.</p>
                  <p class="white-text">Your business is more than the solutions you resell. What truly makes you different is your vision, your culture, your process, your people and your infrastructure. Marketing those unique differintiators is the key to marketing success.</p>
              </Col>
            </Row>
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/collateral.png" alt="TRIdigital Collaterals"></img>
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/white-swoop.svg" alt="white-curve" className="white-swoop"></img>
          </Container>
          <Container className="powers-section"> 
            <Row className="two-columns full-width-row content-left align-middle">
              <Col className="content-container"> 
                  <h2 className="blue-text" >Unleash YOUR True Superpowers</h2>
                  <p >Your most competitive advantage is not what you do but how you do it.</p>
                  <p >The process you created is a direct reflection of your philosophy around support and customer service. </p>
                  <p class="pink-text heavy-weight">Leverage that and create marketing that’s unique.</p>
                  <a className="white-text pink-button" href="#">Learn More </a> 
              </Col>
              <Col className="content-container center-image-container">
                <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/clients-image.jpg" alt="TRIdigital Collaterals"></img>
              </Col>
            </Row>
          </Container>
          <Container className="powers-section"> 
            <Row className="two-columns full-width-row content-right align-middle">
              <Col className="content-container center-image-container">
                <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/honey-leads.png" alt="TRIdigital Collaterals"></img>
              </Col>
              <Col className="content-container"> 
                  <h2 className="blue-text" >TARGET the Customers You Want</h2>
                  <p >You know the kind of customers you want. Your IT marketing strategy should focus on attracting the customers that are the best fit for your organization.</p>
                  <p >Stop dealing with difficult customers who aren’t a good match and <span class="pink-text heavy-weight">start focusing on growing your business the right way.</span></p>
                  <a className="white-text pink-button" href="#">Learn More </a> 
              </Col>
            </Row>
          </Container>
          <Container className="powers-section"> 
            <Row className="two-columns full-width-row content-left align-middle">
              <Col className="content-container"> 
                  <h2 className="blue-text" >Outsmart Your Competition</h2>
                  <p >Empower your sales team the way you empower your engineers. Leverage innovative technology and amazing marketing materials to help your sales team perfectly communicate your vision.</p>
                  <p >When this is done properly, <span class="heavy-weight pink-text">you’ll convert more MSP leads to customers than ever before.</span></p>
                  <p class="pink-text heavy-weight">Leverage that and create marketing that’s unique.</p>
                  <a className="white-text pink-button" href="#">Learn More </a> 
              </Col>
              <Col className="content-container center-image-container">
                <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/honey-library.png" alt="TRIdigital Collaterals"></img>
              </Col>
            </Row>
          </Container>

          <Container className="powers-section"> 
            <Row className="">
              <Col className="cta-card"> 
                  <h2 className="white-text compressed-text" >See How We Empower YOUR Brand.</h2>
                  <a className="white-text blue-button" href="#">Take the First Step </a> 
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
    query HomePageQuery{
      wordpressPage(wordpress_id: {eq: 2}) {
        acf {
          hero_heading
          hero_video_button_text
          section_2_heading
          section_2_content
          section_3_heading
          section_3_content
          section_4_heading
          section_4_content
          section_5_heading
          section_5_content
        }
      }
    }
` 

export default IndexPage