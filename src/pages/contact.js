import React from "react";
import { Container, Col } from "react-bootstrap";
import Layout from "../utils/Layout";
import Hours from "../components/Contact/Hours";
import ContactForm from "../components/Contact/Form";

export default () => {
	return (
		<Layout>
			<Container className="py-3 row aic" fluid style={{ minHeight: `75vh` }}>
				<Col xs={12} md={6}>
					<Hours />
				</Col>
				<Col xs={12} md={6}>
					<ContactForm />
				</Col>
			</Container>
		</Layout>
	);
};
