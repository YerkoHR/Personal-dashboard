import styled from "styled-components";

export const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px;
  grid-gap: 1em;
  width: 95%;
  margin: 4em auto;
`;
export const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid ${props => props.theme.border};
  border-radius: 6px;
`;
