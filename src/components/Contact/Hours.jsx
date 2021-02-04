import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Hours() {
	return (
		<Container fluid>
			<Row>
				<Col xs={12} md={6}>
					<h2>We are located at:</h2>
					<h4>
						2082 Crotona Avenue <br />
						Bronx, NY 10457 <br />
						Tel: 718-220-8989 <br />
						Fax: 718-220-4441
					</h4>
				</Col>
				<Col xs={12} md={6}>
					<h2>Hours:</h2>
					<h4>Mon - Fri</h4>
					<h4>8 - 4 PM</h4>
					{/* <Table striped bordered responsive>
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
					</Table> */}
				</Col>
			</Row>
		</Container>
	);
}
