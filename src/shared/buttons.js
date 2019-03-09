import styled from "styled-components";

export const BtnTable = styled.button`
  border-radius: 4px;
  border: 0.5px solid ${props => props.theme.backgroundPrimary};
  background: ${props => props.theme.backgroundPrimary};
  color: ${props => props.theme.P};
  padding: 0.5em;
  &:focus {
    outline: 0;
  }
`;
