import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

let employees = require("../../employee-data.json")

export default function EmployeeInfo() {
  const [employeeToShow, setEmployeeToShow] = useState(0)
  let vidURL =
    "http://tdgatsbytest.wpengine.com" + employees[employeeToShow].videoURL

  let row1 = []
  let row2 = []
  let desktop = true

  for (let i = 0; i < employees.length; i++) {
    if (i < employees.length / 2) {
      row1.push(employees[i])
    } else {
      row2.push(employees[i])
    }
  }

  useEffect(() => {
    if (window.innerWidth < 960) {
      console.log("small")
      desktop = false
    }
  })

  const EmpPicVid = () => {
    if (desktop && employees[employeeToShow].videoURL !== "") {
      return (
        <video src={vidURL} autoPlay muted>
          <p>
            If you are reading this, it is because your browser does not support
            the HTML5 video element.
          </p>
        </video>
      )
    } else {
      return (
        <img
          src={
            "http://tdgatsbytest.wpengine.com" + employees[employeeToShow].photo
          }
          className="employee-headshot"
          alt={employees[employeeToShow].First + employees[employeeToShow].Last}
        />
      )
    }
  }

  if (desktop) {
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
              <EmpPicVid />
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
                onClick={() => setEmployeeToShow(index + 9)}
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
            <EmpPicVid />
          </Col>
        </Row>
      </Container>
      <div className="employee-thumbnail-container">
        <div className="row-1">
          {employees.map((employee, index) => (
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
      </div>
    </div>
  )
}
