import React from "react";

import { VideoLeft } from "./styles/leftStyles";

const Left = ({ index, title }) => (
  <VideoLeft>
    <span>{index + 1}</span>
    <div className="pl-video-name">{title.substring(0, 50) + "..."}</div>
  </VideoLeft>
);

export default Left;
