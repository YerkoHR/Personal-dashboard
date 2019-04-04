import React from "react";

import { H3 } from "../../../../shared/globals";
import { MainInfo, PAligned, ExtraInfo } from "./styles";

const Content = ({ anime }) => {
  const { nextAiringEpisode: nextEpisode } = anime;

  return (
    <MainInfo>
      <H3>{anime.title}</H3>
      <div className="scrollBox" tabIndex="0">
        <PAligned dangerouslySetInnerHTML={{ __html: anime.description }} />
      </div>
      <ExtraInfo>
        {nextEpisode && (
          <div>
            Episode {nextEpisode.episode} in {nextEpisode.timeUntilAiring}
          </div>
        )}
        <ul>
          {anime.genres.map(genre => (
            <li key={"type" + genre}>{genre}</li>
          ))}
        </ul>
      </ExtraInfo>
    </MainInfo>
  );
};

export default Content;
