import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

let employees = require("../../employee-data.json")

export default function EmployeeInfo() {
  const [employeeToShow, setEmployeeToShow] = useState(0)
  let vidURL =
    "http://tdgatsbytest.wpengine.com" + employees[employeeToShow].videoURL

  let row1 = []
  let row2 = []

  useEffect(() => {
  if (window.innerWidth > 960) {
    for (let i = 0; i < employees.length; i++) {
      if (i < employees.length / 2) {
        row1.push(employees[i])
      } else {
        row2.push(employees[i])
      }
    }

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
              <video src={vidURL} autoPlay muted>
                <p>
                  If you are reading this, it is because your browser does not
                  support the HTML5 video element.
                </p>
              </video>
            </Col>
          </Row>
        </Container>
        <div className="employee-thumbnail-container">
          <div class="row-1">
            {row1.map((employee, index) => (
              <div
                className="thumbnail-container"
                key={index}
                onClick={() => setEmployeeToShow(index)}
              >
                <img src={employee.thumbnail} />
                <span className="name">{employee.First}</span>
              </div>
            ))}
          </div>
          <div class="row-2">
            {row2.map((employee, index) => (
              <div
                className="thumbnail-container"
                key={index}
                onClick={() => setEmployeeToShow(index)}
              >
                <img src={employee.thumbnail} />
                <span className="name">{employee.First}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Container className="hero-section container blue-background">
        <Row className="two-columns pink-banner">
          <Col className="content-container column click-through">
            <h2 className="white-text">
              {employees[employeeToShow].First} {employees[employeeToShow].Last}
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
            <video src={vidURL} autoPlay muted>
              <p>
                If you are reading this, it is because your browser does not
                support the HTML5 video element.
              </p>
            </video>
          </Col>
        </Row>
      </Container>
      <div className="employee-thumbnail-container">
        <div class="row-1">
          {employees.map((employee, index) => (
            <div
              className="thumbnail-container"
              key={index}
              onClick={() => setEmployeeToShow(index)}
            >
              <img src={employee.thumbnail} />
              <span className="name">{employee.First}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
}
