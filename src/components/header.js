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
    <div className="mainHeader">
      <Link to="/">
        <img className="logo" src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/TD-logo-w.png"></img>
      </Link>
      <div class="nav-bar">
      <div class="navigation-container">
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Process</Link></li>
          <li><Link to="/">Reviews</Link></li>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/">Capabilities</Link></li>
        </ul>
      </div>
      <div className = "nav-button-container">        
        <ul>
          <li className="nav-button"><Link to="/">Marketing Warmup</Link></li>
          <li className="nav-button ghost"><Link to="/">Contact Us</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
