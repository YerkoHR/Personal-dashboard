import React from "react";
import styled from "styled-components";

const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px;
  grid-gap: 1em;
  width: 95%;
  margin: 2em auto;
`;
const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid grey;
  border-radius: 4px;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #131921;
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
    height: 225px;
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
const ExtraInfo = styled.div`
  border-top: 1px solid #0d0f13;

  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  color: #c4c6e6;
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
  }
`;
export default function ToWatchList({ saved }) {
  return (
    <StyledCardList className="fade-in">
      {saved.map(anime => (
        <StyledCard key={anime.id}>
          <img src={anime.coverImage.large} alt="cardImage" />
          <MainInfo>
            <h3>{anime.title}</h3>
            <div className="scrollBox" tabIndex="0">
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: anime.description }}
              />
            </div>
            <ExtraInfo>
              {anime.nextAiringEpisode && (
                <div>{anime.nextAiringEpisode.timeUntilAiring}</div>
              )}
              <ul>
                {anime.genres.map(genre => (
                  <li key={"type" + genre}>{genre}</li>
                ))}
              </ul>
            </ExtraInfo>
          </MainInfo>
        </StyledCard>
      ))}
    </StyledCardList>
  );
}
