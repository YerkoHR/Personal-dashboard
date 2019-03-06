import React from "react";
import PlayBtn from "./PlayBtn";
import PlaylistBtn from "./PlaylistBtn";

import { ContainerBtn, VideoActions } from "./styles";

const Buttons = ({ video, index, togglePlaylist, togglePlayer }) => (
  <ContainerBtn>
    <VideoActions>
      <PlaylistBtn
        video={video}
        index={index}
        togglePlaylist={togglePlaylist}
      />
    </VideoActions>
    <VideoActions>
      <PlayBtn
        showVideo={video.showVideo}
        togglePlayer={togglePlayer}
        index={index}
      />
    </VideoActions>
  </ContainerBtn>
);

export default Buttons;
