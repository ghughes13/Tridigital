import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Burger from "./HamburgerMenu.js";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Header = ({ siteTitle, opaque, headerVersion }) => {
  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (!opaque) {
        if (window.scrollY === 0) {
          document.querySelector("header").classList.remove("end-transparency");
        } else {
          document.querySelector("header").classList.add("end-transparency");
        }
      }
    });
    const script = document.createElement("script");
    script.src = "/static/honey-form-integration.js";
    script.async = true;
    document.body.appendChild(script);
  });

  if (headerVersion === "ingram") {
    //Display Alternate Nav bar for ingram partner pages
    return (
      <header
        className={`fixed ${opaque ? "end-transparency" : ""}`}
        style={{
          fontFamily: "Poppins",
          textTransform: "uppercase",
        }}
      >
        <CookieConsent
          cookieName="myAwesomeCookieName2"
          style={{ background: "#fff", justifyContent: "Center" }}
          buttonStyle={{
            color: "#fff",
            fontSize: "13px",
            background: "#ff3975",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
          contentStyle={{
            color: "#4a4a4a",
            textTransform: "none",
            flex: "initial",
            fontSize: "13px",
          }}
          expires={150}
          acceptOnScroll={true}
          acceptOnScrollPercentage={10}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,700, 900&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        ></script>
        <nav className="mainHeader navbar" role="navigation">
          <div class="navbar-brand center-all dual-logo-fix">
            <div class="rel">
              <img
                class="logo left-0 first-logo ingram-width-fix"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/lenovo-white-real.png"
                alt="tridigital logo white"
              />
              <img
                class="logo left-0 second-logo ingram-width-fix"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/lenovo-white-3.png"
                alt="tridigital logo colored"
              />
            </div>
          </div>
          <div class="navbar-brand center-all dual-logo-fix">
            <div class="rel">
              <img
                class="logo first-logo"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/10/TD-logo-w.png"
                alt="tridigital logo white"
              />
              <img
                class="logo second-logo logo-right-fix"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/12/Group-11.png"
                alt="tridigital logo colored"
              />
            </div>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header
        className={`fixed ${opaque ? "end-transparency" : ""}`}
        style={{
          fontFamily: "Poppins",
          textTransform: "uppercase",
        }}
      >
        <CookieConsent
          cookieName="myAwesomeCookieName2"
          style={{ background: "#fff", justifyContent: "Center" }}
          buttonStyle={{
            color: "#fff",
            fontSize: "13px",
            background: "#ff3975",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
          contentStyle={{
            color: "#4a4a4a",
            textTransform: "none",
            flex: "initial",
            fontSize: "13px",
          }}
          expires={150}
          acceptOnScroll={true}
          acceptOnScrollPercentage={10}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,700, 900&display=swap"
          rel="stylesheet"
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
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/10/TD-logo-w.png"
                alt="tridigital logo white"
              />
              <img
                className="logo second-logo"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/12/Group-11.png"
                alt="tridigital logo colored"
              />
            </a>
            <Burger />
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/Icon.svg"
              className="search"
              alt="flavicon"
            />
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href="/about-us/" className="navbar-item">
                About
              </a>
              <a href="/process" className="navbar-item">
                Process
              </a>
              <a href="/reviews" className="navbar-item">
                Reviews
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a href="/marketing-warmup" className="button first">
                    Marketing Warmup
                  </a>
                  <a href="/custom-marketing" className="button is-light">
                    Custom Marketing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
