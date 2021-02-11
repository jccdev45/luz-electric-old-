import React from "react";
import { Link } from "gatsby";
import HeadShake from "react-reveal/HeadShake";

export default function Intro() {
	return (
		<div className="flex flex-col items-center justify-center py-10 bg-gray-300">
			<div className="flex flex-col items-center w-full md:my-6 md:flex-row justify-evenly">
				{["COMMERCIAL", "RESIDENTIAL", "INDUSTRIAL"].map((item, index) => (
					<h3
						key={index}
						className={`${
							index === 1
								? `border-b-2 border-t-2 border-yellow-200 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2`
								: ``
						} lg:text-3xl md:text-2xl text-xl w-2/3 text-center py-2`}
					>
						{item}
					</h3>
				))}
			</div>
			<h4 className="my-5 text-2xl">No Job Too Large or Too Small!</h4>
			<p className="w-5/6 text-center">
				From start to finish, our experienced estimators, project managers and
				technicians provide the expertise to ensure your electrical project is
				completed on time, on budget and up to code. Contact us today and we'll
				show you how we can put our knowledge to work for you.
			</p>
			<Link
				to="/contact"
				className="px-3 py-2 my-4 text-xl text-white bg-yellow-300 border border-white rounded shadow-md"
			>
				<HeadShake>REQUEST A SERVICE</HeadShake>
			</Link>
		</div>
	);
}
