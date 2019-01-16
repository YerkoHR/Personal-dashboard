import React from "react";
import styled from "styled-components";
import Loadable from "react-loadable";
import PropTypes from "prop-types";

const LoadablePlayBtn = Loadable({
  loader: () => import("./PlayBtn"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadablePlaylistBtn = Loadable({
  loader: () => import("./PlaylistBtn/Index"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableVideoPlayer = Loadable({
  loader: () => import("./VideoPlayer"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const StyledLi = styled.li`
  margin: 1em auto;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.backgroundCard};
  width: 80%;
  iframe {
    width: 100%;
    height: 500px;
    border: 0;
  }
`;
const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 320px;
  }
`;
const VideoActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  p {
    margin: 0.5em 2em;
    color: #fff;
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content: space-around;
  svg {
    fill: #fff;
    user-select: none;
  }
  .show:hover {
    fill: lightblue;
  }
  .hide:hover {
    fill: lightsalmon;
  }
`;

export default function Results({ data, togglePlayer, togglePlaylist }) {
  return (
    <StyledUl>
      {data.map((video, index) => (
        <StyledLi key={video.id.videoId}>
          <VideoDetails>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <VideoActions>
              <p>{video.snippet.title}</p>
              <ContainerBtn>
                <LoadablePlaylistBtn
                  video={video}
                  index={index}
                  togglePlaylist={togglePlaylist}
                />
                <LoadablePlayBtn
                  showVideo={video.showVideo}
                  togglePlayer={togglePlayer}
                  index={index}
                />
              </ContainerBtn>
            </VideoActions>
          </VideoDetails>
          {video.showVideo && (
            <LoadableVideoPlayer title={video.snippet.title} ids={video.id} />
          )}
        </StyledLi>
      ))}
    </StyledUl>
  );
}

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  togglePlayer: PropTypes.func.isRequired
};
