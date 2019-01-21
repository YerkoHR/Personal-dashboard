import React from "react";
import PropTypes from "prop-types";
import { Eye, EyeOff } from "react-feather";

export default function PlayBtn({ index, showVideo, togglePlayer }) {
  return (
    <div>
      {showVideo ? (
        <EyeOff onClick={() => togglePlayer(index)} />
      ) : (
        <Eye onClick={() => togglePlayer(index)} />
      )}
    </div>
  );
}

PlayBtn.propTypes = {
  showVideo: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  togglePlayer: PropTypes.func.isRequired
};
