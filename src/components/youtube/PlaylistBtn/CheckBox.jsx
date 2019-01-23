import React from "react";
import PropTypes from "prop-types";
import { Square, CheckSquare } from "react-feather";

export default function CheckBox({
  title,
  playlists,
  video,
  addVideo,
  deleteVideo
}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

CheckBox.propTypes = {
  video: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  addVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};
