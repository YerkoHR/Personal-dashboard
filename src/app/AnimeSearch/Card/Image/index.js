import React from "react";
import Img from "react-image";

import { ImageContainer } from "./styles";

const Image = ({ image }) => (
  <ImageContainer>
    <Img src={image} loader={<div className="lds-dual-ring spinner" />} />
  </ImageContainer>
);

export default Image;
