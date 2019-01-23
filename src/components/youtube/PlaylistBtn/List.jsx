import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const StyledList = styled.ul`
  list-style: none;
  padding: 1em;
  margin: 0;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5em;
    div {
      width: 100px;
      overflow: hidden;
      visibility: hidden;
      transition: 0.2s ease-in;
      text-align: start;
    }
    div::-webkit-scrollbar-track {
      border: 1px solid #000;
      padding: 2px 0;
      background-color: #404040;
    }
    div::-webkit-scrollbar {
      width: 10px;
    }
    div::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #737272;
      border: 0;
    }
    span,
    div:hover {
      visibility: visible;
      overflow: auto;
    }
    div:focus {
      outline: 0;
    }
    svg {
      fill: #0000;
    }
  }
`;

export default function List({ video, playlists, addVideo, deleteVideo }) {
  return (
    <StyledList>
      {Object.keys(playlists)
        .filter(key => key !== "active")
        .map((key, index) => (
          <li key={index + key}>
            <div tabIndex="0">
              <span>{key}</span>
            </div>
            <CheckBox
              title={key}
              video={video}
              addVideo={addVideo}
              deleteVideo={deleteVideo}
              playlists={playlists}
            />
          </li>
        ))}
    </StyledList>
  );
}

List.propTypes = {
  video: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  addVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};
