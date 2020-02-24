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
  const services = [
    {
      name: "New Construction",
      icon: "construction.png",
      image: Construction,
      desc: [
        "Power wiring",
        "Lighting fixtures",
        "Panels/Switches/Disconnects",
        "Raceways & wiring for power, light, heat & control systems & all related equipment",
        "Motor controls, starters, pump, control wiring & all related equipment"
      ]
    },
    {
      name: "Residential",
      icon: "residential.png",
      image: Residential,
      desc: [
        "Violations removal",
        "Accented lighting",
        "Renovations",
        "Security & entertainment systems"
      ]
    },
    {
      name: "Commercial & Industrial",
      icon: "commercial.png",
      image: Commercial,
      desc: [
        "Lighting retrofits",
        "ECB violation removal & C of O",
        "Controls & service upgrade",
        "Parking & outdoor lighting",
        "Automated building maintenance control wiring & HVAC systems on commercial & industrial buildings",
        "Schools, government facilities & private owners"
      ]
    },
    {
      name: "Service & Maintenance",
      icon: "service.png",
      image: Service,
      desc: [
        "Preventive maintenance",
        "Installation of electrical power for appliances"
      ]
    },
    {
      name: "Property Inspection",
      icon: "inspect.png",
      image: Inspect,
      desc: [
        "Identify violations, repair & upgrades required in properties for sale or rent"
      ]
    },
    {
      name: "Prevention & Property Protection",
      icon: "prevention.png",
      image: Prevention,
      desc: ["Installation of fire alarm systems, wiring & related equipment"]
    }
  ];

  return (
    <Container className="services-container" fluid>
      <Row className="services-row">
        <Col xs={12}>
          <h1>What We Do:</h1>
          <h1>40+</h1>
          <h3>Years Providing Electrical Services to NYC.</h3>
          <p>
            Feel confident knowing that our electricians, estimators, and
            project managers know the tricks of the trade that can only come
            with industry experience.
          </p>
        </Col>
        {services.map((service, index) => (
          <Col className="service col aic" key={index} xs={12} md={4}>
            <Image src={service.image} fluid />
            <h4>{service.name}</h4>
            <ListGroup variant="flush">
              {service.desc.map((item, index) => (
                <ListGroup.Item key={index}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
