import React from "react";
import Commercial from "../../assets/img/overview/commercial.png";
import Construction from "../../assets/img/overview/construction.png";
import Inspect from "../../assets/img/overview/inspect.png";
import Prevention from "../../assets/img/overview/prevention.png";
import Residential from "../../assets/img/overview/residential.png";
import Service from "../../assets/img/overview/service.png";

export default function Overview() {
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
				"Installation of Fire Alarm Systems, Wiring and Related Equipment",
			],
		},
	];

	const renderServices = () => {
		return SERVICES.map((service, index) => {
			console.log(service);
			return (
				// service
				<div className="w-full h-full" key={index}>
					<img src={service.image} className="w-16 h-16" />
					<h4 className="my-2">{service.name}</h4>
					<ul>
						{service.desc.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			);
		});
	};

	return (
		// services-container
		<div className="">
			{/* services-row */}
			<div className="">
				<div>
					<h3>40+ Years Providing Electrical Services to NYC</h3>
					<h2 className="my-4">What We Do:</h2>
					<p>
						You can feel confident knowing that our electricians, estimators,
						and project managers know the tricks of the trade that can only come
						with industry experience.
					</p>
				</div>
				{renderServices()}
			</div>
		</div>
	);
}
