import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col, Jumbotron, Button, Fade } from "react-bootstrap";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

const INFO = [
  {
    title: "OUR TEAM:",
    desc:
      "Established in 2002, Luz Electric & Control Systems Inc. takes pride in employing some of the best industrial, residential, and commercial electricians and project managers which have over 40 years of experience with all types of electrical wiring and communication systems. This includes professional experience with installations, repairs, maintenance of electrical systems, fire protection, and security. As prime and subcontractors, we specialize in new residential housing projects, industrial facilities, alterations, building automation systems, and HVAC controls. Luz Electric & Control Systems Inc. offers and provides a wide range of multiple electrical services. No matter how big or how small, we focus on quality and customer satisfaction.",
  },
  {
    title: "OUR MISSION:",
    desc:
      "Luz Electric & Control Systems Inc's mission is simply to dedicate ourselves to providing a comprehensive, safe and quality electrical installation service to our clients. It is from our knowledge and experience that a long-term relationship with any client can be established through our attention to detail and on schedule service.",
  },
];

const renderInfo = () => {
  return INFO.map((item, index) => (
    <Col xs={12} md={6} key={index}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </Col>
  ));
};

export default function Mission() {
  return (
    <Fade appear in>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">
                Our professional service comes recommended by all our customers.
              </h2>
            </Col>
          </Row>
          <Row>{renderInfo()}</Row>
          <Button variant="primary" as={Link} to="/contact">
            REQUEST A SERVICE
          </Button>
        </Container>
      </Jumbotron>
    </Fade>
  );
}
