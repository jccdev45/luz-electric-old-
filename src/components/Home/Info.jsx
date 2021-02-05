import React from "react";
// import Img from "gatsby-image";
import Area from "../../assets/img/luz-area2.png";
import Security from "../../assets/img/luz-security2.png";
import Team from "../../assets/img/luz-team2.png";

const INFO = [
	{
		image: Security,
		title: "Safety and Reliability",
		desc:
			"You can rest assured that the electrician we send to your home is qualified to be there. Having a skilled, trained electrician who specializes in residential, commercial, and industrial electrical services means your problem will be fixed correctly and according to safety codes.",
	},
	{
		image: Area,
		title: "New York’s Trusted HVAC Controls Specialists",
		desc:
			"Bringing our service to your HVAC needs is what Luz Electric and Control Systems Inc, is all about. Our technicians are trained, experienced, and ready to handle any air conditioning or furnace-related need you may have. Whether it’s furnace repair or replacement, or perhaps a new humidifier installation, you can trust the experts at Luz Electric and Control Systems Inc, to do the job right the first time.",
	},
	{
		image: Team,
		title: "Serving New York",
		desc:
			"At Luz Electric and Control Systems Inc, we pride ourselves on knowing exactly what a client’s specialized needs are and providing top notch electrical and HVAC services throughout the five boroughs. Most home service professionals are trained for commercial or new construction jobs. We recognize that residential homeowners have needs that differ dramatically from those on a construction site or large commercial projects.",
	},
];

const renderInfo = () => {
	return INFO.map((item, index) => (
		<div className="bg-dark text-white" key={index}>
			<img src={item.image} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.desc}</p>
			</div>
		</div>
	));
};

export default function Info() {
	return (
		// footskis
		<div className="">{renderInfo()}</div>
	);
}
