import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import { Container, Row, Col } from "react-bootstrap"
import * as PropTypes from "prop-types"
import { Parallax, Background } from "react-parallax"

let employees = require("../../employee-data.json")
console.log(employees)
let clickedOn = ""

export default function EmployeeInfo() {
  const [employeeToShow, setEmployeeToShow] = useState(0)
  let vidURL =
    "http://tdgatsbytest.wpengine.com" + employees[employeeToShow].videoURL
  console.log(vidURL)

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
  )
}
