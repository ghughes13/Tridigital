import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby'
import GravityFormForm from 'gatsby-gravityforms-component';

const allGravityData = () => {
    const { allGfForm } = useStaticQuery( 
        graphql`
            query {
                allGfForm {
                    edges {
                        node {
                            formId
                            slug
                            apiURL
                            descriptionPlacement
                            id
                            formFields {
                                label
                                description
                                descriptionPlacement
                                type
                                choices
                                content
                                errorMessage
                                inputMaskValue
                                visibility
                                cssClass
                                placeholder
                                size
                                defaultValue
                                maxLength
                            }
                            button {
                                text
                            }
                            confirmations {
                                message
                            }
                        }
                    }
                }
            }
        `
    )
    return allGfForm
}

const Footer = () => (
  <footer
  className="fixed"
    style={{
      background: `#121212`,
    }}
  > 
      <Container 
      className="partners-container"
      >
        <Row>
            <Col>
                <h2 class="centered-text">Our Partners</h2>
            </Col>
        </Row>
        <Row>
            <Col className = "partners-logo">
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/alert-logic-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/dropbox-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/automate-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/ibm-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/infrascale-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/ingram-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/proofpoint-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/symantec-1.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/09/TechTank.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/09/veracode-final-logo.png"></img>
                <img src="https://www.gbtech.net/wp-content/uploads/2017/08/manage-logo.png"></img>
            </Col>
        </Row>
      </Container>

      <Container
        className = "form-section"
      >
        <Row>
            <Col>
                <h2 className="orange-text light-weight">Be the First!</h2>
                <p className="white-text">Opt-in to our newsletter to stay updated with our latest news and happenings.</p>
                <form name="contact" method="POST" data-netlify="true" action="/page-2/" netlify-honeypot="bot-field">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                        <input type="hidden" name="form-name" value="contact" />
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>

            </Col>

            <Col className = "footer-location-section">
            <h3 className="footer-office">Houston Office</h3>
            <a href="#" className = "orange-text">2200 Space Park Drive,<br></br>
                Suite 400<br></br>
                Houston, TX 77058
            </a>

            <h3 className="footer-office">Galveston Office</h3>
            <a href="#" className = "orange-text">2200 Market Street<br></br>
                Suite 326<br></br>
                Galveston, TX 77550
            </a>

            <div className="footer-nav"><a href="#">Blog</a><a href="#">Sitemap</a><a href="#">Privacy</a></div>
            </Col>    
        </Row> 

      </Container>

      <Container >
      <Row
      className="socialMediaSection">
          <ul
          className = "social-media">
              <li><a href="https://www.facebook.com/GbTechInc/" target="_blank">F</a></li>
              <li><a href="https://www.linkedin.com/company/gb-tech/" target="_blank">L</a></li>
              <li><a href="https://twitter.com/gbtechinc" target="_blank">T</a></li>
          </ul>
          <p>© 2019 GB Tech, Inc. All Rights Reserved</p>
      </Row>

      </Container>
      
  </footer>
)


export default Footer
