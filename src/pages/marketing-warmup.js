import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const WarmUp = () => (
  <Layout>
    <SEO title="Warm Up" />
    <div className="about-us-page">
      <Container className="container">
        <Row className="">
          <Col className="content-container column ">
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
      </Container>
    </div>
  </Layout>
)

export default WarmUp
