import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  height: auto;
`;

function Hero(props) {
  return (
    <HeroContainer>
      <Img fluid={props.img} />
    </HeroContainer>
  );
}

export default Hero;
