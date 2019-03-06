import styled from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: 0.2em;
  span {
    margin: 0 0.2em;
  }
  svg {
    transition: 0.3s ease-in-out;
    user-select: none;
    &:hover {
      stroke: blue;
    }
  }
  .disabled {
    pointer-events: none;
  }
`;
