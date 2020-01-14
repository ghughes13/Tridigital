import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const WarmUp = () => (
  <Layout>
    <SEO title="Warm Up" />
    <div className="warmup-page">
      <Container className="container blue-background">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="white-text core-values">The MSP Marketing Warmup</h2>
            <p class="white-text subtext">
              How we create unique and creative strategy for your company.
            </p>
          </Col>
          <Col className="content-container column ">
            <img
              class="collaterals"
              src="/wp-content/uploads/2019/07/collateral.png"
            />
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default WarmUp
