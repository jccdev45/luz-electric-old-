import React from "react";
import Img from "gatsby-image";

function Hero(props) {
  return (
    <div className="hero-container">
      <Img fluid={props.img} />
    </div>
  );
}

export default Hero;
