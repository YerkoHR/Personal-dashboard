import React from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import Image from "./Image";

import { StyledCard } from "./styles";
import { ContainerInfo } from "./styles";

const Card = ({ data }) => (
  <>
    <StyledCard className="fade-in">
      <Image image={data.coverImage.extraLarge} />
      <ContainerInfo>
        <Content data={data} />
        <Buttons data={data} />
      </ContainerInfo>
    </StyledCard>
  </>
);
export default Card;
