import React from "react";
import Counter from "./Counter";
import { myStates } from "./myStates";

import { StyledWatchedCounter } from "./styles";

const State = ({ state, index, changeState, anime }) => {
  const myStateClass =
    (state === "To watch" && "toWatch") ||
    (state === "Watching" && "Watching") ||
    (state === "Completed" && "Completed") ||
    (state === "Dropped" && "Dropped") ||
    (state === "Stand By" && "standBy");

  return (
    <StyledWatchedCounter>
      <select
        className={myStateClass}
        value={state}
        onChange={e => changeState(index, e.target.value)}
      >
        {myStates.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>

      <Counter index={index} anime={anime} />
    </StyledWatchedCounter>
  );
};

export default State;
