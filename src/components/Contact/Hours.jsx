import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function Hours() {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h2>We are located at:</h2>
					<h4>
						2082 Crotona Avenue <br />
						Bronx, NY 10457 <br />
						Tel: 718-220-8989 <br />
						Fax: 718-220-4441
					</h4>
				</Col>
				<Col>
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
								<td>8AM - 4PM</td>
								<td>8AM - 4PM</td>
								<td>8AM - 4PM</td>
								<td>8AM - 4PM</td>
								<td>8AM - 4PM</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
}
