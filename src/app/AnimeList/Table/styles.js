import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  background: ${props => props.theme.backgroundPrimary};
  th,
  td,
  tr {
    padding: 0.5em;
    border: 0.5px solid ${props => props.theme.border};
    color: ${props => props.theme.P};
  }
  tr {
    text-align: center;
  }
  tbody tr {
    transition: 0.3s ease-in;
    &:hover {
      background: ${props => props.theme.ternary};
    }
  }
`;
