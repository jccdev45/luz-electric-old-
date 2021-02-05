import React from "react";
import Img from "gatsby-image";

function Hero(props) {
	return (
		// hero-container
		<div className="" style={{ position: `relative` }}>
			<Img fluid={props.img} />
			{props.img2 && (
				// mbe-container
				<div className="absolute bottom-0 left-0 z-10 w-48 h-48 pb-4 pl-4">
					<Img fluid={props.img2} />
				</div>
			)}
		</div>
	);
}

export default Hero;
