import React, { useEffect } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import InlineVideo from "../components/WistiaInlineVideoPlayer.js";

import "../styles/brother-strategy.scss";

const IndexPage = () => {
  useEffect(() => {
    document.querySelector(".fixed").classList.add("brother-nav-fixed");
    document.querySelector(".mainHeader").innerHTML = `
      <nav class="brother-nav mainHeader navbar" role="navigation">
      <div class="left-logo">
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/166342.png" alt="tridigital logo white">
      </div>
      <div class="right-logos">
        <p class="nav-text">Created by:</p>
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-11.png" alt="tridigital logo colored">
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/path24.png" alt="tridigital logo colored">
      </div>
      </nav>`;
    document.querySelector("footer").style.display = "none";
  });

  return (
    <Layout>
      <SEO title="brother-strategy" />
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
                This campaign is aimed at a simple target audience: individuals
                and professional environments with outdated printing and
                scanning solutions.
              </p>
              <p>
                {" "}
                This target audience will generally fall into a size range: home
                office and small office up to mid-market. The targeting will be
                horizontal with a specific focus on corporate environments.
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
                In our marketing, we will start by introducing the deficiencies
                of dated technology. Instead of establishing this in terms of
                age, we will focus more on features, emphasizing modern-day
                office quality of life. Things like efficiency, cost-savings,
                reliability, and connectivity.
              </p>
              <p>
                Visually, we will establish this by comparing cliche, old
                hardware against modern Brother products.
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
                With our marketing, content and visuals, we will help potential
                buyers identify and critically assess their exiting solutions.
                Key differentiators that will lead to conversions are:
                efficiency, cost of operation, office connectivity and ease of
                use.
              </p>
              <p>
                We will create an ideal office that prospects aim for. The
                modern office consists of modern technology that not only
                improves the quality and efficiency of work, but creates an
                impressive, higher quality of life around the office.
              </p>
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
            <Col className="content-container column">
              <div className="card">
                <img
                  className="margin-top-30"
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9126.png"
                />
                <p>Concept 1</p>
                <h3>Outdated is obvious</h3>
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
            <Col className="content-container column card-container">
              <div className="card">
                <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9127.png" />
                <p>Concept 2</p>
                <h3>SCARY STORIES TO TELL IN THE OFFICE</h3>
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
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Brother.png"
              />
            </Col>
            <Col className="content-container column step-text-block" xl={4}>
              <h3 className="">OUTDATED IS OBVIOUS</h3>
              <p>
                With this concept, we take a more humorous, satirical approach
                to generate attention and get our messaging across.
              </p>
              <p>
                Instead of leading with hardware images, the designs will lead
                more with contrast-heavy photo manipulations. Example: in a
                meeting, everyone is using modern laptops while one person, who
                is dressed in 80s or 90s business attire, is using a laptop from
                that era.
              </p>
              <p>
                The visuals and content are, initially, more attention-grabbing
                with the goal of getting eyes and generating interest. From
                there, we establish client profiles to help drive them toward
                specific printers to improve conversion rates.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="concept-1-background concept-display-section">
          <Row className="align-items-center">
            <Col className="content-container column white-text" xl={6} lg={8}>
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
              <h3 className="white-text">LANDING PAGE</h3>
              <p>
                The landing page opens with a simple, yet gripping header. The
                imagery and design is retro and comical, guiding the viewer down
                the page to learn more.
              </p>
              <p>
                Throughout the page, we will use satire to show outdated things
                sticking out like sore thumbs as a type of visual metaphor. The
                content will become more specific below the fold, establishing
                that printers are often the last to be upgraded items.
              </p>
              <p>
                From there, we talk about why printers need to be upgraded,
                establish key modern-day features, and establish client profiles
                to push specific printers based on use-case/business goals.
              </p>
            </Col>{" "}
            <Col
              className="content-container column step-text-block"
              xl={4}
            ></Col>
          </Row>
          <Row className="align-items-center">
            <h3 class="white-text title">Video</h3>
            <InlineVideo videoID={"ovnmwpyibf"} className="box-shadow" />
          </Row>
          <Row className="flex-col">
            <h3 class="white-text title margin-top-80">Concept 1</h3>
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/LP-1-–-1.png"
              onClick={e => {
                e.target.style.display = "none";
                document.getElementById("concept-2-alt").style.display =
                  "block";
              }}
              id="concept-2-orig"
            />
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/LP-1-–-11-1.png"
              id="concept-2-alt"
              onClick={e => {
                e.target.style.display = "none";
                document.getElementById("concept-2-orig").style.display =
                  "block";
              }}
            />
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col className="content-container column" xl={5} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9121-4.png" />
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
                      fill="#005cab"
                    />
                    <path
                      id="Path_7472"
                      data-name="Path 7472"
                      d="M103.945,181.523H50.121a2.965,2.965,0,1,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 13.742)"
                      fill="#005cab"
                    />
                    <path
                      id="Path_7473"
                      data-name="Path 7473"
                      d="M103.945,189.514H50.121a2.965,2.965,0,0,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 17.596)"
                      fill="#005cab"
                    />
                    <path
                      id="Path_7474"
                      data-name="Path 7474"
                      d="M116.293,153.037h-50a5.019,5.019,0,0,0-3.573,1.479L41.289,175.949a5.013,5.013,0,0,0-1.479,3.571v70.486a5.057,5.057,0,0,0,5.052,5.052h71.431a5.058,5.058,0,0,0,5.052-5.052V158.089A5.057,5.057,0,0,0,116.293,153.037ZM62.464,163.16v12.531H49.933Zm52.951,85.969H45.74V181.621h17.6a5.058,5.058,0,0,0,5.052-5.052v-17.6h47.022Z"
                      transform="translate(0)"
                      fill="#005cab"
                    />
                    <path
                      id="Path_7475"
                      data-name="Path 7475"
                      d="M102.463,202.763v11.89H51.6v-11.89h50.86m1.248-4.447H50.356a3.2,3.2,0,0,0-3.2,3.2V215.9a3.2,3.2,0,0,0,3.2,3.2h53.354a3.2,3.2,0,0,0,3.2-3.2V201.515a3.2,3.2,0,0,0-3.2-3.2Z"
                      transform="translate(3.544 21.842)"
                      fill="#005cab"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">FLYERS</h3>
              <p>
                The flyers will follow a similar approach to the landing page.
                There will be a satirical, humorous title that then drives down
                into the products and benefits.
              </p>
              <p>
                Much of the purpose will be to help identify common difficulties
                when using old printers and how new printers can eliminate those
                problems and improve general QoL around the office.
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
                    fill="#00529c"
                  />
                </g>
              </svg>
              <h3 className="">EMAILS</h3>
              <p>
                With this concept, the subject lines of emails can be more
                attention-grabbing and less precise. We continue to focus on
                humor to generate interaction, and the email will then establish
                quick benefits or considerations to drive toward clicks.
              </p>
              <p>
                The email CTAs can go to the landing page or a specific product.
              </p>
            </Col>
            <Col className="content-container column f-o-0-m" xl={5}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9123.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed navy-circle">
          <Row className="align-items-center">
            <Col className="content-container column" xl={6}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Ad_b_1.png"
                className="box-shadow-3"
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={6}
              lg={8}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120.999"
                height="109.999"
                viewBox="0 0 120.999 109.999"
              >
                <g
                  id="Group_9123"
                  data-name="Group 9123"
                  transform="translate(-742.501 -9577.002)"
                >
                  <g
                    id="Group_9112"
                    data-name="Group 9112"
                    transform="translate(-151.609 8836.479)"
                  >
                    <path
                      id="Path_7483"
                      data-name="Path 7483"
                      d="M1306.109,823.022h53a12,12,0,0,0,12-12V744.272a3.753,3.753,0,0,0-3.749-3.749h-69.5a3.753,3.753,0,0,0-3.749,3.749v66.751a12,12,0,0,0,12,12Zm53-5.5h-53a6.506,6.506,0,0,1-6.5-6.5v-43h66v43A6.506,6.506,0,0,1,1359.11,817.522Zm6.5-71.5v16.5h-66v-16.5Z"
                      transform="translate(-378)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7484"
                      data-name="Path 7484"
                      d="M1846.86,946.023h33a2.75,2.75,0,1,0,0-5.5h-33a2.75,2.75,0,1,0,0,5.5Z"
                      transform="translate(-897.751 -189)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7485"
                      data-name="Path 7485"
                      d="M1444.124,943.541c0,.045.01.09.016.134s.015.089.024.133.019.088.03.131.023.087.036.13.027.086.042.128.031.085.048.126.035.083.054.123.04.081.06.12.043.079.066.117.047.077.072.114.051.074.078.111.055.071.083.106.058.07.089.1.062.067.093.1.065.063.1.094.068.059.1.088.07.056.107.083.073.052.11.077.076.049.115.072.078.045.117.066.08.041.12.061.082.037.123.054.083.034.125.048.085.03.128.042.086.025.13.036.087.021.131.03.089.017.133.024l.134.017c.045,0,.09.008.135.01s.091,0,.136,0,.09,0,.135,0,.09-.005.135-.01.09-.01.134-.017.089-.014.133-.024.088-.019.131-.03.087-.023.13-.036.085-.027.128-.042.084-.031.125-.048.083-.035.123-.054.081-.04.12-.061.079-.043.117-.066.077-.047.114-.072.075-.051.11-.077.072-.055.107-.083.069-.058.1-.088.067-.062.1-.094.063-.065.094-.1.06-.068.089-.1.056-.07.083-.106.053-.073.078-.111.049-.076.072-.114.045-.078.066-.117.041-.08.061-.12.037-.081.054-.123.034-.084.048-.126.029-.085.042-.128.025-.086.036-.13.021-.087.03-.131.017-.089.024-.133.012-.09.016-.134.008-.09.01-.135,0-.091,0-.136,0-.09,0-.135-.006-.09-.01-.135-.01-.09-.016-.134-.015-.089-.024-.133-.019-.088-.03-.131-.023-.087-.036-.13-.027-.085-.042-.128-.031-.084-.048-.125-.036-.082-.054-.123-.04-.081-.061-.12-.043-.079-.066-.117-.047-.077-.072-.114-.051-.075-.078-.111-.054-.072-.083-.107-.058-.069-.089-.1-.062-.066-.094-.1-.065-.063-.1-.094-.068-.06-.1-.089-.07-.056-.107-.083-.073-.053-.11-.078-.075-.049-.114-.072-.078-.045-.117-.066-.08-.041-.12-.061-.082-.037-.123-.054-.083-.033-.125-.048l-.128-.042c-.043-.013-.087-.025-.13-.036s-.088-.021-.131-.03-.089-.016-.133-.023-.089-.013-.134-.017-.09-.008-.135-.01c-.09,0-.181,0-.271,0-.045,0-.09.006-.135.01s-.09.01-.134.017-.089.014-.133.023-.088.019-.131.03-.087.023-.13.036-.086.028-.128.042-.084.031-.125.048-.083.036-.123.054-.081.04-.12.061-.079.043-.117.066-.077.047-.115.072-.074.051-.11.078-.072.054-.107.083-.069.058-.1.089-.067.062-.1.094-.063.065-.093.1-.06.068-.089.1-.056.07-.083.107-.053.073-.078.111-.049.075-.072.114-.045.078-.066.117-.041.08-.06.12-.037.082-.054.123-.034.084-.048.125-.029.085-.042.128-.025.087-.036.13-.021.088-.03.131-.017.089-.024.133-.012.089-.016.134-.008.09-.01.135,0,.09,0,.135,0,.091,0,.136S1444.119,943.5,1444.124,943.541Z"
                      transform="translate(-519.75 -188.997)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7486"
                      data-name="Path 7486"
                      d="M1646.86,946.023h.33a2.75,2.75,0,1,0,0-5.5h-.33a2.75,2.75,0,1,0,0,5.5Z"
                      transform="translate(-708.75 -189)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7487"
                      data-name="Path 7487"
                      d="M2219.548,1452.454a13.256,13.256,0,0,0-3.924-1.984c-2.647-.974-2.9-1.3-2.9-2.383a2.6,2.6,0,0,1,.471-1.651,1.285,1.285,0,0,1,1.081-.411c1.55,0,2.512,1.728,2.521,1.745l-.015-.029,4.892-2.514a9.58,9.58,0,0,0-1.766-2.319,7.987,7.987,0,0,0-5.632-2.383,6.792,6.792,0,0,0-5.251,2.325,7.887,7.887,0,0,0-1.8,5.238,6.785,6.785,0,0,0,2.47,5.492,13.291,13.291,0,0,0,4.027,2.052c2.648.975,2.757,1.249,2.757,2.142a2.209,2.209,0,0,1-.442,1.5,2.675,2.675,0,0,1-1.76.5c-1.625,0-3.456-1.673-3.969-2.259l.009.011-4.177,3.579c.366.427,3.7,4.17,8.136,4.17a7.663,7.663,0,0,0,5.67-2.131,7.434,7.434,0,0,0,2.032-5.37A6.533,6.533,0,0,0,2219.548,1452.454Z"
                      transform="translate(-1239.872 -661.502)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7488"
                      data-name="Path 7488"
                      d="M1555.985,1443.383a3.749,3.749,0,0,0-7.283,0l-4.524,18.488a2.75,2.75,0,1,0,5.342,1.307l.262-1.072h5.122l.262,1.072a2.75,2.75,0,0,0,5.342-1.307Zm-4.857,13.223,1.215-4.966,1.215,4.966Z"
                      transform="translate(-614.239 -661.502)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7489"
                      data-name="Path 7489"
                      d="M1901.028,1440.525h-3.169a3.753,3.753,0,0,0-3.749,3.749v17.251a3.753,3.753,0,0,0,3.749,3.749h3.169a8.643,8.643,0,0,0,7.382-4.052,16.807,16.807,0,0,0-.012-16.647A8.643,8.643,0,0,0,1901.028,1440.525Zm0,19.25h-1.418v-13.75h1.418a3.143,3.143,0,0,1,2.785,1.588,9.771,9.771,0,0,1,1.3,5.287C1905.11,1456.071,1904.041,1459.775,1901.028,1459.775Z"
                      transform="translate(-945.001 -661.502)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7490"
                      data-name="Path 7490"
                      d="M1011.359,1212.024h-1.751v-67.75a3.753,3.753,0,0,0-3.749-3.749h-7.251a2.75,2.75,0,0,0,0,5.5h5.5v66H968.773a3.725,3.725,0,0,0-2.651,1.1l-1.652,1.652H944.749l-1.652-1.652a3.725,3.725,0,0,0-2.651-1.1H905.11v-66h5.5a2.75,2.75,0,0,0,0-5.5h-7.251a3.753,3.753,0,0,0-3.749,3.749v67.75h-1.751a3.753,3.753,0,0,0-3.749,3.749v.752a12,12,0,0,0,12,12h97a12,12,0,0,0,12-12v-.752A3.753,3.753,0,0,0,1011.359,1212.024Zm-8.25,11h-97a6.509,6.509,0,0,1-6.422-5.5H939.72l1.652,1.652a3.724,3.724,0,0,0,2.651,1.1H965.2a3.724,3.724,0,0,0,2.651-1.1l1.652-1.652h40.034A6.509,6.509,0,0,1,1003.11,1223.024Z"
                      transform="translate(0 -378.002)"
                      fill="#00529c"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="">GOOGLE DISPLAY ADS</h3>
              <p>
                This concept offers a huge strength with Google Display ads.
                With humorous, attention-grabbing visuals and simple, funny
                supporting text, we can expect interaction that drives toward
                the landing page.
              </p>
              <p>
                When it comes to remarketing, we can go a little lighter on the
                humor and begin pushing specific products or general client
                profiles to help establish a use-case identity to convert off
                of.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center blue-circle hollow-navy-circle">
            <Col className="content-container column z-index-10 " xl={12}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Ad_b_2.png"
                className="box-shadow-3"
              />
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Ad_b_3.png"
                className="margin-top-30 long-ad box-shadow-3"
              />
            </Col>
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
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Brother3.png" />
            </Col>
            <Col className="content-container column step-text-block" xl={4}>
              <h3 className="">SCARY STORIES TO TELL IN THE OFFICE</h3>
              <p>
                This is a heavily pop-culture and humor influenced take to
                elicit more interaction.
              </p>
              <p>
                With this concept, we lean on popular horror movie tropes as
                well as pop culture references to some of the most popular (and
                recognizable) movies from the genre. We combine these with
                allegories and metaphors to help connect disruptive, outdated
                printer/scanner solutions with an underlying tone of an office
                horror story.
              </p>
              <p>
                The visuals will be a clash of popular horror visuals (re:
                zombies, vampires, werewolves, etc.) with office tech. Often,
                the tech will be anthropomorphized to go along with the horror
                trope.
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
              <h3 className="white-text">LANDING PAGE</h3>
              <p>
                The landing page begins with an immediate callout to one of the
                most popular horror movies ever:{" "}
                <em>Night of the Living Dead.</em>
              </p>
              <p>Except this time, it's a crappy printer.</p>
              <p>
                It's all downhill from here: imagine your outdated office tech
                is literally you worst nightmare, coming to life as zombies,
                ghouls, vampires and other creatures of the night.
              </p>
              <p>
                With a color palette that harkens back to the bygone era of '70s
                and '80s horror movies, the viewer will feel like their getting
                a classic theater experience while perusing for their next
                office printing solution.
              </p>
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
            ></Col>
          </Row>
          <Row className="align-items-center">
            <h3 class="white-text title">Video</h3>
            <InlineVideo videoID={"wygp3u5nea"} />
          </Row>
          <Row className="flex-col">
            <h3 class="white-text title margin-top-80">Concept 2</h3>
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/LP-1-–-16.png"
              // onClick={e => {
              //   e.target.style.display = "none";
              //   document.getElementById("concept-2-alt").style.display =
              //     "block";
              // }}
              id="concept-2-orig"
            />
            {/* <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/img.png"
              id="concept-2-alt"
              onClick={e => {
                e.target.style.display = "none";
                document.getElementById("concept-2-orig").style.display =
                  "block";
              }}
            /> */}
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col className="content-container column" xl={5} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9131.png" />
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
                      fill="#005cab"
                    />
                    <path
                      id="Path_7472"
                      data-name="Path 7472"
                      d="M103.945,181.523H50.121a2.965,2.965,0,1,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 13.742)"
                      fill="#005cab"
                    />
                    <path
                      id="Path_7473"
                      data-name="Path 7473"
                      d="M103.945,189.514H50.121a2.965,2.965,0,0,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 17.596)"
                      fill="#005cab"
                    />
                    <path
                      id="Path_7474"
                      data-name="Path 7474"
                      d="M116.293,153.037h-50a5.019,5.019,0,0,0-3.573,1.479L41.289,175.949a5.013,5.013,0,0,0-1.479,3.571v70.486a5.057,5.057,0,0,0,5.052,5.052h71.431a5.058,5.058,0,0,0,5.052-5.052V158.089A5.057,5.057,0,0,0,116.293,153.037ZM62.464,163.16v12.531H49.933Zm52.951,85.969H45.74V181.621h17.6a5.058,5.058,0,0,0,5.052-5.052v-17.6h47.022Z"
                      transform="translate(0)"
                      fill="#005cab"
                    />
                    <path
                      id="Path_7475"
                      data-name="Path 7475"
                      d="M102.463,202.763v11.89H51.6v-11.89h50.86m1.248-4.447H50.356a3.2,3.2,0,0,0-3.2,3.2V215.9a3.2,3.2,0,0,0,3.2,3.2h53.354a3.2,3.2,0,0,0,3.2-3.2V201.515a3.2,3.2,0,0,0-3.2-3.2Z"
                      transform="translate(3.544 21.842)"
                      fill="#005cab"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">FLYERS</h3>
              <p>
                The flyers will follow a similar approach to the landing page.
                Each one will feel like a throwback to a classic movie poster,
                like Gremlins or Halloween.
              </p>
              <p>
                There will be some clever analogies from whatever horror trope
                to the products/solutions we are trying to push. Generally, the
                imagery and colors are used to snatch attention, from which we
                will quickly turn to the conversions.
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
                    fill="#00529c"
                  />
                </g>
              </svg>
              <h3 className="">EMAILS</h3>
              <p>
                Imagine all the fun we can have with these subject lines. A
                GHOUL is in your office! What's lurking in your printer? Stop
                living in fear of that old scanner. It writes itself, really.
              </p>
              <p>
                We continue to focus on humor and pop culture references to
                generate interaction, and the email will then establish quick
                benefits or considerations to drive toward clicks.
              </p>
              <p>
                The email CTAs can go to the landing page or a specific product.
              </p>
            </Col>
            <Col className="content-container column f-o-0-m" xl={5}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9130.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed navy-circle purple">
          <Row className="align-items-center">
            <Col className="content-container column" xl={6}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Ad_c_1.png"
                className="box-shadow-3"
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={6}
              lg={8}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120.999"
                height="109.999"
                viewBox="0 0 120.999 109.999"
              >
                <g
                  id="Group_9123"
                  data-name="Group 9123"
                  transform="translate(-742.501 -9577.002)"
                >
                  <g
                    id="Group_9112"
                    data-name="Group 9112"
                    transform="translate(-151.609 8836.479)"
                  >
                    <path
                      id="Path_7483"
                      data-name="Path 7483"
                      d="M1306.109,823.022h53a12,12,0,0,0,12-12V744.272a3.753,3.753,0,0,0-3.749-3.749h-69.5a3.753,3.753,0,0,0-3.749,3.749v66.751a12,12,0,0,0,12,12Zm53-5.5h-53a6.506,6.506,0,0,1-6.5-6.5v-43h66v43A6.506,6.506,0,0,1,1359.11,817.522Zm6.5-71.5v16.5h-66v-16.5Z"
                      transform="translate(-378)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7484"
                      data-name="Path 7484"
                      d="M1846.86,946.023h33a2.75,2.75,0,1,0,0-5.5h-33a2.75,2.75,0,1,0,0,5.5Z"
                      transform="translate(-897.751 -189)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7485"
                      data-name="Path 7485"
                      d="M1444.124,943.541c0,.045.01.09.016.134s.015.089.024.133.019.088.03.131.023.087.036.13.027.086.042.128.031.085.048.126.035.083.054.123.04.081.06.12.043.079.066.117.047.077.072.114.051.074.078.111.055.071.083.106.058.07.089.1.062.067.093.1.065.063.1.094.068.059.1.088.07.056.107.083.073.052.11.077.076.049.115.072.078.045.117.066.08.041.12.061.082.037.123.054.083.034.125.048.085.03.128.042.086.025.13.036.087.021.131.03.089.017.133.024l.134.017c.045,0,.09.008.135.01s.091,0,.136,0,.09,0,.135,0,.09-.005.135-.01.09-.01.134-.017.089-.014.133-.024.088-.019.131-.03.087-.023.13-.036.085-.027.128-.042.084-.031.125-.048.083-.035.123-.054.081-.04.12-.061.079-.043.117-.066.077-.047.114-.072.075-.051.11-.077.072-.055.107-.083.069-.058.1-.088.067-.062.1-.094.063-.065.094-.1.06-.068.089-.1.056-.07.083-.106.053-.073.078-.111.049-.076.072-.114.045-.078.066-.117.041-.08.061-.12.037-.081.054-.123.034-.084.048-.126.029-.085.042-.128.025-.086.036-.13.021-.087.03-.131.017-.089.024-.133.012-.09.016-.134.008-.09.01-.135,0-.091,0-.136,0-.09,0-.135-.006-.09-.01-.135-.01-.09-.016-.134-.015-.089-.024-.133-.019-.088-.03-.131-.023-.087-.036-.13-.027-.085-.042-.128-.031-.084-.048-.125-.036-.082-.054-.123-.04-.081-.061-.12-.043-.079-.066-.117-.047-.077-.072-.114-.051-.075-.078-.111-.054-.072-.083-.107-.058-.069-.089-.1-.062-.066-.094-.1-.065-.063-.1-.094-.068-.06-.1-.089-.07-.056-.107-.083-.073-.053-.11-.078-.075-.049-.114-.072-.078-.045-.117-.066-.08-.041-.12-.061-.082-.037-.123-.054-.083-.033-.125-.048l-.128-.042c-.043-.013-.087-.025-.13-.036s-.088-.021-.131-.03-.089-.016-.133-.023-.089-.013-.134-.017-.09-.008-.135-.01c-.09,0-.181,0-.271,0-.045,0-.09.006-.135.01s-.09.01-.134.017-.089.014-.133.023-.088.019-.131.03-.087.023-.13.036-.086.028-.128.042-.084.031-.125.048-.083.036-.123.054-.081.04-.12.061-.079.043-.117.066-.077.047-.115.072-.074.051-.11.078-.072.054-.107.083-.069.058-.1.089-.067.062-.1.094-.063.065-.093.1-.06.068-.089.1-.056.07-.083.107-.053.073-.078.111-.049.075-.072.114-.045.078-.066.117-.041.08-.06.12-.037.082-.054.123-.034.084-.048.125-.029.085-.042.128-.025.087-.036.13-.021.088-.03.131-.017.089-.024.133-.012.089-.016.134-.008.09-.01.135,0,.09,0,.135,0,.091,0,.136S1444.119,943.5,1444.124,943.541Z"
                      transform="translate(-519.75 -188.997)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7486"
                      data-name="Path 7486"
                      d="M1646.86,946.023h.33a2.75,2.75,0,1,0,0-5.5h-.33a2.75,2.75,0,1,0,0,5.5Z"
                      transform="translate(-708.75 -189)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7487"
                      data-name="Path 7487"
                      d="M2219.548,1452.454a13.256,13.256,0,0,0-3.924-1.984c-2.647-.974-2.9-1.3-2.9-2.383a2.6,2.6,0,0,1,.471-1.651,1.285,1.285,0,0,1,1.081-.411c1.55,0,2.512,1.728,2.521,1.745l-.015-.029,4.892-2.514a9.58,9.58,0,0,0-1.766-2.319,7.987,7.987,0,0,0-5.632-2.383,6.792,6.792,0,0,0-5.251,2.325,7.887,7.887,0,0,0-1.8,5.238,6.785,6.785,0,0,0,2.47,5.492,13.291,13.291,0,0,0,4.027,2.052c2.648.975,2.757,1.249,2.757,2.142a2.209,2.209,0,0,1-.442,1.5,2.675,2.675,0,0,1-1.76.5c-1.625,0-3.456-1.673-3.969-2.259l.009.011-4.177,3.579c.366.427,3.7,4.17,8.136,4.17a7.663,7.663,0,0,0,5.67-2.131,7.434,7.434,0,0,0,2.032-5.37A6.533,6.533,0,0,0,2219.548,1452.454Z"
                      transform="translate(-1239.872 -661.502)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7488"
                      data-name="Path 7488"
                      d="M1555.985,1443.383a3.749,3.749,0,0,0-7.283,0l-4.524,18.488a2.75,2.75,0,1,0,5.342,1.307l.262-1.072h5.122l.262,1.072a2.75,2.75,0,0,0,5.342-1.307Zm-4.857,13.223,1.215-4.966,1.215,4.966Z"
                      transform="translate(-614.239 -661.502)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7489"
                      data-name="Path 7489"
                      d="M1901.028,1440.525h-3.169a3.753,3.753,0,0,0-3.749,3.749v17.251a3.753,3.753,0,0,0,3.749,3.749h3.169a8.643,8.643,0,0,0,7.382-4.052,16.807,16.807,0,0,0-.012-16.647A8.643,8.643,0,0,0,1901.028,1440.525Zm0,19.25h-1.418v-13.75h1.418a3.143,3.143,0,0,1,2.785,1.588,9.771,9.771,0,0,1,1.3,5.287C1905.11,1456.071,1904.041,1459.775,1901.028,1459.775Z"
                      transform="translate(-945.001 -661.502)"
                      fill="#00529c"
                    />
                    <path
                      id="Path_7490"
                      data-name="Path 7490"
                      d="M1011.359,1212.024h-1.751v-67.75a3.753,3.753,0,0,0-3.749-3.749h-7.251a2.75,2.75,0,0,0,0,5.5h5.5v66H968.773a3.725,3.725,0,0,0-2.651,1.1l-1.652,1.652H944.749l-1.652-1.652a3.725,3.725,0,0,0-2.651-1.1H905.11v-66h5.5a2.75,2.75,0,0,0,0-5.5h-7.251a3.753,3.753,0,0,0-3.749,3.749v67.75h-1.751a3.753,3.753,0,0,0-3.749,3.749v.752a12,12,0,0,0,12,12h97a12,12,0,0,0,12-12v-.752A3.753,3.753,0,0,0,1011.359,1212.024Zm-8.25,11h-97a6.509,6.509,0,0,1-6.422-5.5H939.72l1.652,1.652a3.724,3.724,0,0,0,2.651,1.1H965.2a3.724,3.724,0,0,0,2.651-1.1l1.652-1.652h40.034A6.509,6.509,0,0,1,1003.11,1223.024Z"
                      transform="translate(0 -378.002)"
                      fill="#00529c"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="">GOOGLE DISPLAY ADS</h3>
              <p>
                Google Display Ads are the playground for this concept. We can
                run literally dozens of variants using popular horror ghouls and
                baddies to create a fun, interactive visual identity.
              </p>
              <p>
                Even with remarketing, there are very clever callouts we can
                play with such as: "is that zombie still following you around?
                Click to figure out how to get him out of your office."
              </p>
            </Col>
          </Row>
          <Row className="align-items-center blue-circle purple pink hollow-navy-circle">
            <Col className="content-container column z-index-10" xl={12}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Ad_c_2.png"
                className="box-shadow-3"
              />
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Ad_c_3.png"
                className="margin-top-30 long-ad box-shadow-3"
              />
            </Col>
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
