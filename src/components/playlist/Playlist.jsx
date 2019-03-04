import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { X, MoreVertical } from "react-feather";

const PlContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 7px;
  border: solid 2px ${props => props.theme.border};
  transition: 0.3s ease-in;
  .pl-title {
    display: flex;
    flex-direction: column;
    height: 60px;
    border-bottom: 1px solid ${props => props.theme.border};
  }
  .pl-video {
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.border};
    position: relative;
    height: 50px;
    width: 100%;
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
    &:hover {
      .delete-video {
        visibility: visible;
      }
      .draggable {
        visibility: visible;
        background: ${props => props.theme.backgroundPrimary};
      }
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
    position: absolute;
    visibility: hidden;
    height: 100%;
    left: 0;
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
        <div>
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
          <li className="pl-video" key={video.id}>
            <VideoLeft>
              <MoreVertical width="15" className="draggable" />
              <span>{i + 1}</span>
              <div className="pl-video-name">
                {video.title.substring(0, 50) + "..."}
              </div>
            </VideoLeft>

            <span>{video.duration}</span>

            <X
              title="Remove"
              className="delete-video"
              onClick={() => deleteVideo(playlistKey, i)}
            />
          </li>
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
