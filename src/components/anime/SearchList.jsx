import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 40px;
  z-index: 2;
  &:focus {
    outline: 0;
  }
`;

const StyledLi = styled.li`
  border: 1px solid ${props => props.theme.backgroundPrimary};
  border-radius: 3px;
  margin-bottom: 0.5em;
  transition: 0.6s ease-in-out;
  font-size: 0.8em;
  background: #fff;
  padding: 0.2em;
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transform: translateY(-3px);
    color: #fff;
  }
`;
export default function SearchList({ data, fetchDetails, blur }) {
  return (
    <StyledUl tabIndex="1" onBlur={blur}>
      {data.map(anime => (
        <StyledLi key={anime.id} onClick={() => fetchDetails(anime.id)}>
          <span>{anime.title.romaji} /</span>
          <span>{anime.status.toLowerCase()} / </span>
          <span> {anime.startDate.year}</span>
        </StyledLi>
      ))}
    </StyledUl>
  );
}
