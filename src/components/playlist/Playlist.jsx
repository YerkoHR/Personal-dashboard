import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  min-height: 120px;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => (props.active ? props.theme.P : props.theme.border)};
  transition: 0.3s ease-in;
  .pl-video {
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    .pl-video-name {
      width: 300px;
    }
  }
  &:hover {
    border-color: ${props => props.theme.P};
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
    <StyledLi active={playlistKey === active ? true : false}>
      {playlist.length > 0 && (
        <button onClick={() => changeActivePlaylist(playlistKey)}>
          Play all
        </button>
      )}
      <button onClick={() => deletePlaylist(playlistKey)}>Delete</button>
      <p>{playlistKey}</p>

      <ul>
        {playlist.map((video, i) => (
          <li className="pl-video" key={video.id}>
            <span>{i + 1}</span>
            <span className="pl-video-name">{video.title}</span>
            <span>{video.duration}</span>
            <button onClick={() => deleteVideo(playlistKey, i)}>Delete</button>
          </li>
        ))}
      </ul>
    </StyledLi>
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
