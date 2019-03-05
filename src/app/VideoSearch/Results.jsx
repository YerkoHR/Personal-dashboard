import React from "react";
import styled from "styled-components";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import Img from "react-image";
import PlaylistBtn from "./PlaylistBtn/Index";
import PlayBtn from "./PlayBtn";
import { H3 } from "../../shared";

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
`;
const StyledLi = styled.li`
  margin: 1rem auto;
  box-shadow: 0 0 0 1px ${props => props.theme.border};
  width: 80%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 180px;
  iframe {
    width: 100%;
    height: 500px;
    border: 0;
    grid-column: 1 / span 2;
  }
`;

const VideoImage = styled.div`
  display: flex;
  position: relative;
  .spinner {
    margin: auto;
    width: 50px;
    height: 50px;
    align-self: center;
  }
  img {
    width: 320px;
  }
  .duration {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: rgb(56, 56, 56);
    color: #e4e4e4;
    padding: 0.03rem;
    border-radius: 4px;
  }
`;
const VideoDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  .info {
    padding: 0.5rem;
    background: ${props => props.theme.backgroundCard};
    h3 {
      color: #e4e4e4;
      margin-bottom: 0.5rem;
      font-family: sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      color: #737373;
      font-size: 0.8rem;
    }
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #737373;
  font-size: 0.6rem;
  color: #fff;
  svg {
    user-select: none;
    transition: 0.4s ease-in-out;
  }
`;

const VideoActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;

  &:first-child {
    border-bottom: 1px solid #555555;
  }
`;

export default class Results extends React.Component {
  render() {
    const { data, togglePlayer, togglePlaylist } = this.props;
    return (
      <StyledUl>
        {data.map((video, index) => (
          <StyledLi key={video.id.videoId}>
            <VideoImage>
              <Img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                loader={<div className="lds-dual-ring spinner" />}
              />
              {video.contentDetails && (
                <div className="duration">{video.contentDetails.duration}</div>
              )}
            </VideoImage>
            <VideoDetails>
              <div className="info">
                <H3>{video.snippet.title}</H3>
                <p>
                  Published on <span>{video.snippet.publishedAt}</span> by{" "}
                  <span>{video.snippet.channelTitle}</span>
                </p>
              </div>
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
            </VideoDetails>
            {video.showVideo && (
              <LoadableVideoPlayer title={video.snippet.title} ids={video.id} />
            )}
          </StyledLi>
        ))}
      </StyledUl>
    );
  }
}

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  togglePlayer: PropTypes.func.isRequired
};
