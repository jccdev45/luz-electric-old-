import React from "react";
import { Container, Row, Card, CardDeck } from "react-bootstrap";
import Area from "../../assets/img/luz-area2.png";
import Security from "../../assets/img/luz-security2.png";
import Team from "../../assets/img/luz-team2.png";

export default function Footer() {
  return (
    <Container className="footskis" fluid>
      <Row>
        <CardDeck>
          <Card className="bg-dark text-white aic">
            <Card.Img src={Area} />
            <Card.Body>
              <Card.Title>Safety and Reliability </Card.Title>
              <Card.Text className="justify">
                You can rest assured that the electrician we send to your home
                is qualified to be there: all of our technicians are drug tested
                and background checked, that way you don’t have to worry about a
                felon or drug addict working in your home. Having a skilled,
                trained electrician who specializes in residential, commercial,
                and industrial electrical services means your problem will be
                fixed correctly and according to safety codes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-white aic">
            <Card.Img src={Security} />
            <Card.Body>
              <Card.Title>
                New York’s Trusted HVAC Controls Specialists
              </Card.Title>
              <Card.Text>
                Bringing our service to your HVAC needs is what Luz Electric &
                Control Systems Inc, is all about. Our technicians are trained,
                experienced, and ready to handle any air conditioning or
                furnace-related need you may have. Whether it’s furnace repair
                or replacement, or perhaps a new humidifier installation, you
                can trust the experts at Luz Electric & Control Systems Inc, to
                do the job right the first time.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-white aic">
            <Card.Img src={Team} />
            <Card.Body>
              <Card.Title>Serving New York</Card.Title>
              <Card.Text>
                At Luz Electric & Control Systems Inc, we pride ourselves on
                knowing exactly what a client’s specialized needs are and
                providing top notch electrical and HVAC services throughout the
                five boroughs. Most home service professionals are trained for
                commercial or new construction jobs. We recognize that
                residential homeowners have needs that differ dramatically from
                those on a construction site or large commercial projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
    </Container>
  );
}
