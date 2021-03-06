import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import { Link } from "gatsby";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";

import YourVideo from "../components/home_video_player/HomeVideoPlayer";

const IndexPage = () => {
  useEffect(() => {});

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-page">
        <Container className="hero-section transparent-hero container flexed">
          <Row className="two-columns">
            <Col className="content-container column">
              <h1 className="white-text max-width-600 uppercase">
                We Are Your Innovative Channel Marketing Agency
              </h1>
              <p className="white-text subtext max-width-550">
                We’ve generated over 100,000 leads for MSPs and counting
              </p>
              <div className="asSeen">
                <p className="as-seen-text">As seen in:</p>
                <a
                  href="https://www.forbes.com/sites/forbesagencycouncil/2018/07/26/12-public-speaking-tips-to-make-your-speech-more-impactful/#33ad1ae3f16f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/Forbes.svg"
                    alt="forbes"
                  />
                </a>
                <a
                  href="https://www.channelpronetwork.com/article/solid-gold-marketing-campaigns?page=0%2C0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="margin-left-25px"
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/ChannelPro.svg "
                    alt="chanelpro"
                  />
                </a>
              </div>
            </Col>
            <Col className="content-container column video-container first-one">
              <video
                className="play-icon"
                src="https://tdgatsbytest.wpengine.com/wp-content/uploads/home-videos/Demoreel%20Square_R.mp4"
                alt="TRIdigital media team"
                autoPlay
                loop
                muted
              ></video>
              <YourVideo />
            </Col>
          </Row>
          <span className="scroll-icon">
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </span>
          <svg
            className="rotating"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 288 288"
          >
            <linearGradient
              id="PSgrad_0"
              x1="70.711%"
              x2="0%"
              y1="70.711%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgb(255,22,136)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(254,122,6)" stopOpacity="1" />
            </linearGradient>
            <path fill="url(#PSgrad_0)">
              <animate
                repeatCount="indefinite"
                attributeName="d"
                dur="1200s"
                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                
                
                M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                C48.9,198.6,57.8,191,51,171.3z;
                
                M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"
              />
            </path>
          </svg>
          <img
            className="accent-gradient-circle"
            src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/gradient-circle.svg"
            alt=""
          ></img>
        </Container>
        <Container className="blue-background collateral-section pos-rel">
          <Row>
            <Col className="content-container centered-text compressed-content">
              <h2 className="white-text" id="next">
                Marketing As Unique As YOU Are
              </h2>
              <p className="white-text">
                The biggest mistake IT companies make when developing their
                marketing strategy is that they build it around marketing the
                services they offer. But the services you offer don't make you
                different -- in fact, it is the one thing that makes you just
                like everyone else.
              </p>
              <p className="white-text">
                What truly makes you different is your vision, your culture,
                your process, your people and your infrastructure. Marketing
                those unique differentiators is the key to marketing success.
              </p>
            </Col>
          </Row>
          <div className="play-vid-div">
            <Waypoint
              onEnter={() => {
                document.querySelectorAll(".site-img").forEach(element => {
                  element.classList.add("animate");
                });
              }}
            />
          </div>
          <div className="home-animation-section">
            <img
              className="site-img one"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Dash2.png"
              alt=""
            ></img>
            <img
              className="site-img two"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Compass.png"
              alt=""
            ></img>
            <img
              className="site-img three"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Brochure.png"
              alt=""
            ></img>
            <img
              className="site-img four"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Imagis.png"
              alt=""
            ></img>
            <img
              className="site-img five"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Group-3022.png"
              alt=""
            ></img>
            <img
              className="site-img six"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Business_Card.png"
              alt=""
            ></img>
            <img
              className="site-img seven"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Group-3020.png"
              alt=""
            ></img>
            <img
              className="site-img eight"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/BECA.png"
              alt=""
            ></img>
            <img
              className="site-img nine"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Easetech.png"
              alt=""
            ></img>
            <img
              className="site-img ten"
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Secure_Net.png"
              alt=""
            ></img>
          </div>
          <img
            src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/white-swoop.svg"
            alt="white-curve"
            className="white-swoop"
          ></img>
        </Container>
        <Container className="powers-section flexed max-width-fix top-layer">
          <Row className="two-columns full-width-row content-left align-middle top-layer">
            <Col className="content-container max-width-children">
              <h2 className="blue-text smaller">
                Unleash YOUR True Superpowers
              </h2>
              <p>
                Your most competitive advantage is not what you do but how you
                do it.
              </p>
              <p>
                The process you created is a direct reflection of your
                philosophy around support and customer service.{" "}
              </p>
              <p className="pink-text heavy-weight">
                Leverage that and create marketing that’s unique.
              </p>
              <a className="white-text pink-button hide-me" href="/process">
                Learn More{" "}
              </a>
            </Col>
            <Col className="content-container center-image-container video-collage">
              <div className="video-1">
                <video
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/Computex%204%20Export_R.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <p>
                    If you are reading this, it is because your browser does not
                    support the HTML5 video element.
                  </p>
                </video>
              </div>
              <div className="video-2">
                <video
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/Royal-It-4-Export_R%20%281%29.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <p>
                    If you are reading this, it is because your browser does not
                    support the HTML5 video element.
                  </p>
                </video>
              </div>
              <div className="video-3">
                <video
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/BEI-%E2%80%93-4-export_R%20%281%29.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <p>
                    If you are reading this, it is because your browser does not
                    support the HTML5 video element.
                  </p>
                </video>
              </div>
              <div className="video-4">
                <video
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/GB-Tech-4-Export_R%20%281%29.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <p>
                    If you are reading this, it is because your browser does not
                    support the HTML5 video element.
                  </p>
                </video>
              </div>
              <div className="video-5">
                <video
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/Stronghold-Data-4-export_R%20%281%29.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <p>
                    If you are reading this, it is because your browser does not
                    support the HTML5 video element.
                  </p>
                </video>
              </div>
              <div className="video-6">
                <video
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/TrendMicro_R.mp4"
                  autoPlay
                  muted
                  loop
                >
                  <p>
                    If you are reading this, it is because your browser does not
                    support the HTML5 video element.
                  </p>
                </video>
              </div>
            </Col>
          </Row>
          <img
            className="blob-graphic"
            src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/clear-blob.svg"
            alt=""
          ></img>
        </Container>
        <Container className="target-section max-width-fix top-layer padding-top-one-fifty">
          <Row className="two-columns full-width-row content-right align-middle top-layer">
            <Col className="content-container video-container">
              <video
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2019/10/Lead-Categorizing-Export_v2R.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="hide-on-mobile"
              >
                <p>
                  If you are reading this, it is because your browser does not
                  support the HTML5 video element.
                </p>
              </video>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/03/Leads.png"
                alt="honey-data"
                className="show-on-mobile"
              />
            </Col>
            <Col className="content-container">
              <h2 className="blue-text smaller">
                TARGET the Customers You Want
              </h2>
              <p>
                You know the kind of customers you want. Your IT marketing
                strategy should focus on attracting the customers that are the
                best fit for your organization.
              </p>
              <p>
                Stop dealing with difficult customers who aren’t a good match
                and{" "}
                <span className="pink-text heavy-weight">
                  start focusing on growing your business the right way.
                </span>
              </p>
              <Link className="white-text pink-button hide-me" to="/process">
                Learn More{" "}
              </Link>
            </Col>
          </Row>
          <img
            className="blob-graphic"
            src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/svg/clear-blob.svg"
            alt=""
          ></img>
        </Container>
        <Container className="flexed max-width-fix outsmart-container top-layer padding-top-zero">
          <Row className="two-columns full-width-row content-left align-middle top-layer">
            <Col className="content-container">
              <h2 className="blue-text smaller">Outsmart Your Competition</h2>
              <p>
                Empower your sales team the way you empower your engineers.
                Leverage innovative technology and amazing marketing materials
                to help your sales team perfectly communicate your vision.
              </p>
              <p>
                When this is done properly,{" "}
                <span className="heavy-weight pink-text">
                  you’ll convert more MSP leads to customers than ever before.
                </span>
              </p>
              <Link className="white-text pink-button hide-me" to="/process">
                Learn More{" "}
              </Link>
            </Col>
            <Col className="content-container video-container">
              <video
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/home-videos/Send-Marketing-COllaterall_R_v2%20%281%29.mp4"
                autoPlay
                muted
                loop
              >
                <p>
                  If you are reading this, it is because your browser does not
                  support the HTML5 video element.
                </p>
              </video>
            </Col>
          </Row>
        </Container>

        <Container className="cta-container">
          <Row className="">
            <Col className="cta-card box-shadow">
              <h2 className="white-text compressed-text">
                See How We Empower YOUR Brand.
              </h2>
              <Link className="white-text blue-button" to="/process">
                Take the First Step{" "}
              </Link>
            </Col>
            <Waypoint
              onEnter={() =>
                document.querySelector(".cta-card").classList.add("slide-up")
              }
            />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
