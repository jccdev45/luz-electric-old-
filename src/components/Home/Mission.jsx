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
			"Established in 2003, Luz Electric and Control Systems, Inc. takes great pride employing some of the best electricians and project managers in New York City. With 40+ years of professional experience with all types of electrical wiring and communication systems, we are offering our services in The Bronx, Manhattan, Queens, and Brooklyn. This includes maintenance, installations, and repairs with fire protection, building automation systems , security systems, and all other electrical systems.",
		desc2:
			"As prime and subcontractors we specialize in new residential housing projects, industrial facilities, and HVAC controls. Luz Electric and Control Systems, Inc. offers and provides a wide range of electrical services. No matter how big or how small it is, we care about we care about quality and customer satisfaction.",
	},
];

const renderInfo = () => {
	return INFO.map((item, index) => (
		<div
			key={index}
			className="flex flex-col items-center justify-center w-full mx-auto my-6 text-center md:w-2/3"
		>
			<h3 className="px-6 text-xl border-b-2 border-yellow-300 md:px-8 lg:px-24 md:text-3xl bold">
				<Pulse>{item.title}</Pulse>
			</h3>
			<p className="text-lg">{item.desc}</p>
			{item.desc2 && <p className="my-4 text-lg">{item.desc2}</p>}
		</div>
	));
};

export default function Mission() {
	return (
		<div className="flex flex-col items-center justify-center max-w-screen-xl p-6 m-2 border-8 border-yellow-200 shadow-lg lg:p-12 md:w-10/12 md:mx-auto lg:my-12 lg:py-8">
			<h2 className="text-2xl font-bold text-center md:mb-4 md:text-3xl">
				Our professional services are recommended by all of our great customers!
			</h2>
			<div className="flex flex-col justify-center">{renderInfo()}</div>
			<Link
				className="px-3 py-2 text-white transition-shadow bg-yellow-300 border border-white rounded shadow-lg hover:shadow-xl"
				to="/contact"
			>
				<HeadShake>
					<span className="text-white">REQUEST A SERVICE</span>
				</HeadShake>
			</Link>
		</div>
	);
}
