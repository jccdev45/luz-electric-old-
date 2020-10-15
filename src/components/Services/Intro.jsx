import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Intro() {
  return (
    <Container className="services-intro" fluid>
      <Row>
        {["COMMERCIAL", "RESIDENTIAL", "INDUSTRIAL"].map((item, index) => (
          <Col key={index} xs={12} md={4}>
            <h3>{item}</h3>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <h4>No job too large or too small!</h4>
        </Col>
      </Row>
      <Row>
        <p>
          From start to finish, our experienced estimators, project managers and
          technicians provide the expertise to ensure your electrical project is
          completed on time, on budget and up to code. Contact us today and
          we'll show you how we can put our knowledge to work for you.
        </p>
      </Row>
      <Button variant="primary" as={Link} to="/contact">
        REQUEST A SERVICE
      </Button>
    </Container>
  );
}
