import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function Hours() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>We are located at:</h2>
          <h4>
            714 East 180th Street <br />
            Bronx, NY 10457 <br />
            Tel: 718-220-8989 <br />
            Fax: 718-220-4441
          </h4>
        </Col>
        <Col xs={12}>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9AM - 5PM</td>
                <td>9AM - 5PM</td>
                <td>9AM - 5PM</td>
                <td>9AM - 5PM</td>
                <td>9AM - 5PM</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
