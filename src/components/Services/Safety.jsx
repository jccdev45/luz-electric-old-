import React from "react";
import Fade from "react-reveal/Fade";

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
		<div
			// className={`${
			// 	index === 1
			// 		? `border-b-2 border-t-2 border-white  md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2`
			// 		: ``
			// } flex flex-col items-center justify-between w-full md:w-1/3 px-4 py-6 mx-2`}
			className="flex flex-col items-center justify-between w-full px-2 my-2 md:w-5/12"
			key={index}
		>
			<h3 className="px-8 my-2 text-2xl text-red-800 border-b-2 border-white">
				{item.title}
			</h3>
			<Fade bottom className="text-center">
				{item.desc}
			</Fade>
		</div>
	));
};

export default function Safety() {
	return (
		// services-footer
		<div className="flex flex-col items-center w-full p-4 text-center text-white bg-primary">
			<h2 className="my-8 text-3xl">
				SAFETY AND QUALITY CONSCIOUS ELECTRICAL CONTRACTORS
			</h2>
			<div className="flex flex-col items-center justify-evenly md:flex-wrap md:flex-row">
				{renderInfo()}
			</div>
		</div>
	);
}
