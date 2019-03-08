import React from "react";
import Counter from "./Counter";

import { StyledWatchedCounter } from "./styles";

const State = ({ state, index, changeState, anime }) => {
  const myStateClass =
    (state === "To watch" && "toWatch") ||
    (state === "Watching" && "Watching") ||
    (state === "Completed" && "Completed") ||
    (state === "Dropped" && "Dropped") ||
    (state === "Stand By" && "standBy");

  const options = ["To watch", "Watching", "Completed", "Dropped", "Stand By"];

  return (
    <StyledWatchedCounter>
      <select
        className={myStateClass}
        value={state}
        onChange={e => changeState(index, e.target.value)}
      >
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
      {(state === "Watching" || state === "Completed") && (
        <Counter index={index} anime={anime} />
      )}
    </StyledWatchedCounter>
  );
};

export default State;
