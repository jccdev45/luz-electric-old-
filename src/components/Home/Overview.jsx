import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Commercial from "../../assets/img/overview/commercial.png";
import Construction from "../../assets/img/overview/construction.png";
import Inspect from "../../assets/img/overview/inspect.png";
import Prevention from "../../assets/img/overview/prevention.png";
import Residential from "../../assets/img/overview/residential.png";
import Service from "../../assets/img/overview/service.png";

export default function Overview(props) {
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
      name: "Service & Maintenance",
      icon: "service.png",
      image: Service,
      desc: [
        "Preventive maintenance",
        "Installation of electrical power for appliances"
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
        {services.map((service, index) => (
          <Col className="service col aic" key={index} xs md={4}>
            {/* {service.icon === imgName ? (
              <Img fixed={props.img.childImageSharp.fixed} />
            ) : ""} */}
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
