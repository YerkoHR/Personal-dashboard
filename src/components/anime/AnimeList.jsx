import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUl = styled.ul``;
const StyledLi = styled.li``;

export default function AnimeList({ data }) {
  return (
    <StyledUl>
      {data.map(anime => (
        <StyledLi key={anime.id}>{anime.title.romaji}</StyledLi>
      ))}
    </StyledUl>
  );
}

AnimeList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        romaji: PropTypes.string.isRequired
      })
    })
  ).isRequired
};
