import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/vendor-lp.scss";

const VendorPartnerLP = () => {
  return (
    <Layout>
      <SEO title="Vendor partnership program | TRIdigital Marketing" />
      <div className="vendor-lp">
        <Container className="container pink-gradient-background hero swish">
          <Row className="z-index-999">
            <Col className="align-vertical content-container column">
              <h1>Vendor Partnership Program</h1>
            </Col>
            <Col className="content-container column">
              <video
                className="play-icon"
                src="https://tdgatsbytest.wpengine.com/wp-content/uploads/home-videos/Demoreel%20Square_R.mp4"
                alt="TRIdigital media team"
                autoPlay
                loop
                muted
              ></video>
            </Col>
          </Row>
        </Container>
        <Container className="container white-section">
          <Row>
            <Col className="content-container max-width-children grey-text">
              <h2 className="blue-text smaller centered-text margin-top-0">
                What we can do
              </h2>
              <p className="centered-text">
                Ingram Micro and Fortinet are committed to the success of your
                business. We have partnered with TRIdigital and Honey CRM to
                create a strategic marketing program built to maximize your
                sales and marketing efforts.
              </p>
              <p className="centered-text">
                We provide branded marketing collateral such as design emails,
                interactive landing pages, infographics and more. You can use
                these pieces to send to clients and prospects while having a
                detailed view of the leads through Honey CRM. With Honey CRM,
                you can execute a strategic funnel development marketing plan
                with a consistent cadence that will generate sales qualified
                leads for your company.
              </p>
            </Col>
          </Row>
          <Row className="blob-container">
            <form
              name="vendor-lp"
              onSubmit={e => {
                e.preventDefault();
              }}
              netlify="true"
              netlify-honeypot="bot-field"
              method="POST"
            >
              <h3 className="blue-text form-title centered-text">
                Ready to Start <br />
                Generating Leads?
              </h3>
              <div className="form-content margin-top-60">
                <div className="company-name">
                  <label>
                    Please write your company name as you would like to see it
                    written in all your marketing assets
                  </label>
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    required
                  />
                </div>
                <div className="company-logo">
                  <label>
                    Please provide your logo in svg, eps or ai format/s
                  </label>
                  <input
                    type="file"
                    name="company-logo"
                    id="company-name"
                    required
                  />
                </div>
                <div className="contact-info">
                  <label>
                    Please provide your company contact information as you would
                    like to see it on your marketing assets (phone, address,
                    support email)
                  </label>
                  <textarea name="contact-info" id="contact-info" required />
                </div>
                <div className="branding-colors">
                  <label>
                    Please provide your company branding colors. Your primary
                    color and your secondary color. Please provide this by hex
                    code
                  </label>
                  <textarea
                    name="branding-colors"
                    id="branding-colors"
                    required
                  />
                </div>
                <div className="primary-contact margin-top-30">
                  <p>
                    Please provide a primary contact to be added to Honey, this
                    person should be able to respond or route lead activities or
                    sales activities. Please provide name, email and phone
                    number
                  </p>
                  <div className="name">
                    <label className="blue-label">Name</label>
                    <input type="text" name="name" id="name" required />
                  </div>
                  <div className="position">
                    <label className="blue-label">Position</label>
                    <input type="text" name="position" id="position" required />
                  </div>
                  <div className="email margin-top-20">
                    <label className="blue-label ">Email</label>
                    <input type="email" name="email" id="email" required />
                  </div>
                  <div className="phone margin-top-20">
                    <label className="blue-label">Phone Number</label>
                    <input type="tel" name="phone" id="phone" required />
                  </div>
                </div>
                <div className="signature-block">
                  <label>
                    Please provide a signature block for the same contact here
                    (copy & paste)
                  </label>
                  <textarea
                    name="signature-block"
                    id="signature-block"
                    required
                  />
                </div>
                <div className="industries margin-top-30">
                  <p>
                    What are the top 3 industries do you sell to? ( healthcare,
                    construction, financial horizontal){" "}
                  </p>
                  <div class="single-input margin-top-20">
                    <label className="blue-label">Industry 1</label>
                    <input
                      type="text"
                      name="industry-1"
                      id="industry-1"
                      required
                    />
                  </div>
                  <div class="single-input margin-top-20">
                    <label className="blue-label">Industry 2</label>
                    <input
                      type="text"
                      name="industry-2"
                      id="industry-2"
                      required
                    />
                  </div>
                  <div class="single-input margin-top-20">
                    <label className="blue-label">Industry 3</label>
                    <input
                      type="text"
                      name="industry-1"
                      id="industry-3"
                      required
                    />
                  </div>
                </div>
                <div className="company-size">
                  <label>
                    What employee size range do you sell to? (1-50,51-75,
                    100-250, 500-5000)
                  </label>
                  <input
                    type="text"
                    name="company-size"
                    id="company-size"
                    required
                  />
                </div>
                <div className="sell-to">
                  <label>
                    Which contacts do you prefer to sell to in prospect clients
                    ( CEO, CIO, Directors, manager, etc.)
                  </label>
                  <input type="text" name="sell-to" id="sell-to" required />
                </div>
                <div className="service-areas">
                  <label>
                    What is your services area? ( counties, cities, zip codes)
                  </label>
                  <textarea
                    type="text"
                    name="service-areas"
                    id="service-areas"
                    required
                  />
                </div>
                <div className="sbmt-btn">
                  <button
                    type="submit"
                    className="btn pink-button"
                    id="sbmt-form-btn"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default VendorPartnerLP;
