import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Safety() {
  return (
    <Container className="services-footer p-4" fluid>
      <Row>
        <Col xs={12}>
          <h2>SAFETY AND QUALITY CONSCIOUS ELECTRICAL CONTRACTORS</h2>
        </Col>
        <Col className="p-4" xs={12} md={4}>
          <h3>Installations</h3>
          <p>
            When it comes to installing new outlets, electrical panels, or any
            appliance with complex electrical wiring, it's always best to call
            the professionals. Luz Electric & Control Systems Inc specializes in
            electrical installations in your home or business.
          </p>
        </Col>
        <Col className="p-4" xs={12} md={4}>
          <h3>Lighting</h3>
          <p>
            Enhance certain areas of your home inside and out with specialty
            lighting, holiday lighting, and landscape lighting from Luz Electric
            & Control Systems Inc. Adding lights with wireless lighting controls
            to the exterior of your home or business can also increase security.
          </p>
        </Col>
        <Col className="p-4" xs={12} md={4}>
          <h3>Electrical Safety</h3>
          <p>
            Keeping your home and family safe by preventing an electrical fire
            is our priority. Other preventive measures, such as child proof
            outlets, are simple ways to ensure peace of mind.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
