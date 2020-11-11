import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";

import Loader from "../components/loader/Loader";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import "../styles/careers-page.scss";

const CareersPage = () => {
  const changeFileName = () => {
    const uploadField = document.getElementById("file");

    console.log(uploadField.files[0].size);
    if (uploadField.files[0].size > 52428800) {
      alert(
        "File is too big! Max resume size is 50MB. Try compressing your video or resume."
      );
      uploadField.value = "";
    }

    const selectedFile = document.getElementById("file").value;
    console.log(selectedFile);
    document.getElementById("fileUploadedName").innerText =
      "File Uploaded: " + selectedFile;
  };

  return (
    <Layout>
      <SEO title="Join Us" />
      <div className="careers-page">
        <Container className="hero-section">
          <Col className="centered-text column content-container">
            <h1 className="white-text">JOIN OUR TEAM</h1>
          </Col>
        </Container>
        <Container className="looking-for">
          <Row>
            <Col className="">
              <h2>WHO WE’RE LOOKING FOR</h2>
              <p>
                FIRST THINGS FIRST! If you want to work with us you gotta love
                movies and comics. If not, chances are you’ll think we’re weird.
                (Don’t worry. We’ll probably think you’re a little off, too. No
                harm, no foul.)
              </p>
              <p>
                We encourage thinking outside the box and look for people who
                are devoted to becoming experts in their craft. We desire people
                who want to hone in on their natural strengths and skills—people
                who share our passion for exceeding our clients’ expectations to
                deliver powerful results.
              </p>
            </Col>
            <Col className="">
              <div className="top-img">
                <img src={require("../images/careers/TD Halloween 2016.png")} />
              </div>
              <div className="lower-row flex-row">
                <img src={require("../images/careers/DSC04480.png")} />
                <img
                  src={require("../images/careers/52183961_2204087216510737_5235315106437363317_n.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="blueish-section clip-path-1 about-you">
          <Row>
            <Col className="centered-text max-width-820">
              <h2 className="white-text">IT’S ABOUT YOU TOO</h2>
              <p className="white-text">
                Affordable Health, Dental, Vision and Prescription plans
                <br />
                Life & AD&D Insurance
                <br /> Supplemental Life Insurance Available
                <br /> Vacation, Sick Time, and Holidays
              </p>
            </Col>
          </Row>
          <Row className="margin-top-25">
            <Col className="centered-text">
              <span className="large-number">
                <CountUp start={0} end={14}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <Waypoint
                        onEnter={() => {
                          start();
                          console.log("ran");
                        }}
                      />
                    </div>
                  )}
                </CountUp>
              </span>
              <h3 className="tealish-text">DAYS PAID TIME OFF</h3>
              <p className="tealish-text">
                Second year, full-time employees only
              </p>
            </Col>
            <Col className="centered-text">
              <span className="large-number">
                {" "}
                <CountUp start={0} end={7}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <Waypoint
                        onEnter={() => {
                          start();
                          console.log("ran");
                        }}
                      />
                    </div>
                  )}
                </CountUp>
              </span>
              <h3 className="tealish-text">DAYS PAID TIME OFF</h3>
              <p className="tealish-text">
                Second year, full-time employees only
              </p>
            </Col>
            <Col className="centered-text">
              <span className="large-number">
                {" "}
                <CountUp start={0} end={4}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <Waypoint
                        onEnter={() => {
                          start();
                          console.log("ran");
                        }}
                      />
                    </div>
                  )}
                </CountUp>
              </span>
              <h3 className="tealish-text">CANVAS DAYS</h3>
            </Col>
          </Row>
        </Container>
        <Container className="white-swish">
          <Row>
            <Col className="centered-text">
              <h2>BUT WAIT, THERE'S MORE!</h2>
            </Col>
          </Row>
          <Row className="two-columns">
            <Col className="centered-text video-col">
              <Waypoint
                onEnter={() => {
                  document.querySelector(".video-1").play();
                }}
              />
              <video className="video-1" muted>
                <source src={require("../videos/01CupR.mp4")} />
                Your browser does not support the video tag
              </video>
              <h3 className="yellow-text">KITCHEN</h3>
              <p className="max-width-450">
                Stocked with caffeine and snacks. Gluten free? Organic? We have
                it.
              </p>
            </Col>
            <Col className="centered-text video-col">
              <Waypoint
                onEnter={() => {
                  document.querySelector(".video-2").play();
                }}
              />
              <video className="video-2" muted>
                <source src={require("../videos/06bulbR.mp4")} />
                Your browser does not support the video tag
              </video>
              <h3 className="blue-text">CANVAS DAY</h3>
              <p className="max-width-450">
                Pixar does it. Why can’t we? A day to improve TRIdigital with
                our innovating ideas.
              </p>
            </Col>
          </Row>
          <Row className="two-columns">
            <Col className="centered-text video-col">
              <Waypoint
                onEnter={() => {
                  document.querySelector(".video-3").play();
                }}
              />
              <video className="video-3" muted>
                <source src={require("../videos/02iphoneR.mp4")} />
                Your browser does not support the video tag
              </video>
              <h3 className="pink-text">CELL PHONES ALLOWED</h3>
              <p className="max-width-450">
                We know how important social media is so we’re cool with you
                using it.
              </p>
            </Col>
            <Col className="centered-text video-col">
              <Waypoint
                onEnter={() => {
                  document.querySelector(".video-4").play();
                }}
              />
              <video className="video-4" muted>
                <source src={require("../videos/05hangerR.mp4")} />
                Your browser does not support the video tag
              </video>
              <h3 className="yellow-text">DRESS CODE</h3>
              <p className="max-width-450">
                Wear what you like. But don’t get crazy!
              </p>
            </Col>
          </Row>
          <Row className="two-columns">
            <Col className="centered-text video-col">
              <Waypoint
                onEnter={() => {
                  document.querySelector(".video-5").play();
                }}
              />
              <video className="video-5" muted>
                <source src={require("../videos/08filmR.mp4")} />
                Your browser does not support the video tag
              </video>
              <h3 className="yellow-text">MOVIE NIGHTS</h3>
              <p className="max-width-450">Movie critics have nothing on us!</p>
            </Col>
            <Col className="centered-text video-col">
              <Waypoint
                onEnter={() => {
                  document.querySelector(".video-6").play();
                }}
              />
              <video className="video-6" muted>
                <source src={require("../videos/07foxR.mp4")} />
                Your browser does not support the video tag
              </video>
              <h3 className="blue-text">FOCUS FOX FRIDAYS</h3>
              <p className="max-width-450">
                A day of work with peace and quiet…at home and in your PJs.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="blueish-section clip-path-2 form-section">
          <Row>
            <Col className="centered-text white-text">
              <h3 className="large-h3 white-text">SUBMIT YOUR VIDEO RESUME</h3>
              <p className="white-text">
                Take the leap into fighting boring marketing. Submit your video
                resume (this applies to all positions – not just Video Editors).
              </p>
              <p className="white-text">
                It doesn’t have to be Spielberg quality. We’re just looking for
                personality.
              </p>
              <p className="white-text">
                *We want actual video resumes, not links to YouTube channels or
                videos created for other reasons.
              </p>
            </Col>
          </Row>
          <Row>
            <form
              id="careers-page"
              className="careers-page"
              method="POST"
              name="careers-page"
              action="/careers/#thanks"
              onSubmit={e => {
                e.preventDefault();
                const submitButton = document.getElementById("sbmt-form-btn");
                const loader = document.querySelector(".loader");
                const formName = document.getElementById("careers-page");

                loader.style.display = "block";
                submitButton.style.display = "none";

                fetch(formName.getAttribute("action"), {
                  method: "POST",
                  body: new FormData(document.getElementById("careers-page")),
                })
                  .then(res => {
                    if (res.status === 200) {
                      document.querySelector("#careers-page").style.display =
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

              <div className="form-content margin-top-60">
                <div className="name company-field">
                  <label htmlFor="name">What’s your name?</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="send-value"
                    required
                  />
                </div>
                <div className="email company-field">
                  <label htmlFor="email">What’s your email address?</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="send-value"
                    required
                  />
                </div>
                <div className="phone-number">
                  <label htmlFor="phone-number">
                    What's your phone number?
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    className="send-value"
                    required
                  />
                </div>
                <div className="file">
                  <label htmlFor="file" className="custom-file-upload">
                    <input
                      type="file"
                      name="logo"
                      id="file"
                      className="file-upload"
                      required
                      onChange={changeFileName}
                    />
                    Drop files here or
                    <button type="button" className="pointer-events-none">
                      Select Files
                    </button>
                    <p id="fileUploadedName"></p>
                  </label>
                </div>
                <div className="sell-to">
                  <label htmlFor="sell-to">
                    Do you have an online portfolio?
                  </label>
                  <input
                    type="text"
                    name="sell-to"
                    id="sell-to"
                    className="send-value"
                    required
                  />
                </div>
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
            <p className="contact-thank-you">
              Thank you! If we feel you're a good fit we'll be in contact soon!
            </p>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default CareersPage;
