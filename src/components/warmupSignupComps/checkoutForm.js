import React from "react";
import axios from "axios";

const CheckoutForm = () => {
  let submitForm = () => {
    axios
      .post(
        "https://eloquent-hawking-0b4899.netlify.com/.netlify/functions/warmup-submission",
        {
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          companyName: document.getElementById("companyName").value,
          email: document.getElementById("email").value,
          ccNumber: document.getElementById("ccNumber").value,
          ccExpirationMonth: document.getElementById("ccExpirationMonth").value,
          ccExpirationYear: document.getElementById("ccExpirationYear").value,
          cvv: document.getElementById("cvv").value,
          priceTierId: document.getElementById("priceTierId").value,
          ccCardHolderName: document.getElementById("cardholderName").value,
        }
      )
      .then(response => {
        if (response.status === 200) {
          console.log("good");
        }
      })
      .catch(error => {
        console.error("bad");
      });
  };

  return (
    <form
      name="contact"
      method="POST"
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
            <input type="text" name="first" id="firstName" />
          </div>
          <div className="lastName">
            <label>Last Name</label>
            <input type="text" name="Last" id="lastName" />
          </div>
        </div>
        <div className="company">
          <label>Company Name</label>
          <input type="text" name="company" id="companyName" />
        </div>
        <div className="email">
          <label>What's Your Email Address?</label>
          <input type="text" name="company" id="email" />
        </div>
        <div className="field email-field">
          <label>Select Price Tier</label>
          <select id="priceTierId" name="warmup-level" required>
            <option default value="1" className="tier-1">
              TESTIN' IT: 3-Months Investment | $1,500.00/mo
            </option>
            <option value="2" className="tier-2">
              FEELIN' IT: 6-Months Investment | $1,400.00/mo
            </option>
            <option value="3" className="tier-3">
              LOVIN' IT: 12-Months Investment | $1,300.00/mo
            </option>
          </select>
          <div className="total">
            <p className="total-p">TOTAL</p>
            <p className="price-container">
              <span className="dollar-sign">$</span>
              <span className="price-hook">1,500</span>
            </p>
            <img
              src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2020/02/Group-3452-1.png"
              alt="credit-cards"
            />
          </div>
          <label>Card Number</label>
          <input type="text" name="company" id="ccNumber" />
          <div className="billing-info"></div>
          <div className="exp-date-and-cvv">
            <div>
              <label>Expiration Month</label>
              <select id="ccExpirationMonth" name="expiration-month" required>
                <option default value="1">
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
              <select id="ccExpirationYear" name="expiration-year" required>
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
              <input type="text" name="company" id="cvv" />
            </div>
          </div>
          <label>Cardholder Name</label>
          <input type="text" name="company" id="cardholderName" />
        </div>

        <div className="checkbox-part">
          <input type="checkbox" className="checkbox" required />
          <label>Keep Me Updated with Emails and Newsletters</label>
        </div>
        <div className="checkbox-part">
          <input type="checkbox" className="checkbox" required />
          <label for="pmt-method">Make this my preferred payment method</label>
        </div>
        <div className="checkbox-part">
          <input type="checkbox" className="checkbox" required />
          <label>
            I have read and agree to the terms of service, and the privacy
            policy
          </label>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className="sbmt-btn">
          <button type="submit" className="btn pink-button">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
