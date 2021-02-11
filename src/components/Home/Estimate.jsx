import React from "react";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Estimate(props) {
	return (
		// carousel-container
		<div className="flex flex-col items-center p-4 lg:flex-row bg-primary">
			<div className="w-11/12 lg:w-1/2">
				<Carousel showThumbs={false}>
					{props &&
						props.img.map((image, index) => (
							<div key={index} className="w-full h-full">
								<Img fluid={image.childImageSharp.fluid} />
							</div>
						))}
				</Carousel>
			</div>
			<div className="flex flex-col items-center justify-center w-full mx-auto my-4 md:w-1/2">
				{[
					"🏡 Private Homes",
					"🏢 Apartment Buildings",
					"👷🏽‍♂️ New Construction",
					"🔌 Installations Wiring",
					"🛠 Maintenance",
				].map((item, index) => (
					<Fade key={index} right>
						<h3 className="my-4 text-2xl text-white">{item}</h3>
					</Fade>
				))}
				<Link
					className="px-4 py-3 my-4 text-white transition-colors bg-yellow-400 rounded shadow-white hover:bg-yellow-300"
					to="/contact"
				>
					GET AN ESTIMATE
				</Link>
			</div>
		</div>
	);
}
