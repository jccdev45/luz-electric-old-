import React from "react";
import { Link } from "gatsby";
import Pulse from "react-reveal/Pulse";
import HeadShake from "react-reveal/HeadShake";

const INFO = [
	{
		title: "OUR MISSION:",
		desc:
			"Luz Electric's mission is to dedicate ourselves to providing comprehensive and safe services to our clients.",
	},
	{
		title: "OUR TEAM:",
		desc:
			"Established in 2003, Luz Electric and Control Systems, Inc. takes great pride employing some of the best electricians and project managers in New York City. With 40+ years of professional experience with all types of electrical wiring and communication systems, we are offering our services in The Bronx, Manhattan, Queens, and Brooklyn. This includes maintenance, installations, and repairs with fire protection, building automation systems , security systems, and all other electrical systems. As prime and subcontractors we specialize in new residential housing projects, industrial facilities, and HVAC controls. Luz Electric and Control Systems, Inc. offers and provides a wide range of electrical services. No matter how big or how small it is, we care about we care about quality and customer satisfaction.",
	},
];

const renderInfo = () => {
	return INFO.map((item, index) => (
		<div
			key={index}
			className="flex flex-col items-center justify-center w-full mx-auto my-8 text-justify md:w-2/3"
		>
			<Pulse>
				<h3 className="text-3xl bold">{item.title}</h3>
			</Pulse>
			<p className="text-lg">{item.desc}</p>
		</div>
	));
};

export default function Mission() {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-screen-xl p-12 mx-auto md:py-8">
			<h2 className="mb-4 text-3xl font-bold text-center">
				Our professional services are recommended by all of our great customers!
			</h2>
			<div className="flex flex-col justify-center">{renderInfo()}</div>
			<Link
				className="px-3 py-2 text-white bg-yellow-400 border border-white rounded shadow-md"
				to="/contact"
			>
				<HeadShake>REQUEST A SERVICE</HeadShake>
			</Link>
		</div>
	);
}
