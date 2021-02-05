import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Estimate(props) {
	return (
		// carousel-container
		<div className="flex p-4 bg-primary">
			<div className="w-1/2">
				<Carousel>
					{props.img.map((image, index) => (
						<div key={index} style={{ width: `100%`, height: `100%` }}>
							<Img fluid={image.childImageSharp.fluid} />
						</div>
					))}
				</Carousel>
			</div>
			<div className="flex flex-col items-center justify-center w-1/2 mx-auto my-4">
				{[
					"🏡 Private Homes",
					"🏢 Apartment Buildings",
					"👷🏽‍♂️ New Construction",
					"🔌 Installations Wiring",
					"🛠 Maintenance",
				].map((item, index) => (
					<h3 key={index} className="my-4 text-2xl text-white">
						{item}
					</h3>
				))}
				<div>
					<Link
						className="px-4 py-3 my-4 text-white bg-yellow-400 rounded"
						to="/contact"
					>
						GET AN ESTIMATE
					</Link>
				</div>
			</div>
		</div>
	);
}
