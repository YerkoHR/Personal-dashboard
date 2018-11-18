import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  z-index: 1;
`;

export default function DetailsCard() {
  return (
    <StyledCard>
      <h1>Details in the store, component card goes here !</h1>
    </StyledCard>
  );
}
