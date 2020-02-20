import React from "react";

const CheckoutForm = () => {
  return (
    // <form
    //   name="contact"
    //   method="POST"
    //   data-netlify="true"
    //   netlify-honeypot="bot-field"
    // >
    //   <input type="text" name="name" placeholder="Name" />
    //   <input type="email" name="email" placeholder="Email" />
    //   <input type="hidden" name="form-name" value="contact" />
    //   <button type="submit">Subscribe</button>
    // </form>

    <form
      name="warmup"
      data-netlify="true"
      method="POST"
      netlify-honeypot="bot-field"
    >
      <h3 className="blue-text form-title">
        Complete The Sign Up Form to Get Your Marketing Started
      </h3>
      <div className="name-container">
        <div className="firstName">
          <label>First Name</label>
          <input type="text" name="firstName" />
        </div>
        <div className="lastName">
          <label>Last Name</label>
          <input type="text" name="LastName" />
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default CheckoutForm;
