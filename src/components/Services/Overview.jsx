import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function Intro() {
  return (
    <Container className="services-overview" fluid>
      <Row>
        <Col md={{ span: 3 }} lg={5}>
          <h1>What We Do:</h1>
          <h1>40+</h1>
          <h3>Years Providing Electrical Services to NYC.</h3>
          <p>
            Feel confident knowing that our electricians, estimators, and
            project managers know the tricks of the trade that can only come
            with industry experience.
          </p>
        </Col>

        <Col xs={12} md={9} lg={5}>
          <ListGroup horizontal>
            <Col md={4} lg>
              <ListGroup.Item>Stop/Start Controls Wiring </ListGroup.Item>
              <ListGroup.Item>Breakers & Fuses</ListGroup.Item>
              <ListGroup.Item>Circuits </ListGroup.Item>
              <ListGroup.Item>Fans </ListGroup.Item>
              <ListGroup.Item>Lighting </ListGroup.Item>
            </Col>
            <Col md={4} lg>
              <ListGroup.Item>Inspections</ListGroup.Item>
              <ListGroup.Item>Outlets & Switches</ListGroup.Item>
              <ListGroup.Item>Panels</ListGroup.Item>
              <ListGroup.Item>Surge/Lightning/Fire Protection</ListGroup.Item>
              <ListGroup.Item>Wiring and all related Equipment</ListGroup.Item>
            </Col>
            <Col md={4} lg>
              <ListGroup.Item>Power Wiring</ListGroup.Item>
              <ListGroup.Item>
                Automated Building Maintenance Control Wiring for HVAC Systems
                On Residential, Commercial & Industrial Buildings, Schools &
                Government Facilities
              </ListGroup.Item>
            </Col>
          </ListGroup>
        </Col>
        <Col xs={12} md={9} lg={5}>
          <ListGroup horizontal>
            <Col md={4} md={4} lg>
              <ListGroup.Item>Lighting Fixtures </ListGroup.Item>
              <ListGroup.Item>Switchess</ListGroup.Item>
              <ListGroup.Item>Disconnects </ListGroup.Item>
              <ListGroup.Item>Piping for Power </ListGroup.Item>
              <ListGroup.Item>Light & Heating Systems </ListGroup.Item>
            </Col>
            <Col md={4} lg>
              <ListGroup.Item>Motor Controls</ListGroup.Item>
              <ListGroup.Item>Violations Removal</ListGroup.Item>
              <ListGroup.Item>Lighting Retrofits</ListGroup.Item>
              <ListGroup.Item>Parking and Outdoor Lighting</ListGroup.Item>
              <ListGroup.Item>Preventive Maintenance</ListGroup.Item>
            </Col>
            <Col md={4} lg>
              <ListGroup.Item>LED Lighting</ListGroup.Item>
            </Col>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
