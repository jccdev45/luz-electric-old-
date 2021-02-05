import React from "react";
import { Link } from "gatsby";

export default function Intro() {
	return (
		// services-intro
		<div className="">
			<div>
				{["COMMERCIAL", "RESIDENTIAL", "INDUSTRIAL"].map((item, index) => (
					<div key={index}>
						<h3>{item}</h3>
					</div>
				))}
			</div>
			<div>
				<h4>No Job Too Large or Too Small!</h4>
			</div>
			<div>
				<p>
					From start to finish, our experienced estimators, project managers and
					technicians provide the expertise to ensure your electrical project is
					completed on time, on budget and up to code. Contact us today and
					we'll show you how we can put our knowledge to work for you.
				</p>
			</div>
			<button variant="primary" as={Link} to="/contact">
				REQUEST A SERVICE
			</button>
		</div>
	);
}
