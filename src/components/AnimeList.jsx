import React from "react";

export default function AnimeList({ data }) {
  return (
    <React.Fragment>
      {data.length > 0 && (
        <ul>
          {data.map(anime => (
            <li key={anime.id}>{anime.title.romaji}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}
