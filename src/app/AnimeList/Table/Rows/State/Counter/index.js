import React from "react";

import { PlusCircle, MinusCircle } from "react-feather";
import { StyledCounter } from "./styles";

const Counter = ({ anime, index, incWatchedCounter, decWatchedCounter }) => (
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
);

export default Counter;
