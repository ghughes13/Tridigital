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
      <img className="certGraphic" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/google-partners.jpg"></img><img className="certGraphic" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/honey-cert.jpg"></img>
    </Col>
    <Col>
      <h2>Connect</h2>
      <p>Contact Us</p>
      <ul>
        <li><img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/twitter.svg"></img>Twitter</li>
        <li><img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/fb.svg"></img>Facebook</li>      
        <li><img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/instagram.svg"></img>Instagram</li> 
        <li><img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/youtube.svg"></img>Youtube</li>            
      </ul>
    </Col> 
    <Col> 
      <h2>Join Our Newsletter</h2>
      <form>
        <input type="text" placeholder="Email"></input>
        <div className = "form-footer">
          <button className="pink-button" type="submit">Send</button>
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
