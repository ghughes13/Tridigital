import React from "react";

const CheckoutForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <h3 className="blue-text form-title">
        Complete The Sign Up Form to Get Your Marketing Started
      </h3>
      <div className="name-container">
        <div className="firstName">
          <label>First Name</label>
          <input type="text" name="first" />
        </div>
      </div>
      <div className="lastName">
        <label>Last Name</label>
        <input type="text" name="Last" />
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default CheckoutForm;
