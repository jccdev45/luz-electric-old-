import React from "react";
// import Img from "gatsby-image";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Commercial from "../../assets/img/overview/commercial.png";
import Construction from "../../assets/img/overview/construction.png";
import Inspect from "../../assets/img/overview/inspect.png";
import Prevention from "../../assets/img/overview/prevention.png";
import Residential from "../../assets/img/overview/residential.png";
import Service from "../../assets/img/overview/service.png";

export default function Overview() {
  const SERVICES = [
    {
      name: "New Construction",
      image: Construction,
      desc: [
        "Power wiring",
        "Lighting fixtures",
        "Panels/Switches/Disconnects",
        "Raceways & wiring for power, light, heat & control systems & all related equipment",
        "Motor controls, starters, pump, control wiring & all related equipment",
      ],
    },
    {
      name: "Residential",
      image: Residential,
      desc: [
        "Violations removal",
        "Accented lighting",
        "Renovations",
        "Security & entertainment systems",
      ],
    },
    {
      name: "Commercial & Industrial",
      image: Commercial,
      desc: [
        "Lighting retrofits",
        "ECB violation removal & C of O",
        "Controls & service upgrade",
        "Parking & outdoor lighting",
        "Automated building maintenance control wiring & HVAC systems on commercial & industrial buildings",
        "Schools, government facilities & private owners",
      ],
    },
    {
      name: "Service & Maintenance",
      image: Service,
      desc: [
        "Preventive maintenance",
        "Installation of electrical power for appliances",
      ],
    },
    {
      name: "Property Inspection",
      image: Inspect,
      desc: [
        "Identify violations, repair & upgrades required in properties for sale or rent",
      ],
    },
    {
      name: "Prevention & Property Protection",
      image: Prevention,
      desc: ["Installation of fire alarm systems, wiring & related equipment"],
    },
  ];

  const renderServices = () => {
    return SERVICES.map((service, index) => (
      <Col className="service col aic" key={index} xs={12} md={4}>
        <Image src={service.image} fluid />
        <h4 className="my-2">{service.name}</h4>
        <ListGroup variant="flush">
          {service.desc.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    ));
  };

  return (
    <Container className="services-container" fluid>
      <Row className="services-row">
        <Col xs={12}>
          <h3>40+ Years Providing Electrical Services to NYC</h3>
          <h2 className="my-4">What We Do:</h2>
          <p>
            You can feel confident knowing that our electricians, estimators,
            and project managers know the tricks of the trade that can only come
            with industry experience.
          </p>
        </Col>
        {renderServices()}
      </Row>
    </Container>
  );
}
