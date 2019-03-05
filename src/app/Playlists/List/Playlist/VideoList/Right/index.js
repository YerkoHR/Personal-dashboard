import React from "react";

import { X } from "react-feather";
import { RightContainer } from "./styles";

const Right = ({ duration, playlistKey, deleteVideo, index }) => (
  <RightContainer>
    <span className="pl-duration">{duration}</span>
    <X
      className="delete-video"
      onClick={() => deleteVideo(playlistKey, index)}
    />
  </RightContainer>
);

export default Right;
