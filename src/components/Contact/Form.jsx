import { navigate } from "gatsby";
import React, { useState, useRef } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

export default function ContactForm() {
	const [contactState, setContactState] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const contactRef = useRef(null);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "+" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setContactState({ ...contactState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formRef = contactRef.current;

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": formRef.getAttribute("name"),
				...contactState,
			}),
		})
			.then(() => navigate("/"))
			.catch((error) => alert(error));

		setContactState({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

	return (
		<Container fluid>
			<h2>Contact Us:</h2>
			<form
				name="Contact"
				className="px-5"
				method="post"
				action="/"
				ref={contactRef}
				onSubmit={handleSubmit}
				netlify-honeypot="bot-field"
				data-netlify="true"
			>
				<input type="hidden" name="bot-field" onChange={handleChange} />
				<input type="hidden" name="form-name" value="Contact" />
				<Row>
					<Col xs="12" md="6">
						<label htmlFor="name">Name</label>
						<input
							name="name"
							onChange={handleChange}
							value={contactState.name}
							type="text"
							placeholder="John Smith"
						/>
					</Col>
					<Col xs="12" md="6">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							onChange={handleChange}
							value={contactState.email}
							type="email"
							placeholder="name@example.com"
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" md="6">
						<label htmlFor="phone">Phone</label>
						<input
							name="phone"
							onChange={handleChange}
							value={contactState.phone}
							type="text"
							placeholder="(123) 456-7890"
						/>
					</Col>
					<Col xs="12" md="6">
						<label htmlFor="subject">Subject</label>
						<input
							name="subject"
							onChange={handleChange}
							value={contactState.subject}
							type="text"
							placeholder="Estimate, service appointment, emergency, etc.."
						/>
					</Col>
				</Row>
				<Col>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						onChange={handleChange}
						value={contactState.message}
						rows="3"
						placeholder="Please include as much detail as possible."
					/>
				</Col>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</form>
		</Container>
	);
}
