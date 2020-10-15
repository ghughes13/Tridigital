import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import InlineVideo from "../components/wistia_inline_video_player/WistiaInlineVideoPlayer";
import "../styles/mcg-concept-2.scss";

const IndexPage = () => {
  useEffect(() => {
    document.querySelector(".fixed").classList.add("brother-nav-fixed");
    document.querySelector(".mainHeader").innerHTML = `
      <nav class="brother-nav mainHeader navbar" role="navigation">
      <div class="left-logo">
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/09/Image-21.png" alt="tridigital logo white">
      </div>
      <div class="right-logos">
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/09/Group-9151.png" alt="tridigital logo colored">
      </div>
      </nav>`;
    document.querySelector("footer").style.display = "none";
  });

  return (
    <Layout>
      <SEO title="Home" />
      <div className="mcg-concept-2">
        <Container className="hero-section transparent-hero container flexed">
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
              <img
                src={require("../images/svgs/mcg-concept/Group 9149.svg")}
                alt=""
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="blue top-bar">THE OVERVIEW</h3>
              <p>
                This rebrand is focused on transforming Michell Consulting
                Group’s brand image to something more modern, cutting edge, and
                to accurately reflect the organization as a best in class
                technology company. During these difficult times we want to
                showcase a brand image that is new, fresh, and full of life to
                existing clients and net new prospects we are targeting. We want
                to make a statement saying, “We are still here and better than
                ever!”
              </p>
            </Col>
            <Col className="content-container column flex-center" xl={6} lg={6}>
              <img
                src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9122-1.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center step-row">
            <Col className="content-container column" xl={4} lg={6}>
              <img
                src={require("../images/mcg-concept/Group 9708.png")}
                alt=""
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="red top-bar">THE VISION</h3>
              <p>
                We are aiming to change the perception of clients and prospects
                when it comes to the Michell Consulting Group brand. The design
                reflects an organization that is experienced and professional
                but also cutting edge and very approachable. We drew inspiration
                from large organizations like SAP with their Business One
                Solution, and UPS with their Ware2Go solution, while also
                leveraging the look and feel of modern tech and app companies
                like Slack and Electric.
              </p>
            </Col>
            <Col
              className="content-container column f-o-0 step-number-svg"
              xl={3}
              lg={12}
            >
              <img
                src={require("../images/svgs/mcg-concept/Group 9148.svg")}
                alt=""
              />
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
              <img
                src={require("../images/svgs/mcg-concept/Group 9150.svg")}
                alt=""
              />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="yellow top-bar">THE GOAL</h3>
              <p>
                While we cut absolutely no corners when it came to design and
                animations, the number one goal of this rebrand is to keep
                things as simple as possible. Michell Consulting Group does a
                lot. So how do we help educate clients and prospects on all the
                values of the organization? This is the main reason why we
                focused on keeping everything short, straight forward and very
                simple. We changed Michell Consulting Group’s logo to just be
                MCG and kept that theme in writing marketing copy. We also
                classified MCG’s service areas into color groups that will
                transcend all online and offline print materials to help keep
                clients and prospects focused on the message.
              </p>
            </Col>
            <Col className="content-container column flex-center" xl={6} lg={6}>
              <img
                src={require("../images/mcg-concept/Group 9146.png")}
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed arrow-right dual-blue-arrows-bottom ">
          <Row className="align-items-center step-row">
            <Col
              className="content-container column blue-dashed-circle top left centered-text"
              id="concepts"
            >
              <img
                className="centered-text z-index-10"
                src={require("../images/mcg-concept/Group 9827.png")}
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container
          className="container flexed two-tone-bottom large-video-block"
          id="options"
        >
          <Row className="align-items-center">
            <InlineVideo videoID={"yhap32eheq"} />
          </Row>
        </Container>
        <Container className="container flexed rainbow-top" id="options">
          <Row className="align-items-center">
            <p className="big-p first">
              This logo concept is also clean and bold a reflection of the
              various layers, pieces, and disciplines it takes to effectively
              provide the wide range of services and solutions MCG offers. It is
              the visual representation of putting all the pieces together
              properly to become the all-in-one business partner.
            </p>
          </Row>
          <Row className="flex-center margin-bottom-100">
            <img
              className="centered-text"
              src={require("../images/svgs/mcg-concept/mcg-consulting-logo.svg")}
              alt=""
            />
          </Row>
        </Container>
        <Container className="container flexed " id="options">
          <Row className="align-items-center  max-width-1100 ">
            <h2 className="rainbow-bottom-border">COLOR</h2>
          </Row>
          <Row className="align-items-center">
            <p className="big-p second">
              Each color will represent a major service. The vibrance of each
              color will help to attract attention for both digital and print
              material.
            </p>
          </Row>
          <Row className="flex-center margin-bottom-100">
            <img
              className="centered-text"
              src={require("../images/svgs/mcg-concept/color-pallette.svg")}
              alt=""
            />
          </Row>
        </Container>
        <Container className="concept-1-background three-zero">
          <Row className="align-items-center max-width-1100">
            <h2 className="rainbow-bottom-border white-text">Typography</h2>
          </Row>
          <Row className="align-items-center">
            <p className="big-p third white-text">
              Geometric sans serif typefaces have been a popular design tool
              ever since these actors took to the world’s stage.{" "}
              <span className="bold">Poppins</span> is one of the new comers to
              this long tradition. With support for the Devanagari and Latin
              writing systems, it is an internationalist take on the genre.
            </p>
          </Row>
          <Row className="flex-center margin-bottom-100 font-family-desc max-width-1100">
            <Col className="content-container column" xl={4} lg={5}>
              <h2 className="white-text">POPPINS</h2>
            </Col>
            <Col className="content-container column" xl={8} lg={7}>
              <h3 className="small-h3">
                Poppins is a modern sans serif with a round touch.{" "}
              </h3>
              <h3 className="small-h3 large-letter-spacing">
                a b c d e f g h I j k l m n o p q r s t u v w x y z @ # $ % *
              </h3>
            </Col>
          </Row>
        </Container>
        <Container className="container flexed five-zero" id="options">
          <Row className="align-items-center max-width-1100">
            <h2 className="rainbow-bottom-border">icons</h2>
          </Row>
          <Row className="align-items-center">
            <p className="big-p third">
              Each icon style has a diverse color array while still fitting in
              with the style of the website. One style is more asymmetrical
              while the other is an outline. The asymmetrical icons give more of
              a creative visual while the outline icons give more of a logical
              visual.
            </p>
          </Row>
          <Row className="flex-center margin-bottom-100">
            <Col
              className="content-container column centered-text"
              xl={6}
              lg={6}
            >
              {" "}
              <img src={require("../images/mcg-concept/icons-1.png")} alt="" />
            </Col>{" "}
            <Col
              className="content-container column centered-text"
              xl={6}
              lg={6}
            >
              {" "}
              <img src={require("../images/mcg-concept/icons-2.png")} alt="" />
            </Col>
          </Row>
        </Container>

        <Container className="rainbow-background concept-display-section z-index-10">
          <Row className="align-items-center">
            <InlineVideo videoID={"1pcnhuyncv"} className="box-shadow" />
          </Row>
          <Row className="flex-col ">
            <img
              src={require("../images/mcg-concept/Concept 2.png")}
              id="concept-1-img"
              className="box-shadow margin-top-100"
              alt=""
            />
          </Row>
        </Container>
        <Container className="dark-blue-background container flexed padding-bottom-0 overflow-top">
          <Row className="align-items-center max-width-1100">
            <h2 className="rainbow-bottom-border white-text">
              Collateral that speaks for itself. Literally!
            </h2>
          </Row>
          <Row className="align-items-center">
            <p className="big-p third white-text">
              The metallic colors and big letters in the collateral will pop
              nicely while keeping the feeling simple and maximize the attention
              and engagement of the audience.
            </p>
          </Row>
          <Row className="align-items-center max-width-1100">
            <p className="quote">
              “Design is not just what it looks like and feels like. Design is
              how it works.”{" "}
              <cite>— Steve Jobs, co-founder of Apple, Inc.</cite>
            </p>
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <h2 className="centered-text white-text margin-top-100">
              collaterals
            </h2>
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/concept-3-collateral.png")}
              id="concept-1-img"
              className="full-img"
              alt=""
            />
          </Row>
        </Container>
        <Container className="container flexed padding-bottom-0">
          <Row className="align-items-center max-width-1100 justify-center">
            <h2 className="centered-text black-text">SWAG</h2>
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/shirts-3.png")}
              id="concept-1-img"
              className="full-img"
              alt=""
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center margin-top-neg-20">
            <img
              src={require("../images/mcg-concept/cups-3.png")}
              id="concept-1-img"
              className="full-img"
              alt=""
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/swag-3.png")}
              id="concept-1-img"
              className="full-img"
              alt=""
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/stationary-3.png")}
              id="concept-1-img"
              className="full-img"
              alt=""
            />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
