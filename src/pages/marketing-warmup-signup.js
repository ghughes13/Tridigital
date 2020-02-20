import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row } from "react-bootstrap";
import CheckoutForm from "../components/warmupSignupComps/checkoutForm";

const WarmUpPayment = () => {
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
              <CheckoutForm />
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
