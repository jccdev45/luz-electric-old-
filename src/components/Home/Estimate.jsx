import React from "react";
import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import Img from "gatsby-image";

export default function Estimate(props) {
  return (
    <Container className="carousel-container" fluid>
      <Row className="aic">
        <Col xs md={6}>
          <Carousel touch fade="true">
            {props.img.map((image, index) => (
              <Carousel.Item key={index}>
                <Img fluid={image.childImageSharp.fluid} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs md={6}>
          <h1>
            Private Homes - Apartment Buildings New Construction - Installations
            Wiring - Maintenance
          </h1>
          <Col md={{ span: 4, offset: 4 }}>
            <Button variant="success">GET AN ESTIMATE</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
