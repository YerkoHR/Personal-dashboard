import React from "react";
import Content from "./Content";

import { StyledCard, StyledCardList } from "./styles";

const CardList = ({ saved }) => {
  return (
    <StyledCardList className="fade-in">
      {saved.map(anime => (
        <StyledCard key={anime.id}>
          <img src={anime.coverImage.large} alt="cardImage" />
          <Content anime={anime} />
        </StyledCard>
      ))}
    </StyledCardList>
  );
};

export default CardList;
