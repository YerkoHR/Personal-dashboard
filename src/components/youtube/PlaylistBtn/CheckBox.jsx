import React from "react";
import PropTypes from "prop-types";
import { Square, CheckSquare } from "react-feather";

export default function CheckBox({
  title,
  playlists,
  videoId,
  addVideo,
  deleteVideo
}) {
  return (
    <React.Fragment>
      {playlists[title].indexOf(videoId) === -1 ? (
        <Square size={24} onClick={() => addVideo(title, videoId)} />
      ) : (
        <CheckSquare
          size={24}
          onClick={() => deleteVideo(title, playlists[title].indexOf(videoId))}
        />
      )}
    </React.Fragment>
  );
}

CheckBox.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  addVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};
