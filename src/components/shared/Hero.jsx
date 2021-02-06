import React from "react";
import Img from "gatsby-image";
import Rotate from "react-reveal/Rotate";

function Hero(props) {
	return (
		// hero-container
		<div className="w-full h-auto" style={{ position: `relative` }}>
			<Img alt="Banner" fluid={props.img} />
			{props.img2 && (
				// mbe-container
				<div className="absolute bottom-0 left-0 z-10 w-16 h-16 mb-1 ml-1 md:pb-2 md:pl-2 md:w-40 md:h-40">
					<Rotate top left>
						<Img
							alt="MBE (Minority Business Enterprise) Certification"
							fluid={props.img2}
						/>
					</Rotate>
				</div>
			)}
		</div>
	);
}

export default Hero;
