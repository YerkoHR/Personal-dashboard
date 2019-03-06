import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StyledLi = styled.li`
  margin: 1rem auto;
  box-shadow: 0 0 0 1px ${props => props.theme.border};
  width: 80%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 180px;
  iframe {
    width: 100%;
    height: 500px;
    border: 0;
    grid-column: 1 / span 2;
  }
`;
