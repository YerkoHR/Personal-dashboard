import React from "react";
import styled from "styled-components";
import { PlusCircle, MinusCircle } from "react-feather";

const StyledWatchedCounter = styled.div`
  display: flex;
  flex-direction: column;
  select {
    border-radius: 4px;
    border-style: solid;
    border-width: 1.2px;
    &:focus {
      outline: 0;
    }
  }
  .Watching {
    border-color: blue;
    color: blue;
  }
  .toWatch {
    border-color: brown;
    color: brown;
  }
  .Completed {
    border-color: green;
    color: green;
  }
`;
const StyledCounter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: 0.2em;
  span {
    margin: 0 0.2em;
  }
  svg {
    transition: 0.3s ease-in-out;
    user-select: none;
    &:hover {
      stroke: blue;
    }
  }
  .disabled {
    pointer-events: none;
  }
`;

export default function MyState({
  anime,
  index,
  changeState,
  incWatchedCounter,
  decWatchedCounter
}) {
  return (
    <React.Fragment>
      <StyledWatchedCounter>
        <select
          className={
            (anime.myState === "To watch" && "toWatch") ||
            (anime.myState === "Watching" && "Watching") ||
            (anime.myState === "Completed" && "Completed")
          }
          value={anime.myState}
          onChange={e => changeState(index, e.target.value)}
        >
          <option value="To watch">To watch</option>
          <option value="Watching">Watching</option>
          <option value="Completed">Completed</option>
        </select>
        {(anime.myState === "Watching" || anime.myState === "Completed") && (
          <StyledCounter>
            <div>
              {anime.myState === "Completed"
                ? anime.episodes || anime.nextAiringEpisode.episode - 1
                : anime.episodesWatched}
              <span>/</span>
              {anime.episodes || anime.nextAiringEpisode.episode - 1}
            </div>
            {anime.myState !== "Completed" && (
              <div>
                <MinusCircle
                  className={anime.episodesWatched === 0 ? "disabled" : ""}
                  onClick={() => decWatchedCounter(index)}
                />
                <PlusCircle
                  className={
                    (anime.episodes || anime.nextAiringEpisode.episode - 1) ===
                    anime.episodesWatched
                      ? "disabled"
                      : ""
                  }
                  onClick={() => incWatchedCounter(index)}
                />
              </div>
            )}
          </StyledCounter>
        )}
      </StyledWatchedCounter>
    </React.Fragment>
  );
}
