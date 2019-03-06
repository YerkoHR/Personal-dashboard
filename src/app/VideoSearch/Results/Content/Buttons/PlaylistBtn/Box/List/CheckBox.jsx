import React from "react";
import PropTypes from "prop-types";

import { Square, CheckSquare } from "react-feather";

const CheckBox = ({ title, playlists, video, addVideo, deleteVideo }) => (
  <>
    {!playlists[title].some(item => item.id === video.id.videoId) ? (
      <Square size={24} onClick={() => addVideo(title, video)} />
    ) : (
      <CheckSquare
        size={24}
        onClick={() =>
          deleteVideo(
            title,
            playlists[title].map(x => x.id).indexOf(video.id.videoId)
          )
        }
      />
    )}
  </>
);

CheckBox.propTypes = {
  video: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  addVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};

export default CheckBox;
