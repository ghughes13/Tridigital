import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";

import HoneyPopUp from "../HoneyNotification/HoneyPopUp";

import "./footer.scss";

const Footer = () => (
  <footer className="fixed">
    <Row>
      <Col>
        <h2>Address</h2>
        <a
          href="https://goo.gl/maps/cQfW739BoQkuatZX9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>6600 Chase Oaks Blvd, Suite 170,</p>
          <p>Plano, TX 75074-5483</p>
        </a>
        <p>
          <a href="tel:2142997399" target="_blank" rel="noopener noreferrer">
            Phone: (214) 299-7399
          </a>
        </p>
        <p>
          <a
            href="mailto:info@tridigitalmarketing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email: info@tridigitalmarketing.com
          </a>
        </p>
        <img
          className="certGraphic"
          src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/10/google-partners.jpg"
          alt="google partners"
        ></img>
        <img
          className="certGraphic"
          src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/10/honey-cert.jpg"
          alt="honey partner"
        ></img>
      </Col>
      <Col>
        <h2>Connect</h2>
        <p>
          <Link to="/contact-us">Contact Us</Link>
        </p>
        <ul>
          <li>
            <a
              href="https://twitter.com/tridigitalmktg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/twitter.svg"
                alt="twitter"
              ></img>
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/tridigitalmarketing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/fb.svg"
                alt="facebook"
              ></img>
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tridigitalmarketing/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/instagram.svg"
                alt="instagram"
              ></img>
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/leadmagztraining/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/youtube.svg"
                alt="youtube"
              ></img>
              Youtube
            </a>
          </li>
        </ul>
      </Col>
      <Col>
        <h2>Join Our Newsletter</h2>
        <div className="form-container">
          <form
            id="newsletter-form"
            className="Newsletter"
            onSubmit={e => {
              e.preventDefault();
              document.querySelector("#newsletter-form").style.display = "none";
              document.querySelector(".footer-thank-you").style.display =
                "block";
              return false;
            }}
          >
            <div className="field email-field">
              <input
                type="email"
                placeholder="Email"
                className="theInput"
                required
              ></input>
            </div>
            <div className="hide-me field">
              <input
                defaultValue="Newsletter"
                data-value="Newsletter"
                className="theInput formcat"
              ></input>
            </div>
            <div className="form-footer">
              <button className="pink-button" type="submit">
                Send
              </button>
            </div>
          </form>
          <div className="footer-thank-you">
            <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
          </div>
        </div>
      </Col>
    </Row>

    <Row className="socket">
      {/* -- DO NOT USE GATSBY'S Link HERE --*/}
      {/* Changing the a tags to privacy policy, sitemap, or footer to gatsby's Link component breaks the header transparency fix   */}
      <p>
        © 2020 - TRIdigital | <a href="/careers">Careers</a> |{" "}
        <a href="/terms-of-service">Terms of Service</a> |{" "}
        <a href="/privacy-policy">Privacy Policy</a>
      </p>
      <p>
        <a href="/site-map">Sitemap</a> |{" "}
        <a
          href="http://training.tridigitalmarketing.com/?password-protected=login&redirect_to=http%3A%2F%2Ftraining.tridigitalmarketing.com%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Employee Training{" "}
        </a>
      </p>
    </Row>
    <HoneyPopUp />
  </footer>
);

export default Footer;
