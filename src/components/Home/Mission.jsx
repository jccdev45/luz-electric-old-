import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const MissionContainer = styled.div`
  flex: 1;
  background-color: white;
  color: black;
  text-align: center;
  background-image: url(https://via.placeholder.com/100);
`;

export default function Mission() {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col xs md={6}>
            <h1>
              "Our professional service recommended by all our customers."
            </h1>
          </Col>
          <Col xs md={6}>
            <h3>OUR MISSION:</h3>
            <p>
              Luz Electric & Control Systems Inc's mission is simply to dedicate
              ourselves to providing a comprehensive, safe and quality
              electrical installation service to our clients. It is from our
              knowledge and experience that a long-term relationship with any
              client can be established through our attention to detail and on
              schedule service.{" "}
            </p>
          </Col>
        </Row>
        <Button variant="primary">REQUEST A SERVICE</Button>
      </Container>
    </Jumbotron>
  );
}
