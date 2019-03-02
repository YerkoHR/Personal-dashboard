import React from "react";
import styled from "styled-components";
import { H3, P } from "../globals";

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
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.backgroundSecundary};
  padding: 0.75rem;
  .scrollBox {
    height: 225px;
    overflow: hidden;
    visibility: hidden;
    transition: 0.2s ease-in;
  }
  p,
  .scrollBox:hover {
    visibility: visible;
    overflow: auto;
  }
  .scrollBox:focus {
    outline: 0;
  }
`;

const PAligned = styled(P)`
  text-align: justify;
`;

const ExtraInfo = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    text-align: center;
    li {
      margin: 0 0.5rem;
    }
  }
`;
export default function ToWatchList({ saved }) {
  return (
    <StyledCardList className="fade-in">
      {saved.map(anime => (
        <StyledCard key={anime.id}>
          <img src={anime.coverImage.large} alt="cardImage" />
          <MainInfo>
            <H3>{anime.title}</H3>
            <div className="scrollBox" tabIndex="0">
              <PAligned
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
