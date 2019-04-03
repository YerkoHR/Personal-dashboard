import React from "react";
import { connect } from "react-redux";
import {
  incWatchedCounter,
  decWatchedCounter
} from "../../../../../../redux/ducks/saved";

import { PlusCircle, MinusCircle } from "react-feather";
import { StyledCounter } from "./styles";

const Counter = ({ anime, incWatchedCounter, decWatchedCounter }) => {
  const state = anime.myState;
  const episodes = anime.episodes;
  const nextEpisode =
    anime.nextAiringEpisode && anime.nextAiringEpisode.episode - 1;
  const watched = anime.episodesWatched;

  return (
    <StyledCounter>
      {state !== "To Watch" && (
        <div>
          {state === "Completed" ? episodes || nextEpisode : watched}
          <span>/</span>
          {episodes || nextEpisode}
        </div>
      )}
      {state === "Watching" && (
        <div>
          <MinusCircle
            className={watched === 0 ? "disabled" : ""}
            onClick={() => decWatchedCounter(anime.id)}
          />
          <PlusCircle
            className={(episodes || nextEpisode) === watched ? "disabled" : ""}
            onClick={() => incWatchedCounter(anime.id)}
          />
        </div>
      )}
    </StyledCounter>
  );
};

export default connect(
  null,
  {
    incWatchedCounter,
    decWatchedCounter
  }
)(Counter);
