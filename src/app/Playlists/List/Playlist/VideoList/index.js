import React from "react";
import Left from "./Left";
import Right from "./Right";

import { PlVideo } from "./styles";

const VideoList = ({ playlist, deleteVideo, playlistKey }) => (
  <ul>
    {playlist.map((video, i) => (
      <PlVideo className="pl-video" key={video.id}>
        <Left title={video.title} index={i} />
        <Right
          duration={video.duration}
          deleteVideo={deleteVideo}
          playlistKey={playlistKey}
          index={i}
        />
      </PlVideo>
    ))}
  </ul>
);

export default VideoList;
