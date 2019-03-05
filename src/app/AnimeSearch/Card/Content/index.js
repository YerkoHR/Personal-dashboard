import React from "react";

import { H2, H3 } from "../../../../shared/globals";
import { ContentContainer, PAligned } from "./styles";

const Content = ({ data }) => (
  <ContentContainer>
    <H2>{data.title.romaji}</H2>
    <H3>
      Average Score:{" "}
      {data.averageScore ? data.averageScore : " Data not available"}
    </H3>
    <div className="scrollBox" tabIndex="0">
      <PAligned dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  </ContentContainer>
);

export default Content;
