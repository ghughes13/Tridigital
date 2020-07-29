import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right className="navbar-burger">
        <Link id="home" className="menu-item" to="/about-us">
          About
        </Link>
        <Link id="about" className="menu-item" to="/process">
          Process
        </Link>
        <Link id="reviews" className="menu-item" to="/reviews">
          Reviews
        </Link>
        <Link id="warmup" className="menu-item" to="/marketing-warmup/">
          Marketing Warmup
        </Link>
        <Link id="contact" className="menu-item" to="/custom-marketing">
          Custom Marketing
        </Link>
      </Menu>
    );
  }
}

export default Burger;
