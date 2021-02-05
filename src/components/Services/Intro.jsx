import React from "react";
import { Link } from "gatsby";

export default function Intro() {
	return (
		// services-intro
		<div className="flex flex-col items-center justify-center py-10 bg-gray-300">
			<div className="flex items-center w-full my-6 justify-evenly">
				{["COMMERCIAL", "RESIDENTIAL", "INDUSTRIAL"].map((item, index) => (
					<h3 key={index} className="text-xl">
						{item}
					</h3>
				))}
			</div>
			<h4 className="my-3 text-2xl">No Job Too Large or Too Small!</h4>
			<p className="w-5/6">
				From start to finish, our experienced estimators, project managers and
				technicians provide the expertise to ensure your electrical project is
				completed on time, on budget and up to code. Contact us today and we'll
				show you how we can put our knowledge to work for you.
			</p>
			<Link
				to="/contact"
				className="px-3 py-2 my-4 text-xl text-white bg-yellow-300 border border-white rounded shadow-md"
			>
				REQUEST A SERVICE
			</Link>
		</div>
	);
}
