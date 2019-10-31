import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header
    className="fixed"
    style={{
      fontFamily: 'Poppins',
      textTransform: 'uppercase'
    }}
  >
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

  <nav className="mainHeader navbar" role="navigation">

    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img className="logo" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/TD-logo-w.png"/>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="/about-us/" class="navbar-item">
        About
      </a>
      <a class="navbar-item">
        Process
      </a>
      <a class="navbar-item">
        Reviews
      </a>
      <a class="navbar-item">
        Portfolio
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Capabilities
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button ">
            Marketing Warmup
          </a>
          <a class="button is-light">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
  </nav>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
