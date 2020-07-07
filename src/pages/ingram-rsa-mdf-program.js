import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import Yourvideo from "../components/VendorPartnerVideoPlayer";
import "../styles/fortinet-lp.scss";
import IngramPartnerForm from "../components/Ingram-Partner-Form";

const VendorPartnerLP = () => {
  useEffect(() => {
    document.querySelector("footer").style.display = "none";
  });

  return (
    <Layout headerVersion="ingram">
      <SEO title="Vendor partnership program | TRIdigital Marketing" />
      <div className="fortinet-lp">
        <Container className="container fortinet-ingram-background hero swish">
          <Row className="z-index-999">
            <Col className="display-flex content-container column flex-dir-col">
              <h1>INGRAM MICRO & RSA PARTNER ENABLEMENT PROGRAM</h1>
              <a className="fortinet-ingram-btn inline-block" href="#vendor-lp">
                Fill out the form
              </a>
            </Col>
            <Col className="content-container column align-vertical video-container ">
              <video
                className="lp-video box-shadow"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/vendor-lp-video/Ingram%20Micro%20%26amp%3B%20RSA%20Partner%20Enablement.mp4"
                alt="TRIdigital media team"
                id="video-player"
                autoPlay
                loop
                muted
              ></video>
              <Yourvideo videoID={"qj86vgt3fi"} />
            </Col>
          </Row>
        </Container>
        <Container className="container white-section">
          <Row>
            <Col className="content-container max-width-children grey-text">
              <h2 className="blue-text smaller centered-text margin-top-0">
                Campaign Details
              </h2>
              <p className="centered-text">
                Ingram Micro and RSA are committed to the success of our
                partners and are providing a program to help you navigate the
                process of managing and executing sophisticated, digital
                marketing. This program has been built using a partner-first,
                marketing automation platform called Honey. The program includes
                a 3-month RSA campaign, personalized with your brand and
                executed on your behalf, by our partner TRIdigital.
              </p>
              <p className="centered-text">
                Fees do apply, however, partners can utilize RSA co-op or
                proposal funds to participate. To learn about these funds please
                contact Michael Kline.
                <a
                  href="mailto:Michael.Kline@ingrammicro.com"
                  className="ingram-partner-btn"
                  target="_blank"
                >
                  Michael.Kline@ingrammicro.com
                </a>
              </p>
            </Col>
          </Row>
          <div className="contain-overflow ">
            <div className="blue-container">
              <h4 className="blue-text smaller centered-text margin-top-0">
                In this program you will receive:
              </h4>
              <div className="flex-row">
                <div className="content-container column">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203667.png"
                    alt="collaterals"
                  />
                  <p>6 Email Campaigns</p>
                </div>
                <div className="content-container column ">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203668.png"
                    alt="collaterals"
                  />
                  <p>6 Personal Marketing Plain Emails</p>
                </div>
                <div className="content-container column ">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203669.png"
                    alt="collaterals"
                  />
                  <p>3 Branded Collateral Pieces </p>
                </div>
              </div>
              <div className="flex-row">
                <div className="content-container column">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203670.png"
                    alt="collaterals"
                  />
                  <p>3 Branded Landing Pages</p>
                </div>
                <div className="content-container column ">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203671.png"
                    alt="collaterals"
                  />
                  <p>Access to Honey</p>
                </div>
                <div className="content-container column ">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203672.png"
                    alt="collaterals"
                  />
                  <p>MQL prospect list (up to 2k contacts)</p>
                </div>
              </div>
            </div>
          </div>
          <Row className="blob-container">
            <IngramPartnerForm
              formClassName={"RSA"}
              formName={"ingram-rsa-lp"}
              formActionURL={"/ingram-rsa-program"}
              additionaltext={
                "If you have any questions prior to filling out this form, please feel free to reach out to creatives@tridigitalmarketing.com"
              }
            />
            <div className="contact-thank-you" id="thanks">
              <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
            </div>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default VendorPartnerLP;
