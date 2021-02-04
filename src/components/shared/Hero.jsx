import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const HeroContainer = styled.div`
	width: 100%;
	height: auto;
`;

function Hero(props) {
	return (
		<HeroContainer className="hero-container" style={{ position: `relative` }}>
			<Img fluid={props.img} />
			{props.img2 && (
				<div className="mbe-container">
					<Img fluid={props.img2} />
				</div>
			)}
		</HeroContainer>
	);
}

export default Hero;
