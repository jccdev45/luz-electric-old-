import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const INFO = [
	{
		title: "Installations",
		desc:
			"When it comes to installing new outlets, electrical panels, or any appliance with complex electrical wiring, it's always best to call the professionals. Luz Electric and Control Systems Inc specializes in electrical installations in your home or business.",
	},
	{
		title: "Lighting",
		desc:
			"Enhance your home inside and out with specialty lighting, holiday lighting, and landscape lighting from Luz Electric and Control Systems Inc. Adding lights with wireless lighting controls to the exterior of your home or business can also increase security.",
	},
	{
		title: "Electrical Safety",
		desc:
			"Keeping your home and family safe by preventing an electrical fire is our priority. Other preventive measures, such as child proof outlets, are simple ways to ensure peace of mind.",
	},
];

const renderInfo = () => {
	return INFO.map((item, index) => (
		<Col className="p-4" xs={12} md={4} key={index}>
			<h3>{item.title}</h3>
			<p>{item.desc}</p>
		</Col>
	));
};

export default function Safety() {
	return (
		<Container className="services-footer p-4" fluid>
			<Row>
				<Col xs={12}>
					<h2>SAFETY AND QUALITY CONSCIOUS ELECTRICAL CONTRACTORS</h2>
				</Col>
				{renderInfo()}
			</Row>
		</Container>
	);
}
