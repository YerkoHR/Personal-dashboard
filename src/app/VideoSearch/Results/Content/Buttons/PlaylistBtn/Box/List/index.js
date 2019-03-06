import React from "react";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";

import { StyledList } from "./styles";

const List = ({ video, playlists, addVideo, deleteVideo }) => (
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

List.propTypes = {
  video: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  addVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};

export default List;
