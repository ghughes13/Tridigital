import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row } from "react-bootstrap";
import CheckoutForm from "../components/warmupSignupComps/checkoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CardSection from "../components/cardElement";

const WarmUpPayment = () => {
  // const [apiKey, setApiKey] = useState(
  //   "pk_test_iBoEBxWd15b2eYkC4QCM0PFN00EjezD2Zk"
  // );

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://js.stripe.com/v3/";
  //   script.async = true;

  //   document.body.appendChild(script);
  //   setApiKey("pk_test_iBoEBxWd15b2eYkC4QCM0PFN00EjezD2Zk");
  // });

  // const stripePromise = loadStripe(
  //   "pk_test_iBoEBxWd15b2eYkC4QCM0PFN00EjezD2Zk"
  // );

  return (
    <Layout>
      <SEO title="Warm Up" />
      <div className="warmup-signup">
        <Container className="container pink-gradient-background hero swish">
          <Row className=""></Row>
        </Container>
        <Container className="container white-section">
          <Row>
            <div className="form-container">
              <h1 className="hide-me">
                Complete The Sign Up Form to Get Your Marketing Started
              </h1>
              {/* <Elements stripe={stripePromise}> */}
              <CheckoutForm />
              {/* <CardSection /> */}
              {/* </Elements> */}
              <div className="contact-thank-you">
                <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default WarmUpPayment;
