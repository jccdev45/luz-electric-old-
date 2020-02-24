import React from "react";
import { Container, Row, Col, Jumbotron, Button, Fade } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Mission() {
  return (
    <Fade appear in>
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
                Luz Electric & Control Systems Inc's mission is simply to
                dedicate ourselves to providing a comprehensive, safe and
                quality electrical installation service to our clients. It is
                from our knowledge and experience that a long-term relationship
                with any client can be established through our attention to
                detail and on schedule service.{" "}
              </p>
            </Col>
          </Row>
          <Button
            variant="primary"
            as={AniLink}
            to="/contact"
            cover
            duration={0.5}
            bg="#070f38"
          >
            REQUEST A SERVICE
          </Button>
        </Container>
      </Jumbotron>
    </Fade>
  );
}
