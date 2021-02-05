import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function Estimate(props) {
	return (
		// carousel-container
		<div className="">
			<div className="p-0">
				<div>
					{props.img.map((image, index) => (
						<div key={index} style={{ width: `100%`, height: `100%` }}>
							<Img fluid={image.childImageSharp.fluid} />
						</div>
					))}
				</div>
			</div>
			<div className="my-4">
				{[
					"🏡 Private Homes",
					"🏢 Apartment Buildings",
					"👷🏽‍♂️ New Construction",
					"🔌 Installations Wiring",
					"🛠 Maintenance",
				].map((item, index) => (
					<h3 key={index}>{item}</h3>
				))}
				<div>
					<Link className="my-4" to="/contact">
						GET AN ESTIMATE
					</Link>
				</div>
			</div>
		</div>
	);
}
