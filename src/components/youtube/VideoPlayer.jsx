import React from "react";
import PropTypes from "prop-types";

export default function VideoPlayer({ ids, title }) {
  return (
    <iframe
      type="text/html"
      title={title}
      src={
        ids.videoId
          ? `https://www.youtube.com/embed/${ids.videoId}?autoplay=0`
          : `https://www.youtube.com/embed/?autoplay=0&listType=playlist&list=${
              ids.playlistId
            }`
      }
    />
  );
}

VideoPlayer.PropTypes = {
  ids: PropTypes.object.isRequired
};
