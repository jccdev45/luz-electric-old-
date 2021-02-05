import { Link } from "gatsby";
import React from "react";

const INFO = [
	{
		title: "OUR TEAM:",
		desc:
			"Established in 2003, Luz Electric and Control Systems, Inc. takes great pride employing some of the best electricians and project managers in New York City. With 40+ years of professional experience with all types of electrical wiring and communication systems, we are offering our services in The Bronx, Manhattan, Queens, and Brooklyn. This includes maintenance, installations, and repairs with fire protection, building automation systems , security systems, and all other electrical systems. As prime and subcontractors we specialize in new residential housing projects, industrial facilities, and HVAC controls. Luz Electric and Control Systems, Inc. offers and provides a wide range of electrical services. No matter how big or how small it is, we care about we care about quality and customer satisfaction.",
	},
	{
		title: "OUR MISSION:",
		desc:
			"Luz Electric's mission is to dedicate ourselves to providing comprehensive and safe services to our clients.",
	},
];

const renderInfo = () => {
	return INFO.map((item, index) => (
		<div key={index}>
			<h3>{item.title}</h3>
			<p>{item.desc}</p>
		</div>
	));
};

export default function Mission() {
	return (
		<div>
			<div>
				<h2 className="mb-4">
					Our professional services are recommended by all of our great
					customers!
				</h2>
			</div>

			<div>{renderInfo()}</div>
			<button variant="primary" as={Link} to="/contact">
				REQUEST A SERVICE
			</button>
		</div>
	);
}
