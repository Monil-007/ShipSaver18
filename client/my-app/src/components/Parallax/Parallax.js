import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/quote-background.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText style={{ fontSize: "28px" }}>
          Success comes to <br />
          those who dare to begin, <br />
          We are daring to bring a revolution <br />
          in supply chain management field
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
