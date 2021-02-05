import React from "react";
import { Container, Col } from "react-bootstrap";
import Layout from "../utils/Layout";
import Hours from "../components/Contact/Hours";
import ContactForm from "../components/Contact/Form";

export default () => {
	return (
		<Layout>
			<Container className="p-5 row aic" fluid style={{ minHeight: `100%` }}>
				<Col md={12}>
					<Hours />
				</Col>
				<Col md={12}>
					<ContactForm />
				</Col>
			</Container>
		</Layout>
	);
};
