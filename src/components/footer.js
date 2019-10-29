import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => (
  <footer
  className="fixed">
  <Row>
    <Col>
      <h2>Address</h2>
      <p>101 E Park Blvd. Suite 101</p>
      <p> Plano, TX 75074</p>
      <p>Phone: (214) 299-7399</p>
      <p>Email: info@tridigitalmarketing.com</p>
    </Col>
    <Col>
      <h2>Connect</h2>
      <p>Contact Us</p>
      <ul>
        <li>Twitter</li>
        <li>Facebook</li>      
        <li>Instagram</li> 
        <li>Youtube</li>            
      </ul>
    </Col>
    <Col> 
      <h2>Join Our Newsletter</h2>
      <form>
        <input type="text" placeholder="Email"></input>
        <div className = "form-footer">
          <button className="pink-btn" type="submit">Send</button>
        </div>
      </form>
    </Col>
  </Row> 

  <Row className = "socket">
    <p>© 2019 - TriDigital   |   Terms if Service   |   Privacy Policy   |   Security Level Agreement </p>
    <p>Sitemap   |   Employee Training</p>
  </Row>
  </footer>
)


export default Footer
