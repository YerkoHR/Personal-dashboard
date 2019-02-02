import React from "react";
import styled from "styled-components";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import Img from "react-image";
import PlaylistBtn from "./PlaylistBtn/Index";
import PlayBtn from "./PlayBtn";
import { H3 } from "../globals";

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
  margin: 1em auto;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.backgroundCard};
  width: 80%;
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
  .spinner {
    margin: auto;
    width: 50px;
    height: 50px;
    align-self: center;
  }
  img {
    width: 320px;
  }
`;
const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const ContainerBtn = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content: space-around;
  svg {
    fill: #fff;
    user-select: none;
    transition: 0.4s ease-in-out;
  }
`;

export default class Results extends React.Component {
  /*componentDidMount() {
    this.props.fetchDetailsVideo(
      this.props.data.map(item => item.id.videoId).join()
    );
  }*/

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
            </VideoImage>
            <VideoDetails>
              <H3>{video.snippet.title}</H3>
              <ContainerBtn>
                <PlaylistBtn
                  video={video}
                  index={index}
                  togglePlaylist={togglePlaylist}
                />
                <PlayBtn
                  showVideo={video.showVideo}
                  togglePlayer={togglePlayer}
                  index={index}
                />
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
