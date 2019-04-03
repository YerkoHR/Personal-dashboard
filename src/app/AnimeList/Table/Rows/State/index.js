import React from "react";
import Counter from "./Counter";
import { myStates } from "./myStates";

import { StyledWatchedCounter } from "./styles";

const State = ({ state, changeState, anime }) => {
  const myStateClass =
    (state === "To Watch" && "toWatch") ||
    (state === "Watching" && "Watching") ||
    (state === "Completed" && "Completed") ||
    (state === "Dropped" && "Dropped") ||
    (state === "Stand By" && "standBy");

  return (
    <StyledWatchedCounter>
      <select
        className={myStateClass}
        value={state}
        onChange={e => changeState(anime.id, e.target.value)}
      >
        {myStates.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>

      <Counter anime={anime} />
    </StyledWatchedCounter>
  );
};

export default State;
