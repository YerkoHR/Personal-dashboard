import React from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import Image from "./Image";

import { StyledCard } from "./styles";
import { ContainerInfo } from "./styles";

export default class DetailsCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
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
  }
}
