import React from "react";
import Img from "gatsby-image";
import Rotate from "react-reveal/Rotate";

function Hero(props) {
	return (
		<div className="w-full h-auto" style={{ position: `relative` }}>
			<Img alt="Banner" fluid={props.img} />
			<div className="absolute top-0 right-0 z-10 w-12 h-12 m-4 md:w-24 lg:w-32 md:h-24 lg:h-32">
				{props.img2 && (
					<Rotate top right>
						<Img
							alt="MBE (Minority Business Enterprise) Certified"
							fluid={props.img2}
						/>
					</Rotate>
				)}
			</div>
		</div>
	);
}

export default Hero;
