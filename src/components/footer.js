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
      <Container>
        <Row>
            <Col>
                <h2>Our Partners</h2>
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
                <GravityFormForm
                    id={2}
                    formData={allGravityData()}
                    presetValues={{ input_1: 'special_value' }}
                    lambda={process.env.LAMBDA_ENDPOINT}
                />

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
      
  </footer>
)


export default Footer
