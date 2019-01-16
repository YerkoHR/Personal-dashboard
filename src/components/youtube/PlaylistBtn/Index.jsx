import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { List } from "react-feather";
import Container from "./Container";

const ShowPLContainer = styled.div`
  position: relative;
`;

export default function Index({ video, index, togglePlaylist }) {
  return (
    <ShowPLContainer>
      {video.showPlaylists && <Container video={video} index={index} />}
      <List className="show" onClick={() => togglePlaylist(index)} size={24} />
    </ShowPLContainer>
  );
}

Index.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  togglePlaylist: PropTypes.func.isRequired
};
