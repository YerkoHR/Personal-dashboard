import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  position: absolute;
  top: 40px;
  z-index: 2;
  &:focus {
    outline: 0;
  }
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0 0.2em;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  margin-bottom: 0.3em;
  transition: 0.6s ease-in-out;
  font-size: 0.8em;
  background: ${props => props.theme.backgroundPrimary};

  width: 100%;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transform: translateY(-3px);
  }
  span {
    margin: 0 0.1em;
  }
`;
export default function SearchList({ data, fetchDetails, blur }) {
  return (
    <StyledUl tabIndex="1" onBlur={blur}>
      {data.map(anime => (
        <StyledLi key={anime.id} onClick={() => fetchDetails(anime.id)}>
          <div title={anime.title.romaji}>
            {anime.title.romaji.substring(0, 20) + "..."}{" "}
          </div>
          <span>/</span>
          <div>{anime.status} </div>
          <span>/</span>
          <div> {anime.startDate.year}</div>
        </StyledLi>
      ))}
    </StyledUl>
  );
}
