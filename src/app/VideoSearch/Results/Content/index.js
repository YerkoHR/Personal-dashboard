import React from "react";
import Buttons from "./Buttons";

import { H3 } from "../../../../shared/globals";
import { ContentContainer, Details } from "./styles";

const Content = ({ video, index, togglePlayer, togglePlaylist }) => (
  <ContentContainer>
    <Details>
      <H3>{video.snippet.title}</H3>
      <p>
        Published on <span>{video.snippet.publishedAt}</span> by{" "}
        <span>{video.snippet.channelTitle}</span>
      </p>
    </Details>
    <Buttons
      video={video}
      index={index}
      togglePlaylist={togglePlaylist}
      togglePlayer={togglePlayer}
    />
  </ContentContainer>
);

export default Content;
