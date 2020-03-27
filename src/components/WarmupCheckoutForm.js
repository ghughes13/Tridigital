import React, { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const CheckoutForm = () => {
  useEffect(() => {
    getUrlVars();
  });

  let changeColorOfPriceInput = () => {
    let elements = document.querySelectorAll(".edit-color");

    elements.forEach(element => {
      element.classList.remove("pink");
      element.classList.remove("blue");
      element.classList.remove("yellow");
    });

    if (document.getElementById("priceTierId").value == 0) {
      document.getElementById("priceTierId").classList.add("pink");
      document.getElementById("price-container").classList.add("pink");
      document.getElementById("price-hook").innerText = "1,500";
    } else if (document.getElementById("priceTierId").value == 1) {
      document.getElementById("priceTierId").classList.add("blue");
      document.getElementById("price-container").classList.add("blue");
      document.getElementById("price-hook").innerText = "1,400";
    } else if (document.getElementById("priceTierId").value == 3) {
      document.getElementById("priceTierId").classList.add("yellow");
      document.getElementById("price-container").classList.add("yellow");
      document.getElementById("price-hook").innerText = "1,300";
    } else {
      document.getElementById("priceTierId").classList.add("yellow");
      document.getElementById("price-container").classList.add("yellow");
      document.getElementById("price-hook").innerText = "1,300";
    }
  };

  const submitForm = () => {
    const submitButton = document.getElementById("sbmt-form-btn");
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
    submitButton.style.display = "none";
    axios
      .post(
        "https://www.tridigitalmarketing.com/.netlify/functions/warmup-submission",
        JSON.stringify({
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          companyName: document.getElementById("companyName").value,
          email: document.getElementById("email").value,
          ccNumber: document.getElementById("ccNumber").value,
          ccExpirationMonth: document.getElementById("ccExpirationMonth").value,
          ccExpirationYear: document.getElementById("ccExpirationYear").value,
          cvv: document.getElementById("cvv").value,
          priceTierId: document.getElementById("priceTierId").value,
          ccCardHolderName: document.getElementById("ccCardHolderName").value,
        })
      )
      .then(response => {
        if (response.status === 200) {
          window.location.href =
            "https://warmup.tridigitalmarketing.com/thank-you/";
        }
      })
      .catch(error => {
        document.querySelector(".error").style.display = "block";
        loader.style.display = "none";
        submitButton.style.display = "block";
      });
  };

  const getUrlVars = () => {
    const vars = {};
    const parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function(m, key, value) {
        vars[key] = value;
      }
    );
    const selectEl = document.getElementById("priceTierId");
    selectEl.value = vars.l;
    changeColorOfPriceInput();
  };

  const validatePromoCode = () => {
    console.log(document.getElementById("promo").value);
    if (document.getElementById("promo").value == "TDCARES") {
      document.querySelectorAll(".price-tier").forEach(option => {
        option.style.display = "none";
        document.getElementById("promo-option").selected = true;
        document.getElementById("promo-option").style.display = "initial";
      });
      document.getElementById("alt-tos").style.display = "initial";
      document.getElementById("original-tos").style.display = "none";
      changeColorOfPriceInput();
    }
  };

  return (
    <form
      name="warmup"
      onSubmit={e => {
        submitForm();
        e.preventDefault();
      }}
    >
      <h3 className="blue-text form-title">
        Complete The Sign Up Form to Get Your Marketing Started
      </h3>
      <div className="form-content">
        <div className="what-do-we-call-you">
          <div className="firstName">
            <label>First Name</label>
            <input type="text" name="firstName" id="firstName" required />
          </div>
          <div className="lastName">
            <label>Last Name</label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
        </div>
        <div className="company">
          <label>Company Name</label>
          <input type="text" name="companyName" id="companyName" required />
        </div>
        <div className="email">
          <label>What's Your Email Address?</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className="promo-code">
          <label>Promo Code</label>
          <input
            type="text"
            name="promoCode"
            id="promo"
            onKeyUp={() => validatePromoCode()}
          />
        </div>
        <div className="field email-field">
          <label>Select Price Tier</label>
          <select
            id="priceTierId"
            name="priceTierId"
            onClick={changeColorOfPriceInput}
            required
            className="edit-color pink"
          >
            <option default value="0" className="tier-1 pink price-tier">
              TESTIN' IT: 3-Months Investment | $1,500.00/mo
            </option>
            <option value="1" className="tier-2 blue price-tier">
              FEELIN' IT: 6-Months Investment | $1,400.00/mo
            </option>
            <option value="2" className="tier-3 yellow price-tier">
              LOVIN' IT: 12-Months Investment | $1,300.00/mo
            </option>
            <option
              value="3"
              className="tier-3 yellow promo-option"
              id="promo-option"
            >
              LOVIN' IT: 12-Months Investment | $1,300.00/mo (Promo)
            </option>
          </select>
          <div className="total">
            <p className="total-p">TOTAL</p>
            <p id="price-container" className="price-container pink edit-color">
              <span className="dollar-sign">$</span>
              <span id="price-hook" className="price-hook">
                1,500
              </span>
            </p>
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/02/Group-3452-1.png"
              alt="credit-cards"
            />
          </div>
          <label>Card Number</label>
          <input type="text" name="ccNumber" id="ccNumber" />
          <div className="billing-info"></div>
          <div className="exp-date-and-cvv">
            <div>
              <label>Expiration Month</label>
              <select id="ccExpirationMonth" name="ccExpirationMonth" required>
                <option default value="01">
                  01
                </option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div>
              <label>Expiration Year</label>
              <select id="ccExpirationYear" name="ccExpirationYear" required>
                <option default value="2020">
                  2020
                </option>
                <option value="2021">2021</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
                <option value="2034">2034</option>
                <option value="2035">2035</option>
                <option value="2036">2036</option>
                <option value="2037">2037</option>
                <option value="2038">2038</option>
                <option value="2039">2039</option>
              </select>
            </div>
            <div>
              <label>Security Code</label>
              <input type="text" name="cvv" id="cvv" required />
            </div>
          </div>
          <label>Cardholder Name</label>
          <input
            type="text"
            name="ccCardHolderName"
            id="ccCardHolderName"
            required
          />
        </div>

        <div className="checkbox-part">
          <input
            type="checkbox"
            className="checkbox"
            required
            name="newsletter"
          />
          <label>Keep Me Updated with Emails and Newsletters</label>
        </div>
        <div className="checkbox-part">
          <input
            type="checkbox"
            className="checkbox"
            required
            name="paymentmthd"
          />
          <label htmlFor="pmt-method">
            Make this my preferred payment method
          </label>
        </div>
        <div className="checkbox-part">
          <input
            type="checkbox"
            className="checkbox"
            required
            name="privacyTOS"
          />
          <label>
            I have read and agree to the{" "}
            <a
              className="read-me "
              href="/terms-of-service"
              target="_blank"
              id="original-tos"
            >
              terms of service
            </a>
            <a
              id="alt-tos"
              className="read-me"
              href="/promo-code-terms-of-service"
              target="_blank"
            >
              terms of service
            </a>
            , and the{" "}
            <a className="read-me" href="privacy-policy" target="_blank">
              privacy policy
            </a>
          </label>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className="error">
          <p>
            Whoops! Looks like there was a error. Please make sure all form
            fields are completely filled out and double check your credit card
            info.
          </p>
        </div>
        <div className="sbmt-btn">
          <Loader />
          <button type="submit" className="btn pink-button" id="sbmt-form-btn">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
