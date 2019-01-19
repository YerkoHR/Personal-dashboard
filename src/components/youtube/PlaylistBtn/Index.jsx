import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { List } from "react-feather";
import Container from "./Container";

const ShowPLContainer = styled.div`
  position: relative;
  svg {
    stroke: #fff;
    transition: 0.3s ease-in-out;
  }
`;

// CHANGE ALL SVG TO FEATHER-ICONS !!!

export default function Index({ video, index, togglePlaylist }) {
  return (
    <ShowPLContainer>
      {video.showPlaylists && <Container video={video} index={index} />}
      <List
        className="show"
        onClick={() => togglePlaylist(index)}
        size={24}
        fill="#fff"
      />
    </ShowPLContainer>
  );
}

Index.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  togglePlaylist: PropTypes.func.isRequired
};
