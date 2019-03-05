import React from "react";
import { StyledLi, StyledUl } from "./styles";

const Results = ({ data, fetchDetails, blur }) => (
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

export default Results;
