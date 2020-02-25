import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

export default function ContactForm() {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <h2>Contact Us:</h2>
      <Form
        className="px-5"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact" />
        <Form.Row>
          <Form.Group controlId="formName" as={Col} xs="12" md="6">
            <Form.Label>Name</Form.Label>
            <Form.Control required placeholder="John Smith" />
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail" as={Col} xs="12" md="6">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formPhone" as={Col} xs="12" md="6">
            <Form.Label>Phone</Form.Label>
            <Form.Control required type="number" placeholder="(123) 456-7890" />
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formSubject" as={Col} xs="12" md="6">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              required
              placeholder="Estimate, service appointment, emergency, etc.."
            />
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows="3"
            placeholder="Please include as much detail as possible."
          />
          <Form.Control.Feedback type="invalid">
            Please fill out this field.
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Container>
  );
}
