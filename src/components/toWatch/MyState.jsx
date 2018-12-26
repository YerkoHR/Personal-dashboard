import React from "react";
import styled from "styled-components";

const StyledWatchedCounter = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledCounter = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  margin-top: 0.2em;
  span {
    margin: 0 0.2em;
  }
  svg {
    transition: 0.3s ease-in-out;
    &:hover {
      fill: blue;
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
                ? anime.episodes
                : anime.episodesWatched}
              <span>/</span> {anime.episodes}
            </div>
            {anime.myState !== "Completed" && (
              <div>
                <svg
                  className={anime.episodesWatched === 0 ? "disabled" : ""}
                  onClick={() => decWatchedCounter(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="22"
                  height="22"
                >
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM5 9h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
                </svg>

                <svg
                  className={
                    anime.episodes === anime.episodesWatched ? "disabled" : ""
                  }
                  onClick={() => incWatchedCounter(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="22"
                  height="22"
                >
                  <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z" />
                </svg>
              </div>
            )}
          </StyledCounter>
        )}
      </StyledWatchedCounter>
    </React.Fragment>
  );
}
