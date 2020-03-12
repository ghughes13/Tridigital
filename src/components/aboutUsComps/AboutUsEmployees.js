import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

let employees = require("../../../employee-data.json");

export default function EmployeeInfo() {
  const [employeeToShow, setEmployeeToShow] = useState(0);
  const [sizeOfWindow, setSizeOfWindow] = useState("desktop");
  const [dimensions, setDimensions] = useState();

  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);

  const firstRowEmployees = 13;
  const multiRow = 9;

  let vidURL =
    "https://encrypted.tridigitalmarketing.com" + employees[employeeToShow].videoURL;

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    handleResize();
    window.addEventListener("resize", handleResize);
  }, [setDimensions, setSizeOfWindow]);

  function handleResize() {
    let count = 0;

    if (window.innerWidth > 1350) {
      let rowUno = [];
      let rowDos = [];
      console.log(employees);
      for (let i = 0; i < employees.length; i++) {
        if (i < employees.length / 2) {
          rowUno.push(employees[i]);
        } else {
          rowDos.push(employees[i]);
        }
      }
      setRow1([...rowUno]);
      setRow2([...rowDos]);
      setSizeOfWindow("desktop");
    } else if (window.innerWidth > 767) {
      let rowUno = [];
      let rowDos = [];
      let rowTres = [];

      for (let i = 0; i < employees.length; i++) {
        if (count < 9) {
          rowUno.push(employees[i]);
        } else if (count < 18) {
          rowDos.push(employees[i]);
        } else {
          rowTres.push(employees[i]);
        }
        count++;
      }
      count = 0;
      setRow1([...rowUno]);
      setRow2([...rowDos]);
      setRow3([...rowTres]);
      setSizeOfWindow("small");
    } else {
      console.log("mobile");
      setSizeOfWindow("mobile");
    }
  }

  const animatePerson = (person, index) => {
    if (document.querySelector(".showFirst")) {
      document.querySelector(".showFirst").classList.remove("showFirst");
    }

    window.scroll({ top: 0, behavior: "smooth" });
    let showThisPerson = "." + person;
    setTimeout(function() {
      document.querySelectorAll(".open").forEach(el => {
        el.classList.remove("open");
      });
    }, 500);
    setTimeout(function() {
      setEmployeeToShow(index);
    }, 750);
    setTimeout(function() {
      document.querySelectorAll(showThisPerson).forEach(el => {
        el.classList.add("open");
      });
    }, 1000);
  };

  const EmpPicVid = props => {
    if (props.props === "desktop") {
      return (
        <div
          className={
            "vid-pic-container" +
            employees[employeeToShow].First +
            "-" +
            employees[employeeToShow].Last
          }
        >
          <div className="pseudo-blue"></div>
          <video
            id="important-vid"
            crossOrigin="anonymous"
            src={vidURL}
            data-replace-video-with-canvas
            onLoadedData={function setVideoBgColor(vid, nativeColor) {
              let nvid = document.getElementById("important-vid");
              var vidBg = nvid.parentElement;

              var canvas = document.createElement("canvas");
              canvas.width = 1;
              canvas.height = 1;

              var ctx = canvas.getContext("2d");
              ctx.drawImage(nvid, 0, 0, 8, 8);
              var p = ctx.getImageData(0, 0, 1, 1).data;
              vidBg.style.backgroundColor =
                "rgb(" + p[0] + "," + p[1] + "," + p[2] + ")";

              var rtrnVal = "";
              var prefixes = ["-o-", "-ms-", "-moz-", "-webkit-"];

              var heroSec = document.querySelector(
                ".about-us-page .hero-section"
              );

              for (var i = 0; i < prefixes.length; i++) {
                heroSec.style.background =
                  "rgb(" + p[0] + "," + p[1] + "," + p[2] + ")";

                if (heroSec.style.background) {
                  rtrnVal = prefixes[i];
                }
              }
              return rtrnVal;
            }}
            autoPlay
            muted
          >
            <p>
              If you are reading this, it is because your browser does not
              support the HTML5 video element.
            </p>
          </video>
        </div>
      );
    } else {
      return (
        <div
          className={
            "vid-pic-container " +
            employees[employeeToShow].First +
            "-" +
            employees[employeeToShow].Last
          }
        >
          <img
            src={
              "https://encrypted.tridigitalmarketing.com" +
              employees[employeeToShow].photo
            }
            className="employee-headshot"
            alt={
              employees[employeeToShow].First + employees[employeeToShow].Last
            }
          />
        </div>
      );
    }
  };

  const SizeToRender = () => {
    if (sizeOfWindow === "desktop") {
      console.log("building desktop");
      //HTML FOR DESKTOP
      return (
        <div>
          <Container className="hero-section container">
            <Row className="two-columns pink-banner move-left">
              <Col className="content-container column click-through">
                <h2 className="white-text">
                  {employees[employeeToShow].First}{" "}
                  {employees[employeeToShow].Last}
                </h2>
                <p className="white-text subtext">
                  {employees[employeeToShow].Position}
                </p>
                <p className="likes heavy-weight white-text">
                  {employees[employeeToShow].Hobbies}
                </p>
                <p className="white-text bio-content">
                  {employees[employeeToShow].Desc}
                </p>
              </Col>
              <Col className="content-container column video-column">
                <EmpPicVid props="desktop" />
              </Col>
            </Row>
          </Container>
          <div className="employee-thumbnail-container">
            <div className="row-1">
              {row1.map((employee, index) => (
                <div
                  className="thumbnail-container"
                  key={index}
                  onClick={() => setEmployeeToShow(index)}
                >
                  <img
                    src={employee.thumbnail}
                    alt={
                      employees[employeeToShow].First +
                      employees[employeeToShow].Last
                    }
                  />
                  <span className="name">{employee.First}</span>
                </div>
              ))}
            </div>
            <div className="row-2">
              {row2.map((employee, index) => (
                <div
                  className="thumbnail-container"
                  key={index + 9}
                  onClick={() => setEmployeeToShow(index + firstRowEmployees)}
                >
                  <img
                    src={employee.thumbnail}
                    alt={
                      employees[employeeToShow].First +
                      employees[employeeToShow].Last
                    }
                  />
                  <span className="name">{employee.First}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (sizeOfWindow === "small") {
      //HTML FOR SMALL(TABLET)
      console.log("building small");
      return (
        <div>
          <Container className="hero-section container blue-background">
            <Row className="two-columns pink-banner">
              <Col className="content-container column click-through">
                <h2 className="white-text">
                  {employees[employeeToShow].First}{" "}
                  {employees[employeeToShow].Last}
                </h2>
                <p className="white-text subtext">
                  {employees[employeeToShow].Position}
                </p>
                <p className="likes heavy-weight white-text">
                  {employees[employeeToShow].Hobbies}
                </p>
                <p className="white-text bio-content">
                  {employees[employeeToShow].Desc}
                </p>
              </Col>
              <Col className="content-container column video-column">
                <EmpPicVid props="small" />
              </Col>
            </Row>
          </Container>
          <div className="employee-thumbnail-container">
            <div className="row-1">
              <div className="employee-thumbnail-container">
                <div className="row-1">
                  {row1.map((employee, index) => (
                    <div
                      className="thumbnail-container"
                      key={index}
                      onClick={() => setEmployeeToShow(index)}
                    >
                      <img
                        src={employee.thumbnail}
                        alt={
                          employees[employeeToShow].First +
                          employees[employeeToShow].Last
                        }
                      />
                      <span className="name">{employee.First}</span>
                    </div>
                  ))}
                </div>
                <div className="row-2">
                  {row2.map((employee, index) => (
                    <div
                      className="thumbnail-container"
                      key={index + 9}
                      onClick={() => setEmployeeToShow(index + multiRow)}
                    >
                      <img
                        src={employee.thumbnail}
                        alt={
                          employees[employeeToShow].First +
                          employees[employeeToShow].Last
                        }
                      />
                      <span className="name">{employee.First}</span>
                    </div>
                  ))}
                </div>
                <div className="row-3">
                  {row3.map((employee, index) => (
                    <div
                      className="thumbnail-container"
                      key={index + 9}
                      onClick={() => setEmployeeToShow(index + multiRow)}
                    >
                      <img
                        src={employee.thumbnail}
                        alt={
                          employees[employeeToShow].First +
                          employees[employeeToShow].Last
                        }
                      />
                      <span className="name">{employee.First}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("building mobile");
      //HTML FOR MOBILE
      return (
        <div>
          <Container className="hero-section container blue-background">
            <Row className="two-columns pink-banner">
              <Col className="content-container column video-column">
                <div
                  className={
                    "name-and-title " +
                    employees[employeeToShow].First +
                    "-" +
                    employees[employeeToShow].Last
                  }
                >
                  <h2 className="white-text">
                    {employees[employeeToShow].First}{" "}
                    {employees[employeeToShow].Last}
                  </h2>
                  <p className="white-text subtext">
                    {employees[employeeToShow].Position}
                  </p>
                </div>
                <EmpPicVid props="mobile" />
              </Col>
              <Col
                className={
                  "content-container column click-through bio-text " +
                  employees[employeeToShow].First +
                  "-" +
                  employees[employeeToShow].Last
                }
              >
                <p className="likes heavy-weight white-text">
                  {employees[employeeToShow].Hobbies}
                </p>
                <p className="white-text bio-content">
                  {employees[employeeToShow].Desc}
                </p>
              </Col>
            </Row>
            <Row className="two-columns padding-left-fix-mobile">
              <div className="employee-thumbnail-container">
                <div className="row-1">
                  {employees.map((employee, index) => (
                    <div
                      className="thumbnail-container "
                      id={employees[index].First + "-" + employees[index].Last}
                      key={index}
                      onClick={() => {
                        animatePerson(
                          employees[index].First + "-" + employees[index].Last,
                          index
                        );
                      }}
                    >
                      <img
                        src={employee.thumbnail}
                        alt={
                          employees[employeeToShow].First +
                          employees[employeeToShow].Last
                        }
                      />
                      <span className="name">{employee.First}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Row>
          </Container>
        </div>
      );
    }
  };

  return <SizeToRender />;
}
