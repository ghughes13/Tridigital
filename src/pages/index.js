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
            <div className="video-background-container">
              <video autoPlay loop id="video-background" muted playsInline>
                <source src="https://www.gbtech.net//wp-content/uploads/2017/08/GB-Tech-loop.mp4" type="video/mp4" />
              </video>
            </div>  
            <Row>
              <Col className="content-container column"> 
                <h1 className="white-text centered-text" dangerouslySetInnerHTML={{__html: heading.hero_heading}}></h1> 
                <a className="orange-outline-btn white-text" href="#" dangerouslySetInnerHTML={{__html: heading.hero_video_button_text}}></a>   
              </Col>
            </Row>
          </Container>
          <Container> 
            <Row>
              <Col className="content-container centered-text compressed-content">
                  <h2 className="light-weight blue-text" dangerouslySetInnerHTML={{__html: heading.section_2_heading}}></h2>
                  <p dangerouslySetInnerHTML={{__html: heading.section_2_content}}></p>
              </Col>
            </Row>
          </Container>
          <Container className="rocket-parallax-section">
            <Row className="space-container">
              <Parallax className = "space-background"
                bgImage={'https://www.gbtech.net/wp-content/uploads/2014/03/sky-background.jpg'}
                strength={600}
              > 
                <Col className="content-container centered-text compressed-content flex-2">
                  <h2 className="light-weight white-text" dangerouslySetInnerHTML={{__html: heading.section_3_heading}}></h2>
                  <p className="white-text" dangerouslySetInnerHTML={{__html: heading.section_3_content}}></p>
                </Col>
                <Col className="content-container centered-text compressed-content">
                  <Parallax 
                    className = "rocket-img"
                    bgImage={'https://www.gbtech.net/wp-content/uploads/2014/03/rocket.png'}
                    strength={-600}
                  >
                  </Parallax>
                </Col>
              </Parallax>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="content-container centered-text compressed-content">
              <h2 className="light-weight orange-text"dangerouslySetInnerHTML={{__html: heading.section_4_heading}}></h2>
              <p dangerouslySetInnerHTML={{__html: heading.section_4_content}}></p>
              </Col>
            </Row>
          </Container>
          <Container> 
            <Parallax
                bgImage = {'https://www.gbtech.net/wp-content/uploads/2014/03/experience-background.jpg'}
                strength={300}
            >
              <Row>

                  <Col className="centered-text">
                    <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/08/30-years.png" />
                  </Col>
                  <Col className="centered-text">
                    <h2 className="heavy-weight white-text"dangerouslySetInnerHTML={{__html: heading.section_5_heading}}></h2>
                    <p className="white-text" dangerouslySetInnerHTML={{__html: heading.section_5_content}}></p>
                  </Col>
              </Row>
            </Parallax>
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