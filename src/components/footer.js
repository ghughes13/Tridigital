import React from "react"
import { Row, Col } from "react-bootstrap"

const Footer = () => (
  <footer className="fixed">
    <Row>
      <Col>
        <h2>Address</h2>
        <a href="https://goo.gl/maps/9KwWjzXNR7a4tNsK7" target="_blank">
          <p>101 E Park Blvd. Suite 101</p>
          <p>Plano, TX 75074</p>
        </a>
        <p>
          <a href="tel:2142997399" target="_blank">
            Phone: (214) 299-7399
          </a>
        </p>
        <p>
          <a href="mailto:info@tridigitalmarketing.com" target="_blank">
            Email: info@tridigitalmarketing.com
          </a>
        </p>
        <img
          className="certGraphic"
          src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/google-partners.jpg"
          alt="google partners"
        ></img>
        <img
          className="certGraphic"
          src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/honey-cert.jpg"
          alt="honey partner"
        ></img>
      </Col>
      <Col>
        <h2>Connect</h2>
        <p>Contact Us</p>
        <ul>
          <li>
            <a href="https://twitter.com/tridigitalmktg" target="_blank">
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/twitter.svg"
                alt="twitter"
              ></img>
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/tridigitalmarketing/"
              target="_blank"
            >
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/fb.svg"
                alt="facebook"
              ></img>
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tridigitalmarketing/?hl=en"
              target="_blank"
            >
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/instagram.svg"
                alt="instagram"
              ></img>
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwWkMboAAbFMYIAeC2EXneQ"
              target="_blank"
            >
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/youtube.svg"
                alt="youtube"
              ></img>
              Youtube
            </a>
          </li>
        </ul>
      </Col>
      <Col>
        <h2>Join Our Newsletter</h2>
        <div class="form-container">
          <form
            id="newsletter-form"
            className="Newsletter"
            onSubmit={e => {
              e.preventDefault()
              document.querySelector("#newsletter-form").style.display = "none"
              document.querySelector(".footer-thank-you").style.display =
                "block"
              return false
            }}
          >
            <div className="field email-field">
              <input
                type="email"
                placeholder="Email"
                className="theInput"
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
          <div class="footer-thank-you">
            <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
          </div>
        </div>
      </Col>
    </Row>

    <Row className="socket">
      <p>
        © 2020 - TriDigital | <a href="/terms">Terms if Service</a> |{" "}
        <a href="/privacy">Privacy Policy</a> |{" "}
        <a href="/security">Security Level Agreement </a>
      </p>
      <p>
        <a href="/sitemap">Sitemap</a> |{" "}
        <a
          href="http://training.tridigitalmarketing.com/?password-protected=login&redirect_to=http%3A%2F%2Ftraining.tridigitalmarketing.com%2F"
          target="_blank"
        >
          Employee Training{" "}
        </a>
      </p>
    </Row>
  </footer>
)

export default Footer
