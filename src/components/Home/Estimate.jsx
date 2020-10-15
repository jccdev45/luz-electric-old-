import React from "react";
import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import Img from "gatsby-image";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";

export default function Estimate(props) {
  return (
    <Container className="carousel-container" fluid>
      <Row className="aic">
        <Col xs={12} md={6} className="p-0">
          <Carousel touch fade={true}>
            {props.img.map((image, index) => (
              <Carousel.Item key={index}>
                <Img fluid={image.childImageSharp.fluid} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} md={6} className="my-4">
          {[
            "🏡 Private Homes",
            "🏢 Apartment Buildings",
            "👷🏽‍♂️ New Construction",
            "🔌 Installations Wiring",
            "🛠 Maintenance",
          ].map((item, index) => (
            <h3 key={index}>{item}</h3>
          ))}
          <Col md={{ span: 4, offset: 4 }}>
            <Button className="my-4" variant="success" as={Link} to="/contact">
              GET AN ESTIMATE
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
