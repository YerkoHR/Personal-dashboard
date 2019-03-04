import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { X, MoreVertical } from "react-feather";

const PlContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 7px;
  border: solid 2px ${props => props.theme.border};
  transition: 0.3s ease-in;
  .pl-title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.border};
    height: 80px;
    .pl-btns {
      display: flex;
      justify-content: space-around;
      width: 30%;
      margin: 0 auto;
      button {
        padding: 0.5rem;
        color: ${props => props.theme.P};
        background: ${props => props.theme.backgroundPrimary};
        border: 0.5px solid ${props => props.theme.border};
        border-radius: 7px;
        font-size: 0.8rem;
        outline: 0;
        transition: 0.3s ease-in-out;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

const PlVideo = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 0.8rem;
  cursor: pointer;
  .delete-video {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    stroke: ${props => props.theme.P};
    background: ${props => props.theme.backgroundPrimary};
    width: 20px;
    height: 20px;
  }
  .pl-duration {
    margin-right: 1rem;
  }
  &:hover {
    .delete-video {
      visibility: visible;
    }
    .draggable {
      visibility: visible;
      background: ${props => props.theme.backgroundPrimary};
    }
  }
`;
const VideoLeft = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  .draggable {
    visibility: hidden;
    position: absolute;
    left: 0;
    width: 15px;
    height: 100%;
  }
  span {
    margin: 0 1.5rem;
  }
  .pl-video-name {
    width: 300px;
  }
`;

const Playlist = ({
  playlists,
  changeActivePlaylist,
  deletePlaylist,
  deleteVideo,
  playlistKey
}) => {
  const active = playlists.active;
  const playlist = playlists[playlistKey];

  return (
    <PlContainer active={playlistKey === active ? true : false}>
      <div className="pl-title">
        <h3>{playlistKey}</h3>
        <div className="pl-btns">
          {playlist.length > 0 && (
            <button onClick={() => changeActivePlaylist(playlistKey)}>
              Play all
            </button>
          )}
          <button onClick={() => deletePlaylist(playlistKey)}>Delete</button>
        </div>
      </div>
      <ul>
        {playlist.map((video, i) => (
          <PlVideo className="pl-video" key={video.id}>
            <VideoLeft>
              <MoreVertical className="draggable" />
              <span>{i + 1}</span>
              <div className="pl-video-name">
                {video.title.substring(0, 50) + "..."}
              </div>
            </VideoLeft>

            <span className="pl-duration">{video.duration}</span>

            <X
              title="Remove"
              className="delete-video"
              onClick={() => deleteVideo(playlistKey, i)}
            />
          </PlVideo>
        ))}
      </ul>
    </PlContainer>
  );
};

Playlist.propTypes = {
  playlists: PropTypes.object.isRequired,
  changeActivePlaylist: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired,
  playlistKey: PropTypes.string.isRequired
};

export default Playlist;
