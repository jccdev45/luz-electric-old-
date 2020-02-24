import React from "react";
import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Estimate(props) {
  return (
    <Container className="carousel-container" fluid>
      <Row className="aic">
        <Col xs={12} md={6} className="p-0">
          <Carousel touch fade="true">
            {props.img.map((image, index) => (
              <Carousel.Item key={index}>
                <Img fluid={image.childImageSharp.fluid} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <h1>
            Private Homes - Apartment Buildings New Construction - Installations
            Wiring - Maintenance
          </h1>
          <Col md={{ span: 4, offset: 4 }}>
            <Button
              variant="success"
              as={AniLink}
              to="/contact"
              cover
              duration={0.5}
              bg="#070f38"
            >
              GET AN ESTIMATE
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
