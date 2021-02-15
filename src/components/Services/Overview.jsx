import React from "react";
import Pulse from "react-reveal/Pulse";
import Commercial from "../../assets/img/overview/commercial.png";
import Construction from "../../assets/img/overview/construction.png";
import Inspect from "../../assets/img/overview/inspect.png";
import Prevention from "../../assets/img/overview/prevention.png";
import Residential from "../../assets/img/overview/residential.png";
import Service from "../../assets/img/overview/service.png";

const SERVICES = [
	{
		name: "New Construction",
		image: Construction,
		desc: [
			"Light Fixtures",
			"Panels, Switches, and Disconnects",
			"Power Wiring for Light, HVAC and All Related Equipment",
			"Motor Controls, Starters, Pumps and All Related Equipment",
		],
	},
	{
		name: "Residential",
		image: Residential,
		desc: [
			"Violation Removals",
			"Accented Lighting",
			"Renovations",
			"Security and Entertainment Systems",
		],
	},
	{
		name: "Commercial and Industrial",
		image: Commercial,
		desc: [
			"ECB Violation Removals and Certificates of Occupancy",
			"Control and Service Upgrades",
			"Parking and Outdoor Lighting",
			"Automated Building Maintenance Controls and HVAC Systems",
		],
	},
	{
		name: "Service and Maintenance",
		image: Service,
		desc: [
			"Preventive Maintenance",
			"Installation of Electrical Power for Appliances",
		],
	},
	{
		name: "Property Inspection",
		image: Inspect,
		desc: [
			"Identify Violations, Repair and Upgrades Required in Properties for Sale or Rent",
		],
	},
	{
		name: "Prevention and Property Protection",
		image: Prevention,
		desc: [
			"Installation of Fire Alarm Systems",
			"Wiring and Related Equipment",
		],
	},
];

export default function Overview() {
	const renderServices = () => {
		return SERVICES.map((service, index) => {
			return (
				<div
					className="flex flex-col items-center justify-start w-full px-4 mx-auto my-4 md:w-2/3 lg:pb-12 md:px-0"
					key={index}
				>
					<img src={service.image} alt={service.name} className="w-14 h-14" />
					<h4 className="my-2 text-xl text-center border-b border-yellow-500">
						<Pulse>{service.name}</Pulse>
					</h4>
					<ul className="w-full">
						{service.desc.map((item, index) => (
							<li
								className="my-4 text-center border-b border-gray-200"
								key={index}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			);
		});
	};

	return (
		<div className="flex flex-col justify-center p-8 m-2 border-8 border-yellow-200 shadow-lg lg:p-12 md:w-10/12 md:mx-auto lg:my-12">
			<div className="flex flex-col items-center justify-center text-center">
				<h3 className="text-2xl">
					40+ Years Providing Electrical Services to NYC
				</h3>
				<h2 className="my-4 text-3xl">What We Do:</h2>
				<p className="my-4">
					You can feel confident knowing that our electricians, estimators, and
					project managers know the tricks of the trade that can only come with
					industry experience.
				</p>
			</div>
			{/* <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap"> */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{renderServices()}
			</div>
		</div>
	);
}
