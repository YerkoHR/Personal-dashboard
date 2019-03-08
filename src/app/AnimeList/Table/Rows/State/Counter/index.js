import React from "react";
import { connect } from "react-redux";
import {
  incWatchedCounter,
  decWatchedCounter
} from "../../../../../../redux/ducks/saved";

import { PlusCircle, MinusCircle } from "react-feather";
import { StyledCounter } from "./styles";

const Counter = ({ anime, index, incWatchedCounter, decWatchedCounter }) => {
  const state = anime.myState;
  const episodes = anime.episodes;
  const nextEpisode =
    anime.nextAiringEpisode && anime.nextAiringEpisode.episode - 1;
  const watched = anime.episodesWatched;

  return (
    <StyledCounter>
      <div>
        {state === "Completed" ? episodes || nextEpisode : watched}
        <span>/</span>
        {episodes || nextEpisode}
      </div>
      {state !== "Completed" && (
        <div>
          <MinusCircle
            className={watched === 0 ? "disabled" : ""}
            onClick={() => decWatchedCounter(index)}
          />
          <PlusCircle
            className={(episodes || nextEpisode) === watched ? "disabled" : ""}
            onClick={() => incWatchedCounter(index)}
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
