import React, { useEffect } from "react";
import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import InlineVideo from "../components/wistia_inline_video_player/WistiaInlineVideoPlayer";

import "../styles/data-tech-strategy.scss";

const IndexPage = () => {
  useEffect(() => {
    document.querySelector(".fixed").classList.add("carolina-nav-fixed");
    document.querySelector(".mainHeader").innerHTML = `
      <nav class="carolina-nav mainHeader navbar" role="navigation">
      <div class="left-logo">
        <img class="logo"  style="visibility: hidden" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/06/carolina-logo.png" alt="tridigital logo white">
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
      <SEO title="Data-Tech Strategy" />
      <div className="carolina-strategy">
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
                This brand development project will be centered around the
                creation of a website and company brochure for Data-Tech.
              </p>
              <p>
                Through a complete refresh of content tone and visual brand
                identity, we will develop the Data-Tech brand to be more in-line
                with their culture, target market, and business goals.
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
                Data-Tech’s current brand identity doesn’t represent who they
                are as a company. To put it kindly, their digital footprint is
                near identical to so many other competitors in the area.
              </p>
              <p>
                With this brand development project, we want to hone in on what
                makes Data-Tech unique. Through a more thoughtful content
                structure and style, we will call direct attention to
                differentiators including custom-built hardware and an in-house
                data center.
              </p>
              <p>
                The design will also breathe new life into the brand with a
                one-of-a-kind visual identity that communicates not only the
                youthful culture of the company but also the outstanding,
                success-driven solutions they provide.
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
                When the website and company brochure are done, we want to have
                a completely new and united brand that Data-Tech can carry
                forward into the market.
              </p>
              <p>
                This updated brand will be targeted at mid-market businesses
                across the state of Florida. It will more closely connect to the
                culture and in-person quality of Data-Tech while also making
                them attractive to potential investors or acquisitions.
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
                  src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Group-9126.png"
                />
                <p>Concept 1</p>
                <h3>
                  DOING THINGS <br />
                  THE RIGHT WAY
                </h3>
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
                <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Group-9152.png" />
                <p>Concept 2</p>
                <h3>BEYOND THE BOX</h3>
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
              style={{ textAlign: "center", marginTop: "100px" }}
            >
              <img
                className="img-width-100"
                style={{ width: "80%" }}
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Data-Tech_Isometric_Concept_1-copy.png"
              />
            </Col>
            <Col className="content-container column step-text-block" xl={4}>
              <h3 className="">DOING THINGS THE RIGHT WAY</h3>
              <p>
                This concept boasts a more corporate-professional design
                approach. With large color blocks and bold headings, coupled
                with imagery of the Data-Tech team, this concept presents a more
                relatable — if more standard — approach.
              </p>
              <p>
                The copy is focused on the how and why of Data-Tech. Building
                from the theme of “Craftsman Mindset,” we explain why doing
                things the Data-Tech way is the right way.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="concept-1-background concept-display-section">
          <Row className="align-items-center">
            <Col
              className="content-container column white-text padding-left-0"
              xl={6}
              lg={8}
            >
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
              <h3 className="white-text">HOMEPAGE</h3>
              <p>
                This landing page falls more in line with a
                corporate-professional design. Though we still have exciting
                elements and an overall beautiful design, the experience and
                interaction on the page are what a typical user would expect
                from a professional services company.
              </p>
            </Col>{" "}
            <Col
              className="content-container column step-text-block"
              xl={4}
            ></Col>
          </Row>
          <Row className="align-items-center">
            <h3 class="white-text title">Video</h3>
            <InlineVideo videoID={"cos9gnt1sl"} className="box-shadow" />
          </Row>
          <Row className="flex-col">
            <h3 class="white-text title margin-top-80">Concept 1</h3>
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Web-1366-–-1.png"
              id="concept-2-orig"
            />{" "}
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col className="content-container column" xl={5} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Group-9155.png" />
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
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7472"
                      data-name="Path 7472"
                      d="M103.945,181.523H50.121a2.965,2.965,0,1,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 13.742)"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7473"
                      data-name="Path 7473"
                      d="M103.945,189.514H50.121a2.965,2.965,0,0,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 17.596)"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7474"
                      data-name="Path 7474"
                      d="M116.293,153.037h-50a5.019,5.019,0,0,0-3.573,1.479L41.289,175.949a5.013,5.013,0,0,0-1.479,3.571v70.486a5.057,5.057,0,0,0,5.052,5.052h71.431a5.058,5.058,0,0,0,5.052-5.052V158.089A5.057,5.057,0,0,0,116.293,153.037ZM62.464,163.16v12.531H49.933Zm52.951,85.969H45.74V181.621h17.6a5.058,5.058,0,0,0,5.052-5.052v-17.6h47.022Z"
                      transform="translate(0)"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7475"
                      data-name="Path 7475"
                      d="M102.463,202.763v11.89H51.6v-11.89h50.86m1.248-4.447H50.356a3.2,3.2,0,0,0-3.2,3.2V215.9a3.2,3.2,0,0,0,3.2,3.2h53.354a3.2,3.2,0,0,0,3.2-3.2V201.515a3.2,3.2,0,0,0-3.2-3.2Z"
                      transform="translate(3.544 21.842)"
                      fill="#D7AAB3"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">WHITEPAPERS</h3>
              <p>
                Whitepapers will continue to use the company photos as the key
                piece of imagery. By keeping with bold headings, the intro to
                the whitepapers can be simple enough to not distract from the
                topic.
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
                    fill="#D7AAB3"
                  />
                </g>
              </svg>
              <h3 className="">EMAILS</h3>
              <p>
                Emails will rely on company photography coupled with the
                established design elements from the landing page. Shorter, bold
                headings with concise copy and clear calls to action will drive
                marketing brand identity.
              </p>
            </Col>
            <Col className="content-container column f-o-0-m" xl={5}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Group-9156.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed navy-circle">
          <Row className="align-items-center">
            <Col className="content-container column z-index-10" xl={6}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Business-Card-1.png"
                className="box-shadow-3"
              />
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Business-Card-1-–-1.png"
                className="box-shadow-3 margin-top-50"
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
                  <g id="Group_9131" data-name="Group 9131">
                    <path
                      id="Path_7502"
                      data-name="Path 7502"
                      d="M221.507,81.716H134.821A19.844,19.844,0,0,0,115,101.537v52.328a19.844,19.844,0,0,0,19.821,19.821h86.685a19.844,19.844,0,0,0,19.821-19.821V101.537A19.844,19.844,0,0,0,221.507,81.716ZM233.4,153.865a11.906,11.906,0,0,1-11.893,11.893H134.821a11.906,11.906,0,0,1-11.893-11.893V101.537a11.906,11.906,0,0,1,11.893-11.893h86.685A11.906,11.906,0,0,1,233.4,101.537Z"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7503"
                      data-name="Path 7503"
                      d="M295.117,143.567H260.232a3.172,3.172,0,1,0,0,6.343h34.885a3.172,3.172,0,1,0,0-6.343Z"
                      transform="translate(-75.593 -32.912)"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7504"
                      data-name="Path 7504"
                      d="M295.117,170.68H260.232a3.171,3.171,0,1,0,0,6.343h34.885a3.171,3.171,0,1,0,0-6.343Z"
                      transform="translate(-75.593 -47.339)"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7505"
                      data-name="Path 7505"
                      d="M282.431,197.792h-22.2a3.172,3.172,0,1,0,0,6.343h22.2a3.172,3.172,0,1,0,0-6.343Z"
                      transform="translate(-75.593 -61.767)"
                      fill="#D7AAB3"
                    />
                    <circle
                      id="Ellipse_1994"
                      data-name="Ellipse 1994"
                      cx="11.326"
                      cy="11.326"
                      r="11.326"
                      transform="matrix(1, -0.009, 0.009, 1, 141.251, 105.14)"
                      fill="#D7AAB3"
                    />
                    <path
                      id="Path_7506"
                      data-name="Path 7506"
                      d="M182.109,178.658a12.982,12.982,0,0,1-14.868,0c-5.2,2.877-9.209,8.683-10.771,15.814a5.5,5.5,0,0,0,5.369,6.669h25.672a5.5,5.5,0,0,0,5.369-6.669C191.319,187.341,187.314,181.535,182.109,178.658Z"
                      transform="translate(-21.998 -51.585)"
                      fill="#D7AAB3"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">BUSINESS CARD</h3>
              <p>
                The business cards for concept 1 will rely on the idea of doing
                things right. With the simple tagline “Your IT done right,” we
                leave people with a clear message of what Data-Tech is about.
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
              style={{ textAlign: "center" }}
            >
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Data-Tech_Isometric_Concept_2-copy.png" />
            </Col>
            <Col className="content-container column step-text-block" xl={4}>
              <h3 className="">PEACE OF MIND</h3>
              <p>
                This concept is where we stretch our legs a bit. Both the design
                and copy are pushing the boundaries of the normal professional
                services web experience. We take queues from product web
                experience to create a new — and altogether one-of-a-kind —
                experience for IT services.
              </p>
              <p>
                As the name implies, the design and copy are outside of the box.
                But the concept of “Beyond the box” plays on several levels for
                Data-Tech. Beyond the box as in better than straight out of the
                box IT. Problem solving and service that goes beyond the
                “standard” box. Custom build hardware that is beyond the box
                that contains your PC.
              </p>
              <p>This is a one-of-a-kind brand.</p>
            </Col>
          </Row>
        </Container>
        <Container className="concept-2-background concept-display-section">
          <Row className="align-items-center">
            <Col
              className="content-container column white-text padding-left-0"
              xl={6}
            >
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
              <h3 className="white-text">HOMEPAGE</h3>
              <p>
                The landing page plays with the concept of beyond the box
                visually. With the boldness and drama of this design, the hero
                text is big, bold and concise. No subheaders, no other text.
                Just the presence of an idea.
              </p>
              <p>
                The design of the box with an inner glow reinforces this
                concept. It introduces interest. What’s the glow? What does
                “Beyond the box” mean?
              </p>
              <p>
                With a combination of this bold imagery and headers, backed by
                concise content, we can present a beautiful brand identity with
                content that drives constant interest.
              </p>
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
            ></Col>
          </Row>
          <Row className="align-items-center">
            <h3 class="white-text title">Video</h3>
            <InlineVideo videoID={"8k58ysrmfo"} />
          </Row>
          <Row className="flex-col">
            <h3 class="white-text title margin-top-80">Concept 2</h3>
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Web-1366-–-2.png"
              id="concept-2-orig"
            />
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col className="content-container column" xl={5} lg={6}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Group-9158.png" />
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
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7472"
                      data-name="Path 7472"
                      d="M103.945,181.523H50.121a2.965,2.965,0,1,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 13.742)"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7473"
                      data-name="Path 7473"
                      d="M103.945,189.514H50.121a2.965,2.965,0,0,0,0,5.93h53.824a2.965,2.965,0,1,0,0-5.93Z"
                      transform="translate(3.544 17.596)"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7474"
                      data-name="Path 7474"
                      d="M116.293,153.037h-50a5.019,5.019,0,0,0-3.573,1.479L41.289,175.949a5.013,5.013,0,0,0-1.479,3.571v70.486a5.057,5.057,0,0,0,5.052,5.052h71.431a5.058,5.058,0,0,0,5.052-5.052V158.089A5.057,5.057,0,0,0,116.293,153.037ZM62.464,163.16v12.531H49.933Zm52.951,85.969H45.74V181.621h17.6a5.058,5.058,0,0,0,5.052-5.052v-17.6h47.022Z"
                      transform="translate(0)"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7475"
                      data-name="Path 7475"
                      d="M102.463,202.763v11.89H51.6v-11.89h50.86m1.248-4.447H50.356a3.2,3.2,0,0,0-3.2,3.2V215.9a3.2,3.2,0,0,0,3.2,3.2h53.354a3.2,3.2,0,0,0,3.2-3.2V201.515a3.2,3.2,0,0,0-3.2-3.2Z"
                      transform="translate(3.544 21.842)"
                      fill="#C9DDE2"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">WHITEPAPER</h3>
              <p>
                The whitepapers for concept 2 will continue to leverage this
                extremely bold and dramatic imagery. With bold headings
                reinforced with massive imagery, we generate a strong brand
                presence and identity.
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
                    fill="#C9DDE2"
                  />
                </g>
              </svg>
              <h3 className="">EMAILS</h3>
              <p>
                Email content for this concept will mix concise headings with
                more informative text. We will use emails to establish clear
                use-cases or pain points while presenting helpful content from
                Data-Tech.{" "}
              </p>
            </Col>
            <Col className="content-container column f-o-0-m" xl={5}>
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Group-9159.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed navy-circle pink">
          <Row className="align-items-center">
            <Col className="content-container column z-index-10" xl={6}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Business-Card-2.png"
                className="box-shadow-3"
              />
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/07/Business-Card-2-–-1.png"
                className="box-shadow-3 margin-top-50"
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
                  <g id="Group_9131" data-name="Group 9131">
                    <path
                      id="Path_7502"
                      data-name="Path 7502"
                      d="M221.507,81.716H134.821A19.844,19.844,0,0,0,115,101.537v52.328a19.844,19.844,0,0,0,19.821,19.821h86.685a19.844,19.844,0,0,0,19.821-19.821V101.537A19.844,19.844,0,0,0,221.507,81.716ZM233.4,153.865a11.906,11.906,0,0,1-11.893,11.893H134.821a11.906,11.906,0,0,1-11.893-11.893V101.537a11.906,11.906,0,0,1,11.893-11.893h86.685A11.906,11.906,0,0,1,233.4,101.537Z"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7503"
                      data-name="Path 7503"
                      d="M295.117,143.567H260.232a3.172,3.172,0,1,0,0,6.343h34.885a3.172,3.172,0,1,0,0-6.343Z"
                      transform="translate(-75.593 -32.912)"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7504"
                      data-name="Path 7504"
                      d="M295.117,170.68H260.232a3.171,3.171,0,1,0,0,6.343h34.885a3.171,3.171,0,1,0,0-6.343Z"
                      transform="translate(-75.593 -47.339)"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7505"
                      data-name="Path 7505"
                      d="M282.431,197.792h-22.2a3.172,3.172,0,1,0,0,6.343h22.2a3.172,3.172,0,1,0,0-6.343Z"
                      transform="translate(-75.593 -61.767)"
                      fill="#C9DDE2"
                    />
                    <circle
                      id="Ellipse_1994"
                      data-name="Ellipse 1994"
                      cx="11.326"
                      cy="11.326"
                      r="11.326"
                      transform="matrix(1, -0.009, 0.009, 1, 141.251, 105.14)"
                      fill="#C9DDE2"
                    />
                    <path
                      id="Path_7506"
                      data-name="Path 7506"
                      d="M182.109,178.658a12.982,12.982,0,0,1-14.868,0c-5.2,2.877-9.209,8.683-10.771,15.814a5.5,5.5,0,0,0,5.369,6.669h25.672a5.5,5.5,0,0,0,5.369-6.669C191.319,187.341,187.314,181.535,182.109,178.658Z"
                      transform="translate(-21.998 -51.585)"
                      fill="#C9DDE2"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="">BUSINESS CARD</h3>
              <p>
                The business card designs will take the idea that the hero of
                the landing page established and translate it into a physical
                item. These business cards are dra-ma-tic. And when you imagine
                the material they can be printed on, it’ll definitely leave the
                impression you want.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center blue-circle yellow hollow-navy-circle navy">
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
