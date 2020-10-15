import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../utils/Layout";
import Hours from "../components/Contact/Hours";
import ContactForm from "../components/Contact/Form";

export default () => {
  return (
    <Layout>
      <Container className="py-3">
        <Row>
          <Col md={12}>
            <Hours />
          </Col>
          <Col md={12}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
