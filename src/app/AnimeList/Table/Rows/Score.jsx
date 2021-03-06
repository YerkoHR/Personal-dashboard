import React from "react";

const Score = ({ anime, changeScore }) => (
  <>
    {anime.myState !== "To Watch" ? (
      <select
        value={anime.myScore}
        onChange={e => changeScore(anime.id, e.target.value)}
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
  </>
);
export default Score;
