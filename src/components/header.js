import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Burger from "./burger.js";
import $ from "jquery";

const Header = ({ siteTitle, opaque }) => {
  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (!opaque) {
        if (window.scrollY === 0) {
          document.querySelector("header").classList.remove("end-transparency");
        } else {
          document.querySelector("header").classList.add("end-transparency");
        }
      }

      const honey = (w, d, undefined) => {
        var gravityForms = $('.gplaceholder');
        var honeyFormSettings = [];
        var clientID = 1; //grab clientID from honey
        var listID = 365; //grab listID from honey 
        var formCategory = ['Consultation' , 'Google AdWords' , 'Newsletter' , 'Ask Us Anything' , 'Event' , 'Livestream' , 'Resource Request' , 'Physical Brochure' , 'Career']
         
        let formSetting = (formSelector, formType ) => {
          this.selector = '#' + formSelector; 
          this.listId = listID;
          this.formType = formType;
          this.mappings = {
              firstName : '.name-field input',
              email : '.email-field input',
              comment : '.comment-field textarea'
          };
        } 
      
        let addHoneyScripts = () => {
          var url      = window.location.href;     // Returns full URL
              w._honeySettings = { 
                  clientId: clientID,
                  websiteUrl: url,
                  forms: honeyFormSettings
              }
              var head = d.getElementsByTagName('head')[0];
              var tag = d.createElement('script');
      
              tag.async = 1;
              tag.src = 'https://05ab5854d232fd37cd92-d8310f79ece792c4405f169f3d25ed4a.ssl.cf1.rackcdn.com/honey-forms.js'; 
      
              head.appendChild(tag); 
      
        }
      
        if (gravityForms){  
            for (var i = 0; i < gravityForms.length; i++) {
                var currentForm = $(gravityForms[i]);    
                var formFields = currentForm.find('.gfield');
                //get fields
                for (var j = 0; j < formFields.length; j++) {
                    var currentFormField = $(formFields[j]); 
                    var currentInputField = currentFormField.find('input');
                    for(var k = 0; k < formCategory.length; k++) {
                      if ($(currentInputField).val() === formCategory[k]) {
                          if ($(currentInputField).val() === 'Event') {  
                              listID = 5708;  
                          } 
                        var formSelector = currentForm.attr("id");
                        var formType = formCategory[k];
                        var formSettings = new formSetting( formSelector, formType );
                        honeyFormSettings.push(formSettings);
                      }
                    }
                }
            }
            addHoneyScripts();
        }
      
      };
    });
  });

  return (
    <header
      className={`fixed ${ opaque ? "end-transparency" : ""}`}
      style={{
        fontFamily: "Poppins",
        textTransform: "uppercase",
      }}
    >
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
        href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
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
                <a
                  href="/marketing-warmup"
                  className="button first"
                >
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
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
