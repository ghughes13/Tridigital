import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="fixed"
    style={{
      fontFamily: "Poppins",
      textTransform: "uppercase",
    }}
  >
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
    />
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
    ></script>

    <nav className="mainHeader navbar" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            className="logo first-logo"
            src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/TD-logo-w.png"
          />
          <img
            className="logo second-logo"
            src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/12/Group-11.png"
          />
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/about-us/" className="navbar-item">
            About
          </a>
          <a href="/process" className="navbar-item">
            Process
          </a>
          <a className="navbar-item">Reviews</a>
          <a className="navbar-item">Portfolio</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Capabilities</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button ">Marketing Warmup</a>
              <a href="/contact-us" className="button is-light">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
    document.querySelector("header").classList.remove("end-transparency")
  } else {
    document.querySelector("header").classList.add("end-transparency")
  }
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
