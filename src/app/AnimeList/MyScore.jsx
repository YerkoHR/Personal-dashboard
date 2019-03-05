import React from "react";

export default function MyScore({ anime, index, changeScore }) {
  return (
    <React.Fragment>
      {anime.myState !== "To watch" ? (
        <select
          value={anime.myScore}
          onChange={e => changeScore(index, e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      ) : (
        <span>TBD</span>
      )}
    </React.Fragment>
  );
}
