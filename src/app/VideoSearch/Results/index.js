import React from "react";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import Content from "./Content";
import Image from "./Image";

import { StyledLi, StyledUl } from "./styles";

const LoadablePlayer = Loadable({
  loader: () => import("./Player"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Results = ({ data, togglePlayer, togglePlaylist }) => (
  <StyledUl>
    {data.map((video, index) => (
      <StyledLi key={video.id.videoId}>
        <Image
          title={video.snippet.title}
          source={video.snippet.thumbnails.medium.url}
          details={video.contentDetails}
        />
        <Content
          video={video}
          index={index}
          togglePlaylist={togglePlaylist}
          togglePlayer={togglePlayer}
        />
        {video.showVideo && (
          <LoadablePlayer title={video.snippet.title} ids={video.id} />
        )}
      </StyledLi>
    ))}
  </StyledUl>
);

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  togglePlayer: PropTypes.func.isRequired
};

export default Results;
