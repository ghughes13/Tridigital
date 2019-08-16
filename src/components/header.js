import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="fixed"
    style={{
      background: `rgba(0,0,0,.5)`,
      fontFamily: 'Lato',
    }}
  >
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
    <div className="subHeader"> 
      <ul>
        <li>DIR Information HUB</li>
        <li>Employee Login</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>281.957.7554</li>
      </ul>
    </div>
    <div className="mainHeader">
      <Link to="/">
        <img className="logo" src="https://www.gbtech.net/wp-content/uploads/2017/08/logo.png"></img>
      </Link>
      <ul>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Our Process</Link></li>
        <li><Link to="/">Solutions</Link></li>
        <li><Link to="/">Sucess Stories</Link></li>
        <li><Link to="/">Resources</Link></li>
        <li><Link to="/">Contact Us</Link></li>
      </ul>
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
