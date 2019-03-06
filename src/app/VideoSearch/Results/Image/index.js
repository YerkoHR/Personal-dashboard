import React from "react";
import Img from "react-image";

import { VideoImage } from "./styles";

const Image = ({ title, source, details }) => (
  <VideoImage>
    <Img
      src={source}
      alt={title}
      loader={<div className="lds-dual-ring spinner" />}
    />
    {details && <div className="duration">{details.duration}</div>}
  </VideoImage>
);

export default Image;
