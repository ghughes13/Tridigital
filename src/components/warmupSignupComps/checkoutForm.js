import React from "react";

const CheckoutForm = () => {
  return (
    <form
      name="warmup"
      data-netlify="true"
      method="POST"
      netlify-honeypot="bot-field"
    >
      <h3 className="blue-text form-title">
        Complete The Sign Up Form to Get Your Marketing Started
      </h3>
      <div className="what-do-we-call-you">
        <div className="field name-field">
          <label>First Name</label>
          <input type="text" className="theInput" name="first-name" required />
        </div>
        <div className="field">
          <label className="second-label">Last Name</label>
          <input type="text" className="theInput" name="last-name"></input>
        </div>
      </div>
      <br />
      <div className="field email-field">
        <label>Company Name</label>
        <input type="text" className="theInput" required name="company-name" />
      </div>
      <div className="field email-field">
        <label>What’s your email address?</label>
        <input type="email" className="theInput" required name="email" />
      </div>
      <div className="hide-me field">
        <input
          data-form-type="Consultation"
          className="formcat"
          name="honey-data-type"
        />
      </div>
      <button type="submit">Subscribe</button>
      {/* 
        <button type="submit" className="pink-button">
          Take the First Step
        </button>
        */}
    </form>
  );
};

export default CheckoutForm;
