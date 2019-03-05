import styled from "styled-components";

export const PlContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 7px;
  border: solid 2px ${props => props.theme.border};
  transition: 0.3s ease-in;
`;
