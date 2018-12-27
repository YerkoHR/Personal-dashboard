import React from "react";
import styled from "styled-components";

const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px;
  grid-gap: 1em;
  width: 85%;
  margin: 2em auto;
  list-style: none;
  padding: 0;
`;
const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid grey;
  border-radius: 4px;
  h3 {
    margin: 0.5em;
  }
  .description {
    font-size: 0.8em;
    text-align: justify;
    width: 90%;
    margin: 0 auto;
  }
  .scrollBox {
    height: 240px;
    overflow: hidden;
    visibility: hidden;
    transition: 0.2s ease-in;
  }
  .description,
  .scrollBox:hover {
    visibility: visible;
    overflow: auto;
  }
  .scrollBox:focus {
    outline: 0;
  }
`;
export default function ToWatchList({ saved }) {
  return (
    <StyledCardList>
      {saved.map(anime => (
        <StyledCard key={anime.id}>
          <img src={anime.coverImage.large} alt="cardImage" />
          <div>
            <h3>{anime.title.romaji}</h3>
            <div className="scrollBox" tabIndex="0">
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: anime.description }}
              />
            </div>
            <span>Random data</span>
          </div>
        </StyledCard>
      ))}
    </StyledCardList>
  );
}
