import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import { Container, Row, Col } from "react-bootstrap";
import Yourvideo from "../components/vendor_partner_video_player/VendorPartnerVideoPlayer";
import "../styles/fortinet-lp.scss";
import Loader from "../components/loader/Loader";
import axios from "axios";

const VendorPartnerLP = () => {
  return (
    <Layout>
      <SEO title="Vendor partnership program | TRIdigital Marketing" />
      <div className="fortinet-lp">
        <Container className="container fortinet-ingram-background hero swish">
          <Row className="z-index-999">
            <Col className="display-flex content-container column flex-dir-col">
              <h1>STORAGECRAFT PARTNER ENABLEMENT PROGRAM</h1>
              <a className="fortinet-ingram-btn inline-block" href="#vendor-lp">
                Fill out the form
              </a>
            </Col>
            <Col className="content-container column align-vertical video-container ">
              <video
                className="lp-video box-shadow"
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/vendor-lp-video/StorageCraft%20Partner%20Enablement%20.mp4"
                alt="TRIdigital media team"
                id="video-player"
                autoPlay
                loop
                muted
              ></video>
              <Yourvideo videoID={"ry7q7n6e5k"} />
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
                StorageCraft is committed to the success of your business.
                Through our partnership with TRIdigital and Honey, we provide a
                personally branded and automated marketing campaign designed to
                be executed over 2 months.
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
                  <p>4 Email Campaigns</p>
                </div>
                <div className="content-container column ">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203668.png"
                    alt="collaterals"
                  />
                  <p>4 Personal Marketing Plain Emails</p>
                </div>
                <div className="content-container column ">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203669.png"
                    alt="collaterals"
                  />
                  <p>4 Branded Collateral Pieces </p>
                </div>
              </div>
              <div className="flex-row">
                <div className="content-container column">
                  <img
                    className="collaterals"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Group%203670.png"
                    alt="collaterals"
                  />
                  <p>1 Branded Landing Pages</p>
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
            <form
              id="vendor-lp"
              className="Storagecraft"
              method="POST"
              name="storagecraft-lp"
              action="/storagecraft-program/#thanks"
              onSubmit={e => {
                e.preventDefault();
                const submitButton = document.getElementById("sbmt-form-btn");
                const loader = document.querySelector(".loader");
                const formName = document.getElementById("vendor-lp");

                loader.style.display = "block";
                submitButton.style.display = "none";

                fetch(formName.getAttribute("action"), {
                  method: "POST",
                  body: new FormData(document.getElementById("vendor-lp")),
                })
                  .then(res => {
                    if (res.status === 200) {
                      document.querySelector("#vendor-lp").style.display =
                        "none";
                      document.querySelector(
                        ".contact-thank-you"
                      ).style.display = "block";
                    } else {
                      loader.style.display = "none";
                      document.getElementById("error-msg").style.display =
                        "block";
                      submitButton.style.display = "block";

                      axios.post(
                        "https://www.tridigitalmarketing.com/.netlify/functions/errorCatcher",
                        JSON.stringify({
                          res,
                        })
                      );
                    }
                  })
                  .catch(error => {
                    loader.style.display = "none";
                    document.getElementById("error-msg").style.display =
                      "block";
                    submitButton.style.display = "block";

                    console.log(error);

                    axios.post(
                      "https://www.tridigitalmarketing.com/.netlify/functions/errorCatcher",
                      JSON.stringify({
                        error,
                      })
                    );
                  });
              }}
              netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" id="bot" />
              <h3 className="blue-text form-title centered-text">
                Ready to Start <br />
                Generating Leads?
              </h3>
              <div className="form-content margin-top-60">
                <div className="company-name company-field">
                  <label htmlFor="company">
                    Please write your company name as you would like to see it
                    written in all your marketing assets
                  </label>
                  <input
                    type="text"
                    name="company-name"
                    id="company"
                    className="send-value"
                    required
                  />
                </div>
                <div className="company-logo">
                  <label htmlFor="logo">
                    Please provide your logo in svg, eps or ai format/s
                  </label>
                  <input
                    type="file"
                    name="logo"
                    id="logo"
                    className="send-value"
                    required
                  />
                </div>
                <div className="contact-info">
                  <label htmlFor="contact-info">
                    Please provide your company contact information as you would
                    like to see it on your marketing assets (phone, address,
                    support email)
                  </label>
                  <textarea
                    name="contact-info"
                    id="contact-info"
                    className="send-value"
                    required
                  />
                </div>
                <div className="branding-colors">
                  <label htmlFor="branding-colors">
                    Please provide your company branding colors. Your primary
                    color and your secondary color. Please provide this by hex
                    code
                  </label>
                  <textarea
                    name="branding-colors"
                    id="branding-colors"
                    className="send-value"
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
                  <div className="name name-field">
                    <label className="blue-label" htmlFor="firstName">
                      Name
                    </label>
                    <input
                      type="text"
                      className="send-value"
                      name="name"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="position">
                    <label className="blue-label" htmlFor="position">
                      Position
                    </label>
                    <input
                      type="text"
                      className="send-value"
                      name="position"
                      id="position"
                      required
                    />
                  </div>
                  <div className="email margin-top-20 email-field">
                    <label className="blue-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="send-value"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="phone margin-top-20">
                    <label className="blue-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="send-value"
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>
                </div>
                <div className="signature-block">
                  <label htmlFor="signature-block">
                    Please provide a signature block for the same contact here
                    (copy & paste)
                  </label>
                  <textarea
                    name="signature-block"
                    id="signature-block"
                    className="send-value"
                    required
                  />
                </div>
                <div className="industries margin-top-30">
                  <p>
                    What are the top 10 industries you sell to, starting with
                    the most important? (healthcare, construction, financial
                    horizontal){" "}
                  </p>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-1">
                      Industry 1
                    </label>
                    <input
                      type="text"
                      name="industry-1"
                      id="industry-1"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-2">
                      Industry 2
                    </label>
                    <input
                      type="text"
                      name="industry-2"
                      id="industry-2"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-3">
                      Industry 3
                    </label>
                    <input
                      type="text"
                      name="industry-3"
                      id="industry-3"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-4">
                      Industry 4
                    </label>
                    <input
                      type="text"
                      name="industry-4"
                      id="industry-4"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-5">
                      Industry 5
                    </label>
                    <input
                      type="text"
                      name="industry-5"
                      id="industry-5"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-6">
                      Industry 6
                    </label>
                    <input
                      type="text"
                      name="industry-6"
                      id="industry-6"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-7">
                      Industry 7
                    </label>
                    <input
                      type="text"
                      name="industry-7"
                      id="industry-7"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-8">
                      Industry 8
                    </label>
                    <input
                      type="text"
                      name="industry-8"
                      id="industry-8"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-9">
                      Industry 9
                    </label>
                    <input
                      type="text"
                      name="industry-9"
                      id="industry-9"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="single-input margin-top-20">
                    <label className="blue-label" htmlFor="industry-10">
                      Industry 10
                    </label>
                    <input
                      type="text"
                      name="industry-10"
                      id="industry-10"
                      className="send-value"
                      required
                    />
                  </div>
                </div>
                <div className="company-size">
                  <label htmlFor="company-size">
                    What employee size range do you sell to? (1-50,51-75,
                    100-250, 500-5000)
                  </label>
                  <input
                    type="text"
                    name="company-size"
                    id="company-size"
                    className="send-value"
                    required
                  />
                </div>
                <div className="sell-to">
                  <label htmlFor="sell-to">
                    Which contacts do you prefer to sell to in prospect clients
                    ( CEO, CIO, Directors, manager, etc.)
                  </label>
                  <input
                    type="text"
                    name="sell-to"
                    id="sell-to"
                    className="send-value"
                    required
                  />
                </div>
                <div className="service-areas">
                  <label htmlFor="service-areas">
                    What is your services area? ( counties, cities, zip codes)
                  </label>
                  <textarea
                    type="text"
                    name="service-areas"
                    id="service-areas"
                    className="send-value"
                    required
                  />
                </div>
                <div className="field-appointments-to margin-top-50">
                  <p>
                    If you wish, Ingram Micro can help with follow-up support on
                    leads generated through the program. If you choose to opt
                    into this piece of the program, we will call all leads for
                    you to talk through some qualifying questions, and try to
                    set them up with a call with your team. If you will be
                    calling out to leads on your own, please opt-out by leaving
                    this section blank.
                  </p>
                  <label htmlFor="field-appointments-to">
                    If the end user wants to connect with your team, who from
                    your team will field these appointments? *Name/email/phone
                  </label>
                  <textarea
                    type="text"
                    name="field-appointments-to"
                    id="field-appointments-to"
                    className="send-value"
                  />
                </div>
                <div className="times-and-days-for-appointments">
                  <label htmlFor="times-and-days-for-appointments">
                    What time/days can your team be available for these
                    appointments for the rest of the campaign? Should we
                    schedule it whenever the lead is available, or should we
                    adjust to your schedule? Please provide specifics or a
                    Calendy link for us to best coordinate with your team.
                  </label>
                  <textarea
                    type="text"
                    name="times-and-days-for-appointments"
                    id="times-and-days-for-appointments"
                    className="send-value"
                  />
                </div>
                <div className="is-there-a-script">
                  <label htmlFor="is-there-a-script">
                    Do you have a specific script you would like used on the
                    call? Our team can pull from it when needed to talk about
                    your team or yourself in relation to this product offering
                  </label>
                  <textarea
                    type="text"
                    name="is-there-a-script"
                    id="is-there-a-script"
                    className="send-value"
                  />
                </div>
                <p className="DKIM-disclaimer">
                  We will be asking you to set up DKIM to ensure the best
                  possible email results. If you choose to not set up DKIM, your
                  email results may be lower than average.
                </p>
                <div className="sbmt-btn">
                  <Loader />
                  <p id="error-msg">
                    Looks like there was a problem submitting your form. Please
                    ensure ALL form fields are filled out and try again.
                  </p>
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
