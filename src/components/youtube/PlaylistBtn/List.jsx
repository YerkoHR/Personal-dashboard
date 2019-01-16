import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const StyledListPl = styled.ul`
  list-style: none;
  padding: 1em;
  margin: 0;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5em;
    svg {
      fill: #0000;
    }
  }
`;

export default function List({ video, playlists, addVideo, deleteVideo }) {
  return (
    <StyledListPl>
      {Object.keys(playlists)
        .filter(key => key !== "active")
        .map((key, index) => (
          <li key={index + key}>
            <div>{key}</div>
            <CheckBox
              title={key}
              videoId={video.id.videoId}
              addVideo={addVideo}
              deleteVideo={deleteVideo}
              playlists={playlists}
            />
          </li>
        ))}
    </StyledListPl>
  );
}

List.propTypes = {
  video: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  addVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};
