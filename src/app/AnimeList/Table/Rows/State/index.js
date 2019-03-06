import React from "react";
import Counter from "./Counter";

import { StyledWatchedCounter } from "./styles";

const State = ({
  anime,
  index,
  changeState,
  incWatchedCounter,
  decWatchedCounter
}) => (
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
      <Counter
        anime={anime}
        index={index}
        incWatchedCounter={incWatchedCounter}
        decWatchedCounter={decWatchedCounter}
      />
    )}
  </StyledWatchedCounter>
);

export default State;
