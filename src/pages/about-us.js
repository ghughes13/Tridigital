import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import EmployeeInfo from "../components/about-us-comps/about-us-employees";
import { Waypoint } from "react-waypoint";

const AboutUs = () => {
  useEffect(() => {});

  return (
    <Layout>
      <SEO title="About Us" />
      <div className="about-us-page showFirst">
        <EmployeeInfo />
        <Container className="container">
          <Row className="no-class-name">
            <Col className="content-container column">
              <h2 className="blue-text centered-text core-values">
                Our Core Values
              </h2>
            </Col>
          </Row>
          <img
            className="blob-graphic right-blob"
            src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/clear-blob.svg"
            alt=""
          ></img>
          <Row className="two-columns full-width-row content-right align-middle content-first">
            <Col className="content-container centered-text">
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/heart.png"
                alt="heart"
                className="scale-img first"
              />
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".scale-img.first")
                    .classList.add("scale-up")
                }
              />
            </Col>
            <Col className="content-container">
              <div className="values-card right one">
                <h3 className="pink-text">Love Your Work</h3>
                <p>
                  Cherish and protect your creations. Do not compromise its
                  quality.
                </p>
              </div>
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".values-card.one")
                    .classList.add("slide-left")
                }
              />
            </Col>
          </Row>
          <Row className="two-columns full-width-row content-right align-middle content-second flexed">
            <Col className="content-container">
              <div className="values-card two left left-align">
                <h3 className="purple-text">Create Superheroes</h3>
                <p>
                  People come first. We support, train, protect, and empower
                  people to unlock their superhuman potential.
                </p>
              </div>
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".values-card.two")
                    .classList.add("slide-right")
                }
              />
            </Col>
            <Col className="content-container centered-text">
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/mask.png"
                alt="mask"
                className="scale-img second"
              />
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".scale-img.second")
                    .classList.add("scale-up")
                }
              />
            </Col>
          </Row>
          <img
            className="blob-graphic left-blob"
            src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/about-us-left-svg.svg"
            alt=""
          ></img>
          <Row className="two-columns full-width-row content-right align-middle content-third">
            <Col className="content-container centered-text">
              <img
                className="eggs-img scale-img third"
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/Egg.png"
                alt="eggs"
              />
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".scale-img.third")
                    .classList.add("scale-up")
                }
              />
            </Col>
            <Col className="content-container">
              <div className="values-card right fourth">
                <h3 className="light-blue-text">Break Eggs</h3>
                <p>
                  Creating something meaningful and innovative doesn’t come
                  without frequent failure.
                </p>
              </div>
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".values-card.fourth")
                    .classList.add("slide-left")
                }
              />
            </Col>
          </Row>
          <Row className="two-columns full-width-row content-right align-middle content-fourth flexed">
            <Col className="content-container">
              <div className="values-card four left left-align">
                <h3 className="yellow-text">Make Your Mark</h3>
                <p>
                  Come in every day and make a difference. When you work with
                  passion, you create a legacy for all of those we touch.
                </p>
              </div>
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".values-card.four")
                    .classList.add("slide-right")
                }
              />
            </Col>
            <Col className="content-container centered-text">
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/draw.png"
                alt="drawing"
                className="scale-img fifth"
              />
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".scale-img.fifth")
                    .classList.add("scale-up")
                }
              />
            </Col>
          </Row>
          <Row className="two-columns full-width-row content-right align-middle content-fifth">
            <Col className="content-container centered-text">
              <img
                src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/paint.png"
                alt="paint"
                className="scale-img sixth"
              />
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".scale-img.sixth")
                    .classList.add("scale-up")
                }
              />
            </Col>
            <Col className="content-container">
              <div className="values-card right five">
                <h3 className="teal-text">Mix Paint</h3>
                <p>
                  Through collaboration we take people’s most unique qualities
                  and mix them to create something new and beautiful.
                </p>
              </div>
              <Waypoint
                onEnter={() =>
                  document
                    .querySelector(".values-card.five")
                    .classList.add("slide-left")
                }
              />
            </Col>
          </Row>
        </Container>
        <Container className="cta-container">
          <Row className="">
            <Col className="cta-card box-shadow">
              <h2 className="white-text compressed-text">
                Don’t Be Shy. Contact Us Today!
              </h2>
              <a className="white-text blue-button" href="/contact-us">
                Contact Us
              </a>
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

export default AboutUs;
