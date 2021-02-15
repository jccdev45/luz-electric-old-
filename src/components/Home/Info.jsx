import React from "react";
import Fade from "react-reveal/Fade";
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
		image: Team,
		title: "Trusted HVAC Controls Specialists",
		desc:
			"Bringing our service to your HVAC needs is what Luz Electric and Control Systems Inc, is all about. Our technicians are trained, experienced, and ready to handle any air conditioning or furnace-related need you may have. Whether it’s furnace repair or replacement, or perhaps a new humidifier installation, you can trust the experts at Luz Electric and Control Systems Inc, to do the job right the first time.",
	},
	{
		image: Area,
		title: "Serving New York",
		desc:
			"At Luz Electric and Control Systems Inc, we pride ourselves on knowing exactly what a client’s specialized needs are and providing top notch electrical and HVAC services throughout the five boroughs. Most home service professionals are trained for commercial or new construction jobs. We recognize that residential homeowners have needs that differ dramatically from those on a construction site or large commercial projects.",
	},
];

const renderInfo = () => {
	return INFO.map((item, index) => (
		<div
			className="flex flex-col items-center justify-between w-full h-full px-6 py-10 m-4 text-white bg-gray-600 border border-white rounded shadow-white md:mx-4"
			key={index}
		>
			<img src={item.image} alt={item.title} />
			<div className="flex-col items-center justify-start h-full">
				<h3 className="px-4 pb-2 my-4 text-2xl font-bold text-center border-b-2 border-yellow-300">
					{item.title}
				</h3>
				<Fade bottom>
					<p className="text-justify">{item.desc}</p>
				</Fade>
			</div>
		</div>
	));
};

export default function Info() {
	return (
		// footskis
		<div className="flex flex-col items-center justify-center w-full p-4 md:px-20 lg:flex-row bg-primary">
			{renderInfo()}
		</div>
	);
}
