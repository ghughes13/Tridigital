import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import InlineVideo from "../components/wistia_inline_video_player/WistiaInlineVideoPlayer";
import "../styles/mcg-concept.scss";
import FullPageVideo from "../components/fullpage-video/FullPageVideo";

const IndexPage = () => {
  useEffect(() => {
    document.querySelector(".fixed").classList.add("brother-nav-fixed");
    document.querySelector(".mainHeader").innerHTML = `
      <nav class="brother-nav mainHeader navbar" role="navigation">
      <div class="left-logo">
        <img class="logo" src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/09/Group-2428.png" alt="tridigital logo white">
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
      <div className="mcg-concept">
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
              <img src={require("../images/svgs/mcg-concept/Group 9149.svg")} />
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
              <img src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/05/Group-9122-1.png" />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center step-row">
            <Col className="content-container column" xl={4} lg={6}>
              <img src={require("../images/mcg-concept/Group 9708.png")} />
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
              <img src={require("../images/svgs/mcg-concept/Group 9148.svg")} />
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
              <img src={require("../images/svgs/mcg-concept/Group 9150.svg")} />
            </Col>
            <Col
              className="content-container column step-text-block"
              xl={4}
              lg={5}
            >
              <h3 className="yellow top-bar">THE GOAL</h3>
              <p>
                While we cut absolutely no corners when it came to design and
                animations, the number one goal of this rebrand is keep things
                as simple as possible. Michell Consulting Group does so much so
                how do we help educate clients and prospects on all the value of
                the organization. This is why we focused on keeping everything
                short, straight forward and very simple. We changed Michell
                Consulting Group logo to just be MCG and kept that theme in
                writing marketing copy. We also classified MCG’s service areas
                into color groups that will transcend all online and offline
                print materials to help keep clients and prospects focused on
                the message.
              </p>
            </Col>
            <Col className="content-container column flex-center" xl={6} lg={6}>
              <img src={require("../images/mcg-concept/Group 9146.png")} />
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
                className="centered-text"
                src={require("../images/mcg-concept/Group 9709.png")}
              />
            </Col>
          </Row>
        </Container>
        <Container
          className="container flexed rainbow-bottom large-video-block"
          id="options"
        >
          <Row className="align-items-center">
            <InlineVideo videoID={"guocpkushs"} />
          </Row>
        </Container>
        <Container className="container flexed rainbow-top" id="options">
          <Row className="align-items-center">
            <p className="big-p first">
              This logo concept is a clean and bold logo-mark, a reflection of
              the brand’s dedication to being a true partner that provides
              all-in-one business technology support and services for its
              clients. It is the visual representation of what MCG stands for as
              a company.
            </p>
          </Row>
          <Row className="flex-center margin-bottom-100">
            <img
              className="centered-text"
              src={require("../images/svgs/mcg-concept/logo-concept-1.svg")}
            />
          </Row>
        </Container>
        <Container className="container flexed arrow-right dual-blue-arrows-bottom offset-arrows-left">
          <Row className="align-items-center blue-dashed-circle">
            <Col className="content-container column centered-text">
              <img
                className="centered-text"
                src={require("../images/mcg-concept/Group 9711.png")}
              />
            </Col>
          </Row>
        </Container>
        <Container
          className="container flexed rainbow-bottom large-video-block"
          id="options"
        >
          <Row className="align-items-center">
            <InlineVideo videoID={"dgqw0bm1mj"} />
          </Row>
        </Container>
        <Container className="container flexed rainbow-top" id="options">
          <Row className="align-items-center">
            <p className="big-p second">
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
              src={require("../images/svgs/mcg-concept/Group 9709.svg")}
            />
          </Row>
        </Container>
        <Container className="container flexed three-zero" id="options">
          <Row className="align-items-center  max-width-1100">
            <h2 className="rainbow-bottom-border">COLOR</h2>
          </Row>
          <Row className="align-items-center">
            <p className="big-p third">
              Each color will represent a major service. The vibrance of each
              color will help to attract attention for both digital and print
              material.
            </p>
          </Row>
          <Row className="flex-center margin-bottom-100">
            <img
              className="centered-text"
              src={require("../images/svgs/mcg-concept/colors.svg")}
            />
          </Row>
        </Container>
        <Container className="concept-1-background four-zero">
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
              <h2>POPPINS</h2>
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
              <img src={require("../images/mcg-concept/Group 9410.png")} />
            </Col>{" "}
            <Col
              className="content-container column centered-text"
              xl={6}
              lg={6}
            >
              {" "}
              <img src={require("../images/mcg-concept/Group 9706.png")} />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed arrow-right dual-blue-arrows-bottom offset-arrows-left">
          <Row className="align-items-center blue-dashed-circle">
            <Col className="content-container column centered-text">
              <img
                className="centered-text"
                src={require("../images/mcg-concept/options.png")}
              />
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
                <img src={require("../images/mcg-concept/concept-1.png")} />
                <p>Concept 1</p>
                <h3>“RISe again stronger with a ALL-IN-ONE tech partner”</h3>
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
                <img src={require("../images/mcg-concept/concept-2.png")} />
                <p>Concept 2</p>
                <h3>“ORGANIZING THE CHAOS of complex technology”</h3>
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
          <Row className="align-items-center blue-dashed-circle">
            <Col className="content-container column centered-text">
              <img
                className="centered-text"
                src={require("../images/mcg-concept/concept-1-main.png")}
              />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col
              className="content-container column"
              xl={6}
              lg={5}
              id="concept-1"
            >
              <img
                className="img-width-100"
                src={require("../images/mcg-concept/Michell_Isometric_Concept_1 copy.png")}
              />
            </Col>
            <Col className="content-container column" xl={5}>
              <h2 className="rainbow-bottom-border">
                RISe again, with An ALL-IN-ONE Tech PARTNER
              </h2>
              <p className="blue-p-text">
                This theme is designed serve a dual meaning with both the word
                RISE as in (Rise up) and the letters in the word as an acronym,
                (R - Resilient, I - Integrated, S - Secure, E - Efficient). This
                will allow us to communicate a positive message of rising up
                again as business stronger than before by meeting the demands of
                the new business technology era. The new tech era for business
                require businesses to be Resilient, Integrated, Secure, and
                Efficient. MCG is the partner to help you achieve it.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="rainbow-background concept-display-section z-index-10">
          <Row className="align-items-center">
            <InlineVideo videoID={"15frrmspzt"} className="box-shadow" />
          </Row>
          <Row className="flex-col ">
            <img
              src={require("../images/mcg-concept/concept-1-site.png")}
              id="concept-1-img"
              className="box-shadow margin-top-100"
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
              The vibrant colors and big letters in the collateral will pop
              nicely while keeping the feeling of simple and maximize the
              attention and engagement of the audience.
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
              src={require("../images/mcg-concept/collateral-1 (2).png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center max-width-1100 justify-center">
            <h2 className="centered-text black-text">SWAG</h2>
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/shirts.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center margin-top-neg-20">
            <img
              src={require("../images/mcg-concept/cups.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/swag.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/stationary.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
        </Container>
        {/* ===================== */}
        {/* CONCEPT 2 STARTS HERE */}
        {/* ===================== */}
        <Container className="container flexed arrow-right dual-blue-arrows-bottom offset-arrows-left margin-top-150">
          <Row className="align-items-center blue-dashed-circle margin-top-100">
            <Col className="content-container column centered-text ">
              <img
                className="centered-text"
                src={require("../images/mcg-concept/concept-2-main.png")}
              />
            </Col>
          </Row>
        </Container>
        <Container className="container flexed">
          <Row className="align-items-center">
            <Col
              className="content-container column"
              xl={6}
              lg={5}
              id="concept-1"
            >
              <img
                className="img-width-100"
                src={require("../images/mcg-concept/Michell_Isometric_Concept_2.png")}
              />
            </Col>
            <Col className="content-container column" xl={5}>
              <h2 className="rainbow-bottom-border">ORGANIZING THE CHAOS</h2>
              <p className="blue-p-text">
                With this concept, we want to focus on the challenge of keeping
                up with a complex technology environment for business accrued a
                lot of technical debt by continuously adding pieces to it over
                the years. Stressing on the need of having a technology
                consultant has a business partner that can help you navigate the
                ever changing landscape and help you make the best technology
                decisions possible while taking the burden of implementing those
                solutions properly. By organizing the chaos you maximize the
                potential and efficiency of your business.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="rainbow-background-alt concept-display-section z-index-10">
          <Row className="align-items-center">
            <InlineVideo videoID={"9ouzxzbd8j"} className="box-shadow" />
          </Row>
          <Row className="flex-col ">
            <img
              src={require("../images/mcg-concept/concept-2-site.png")}
              id="concept-1-img"
              className="box-shadow margin-top-100"
            />
          </Row>
        </Container>
        <Container className="true-blue-background container flexed padding-bottom-0 overflow-top">
          <Row className="align-items-center max-width-1100">
            <h2 className="rainbow-bottom-border white-text">
              Collateral that speaks for itself. Literally!
            </h2>
          </Row>
          <Row className="align-items-center">
            <p className="big-p third white-text">
              The vibrant colors in some items will pop nicely and grab the
              attention of the audience.
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
              src={require("../images/mcg-concept/collats.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
        </Container>
        <Container className="container flexed padding-bottom-0">
          <Row className="align-items-center max-width-1100 justify-center">
            <h2 className="centered-text black-text">SWAG</h2>
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/shirts-2.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center margin-top-neg-20">
            <img
              src={require("../images/mcg-concept/cups-2.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/swag-2.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
          <Row className="align-items-center centered-text max-width-1100 justify-center">
            <img
              src={require("../images/mcg-concept/stationary-2.png")}
              id="concept-1-img"
              className="full-img"
            />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
