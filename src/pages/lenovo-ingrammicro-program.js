import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";
import axios from "axios";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import Yourvideo from "../components/vendor_partner_video_player/VendorPartnerVideoPlayer";
import Loader from "../components/loader/Loader";
import ParallaxImageFixer from "../components/parallax_image_fixer/ParallaxImageFixer";

import "../styles/lenovo-lp.scss";

const VendorPartnerLP = () => {
  useEffect(() => {
    document.querySelector("footer").style.display = "none";
  });

  return (
    <ParallaxProvider>
      <Layout headerVersion="ingram">
        <SEO
          title="
Lenovo Partner Enablement Program | TRIdigital Marketing
"
          description="
Ingram Micro and Lenovo are committed to the success of your business. Learn how we can help with your marketing strategy and generate leads.
"
        />
        <div className="lenovo-lp">
          <Container className="container fortinet-ingram-background hero swish">
            <Row className="z-index-999">
              <Col className="display-flex content-container column flex-dir-col">
                <h1>Ingram micro & Lenovo Partner Enablement Program</h1>
                <Link
                  className="fortinet-ingram-btn inline-block"
                  to="vendor-lp"
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Fill out the Questionnaire
                </Link>
              </Col>
              <Col className="content-container column align-vertical video-container ">
                <video
                  className="lp-video box-shadow"
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/vendor-lp-video/Vendor_Lenovo_15_sec_loop_AA_V01.mp4"
                  alt="TRIdigital media team"
                  id="video-player"
                  autoPlay
                  loop
                  muted
                ></video>
                <Yourvideo videoID={"e54tqpry51"} />
              </Col>
            </Row>
          </Container>
          <Container className="container white-section bottom-swoosh">
            <Row>
              <Col className="content-container max-width-children grey-text margin-bottom-200 z-index-10">
                <h3 className="blue-text smaller centered-text margin-top-0 ">
                  Details about the program
                </h3>
                <p className="centered-text">
                  Ingram Micro and Lenovo are committed to the success of your
                  business. To support that mission, we’re working with
                  TRIdigital and Honey to provide our qualifying partners with
                  personally branded and fully automated marketing campaigns,
                  designed around five of your best-selling solutions in
                  addition to one month of Lenovo specific content. You will
                  receive a “white glove” experience where each campaign will be
                  executed on your behalf, over the course of 6 months. The
                  program includes:
                </p>
              </Col>
            </Row>
            <Row className="whats-included">
              <Parallax y={[-110, -30]} tagOuter="div" className="show-mobile">
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Whats-included.png"
                  alt="What's included"
                />
              </Parallax>
              <Parallax
                y={[-60, -40]}
                tagOuter="div"
                className="hide-on-mobile"
              >
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Whats-included.png"
                  alt="What's Included"
                />
              </Parallax>
            </Row>
            <Row className="right-blob blob">
              <Parallax y={[0, 60]} tagOuter="div">
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/lenovo-lp/Path%20648.svg"
                  alt="step-1-img"
                />
              </Parallax>
            </Row>
            <Row className="included mobile-reverse">
              <Col className="text-container">
                <h2 className="blue-text">campaigns</h2>
                <h4>12 Designed Emails </h4>
                <p>
                  2 branded, visually-driven emails a month to establish brand
                  association and drive clicks to content
                </p>
              </Col>
              <Col className="centered-text">
                <img
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3679.png"
                  alt="Email Design"
                />
              </Col>
            </Row>
            <Row className="included margin-top-100 ">
              <Col>
                <img
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3680.png"
                  alt="Collatteral"
                />
              </Col>
              <Col className="text-container">
                <h2 className="yellow-text">collateral</h2>
                <h4>6 Branded Collateral pieces</h4>
                <p>
                  Tried-and-tested whitepapers and eBooks that explain solutions
                  and generate interest in your brand
                </p>
              </Col>
            </Row>
            <Row className="left-blob blob">
              <Parallax y={[-20, 30]} tagOuter="div">
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/lenovo-lp/Path%20378.svg"
                  alt="step-1-img"
                />
              </Parallax>
            </Row>
            <Row className="included margin-top-100 mobile-reverse">
              <Col className="text-container">
                <h2 className="pink-text">honey</h2>
                <h4>Unlimited user access to Honey </h4>
                <p>
                  Complete, zero restriction access to the full Honey CRM suite
                  to run all of your sales and marketing activities through
                </p>
              </Col>
              <Col className="centered-text">
                <img
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3681.png"
                  alt="Honey Access"
                />
              </Col>
            </Row>
            <Row className="included margin-top-100">
              <Col>
                <img
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3682.png"
                  alt="Emails"
                />
              </Col>
              <Col className="text-container">
                <h2 className="teal-text">emails</h2>
                <h4>12 Personal marketing plan emails</h4>
                <p>
                  Plain-text emails that are written as one-to-ones to establish
                  a more personal approach with prospects
                </p>
              </Col>
            </Row>
            <Row className="included margin-top-100 mobile-reverse">
              <Col className="text-container">
                <h2 className="purple-text">landing pages</h2>
                <h4>6 Branded landing pages </h4>
                <p>
                  A branded landing page for each of your selected solutions
                  that gives a complete overview of the solution
                </p>
              </Col>
              <Col className="centered-text">
                <img
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3683.png"
                  alt="Branded Landing Pages"
                />
              </Col>
            </Row>
            <Row className="included margin-top-100">
              <Col>
                <img
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3684.png"
                  alt="MQL List"
                />
              </Col>
              <Col className="text-container">
                <h2 className="blue-text">mql</h2>
                <h4>MQL prospect list (up to 2k contacts) </h4>
                <p>
                  Customized contact lists according to your requirements that
                  you can begin marketing to immediately
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="container blue-section">
            <Row>
              <h2 className="white-text centered-text margin-top-300">
                What the execution of your marketing looks like
              </h2>
            </Row>
            <Row className="step-container first-step">
              <h3 className="blue-text">Step 1:</h3>
              <p>
                TRIdigital sources a marketing-qualified list according to your
                specifications
              </p>
            </Row>
            <Row>
              <Parallax className="parallax-block" y={[-30, 10]} tagOuter="div">
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3678.png"
                  alt="step-1-img"
                />
              </Parallax>
            </Row>
            <Row className="step-container">
              <h3 className="blue-text">Step 2:</h3>
              <p>
                Your first month will include co-branded Lenovo content. Then
                you select five additional solution categories, to which we’ll
                create branded campaign assets to include content, landing pages
                and emails to market those solutions.
              </p>
            </Row>
            <Row>
              <Parallax
                className="parallax-block"
                y={[-30, 10]}
                tagOuter="figure"
              >
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/05_floating_ppl-0-00-06-15.png"
                  alt="step-1-img"
                />
              </Parallax>
            </Row>
            <Row className="step-container">
              <h3 className="blue-text">Step 3:</h3>
              <p>
                Your automated marketing begins at the cadence of one email per
                week
              </p>
            </Row>
            <Row>
              <Parallax className="parallax-block" y={[-30, 10]} tagOuter="div">
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/Group-3677.png"
                  alt="step-1-img"
                />
              </Parallax>
            </Row>
            <Row className="step-container">
              <h3 className="blue-text">Step 4:</h3>
              <p>
                With your unfettered access to Honey, you maintain complete
                visibility over the performance of your marketing, with the
                option to conduct your own follow ups and tasking in one central
                hub.
              </p>
            </Row>
            <Row>
              <Parallax className="parallax-block" y={[-30, 10]} tagOuter="div">
                <ParallaxImageFixer
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/04/06_floating_graphs-2-0-00-08-12.png"
                  alt="step-1-img"
                />
              </Parallax>
            </Row>
          </Container>
          <Container className="container white-section">
            <Row className="blob-container">
              <form
                id="vendor-lp"
                className="Lenovo"
                method="POST"
                name="lenovo-ingram-lp"
                action="/lenovo-ingrammicro-program/#thanks"
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
                      console.log(res);
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
                <input type="hidden" name="bot-field" />
                <h3 className="blue-text form-title centered-text">
                  Ready to Start <br />
                  Generating Leads?
                </h3>
                <div className="form-content margin-top-60">
                  <div className="PBID">
                    <label htmlFor="PBID">
                      Please Provide your Lenovo BPID
                    </label>
                    <input type="text" name="PBID" id="PBID" required />
                  </div>
                  <div className="company-name company-field">
                    <label htmlFor="comapny">
                      Please write your company name as you would like to see it
                      written in all your marketing assets
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      id="company"
                      required
                    />
                  </div>
                  <div className="company-logo">
                    <label htmlFor="logo">
                      Please provide your logo in svg, eps or ai format/s
                    </label>
                    <input type="file" name="company-logo" id="logo" required />
                  </div>
                  <div className="contact-info">
                    <label htmlFor="contact-info">
                      Please provide your company contact information as you
                      would like to see it on your marketing assets (phone,
                      address, support email)
                    </label>
                    <textarea name="contact-info" id="contact-info" required />
                  </div>
                  <div className="website-url">
                    <label htmlFor="website-url">
                      What's your website URL?
                    </label>
                    <input name="website-url" id="website-url" required />
                  </div>
                  <div className="slogan">
                    <label htmlFor="slogan">
                      Do you have a slogan or tagline? Type it below
                    </label>
                    <input name="slogan" id="slogan" required />
                  </div>
                  <div className="address">
                    <label htmlFor="address">
                      Company Address (If more than one, add those as well)
                    </label>
                    <textarea name="address" id="address" required />
                  </div>
                  <div className="branding-colors">
                    <label htmlFor="branding-colors">
                      Please provide your company branding colors. Your primary
                      color and your secondary color. Please provide this by hex
                      code (ex. #1F54A7)
                    </label>
                    <textarea
                      name="branding-colors"
                      id="branding-colors"
                      required
                    />
                  </div>
                  <div className="slogan">
                    <label htmlFor="slogan">
                      Does the company use a specific font(s)? List below
                      (optional)
                    </label>
                    <input name="slogan" id="slogan" required />
                  </div>
                  <div className="primary-contact margin-top-30">
                    <p>
                      Please provide a primary contact to be added to Honey,
                      this person should be able to respond or route lead
                      activities or sales activities. Please provide name, email
                      and phone number
                    </p>
                    <div className="name name-field">
                      <label className="blue-label" htmlFor="firstName">
                        Name
                      </label>
                      <input type="text" name="name" id="firstName" required />
                    </div>
                    <div className="position">
                      <label className="blue-label" htmlFor="position">
                        Position
                      </label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        required
                      />
                    </div>
                    <div className="email margin-top-20 email-field">
                      <label className="blue-label" htmlFor="email">
                        Email
                      </label>
                      <input type="email" name="email" id="email" required />
                    </div>
                    <div className="phone margin-top-20">
                      <label className="blue-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input type="tel" name="phone" id="phone" required />
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
                      required
                    />
                  </div>
                  <div className="other-emails">
                    <label htmlFor="other-emails">
                      If different then the above person, what email address
                      would you like emails to come from? (ex.
                      johndoe@companyurl.com or company@companyurl.com)
                    </label>
                    <input
                      type="text"
                      name="other-emails"
                      id="other-emails"
                      required
                    />
                  </div>
                  <div className="form-submission-email">
                    <label htmlFor="form-submission-email">
                      What email would you like form submission to go to? (ex.
                      sales@companyurl.com or johndoe@companyurl.com)
                    </label>
                    <input
                      type="text"
                      name="form-submission-email"
                      id="form-submission-email"
                      required
                    />
                  </div>
                  <p className="margin-top-30">
                    What’s the priority of solutions/services you would like to
                    market? Number 1 - 12. *Note: your priority will determine
                    the month it will be sent out. Example: 1= Month 1 of your
                    engagement. This cannot be changed once set. Lenovo content,
                    plus your top five selections are what will be marketed
                    through this program.
                  </p>
                  <div className="rankings">
                    <div className="backup-and-disaster-recovery">
                      <input
                        type="text"
                        name="backup-and-disaster-recovery"
                        id="backup-and-disaster-recovery"
                        required
                      />{" "}
                      <label htmlFor="backup-and-disaster-recovery">
                        Backup and Disaster Recovery
                      </label>
                    </div>
                    <div className="unified-communication">
                      <input
                        type="text"
                        name="unified-communication"
                        id="unified-communication"
                        required
                      />{" "}
                      <label htmlFor="unified-communication">
                        Unified Communication
                      </label>
                    </div>
                    <div className="managed-services">
                      <input
                        type="text"
                        name="managed-services"
                        id="managed-services"
                        required
                      />{" "}
                      <label htmlFor="managed-services">Managed Services</label>
                    </div>
                    <div className="virtualization">
                      <input
                        type="text"
                        name="virtualization"
                        id="virtualization"
                        required
                      />{" "}
                      <label htmlFor="virtualization">Virtualization</label>
                    </div>
                    <div className="cybersecurity">
                      <input
                        type="text"
                        name="cybersecurity"
                        id="cybersecurity"
                        required
                      />{" "}
                      <label htmlFor="cybersecurity">Cybersecurity</label>
                    </div>
                    <div className="consulting">
                      <input
                        type="text"
                        name="consulting"
                        id="consulting"
                        required
                      />{" "}
                      <label htmlFor="consulting">Consulting</label>
                    </div>
                    <div className="cloud-computing">
                      <input
                        type="text"
                        name="cloud-computing"
                        id="cloud-computing"
                        required
                      />{" "}
                      <label htmlFor="cloud-computing">Cloud Computing</label>
                    </div>
                    <div className="professional-services">
                      <input
                        type="text"
                        name="professional-services"
                        id="professional-services"
                        required
                      />{" "}
                      <label htmlFor="professional-services">
                        Professional Services
                      </label>
                    </div>
                    <div className="managed-security">
                      <input
                        type="text"
                        name="managed-security"
                        id="managed-security"
                        required
                      />{" "}
                      <label htmlFor="managed-security">Managed Security</label>
                    </div>
                    <div className="regulatory-compliance">
                      <input
                        type="text"
                        name="regulatory-compliance"
                        id="regulatory-compliance"
                        required
                      />{" "}
                      <label htmlFor="regulatory-compliance">
                        Regulatory Compliance
                      </label>
                    </div>
                    <div className="voip">
                      <input type="text" name="voip" id="voip" required />{" "}
                      <label htmlFor="voip">VoIP</label>
                    </div>
                    <div className="it-support">
                      <input
                        type="text"
                        name="it-support"
                        id="it-support"
                        required
                      />{" "}
                      <label htmlFor="it-support">IT Support</label>
                    </div>
                  </div>
                  <p className="margin-top-30">
                    You will get 2 eBooks over the course of this program. One
                    will be Lenovo based and the next will be your choice.
                    Please list the solution name of the eBook you'd like
                    created.
                  </p>
                  <div>
                    <div className="first-ebook margin-top-20">
                      <label className="blue-label" htmlFor="first-ebook">
                        eBook Title
                      </label>
                      <input
                        type="text"
                        name="first-ebook"
                        id="first-ebook"
                        required
                      />{" "}
                    </div>
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
                      required
                    />
                  </div>
                  <div className="sell-to">
                    <label htmlFor="sell-to">
                      Which contacts do you prefer to sell to in prospect
                      clients ( CEO, CIO, Directors, manager, etc.)
                    </label>
                    <input type="text" name="sell-to" id="sell-to" required />
                  </div>

                  <div className="service-areas">
                    <label htmlFor="service-areas">
                      What is your services area? ( counties, cities, zip codes)
                    </label>
                    <textarea
                      type="text"
                      name="service-areas"
                      id="service-areas"
                      required
                    />
                  </div>
                  <div className="calling-services-div">
                    <p class="margin-top-30">
                      Would you like to add calling services to your campaign?
                    </p>
                    <div className="calling-services-label-container">
                      <label
                        htmlFor="calling-services"
                        class="calling-services"
                      >
                        Yes
                        <input
                          type="radio"
                          name="service-areas"
                          id="yes"
                          className="send-value"
                          value="yes"
                          required
                        />
                      </label>
                      <label
                        htmlFor="calling-services"
                        class="calling-services"
                      >
                        No
                        <input
                          type="radio"
                          name="service-areas"
                          id="no"
                          className="send-value"
                          value="no"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <p className="DKIM-disclaimer">
                    We will be asking you to set up DKIM to ensure the best
                    possible email results. If you choose to not set up DKIM,
                    your email results may be lower than average.
                  </p>
                  <div className="behalf">
                    <input
                      type="checkbox"
                      name="Send-Emails"
                      id="send-emails"
                      required
                    />
                    <label className="acceptance-label">
                      Click here to accept to have Lenovo send out email
                      campaigns on your behalf
                    </label>
                  </div>
                  <div className="sbmt-btn">
                    <Loader />
                    <p id="error-msg">
                      Looks like there was a problem submitting your form.
                      Please ensure ALL form fields are filled out and try
                      again.
                    </p>
                    <button
                      type="submit"
                      className="btn teal-button"
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
    </ParallaxProvider>
  );
};

export default VendorPartnerLP;
