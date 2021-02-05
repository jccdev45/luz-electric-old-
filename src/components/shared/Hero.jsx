import React from "react";
import Img from "gatsby-image";

function Hero(props) {
	return (
		// hero-container
		<div className="" style={{ position: `relative` }}>
			<Img fluid={props.img} />
			{props.img2 && (
				// mbe-container
				<div className="">
					<Img fluid={props.img2} />
				</div>
			)}
		</div>
	);
}

export default Hero;
