import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import InlineVideo from "../components/wistia_inline_video_player/WistiaInlineVideoPlayer";

import "../styles/dedicated-strategy.scss";

const IndexPage = () => {
  useEffect(() => {
    document.querySelector(".fixed").classList.add("brother-nav-fixed");
    document.querySelector(".mainHeader").innerHTML = `
      <nav class="brother-nav mainHeader navbar" role="navigation">
      <div class="left-logo">
        <img class="logo" src="${require("../images/dic/Image 1.png")}" alt="tridigital logo white">
      </div>
      <div class="right-logos">
        <p class="nav-text">Created by:</p>
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-11.png" alt="tridigital logo colored">
      </div>
      </nav>`;
    document.querySelector("footer").style.display = "none";
  });

  return (
    <Layout>
      <SEO title="Home" />
      <div className="brother-strategy">
        <Container className="hero-section transparent-hero container flexed clip-bottom">
          <img
            className="double-lines"
            src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/double-white-lines.png"
          />
          <Row>
            <Col className="content-container column">
              <h1>CREATIVE STRATEGY AND ASSET SUMMARY</h1>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="step-row margin-top-minus-15-perc">
            <Col
              className="content-container column step-number-svg"
              xl={2}
              lg={12}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="272"
                height="223"
                viewBox="0 0 272 223"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_26720"
                      data-name="Rectangle 26720"
                      width="272"
                      height="223"
                      transform="translate(0 967)"
                      fill="#fff"
                      stroke="#707070"
                      stroke-width="1"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Mask_Group_61"
                  data-name="Mask Group 61"
                  transform="translate(0 -967)"
                  clip-path="url(#clip-path)"
                >
                  <text
                    id="_01"
                    data-name="01"
                    transform="translate(0 907)"
                    fill="none"
                    stroke="#073ef3"
                    stroke-width="7"
                    font-size="253"
                    font-family="Poppins-Black, Poppins"
                    font-weight="800"
                  >
                    <tspan x="0" y="266">
                      01
                    </tspan>
                  </text>
                </g>
              </svg>
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="blue-top-bar">THE OVERVIEW</h3>
              <p>
                This go-to-market campaign will be built on the foundation of a
                custom website with a strategic marketing roadmap. We will
                establish ourselves as experts in the healthcare, senior living
                and hospitality industry clients with 25+ employees. In addition
                to healthcare/medical industry clients, we also want to portray
                the business consultant role that leverages technology as a tool
                for better overall care for clients in all verticals.
              </p>
            </Col>
            <Col className="content-container column flex-center" xl={6} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9122-1.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center step-row">
            <Col className="content-container column" xl={4} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9121-1.png" />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="blue-top-bar">THE VISION</h3>
              <p>
                The visual and content identity of Dedicated IT will be
                developed to match the growth and passion of the company. The
                visual takes inspiration from maintaining a modern, sleek
                aesthetic with pops of vibrant colors. The content will speak
                with a focus on portraying value based business outcomes with
                direct yet conversational messaging. The tone of the writing
                will be conversational but more in-depth and not boilerplate.
              </p>
              <p>
                The vision is to portray Dedicated IT as an extension of an
                existing IT team or as the sole technology partner looking to
                achieve the same goals.
              </p>
            </Col>
            <Col
              className="content-container column f-o-0 step-number-svg"
              xl={3}
              lg={12}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="333"
                height="369"
                viewBox="0 0 333 369"
              >
                <text
                  id="_02"
                  data-name="02"
                  transform="translate(7 7)"
                  fill="none"
                  stroke="#073ef3"
                  stroke-width="7"
                  font-size="253"
                  font-family="Poppins-Black, Poppins"
                  font-weight="800"
                >
                  <tspan x="0" y="266">
                    02
                  </tspan>
                </text>
              </svg>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed margin-top-minus-100">
          <Row className="align-items-center step-row">
            <Col
              className="content-container column step-number-svg"
              xl={2}
              lg={12}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="341"
                height="369"
                viewBox="0 0 341 369"
              >
                <text
                  id="_03"
                  data-name="03"
                  transform="translate(7 7)"
                  fill="none"
                  stroke="#073ef3"
                  stroke-width="7"
                  font-size="253"
                  font-family="Poppins-Black, Poppins"
                  font-weight="800"
                >
                  <tspan x="0" y="266">
                    03
                  </tspan>
                </text>
              </svg>
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="blue-top-bar">THE GOAL</h3>
              <p>
                With this website built out and go-to-market strategy, we are
                aiming to accomplish a few goals:
              </p>
              <ul className="blue-bullet-li">
                <li>
                  Portray the fact that Dedicated IT is an expert when it comes
                  to medical/healthcare technology without siphoning our
                  capabilities in other industries as well.
                </li>
                <li>
                  Promote the experience an IT advisor provides and how this
                  service goes above and beyond other MSPs.
                </li>
                <li>
                  Design a well-organized and intuitive website with
                  educational, industry specific, and pain point solving
                  resources.
                </li>
                <li>Establish a consistent voice throughout all copy</li>
              </ul>
            </Col>
            <Col className="content-container column flex-center" xl={6} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9099.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed arrow-right dual-blue-arrows-bottom ">
          <Row className="align-items-center step-row">
            <Col
              className="content-container column blue-dashed-circle top left"
              id="concepts"
            >
              <h2 className="centered-text z-index-10">
                LET’S TALK{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1010"
                  height="250"
                  viewBox="0 0 1010 250"
                >
                  <g
                    id="Group_9121"
                    data-name="Group 9121"
                    transform="translate(-150 -2851)"
                  >
                    <g
                      id="Group_9100"
                      data-name="Group 9100"
                      transform="translate(3992 1837) rotate(90)"
                    >
                      <circle
                        id="Ellipse_1965"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-2"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-3"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-4"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-5"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-6"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-7"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-8"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-9"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-10"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-11"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-12"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-13"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-14"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-15"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-16"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-17"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-18"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-19"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-20"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-21"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-22"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-23"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-24"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 3002)"
                        fill="#073ef3"
                      />
                    </g>
                    <text
                      id="OPTIONS"
                      transform="translate(173 3035)"
                      fill="#e6e6e6"
                      stroke="#073ef3"
                      stroke-width="7"
                      font-size="169"
                      font-family="Poppins-Black, Poppins"
                      font-weight="800"
                    >
                      <tspan x="0" y="0">
                        OPTIONS
                      </tspan>
                    </text>
                    <text
                      id="OPTIONS-2"
                      data-name="OPTIONS"
                      transform="translate(157 3035)"
                      fill="#fff"
                      stroke="#073ef3"
                      stroke-width="7"
                      font-size="169"
                      font-family="Poppins-Black, Poppins"
                      font-weight="800"
                    >
                      <tspan x="0" y="0">
                        OPTIONS
                      </tspan>
                    </text>
                  </g>
                </svg>
              </h2>
            </Col>
          </Row>
        </Container>
        <Container
          className="container flexed blue-slash-background"
          id="options"
        >
          <Row className="align-items-center ">
            <Col className="content-container column card-container">
              <div className="card">
                <img src={require("../images/dic/Group 9132.png")} />
                <p>Concept 1</p>
                <h3>Keeping up with technology isn’t a suggestion</h3>
                <Link
                  href="#concept-1"
                  className="blue-btn"
                  to="concept-1"
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  See More
                </Link>
              </div>
            </Col>
            <Col className="content-container column">
              <div className="card">
                <img
                  className="margin-top-30"
                  src={require("../images/dic/Group 9133.png")}
                />
                <p>Concept 2</p>
                <h3>We build IT Just for you</h3>
                <Link
                  href="#concept-2"
                  className="blue-btn"
                  to="concept-2"
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  See More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed arrow-right dual-blue-arrows-bottom offset-arrows-left">
          <Row className="align-items-center blue-dashed-circle increase-top">
            <Col className="content-container column">
              <h2 className="margin-left-10-perc concept-h2">
                CONCEPT <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="498"
                  height="250"
                  viewBox="0 0 498 250"
                >
                  <g
                    id="Group_9123"
                    data-name="Group 9123"
                    transform="translate(-10990 247)"
                  >
                    <g
                      id="Group_9117"
                      data-name="Group 9117"
                      transform="translate(14320 -1253) rotate(90)"
                    >
                      <circle
                        id="Ellipse_1965"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-2"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-3"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-4"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-5"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-6"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-7"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-8"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-9"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-10"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-11"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-12"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-13"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-14"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-15"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-16"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-17"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-18"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-19"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-20"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-21"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-22"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-23"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-24"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 3002)"
                        fill="#073ef3"
                      />
                    </g>
                    <g id="Group_9122" data-name="Group 9122">
                      <text
                        id="_1"
                        data-name="#1"
                        transform="translate(11013 -63)"
                        fill="#e6e6e6"
                        stroke="#073ef3"
                        stroke-width="7"
                        font-size="169"
                        font-family="Poppins-Black, Poppins"
                        font-weight="800"
                      >
                        <tspan x="0" y="0">
                          #1
                        </tspan>
                      </text>
                      <text
                        id="_1-2"
                        data-name="#1"
                        transform="translate(10997 -63)"
                        fill="#fff"
                        stroke="#073ef3"
                        stroke-width="7"
                        font-size="169"
                        font-family="Poppins-Black, Poppins"
                        font-weight="800"
                      >
                        <tspan x="0" y="0">
                          #1
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </h2>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed margin-top-minus-150">
          <Row className="align-items-center">
            <Col
              className="content-container column"
              xl={6}
              lg={5}
              id="concept-1"
            >
              <img
                className="img-width-100"
                src={require("../images/dic/DedicatedIT_Isometric_Concept_1.png")}
              />
            </Col>
            <Col className="content-container column step-text-block" xl={4}>
              <h3 className="uppercase">
                Keeping up with technology isn’t a suggestion
              </h3>
              <p>
                Old technology just isn't our thing. We've found that the only
                way to keep up with the growing times and needs of the masses is
                to be in tune with what's easiest and also most efficient.
                Goodbye to difficult processes, little direction, and ancient
                machines.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="concept-1-background concept-display-section">
          <Row className="align-items-center">
            <Col className="content-container column purple-text" xl={6} lg={8}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93.362"
                height="93.362"
                viewBox="0 0 93.362 93.362"
              >
                <g
                  id="Group_9121"
                  data-name="Group 9121"
                  transform="translate(-193 -5370.043)"
                >
                  <g
                    id="Group_9109"
                    data-name="Group 9109"
                    transform="translate(290.879 5219.006)"
                  >
                    <path
                      id="Path_7476"
                      data-name="Path 7476"
                      d="M-8.576,151.037H-93.819a4.065,4.065,0,0,0-4.06,4.06V240.34a4.065,4.065,0,0,0,4.06,4.06H-8.576a4.065,4.065,0,0,0,4.06-4.06V155.1A4.065,4.065,0,0,0-8.576,151.037ZM-9.6,156.125v10.067H-92.791V156.125Zm-83.187,83.187V171.279H-9.6v68.033Z"
                      fill="#121253"
                    />
                    <path
                      id="Path_7477"
                      data-name="Path 7477"
                      d="M-89.377,162.082h.387a2.543,2.543,0,0,0,2.544-2.544,2.544,2.544,0,0,0-2.544-2.544h-.387a2.544,2.544,0,0,0-2.544,2.544A2.543,2.543,0,0,0-89.377,162.082Z"
                      transform="translate(1.62 1.62)"
                      fill="#121253"
                    />
                    <path
                      id="Path_7478"
                      data-name="Path 7478"
                      d="M-82.768,162.082h.389a2.544,2.544,0,0,0,2.544-2.544,2.545,2.545,0,0,0-2.544-2.544h-.389a2.545,2.545,0,0,0-2.544,2.544A2.544,2.544,0,0,0-82.768,162.082Z"
                      transform="translate(3.417 1.62)"
                      fill="#121253"
                    />
                    <path
                      id="Path_7479"
                      data-name="Path 7479"
                      d="M-21.331,171.214H-85.556a4.065,4.065,0,0,0-4.061,4.061v28.494a4.065,4.065,0,0,0,4.061,4.06h64.225a4.065,4.065,0,0,0,4.06-4.06V175.275A4.065,4.065,0,0,0-21.331,171.214Zm-1.028,31.527H-84.529V176.3h62.171Z"
                      transform="translate(2.246 5.486)"
                      fill="#121253"
                    />
                    <path
                      id="Path_7480"
                      data-name="Path 7480"
                      d="M-59.164,204.265H-85.556a4.064,4.064,0,0,0-4.061,4.06v13.584h5.088V209.353h24.339v12.556H-55.1V208.325A4.065,4.065,0,0,0-59.164,204.265Z"
                      transform="translate(2.246 14.472)"
                      fill="#121253"
                    />
                    <path
                      id="Path_7481"
                      data-name="Path 7481"
                      d="M-29.418,204.265H-55.811a4.064,4.064,0,0,0-4.06,4.06v13.584h5.088V209.353h24.337v12.556h5.088V208.325A4.064,4.064,0,0,0-29.418,204.265Z"
                      transform="translate(10.334 14.472)"
                      fill="#121253"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="purple-text">HOMEPAGE</h3>
              <p>
                The strategy of this concept is to portray the quirky, somewhat
                humorous personality of Dedicated IT while still remaining
                professional. We want the audience to understand what kind of
                organization Dedicated IT is right off the bat. Dedicated IT
                isn’t the right fit for every organization. Some initiatives may
                ruffle some feathers. Not a “vanilla” or one-size-fits-all
                approach.
              </p>
            </Col>{" "}
            <Col
              className="content-container column step-text-block hide-on-small"
              xl={4}
              lg={0}
            ></Col>
          </Row>
          <Row className="align-items-center">
            <h3 class="purple-text title">Video</h3>
            <InlineVideo videoID={"lidt5emye4"} className="box-shadow" />
          </Row>
          <Row className="flex-col">
            <h3 class="purple-text title margin-top-80">Concept 1</h3>
            <img
              src={require("../images/dic/Concept 1.png")}
              onClick={e => {
                e.target.style.display = "none";
                document.getElementById("concept-1-alt").style.display =
                  "block";
              }}
              id="concept-1-img"
              className="box-shadow"
            />
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col className="content-container column" xl={5} lg={6}>
              <img src={require("../images/dic/Group 9131.png")} />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={6}
              xl={5}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81.535"
                height="102.021"
                viewBox="0 0 81.535 102.021"
              >
                <g
                  id="Group_9121"
                  data-name="Group 9121"
                  transform="translate(-743 -7970.801)"
                >
                  <g
                    id="Group_9108"
                    data-name="Group 9108"
                    transform="translate(703.19 7817.764)"
                  >
                    <path
                      id="Path_7471"
                      data-name="Path 7471"
                      d="M63.9,179.463H97.3a2.965,2.965,0,1,0,0-5.93H63.9a2.965,2.965,0,1,0,0,5.93Z"
                      transform="translate(10.189 9.887)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7472"
                      data-name="Path 7472"
                      d="M103.945,181.523H50.121a2.965,2.965,0,1,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 13.742)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7473"
                      data-name="Path 7473"
                      d="M103.945,189.514H50.121a2.965,2.965,0,0,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 17.596)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7474"
                      data-name="Path 7474"
                      d="M116.293,153.037h-50a5.019,5.019,0,0,0-3.573,1.479L41.289,175.949a5.013,5.013,0,0,0-1.479,3.571v70.486a5.057,5.057,0,0,0,5.052,5.052h71.431a5.058,5.058,0,0,0,5.052-5.052V158.089A5.057,5.057,0,0,0,116.293,153.037ZM62.464,163.16v12.531H49.933Zm52.951,85.969H45.74V181.621h17.6a5.058,5.058,0,0,0,5.052-5.052v-17.6h47.022Z"
                      transform="translate(0)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7475"
                      data-name="Path 7475"
                      d="M102.463,202.763v11.89H51.6v-11.89h50.86m1.248-4.447H50.356a3.2,3.2,0,0,0-3.2,3.2V215.9a3.2,3.2,0,0,0,3.2,3.2h53.354a3.2,3.2,0,0,0,3.2-3.2V201.515a3.2,3.2,0,0,0-3.2-3.2Z"
                      transform="translate(3.544 21.842)"
                      fill="#F40002"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="uppercase">Whitepapers</h3>
              <p>
                Whitepapers will be simply designed and used professionally, but
                still conversational. Elicit headlines will be used to grab
                attention and portray thoughts leading the user to read more.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center blue-background-offset">
            <Col
              className="content-container column step-text-block margin-bottom-100"
              xl={7}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98.5"
                height="67.431"
                viewBox="0 0 98.5 67.431"
              >
                <g
                  id="Group_9122"
                  data-name="Group 9122"
                  transform="translate(-193 -8797)"
                >
                  <path
                    id="Path_7482"
                    data-name="Path 7482"
                    d="M150.795,425.292a3.742,3.742,0,0,0,5.429,3.948l11.747-6.177,11.751,6.179a3.77,3.77,0,0,0,1.738.427,3.71,3.71,0,0,0,2.2-.714,3.76,3.76,0,0,0,1.489-3.659L182.9,412.214l9.5-9.263a3.743,3.743,0,0,0-2.074-6.384L178.189,394.8V366.786a4.552,4.552,0,0,0-4.547-4.547H99.587a4.553,4.553,0,0,0-4.547,4.547v50.356a4.554,4.554,0,0,0,4.547,4.549h51.824Zm25.52-15.219,1.969,11.483-10.312-5.422-10.313,5.42,1.969-11.481-8.342-8.134,11.53-1.675,5.157-10.448,5.157,10.448,11.529,1.675ZM101.173,370.32l22.571,21.717-22.571,20.075Zm6.821-1.948h57.24l-28.2,27.134a2.543,2.543,0,0,1-.837,0Zm63.331,14.384a3.716,3.716,0,0,0-3.354-2.085,3.764,3.764,0,0,0-3.355,2.085l-5.874,11.9-5.583.811-3.764-3.348,22.661-21.8v13.914Zm-26.364,13.633.287.255a3.744,3.744,0,0,0-.938.371Zm-38.432,19.168L128.178,396.3l3.9,3.757a7.115,7.115,0,0,0,9.062,0l1.826-1.756a3.7,3.7,0,0,0,.562,4.644l9.506,9.263-.573,3.344Z"
                    transform="translate(97.96 8434.761)"
                    fill="#F40002"
                  />
                </g>
              </svg>
              <h3 className="">EMAILS</h3>
              <p>
                For this concept, the emails will be used to be both thought
                based and provoking. Making the readers question their current
                IT and technology needs while also leading to why Dedicated IT
                is a different, yet refreshing choice.
              </p>
            </Col>
            <Col className="content-container column f-o-0-m" xl={5}>
              <img src={require("../images/dic/phone-img.png")} />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed navy-circle">
          <Row className="align-items-center">
            <Col className="content-container column" xl={6}>
              <img
                src={require("../images/dic/add-2.png")}
                className="box-shadow-3 margin-right-25 z-index-10"
              />
              <img
                src={require("../images/dic/add-1.png")}
                className="box-shadow-3 z-index-10"
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={6}
              lg={8}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126.328"
                height="91.971"
                viewBox="0 0 126.328 91.971"
              >
                <g
                  id="Group_9127"
                  data-name="Group 9127"
                  transform="translate(-115 -81.716)"
                >
                  <path
                    id="Path_7502"
                    data-name="Path 7502"
                    d="M221.507,81.716H134.821A19.844,19.844,0,0,0,115,101.537v52.328a19.844,19.844,0,0,0,19.821,19.821h86.685a19.844,19.844,0,0,0,19.821-19.821V101.537A19.844,19.844,0,0,0,221.507,81.716ZM233.4,153.865a11.906,11.906,0,0,1-11.893,11.893H134.821a11.906,11.906,0,0,1-11.893-11.893V101.537a11.906,11.906,0,0,1,11.893-11.893h86.685A11.906,11.906,0,0,1,233.4,101.537Z"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7503"
                    data-name="Path 7503"
                    d="M295.117,143.567H260.232a3.172,3.172,0,1,0,0,6.343h34.885a3.172,3.172,0,1,0,0-6.343Z"
                    transform="translate(-75.593 -32.912)"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7504"
                    data-name="Path 7504"
                    d="M295.117,170.68H260.232a3.171,3.171,0,1,0,0,6.343h34.885a3.171,3.171,0,1,0,0-6.343Z"
                    transform="translate(-75.593 -47.339)"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7505"
                    data-name="Path 7505"
                    d="M282.431,197.792h-22.2a3.172,3.172,0,1,0,0,6.343h22.2a3.172,3.172,0,1,0,0-6.343Z"
                    transform="translate(-75.593 -61.766)"
                    fill="#f40002"
                  />
                  <circle
                    id="Ellipse_1994"
                    data-name="Ellipse 1994"
                    cx="11.326"
                    cy="11.326"
                    r="11.326"
                    transform="matrix(1, -0.009, 0.009, 1, 141.251, 105.14)"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7506"
                    data-name="Path 7506"
                    d="M182.109,178.658a12.982,12.982,0,0,1-14.868,0c-5.2,2.877-9.209,8.683-10.771,15.814a5.5,5.5,0,0,0,5.369,6.669h25.672a5.5,5.5,0,0,0,5.369-6.669C191.319,187.341,187.314,181.535,182.109,178.658Z"
                    transform="translate(-21.998 -51.585)"
                    fill="#f40002"
                  />
                </g>
              </svg>

              <h3 className="">BUSINESS CARD</h3>
              <p>
                Business cards will use the same callout as the homepage hero
                content. It uses a dramatic design with a gripping tagline to
                help them relate Dedicated IT new branding.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center blue-circle hollow-navy-circle">
            <Col className="content-container column z-index-10 " xl={12}></Col>
          </Row>
        </Container>
        <Container className="box-shadow-2">
          <Row className=" centered-text margin-top-200 align-middle content-link">
            <Link
              href="#concept-2"
              className="blue-btn"
              to="options"
              smooth={true}
              offset={-70}
              duration={1000}
            >
              {" "}
              Back to Concepts
            </Link>
          </Row>
        </Container>
        <Container className="container flexed arrow-right dual-blue-arrows-bottom offset-arrows-left hide-overflow">
          <Row className="align-items-center blue-dashed-circle">
            <Col className="content-container column">
              <h2 className="margin-left-10-perc">
                CONCEPT <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="498"
                  height="250"
                  viewBox="0 0 498 250"
                >
                  <g
                    id="Group_9124"
                    data-name="Group 9124"
                    transform="translate(-205 -10811)"
                  >
                    <g
                      id="Group_9116"
                      data-name="Group 9116"
                      transform="translate(3535 9805) rotate(90)"
                    >
                      <circle
                        id="Ellipse_1965"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-2"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-3"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-4"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2832)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-5"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-6"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-7"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-8"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2866)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-9"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-10"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-11"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-12"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2900)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-13"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-14"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-15"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-16"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2934)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-17"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-18"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-19"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-20"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 2968)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-21"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1081 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-22"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1115 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-23"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1149 3002)"
                        fill="#073ef3"
                      />
                      <circle
                        id="Ellipse_1965-24"
                        data-name="Ellipse 1965"
                        cx="7"
                        cy="7"
                        r="7"
                        transform="translate(1183 3002)"
                        fill="#073ef3"
                      />
                    </g>
                    <text
                      id="_2"
                      data-name="#2"
                      transform="translate(212 10995)"
                      fill="#fff"
                      stroke="#073ef3"
                      stroke-width="7"
                      font-size="169"
                      font-family="Poppins-Black, Poppins"
                      font-weight="800"
                    >
                      <tspan x="0" y="0">
                        #2
                      </tspan>
                    </text>
                  </g>
                </svg>
              </h2>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col
              className="content-container column"
              xl={6}
              lg={5}
              id="concept-2"
            >
              <img
                src={require("../images/dic/DedicatedIT_Isometric_Concept_2.png")}
              />
            </Col>
            <Col className="content-container column step-text-block" xl={4}>
              <h3 className="">We build IT Just for you</h3>
              <p>
                The strategy for this concept also shows the personality of
                Dedicated IT, but is slightly more on the “safe” side. Our
                approach is to be prescriptive. Those in the medical/healthcare
                industry will recognize the flow and language of this page
                because it follows the agenda of a medical professional treating
                a patient and how technology can follow that same sort of
                script. The tone is more helpful and understanding with some
                emotional appeals throughout.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="concept-2-background concept-display-section">
          <Row className="align-items-center">
            <Col className="content-container column white-text" xl={6}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93.362"
                height="93.362"
                viewBox="0 0 93.362 93.362"
              >
                <g
                  id="Group_9121"
                  data-name="Group 9121"
                  transform="translate(-193 -5370.043)"
                >
                  <g
                    id="Group_9109"
                    data-name="Group 9109"
                    transform="translate(290.879 5219.006)"
                  >
                    <path
                      id="Path_7476"
                      data-name="Path 7476"
                      d="M-8.576,151.037H-93.819a4.065,4.065,0,0,0-4.06,4.06V240.34a4.065,4.065,0,0,0,4.06,4.06H-8.576a4.065,4.065,0,0,0,4.06-4.06V155.1A4.065,4.065,0,0,0-8.576,151.037ZM-9.6,156.125v10.067H-92.791V156.125Zm-83.187,83.187V171.279H-9.6v68.033Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_7477"
                      data-name="Path 7477"
                      d="M-89.377,162.082h.387a2.543,2.543,0,0,0,2.544-2.544,2.544,2.544,0,0,0-2.544-2.544h-.387a2.544,2.544,0,0,0-2.544,2.544A2.543,2.543,0,0,0-89.377,162.082Z"
                      transform="translate(1.62 1.62)"
                      fill="#fff"
                    />
                    <path
                      id="Path_7478"
                      data-name="Path 7478"
                      d="M-82.768,162.082h.389a2.544,2.544,0,0,0,2.544-2.544,2.545,2.545,0,0,0-2.544-2.544h-.389a2.545,2.545,0,0,0-2.544,2.544A2.544,2.544,0,0,0-82.768,162.082Z"
                      transform="translate(3.417 1.62)"
                      fill="#fff"
                    />
                    <path
                      id="Path_7479"
                      data-name="Path 7479"
                      d="M-21.331,171.214H-85.556a4.065,4.065,0,0,0-4.061,4.061v28.494a4.065,4.065,0,0,0,4.061,4.06h64.225a4.065,4.065,0,0,0,4.06-4.06V175.275A4.065,4.065,0,0,0-21.331,171.214Zm-1.028,31.527H-84.529V176.3h62.171Z"
                      transform="translate(2.246 5.486)"
                      fill="#fff"
                    />
                    <path
                      id="Path_7480"
                      data-name="Path 7480"
                      d="M-59.164,204.265H-85.556a4.064,4.064,0,0,0-4.061,4.06v13.584h5.088V209.353h24.339v12.556H-55.1V208.325A4.065,4.065,0,0,0-59.164,204.265Z"
                      transform="translate(2.246 14.472)"
                      fill="#fff"
                    />
                    <path
                      id="Path_7481"
                      data-name="Path 7481"
                      d="M-29.418,204.265H-55.811a4.064,4.064,0,0,0-4.06,4.06v13.584h5.088V209.353h24.337v12.556h5.088V208.325A4.064,4.064,0,0,0-29.418,204.265Z"
                      transform="translate(10.334 14.472)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="white-text">HOMPAGE</h3>
              <p>
                The strategy for this concept also shows the personality of
                Dedicated IT, but is slightly more on the "safe" side. Our
                approach is to be prescriptive. Those in the medical/healthcare
                industry will recognize the flow and language of this page
                because it follows the agenda of a medical professional treating
                a patient and how technology can follow that same sort of
                script. The tons is more helpful and understanding with some
                emotional appeals throughout.
              </p>
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
            ></Col>
          </Row>
          <Row className="align-items-center">
            <h3 class="white-text title">Video</h3>
            <InlineVideo videoID={"qwbzh93aeq"} />
          </Row>
          <Row className="flex-col">
            <h3 class="white-text title margin-top-80">Concept 2</h3>
            <img
              src={require("../images/dic/Concept 2.png")}
              id="concept-2-orig"
            />
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col className="content-container column" xl={5} lg={6}>
              <img src={require("../images/dic/group.png")} />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={6}
              xl={5}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81.535"
                height="102.021"
                viewBox="0 0 81.535 102.021"
              >
                <g
                  id="Group_9121"
                  data-name="Group 9121"
                  transform="translate(-743 -7970.801)"
                >
                  <g
                    id="Group_9108"
                    data-name="Group 9108"
                    transform="translate(703.19 7817.764)"
                  >
                    <path
                      id="Path_7471"
                      data-name="Path 7471"
                      d="M63.9,179.463H97.3a2.965,2.965,0,1,0,0-5.93H63.9a2.965,2.965,0,1,0,0,5.93Z"
                      transform="translate(10.189 9.887)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7472"
                      data-name="Path 7472"
                      d="M103.945,181.523H50.121a2.965,2.965,0,1,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 13.742)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7473"
                      data-name="Path 7473"
                      d="M103.945,189.514H50.121a2.965,2.965,0,0,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 17.596)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7474"
                      data-name="Path 7474"
                      d="M116.293,153.037h-50a5.019,5.019,0,0,0-3.573,1.479L41.289,175.949a5.013,5.013,0,0,0-1.479,3.571v70.486a5.057,5.057,0,0,0,5.052,5.052h71.431a5.058,5.058,0,0,0,5.052-5.052V158.089A5.057,5.057,0,0,0,116.293,153.037ZM62.464,163.16v12.531H49.933Zm52.951,85.969H45.74V181.621h17.6a5.058,5.058,0,0,0,5.052-5.052v-17.6h47.022Z"
                      transform="translate(0)"
                      fill="#F40002"
                    />
                    <path
                      id="Path_7475"
                      data-name="Path 7475"
                      d="M102.463,202.763v11.89H51.6v-11.89h50.86m1.248-4.447H50.356a3.2,3.2,0,0,0-3.2,3.2V215.9a3.2,3.2,0,0,0,3.2,3.2h53.354a3.2,3.2,0,0,0,3.2-3.2V201.515a3.2,3.2,0,0,0-3.2-3.2Z"
                      transform="translate(3.544 21.842)"
                      fill="#F40002"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">WHITEPAPER</h3>
              <p>
                With this concept, the design and content of the whitepapers
                will be more of a guide. Using imagery and charts as applicable
                to be used as a visual experience.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center blue-background-offset purple">
            <Col
              className="content-container column step-text-block margin-bottom-100"
              xl={7}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98.5"
                height="67.431"
                viewBox="0 0 98.5 67.431"
              >
                <g
                  id="Group_9122"
                  data-name="Group 9122"
                  transform="translate(-193 -8797)"
                >
                  <path
                    id="Path_7482"
                    data-name="Path 7482"
                    d="M150.795,425.292a3.742,3.742,0,0,0,5.429,3.948l11.747-6.177,11.751,6.179a3.77,3.77,0,0,0,1.738.427,3.71,3.71,0,0,0,2.2-.714,3.76,3.76,0,0,0,1.489-3.659L182.9,412.214l9.5-9.263a3.743,3.743,0,0,0-2.074-6.384L178.189,394.8V366.786a4.552,4.552,0,0,0-4.547-4.547H99.587a4.553,4.553,0,0,0-4.547,4.547v50.356a4.554,4.554,0,0,0,4.547,4.549h51.824Zm25.52-15.219,1.969,11.483-10.312-5.422-10.313,5.42,1.969-11.481-8.342-8.134,11.53-1.675,5.157-10.448,5.157,10.448,11.529,1.675ZM101.173,370.32l22.571,21.717-22.571,20.075Zm6.821-1.948h57.24l-28.2,27.134a2.543,2.543,0,0,1-.837,0Zm63.331,14.384a3.716,3.716,0,0,0-3.354-2.085,3.764,3.764,0,0,0-3.355,2.085l-5.874,11.9-5.583.811-3.764-3.348,22.661-21.8v13.914Zm-26.364,13.633.287.255a3.744,3.744,0,0,0-.938.371Zm-38.432,19.168L128.178,396.3l3.9,3.757a7.115,7.115,0,0,0,9.062,0l1.826-1.756a3.7,3.7,0,0,0,.562,4.644l9.506,9.263-.573,3.344Z"
                    transform="translate(97.96 8434.761)"
                    fill="#F40002"
                  />
                </g>
              </svg>
              <h3 className="">EMAILS</h3>
              <p>
                Email content follows a similar structure to the landing page.
                We want to lead with more personal values or positive character
                experiences instead of with negative/threatening language.
              </p>
            </Col>
            <Col className="content-container column f-o-0-m" xl={5}>
              <img src={require("../images/dic/phone-img-2.png")} />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed navy-circle purple">
          <Row className="align-items-center">
            <Col className="content-container column" xl={6}>
              <img
                src={require("../images/dic/Screen Shot 2020-10-21 at 10.54.20 PM.png")}
                className="box-shadow-3"
              />
              <img
                src={require("../images/dic/Screen Shot 2020-10-21 at 10.53.13 PM.png")}
                className="box-shadow-3 margin-top-50 z-index-10"
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={6}
              lg={8}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126.328"
                height="91.971"
                viewBox="0 0 126.328 91.971"
              >
                <g
                  id="Group_9130"
                  data-name="Group 9130"
                  transform="translate(-115 -81.717)"
                >
                  <path
                    id="Path_7502"
                    data-name="Path 7502"
                    d="M221.507,81.716H134.821A19.844,19.844,0,0,0,115,101.537v52.328a19.844,19.844,0,0,0,19.821,19.821h86.685a19.844,19.844,0,0,0,19.821-19.821V101.537A19.844,19.844,0,0,0,221.507,81.716ZM233.4,153.865a11.906,11.906,0,0,1-11.893,11.893H134.821a11.906,11.906,0,0,1-11.893-11.893V101.537a11.906,11.906,0,0,1,11.893-11.893h86.685A11.906,11.906,0,0,1,233.4,101.537Z"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7503"
                    data-name="Path 7503"
                    d="M295.117,143.567H260.232a3.172,3.172,0,1,0,0,6.343h34.885a3.172,3.172,0,1,0,0-6.343Z"
                    transform="translate(-75.593 -32.912)"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7504"
                    data-name="Path 7504"
                    d="M295.117,170.68H260.232a3.171,3.171,0,1,0,0,6.343h34.885a3.171,3.171,0,1,0,0-6.343Z"
                    transform="translate(-75.593 -47.339)"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7505"
                    data-name="Path 7505"
                    d="M282.431,197.792h-22.2a3.172,3.172,0,1,0,0,6.343h22.2a3.172,3.172,0,1,0,0-6.343Z"
                    transform="translate(-75.593 -61.766)"
                    fill="#f40002"
                  />
                  <circle
                    id="Ellipse_1994"
                    data-name="Ellipse 1994"
                    cx="11.326"
                    cy="11.326"
                    r="11.326"
                    transform="matrix(1, -0.009, 0.009, 1, 141.251, 105.14)"
                    fill="#f40002"
                  />
                  <path
                    id="Path_7506"
                    data-name="Path 7506"
                    d="M182.109,178.658a12.982,12.982,0,0,1-14.868,0c-5.2,2.877-9.209,8.683-10.771,15.814a5.5,5.5,0,0,0,5.369,6.669h25.672a5.5,5.5,0,0,0,5.369-6.669C191.319,187.341,187.314,181.535,182.109,178.658Z"
                    transform="translate(-21.998 -51.585)"
                    fill="#f40002"
                  />
                </g>
              </svg>

              <h3 className="">BUSINESS CARD</h3>
              <p>
                Business cards will use the same callout as the homepage hero
                content. It uses a dramatic design with a gripping tagline to
                help them relate Dedicated IT new branding.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center blue-circle hollow-navy-circle">
            <Col className="content-container column z-index-10" xl={12}></Col>
          </Row>
        </Container>
        <Container>
          <Row className=" centered-text margin-top-200 align-middle content-link">
            <Link
              href="#concept-2"
              className="blue-btn z-index-10"
              to="options"
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Back to Concepts
            </Link>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
