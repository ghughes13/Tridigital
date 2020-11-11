import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";
import { Parallax } from "react-parallax";

import Loader from "../components/loader/Loader";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import "../styles/art-director.scss";

const CareersPage = () => {
  const changeFileName = () => {
    const uploadField = document.getElementById("file");

    console.log(uploadField.files[0].size);
    if (uploadField.files[0].size > 52428800) {
      alert(
        "File is too big! Max resume size is 50MB. Try compressing your video."
      );
      uploadField.value = "";
    }

    const selectedFile = document.getElementById("file").value;
    console.log(selectedFile);
    document.getElementById("fileUploadedName").innerText =
      "File Uploaded: " + selectedFile;
  };

  return (
    <Layout whiteHero="true">
      <SEO title="Join Us" />
      <div className="art-director">
        <Container className="hero-section">
          <Row>
            <Col className="column content-container">
              <h1>Art Director</h1>
              <h3 className="pink-text">Job Summary</h3>
              <p>
                To be an Art Director at aTRIdigital you need to have a keen eye
                and an unwavering instinct for consistent quality. You’ll be
                working alongside our clients while leading a group of creatives
                to design awesome pieces of marketing material that promote some
                of the most recognizable brands in the IT industry.
              </p>
              <p>
                You’ll be the point-person translating customer thoughts into
                amazing visual marketing and ensuring that same strategy is
                carried on by your peers.{" "}
              </p>
            </Col>
            <Col className="centered-text column content-container">
              <img src={require("../images/art-director/Group 7412.png")} />
            </Col>
          </Row>
        </Container>
        <Container className="alert-container">
          <Parallax
            bgImage={require("../images/art-director/collage.png")}
            bgImageAlt="the cat"
            strength={200}
          >
            <Row className="alert">
              <Col className="white-text align-vertical">
                <p className="white-text">
                  We’re a group of creatives who spend a lot of time together,
                  and we very much have a work hard, play hard attitude. Agency
                  life being what it is, be ready to go beyond the 9 to 5. The
                  flip side of that coin is that we like to blow off steam and
                  find fun things we can do in and out of the office.
                </p>
              </Col>
            </Row>
          </Parallax>
        </Container>
        <Container className="purple-section">
          <Row>
            <Col className="centered-text max-width-820">
              <img src={require("../images/art-director/status.png")} />
            </Col>
            <Col className="align-vertical">
              <div>
                <h3 className="white-text">Who we’re looking for</h3>
                <p className="white-text">
                  We need a rad person who is excellent at working alongside
                  fellow creatives. Being able to accept criticism gracefully is
                  important, but understanding how to deliver constructive
                  criticism to help your peers create the best end product
                  possible is key.
                </p>
                <p className="white-text">
                  This position is client-facing. Have outstanding interpersonal
                  skills as well as being able to clearly and concisely
                  communicate ideas is necessary. This includes handling tense
                  situations where clients may be unhappy.
                </p>
                <p className="white-text">
                  Besides that, being patient, hard-working, and down for a good
                  time is always a plus.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="white-swish">
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".pop-out-section.first-section")
                .classList.add("slide-up");
            }}
          />
          <Row className="pop-out-section first-section">
            <Col className="">
              <h3 className="blue-text uppercase">Responsibilities</h3>
              <div className="flexed two-columns space-between">
                <ul className="pink-bullet-li half">
                  <li>
                    Create and assemble images and graphics to produce designs
                    for websites, email, print media, product design, displays,
                    and productions
                  </li>
                  <li>
                    Work with the Channel Marketing Director and the Digital
                    Marketing Director to ensure all material meets TRIdigital’s
                    standards and vision
                  </li>
                  <li>Design and communicate the client’s brand identity</li>
                </ul>
                <ul className="pink-bullet-li half">
                  <li>
                    Assist the project team in coming up with creative and
                    innovative marketing solutions
                  </li>
                  <li>
                    Articulate your design concepts to the client with vigor and
                    enthusiasm
                  </li>
                  <li>
                    Meet with channel vendors and collaborate with their
                    internal marketing departments
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".pop-out-section.second-one")
                .classList.add("slide-up");
            }}
          />
          <Row className="pop-out-section second-one">
            <Col className="">
              <h3 className="pink-text uppercase">
                REQUIRED SKILLS AND KNOWLEDGE
              </h3>

              <div className="flexed two-columns space-between">
                <ul className="blue-bullet-li half">
                  <li>8+ years experience in graphics design</li>
                  <li>
                    Knowledge in design principles, including layout,
                    typography, color, balance, composition and current design
                    trends – demonstration of these skills through delivery of a
                    project portfolio of work, preferably delivered in a digital
                    format
                  </li>
                  <li>High level knowledge in design, web and print</li>
                  <li>
                    Demonstrate a high level of proficiency in Designing
                    Softwares such as Photoshop, Illustrator, InDesign and Adobe
                    XD
                  </li>
                  <li>
                    Experience in designing marketing materials for B2B
                    (Business to Business)
                  </li>
                  <li>
                    Ability to function as a contributing team member and
                    interact positively and openly with peers and other
                    departments
                  </li>
                  <li>
                    Ability to recognize and attend to important details with
                    accuracy and efficiency
                  </li>
                </ul>

                <ul className="blue-bullet-li half">
                  <li>
                    Demonstrate strong problem solving, communication,
                    organizational, and multi-tasking skills
                  </li>
                  <li>
                    Aptitude to work constructively under stress in a fast-paced
                    environment
                  </li>
                  <li>Ability to learn, take direction and handle critiques</li>
                  <li>Ability to lead small projects with a design team</li>
                  <li>Good written and oral communication skills</li>
                  <li>Ability to learn, take direction and handle critiques</li>
                  <li>Great customer service skills</li>
                  <li>Time Management Skills</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".pop-out-section.third-one")
                .classList.add("slide-up");
            }}
          />
          <Row className="pop-out-section third-one">
            <Col>
              <h3 className="blue-text uppercase">
                Some great benefits of being a part of our team:
              </h3>
              <div className="flexed two-columns space-between">
                <ul className="blue-bullet-li half">
                  <li>
                    We love food, and often go out and eat or plan potlucks
                  </li>
                  <li>
                    Video games are a huge hobby for most of our team, so we
                    regularly have lunch-time or after-work play sessions
                  </li>
                  <li>
                    Everybody talks to each other, so you don’t have to worry
                    about being ruled over by an oppressive office silence.
                  </li>
                </ul>

                <ul className="blue-bullet-li half">
                  <li>
                    We have a strict no-spoiler policy for popular movies and TV
                  </li>
                  <li>
                    We have a lot of collectors on staff, so expect to see quite
                    the display of awesome statues, vinyls, figures and more
                  </li>
                  <li>
                    You’re not shackled to your desk. We have many alternative
                    workspaces within the office to suit your needs
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="cool-shape-section ">
          <Row>
            <div className="form-section">
              <h2 className="smaller-section-h2">Apply now for Art Director</h2>
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
                    <label htmlFor="name">
                      1. What do your friends call you?
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="email company-field">
                    <label htmlFor="email">
                      2. Where can we email you back?
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="why-tri">
                    <label htmlFor="why-tri">
                      3. Why do you want to work for TRIdigital?
                    </label>
                    <input
                      type="text"
                      name="why-tri"
                      id="why-tri"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="achieve">
                    <label htmlFor="achieve">
                      4. What do you hope to achieve with a career at
                      TRIdigital?
                    </label>
                    <input
                      type="text"
                      name="achieve"
                      id="achieve"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="like-marketing">
                    <label htmlFor="like-marketing">
                      5. What do you like about marketing?
                    </label>
                    <input
                      type="text"
                      name="like-marketing"
                      id="like-marketing"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="passion">
                    <label htmlFor="passion">
                      6. What are you passionate about? (Doesn’t have to be
                      business related)
                    </label>
                    <input
                      type="text"
                      name="passion"
                      id="passion"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="favorite-movie">
                    <label htmlFor="favorite-movie">
                      7. What’s your favorite movie?
                    </label>
                    <input
                      type="text"
                      name="favorite-movie"
                      id="favorite-movie"
                      className="send-value"
                      required
                    />
                  </div>
                  <div className="fictional-char">
                    <label htmlFor="fictional-char">
                      8. Who’s your favorite fictional character (movies, comic
                      books, video game, etc.) and why?
                    </label>
                    <input
                      type="text"
                      name="fictional-char"
                      id="fictional-char"
                      className="send-value"
                      required
                    />
                  </div>
                  <p className="file-upload-text">
                    Think you’ve got what it takes? Show us your desire for the
                    role with a video resume to accompany your paper resume.
                  </p>
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
                      <img
                        src={require("../images/art-director/Group 9133.png")}
                      />
                      <button type="button" className="pointer-events-none">
                        Select Files
                      </button>
                      <p id="fileUploadedName"></p>
                    </label>
                  </div>
                  <p className="file-upload-size">
                    Accepted file types: avi, mp4, mov, jpg, pdf, doc, docx. Max
                    size is 50MB.
                  </p>
                  <div className="sell-to">
                    <label htmlFor="sell-to">
                      Have a link to your portfolio or your video resume? No
                      problem! Share the links below.
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
                      Looks like there was a problem submitting your form.
                      Please ensure ALL form fields are filled out and try
                      again.
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
                Thank you! If we feel you're a good fit we'll be in contact
                soon!
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default CareersPage;
