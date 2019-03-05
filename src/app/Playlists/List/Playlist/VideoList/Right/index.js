import React from "react";

import { X } from "react-feather";

const Right = ({ duration, playlistKey, deleteVideo, index }) => (
  <>
    <span className="pl-duration">{duration}</span>
    <X
      className="delete-video"
      onClick={() => deleteVideo(playlistKey, index)}
    />
  </>
);

export default Right;
