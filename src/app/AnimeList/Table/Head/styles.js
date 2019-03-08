import styled from "styled-components";

export const HeadRow = styled.tr`
  th:nth-child(1) {
    width: 20%;
  }

  th:nth-child(2) {
    width: 10%;
  }

  th:nth-child(3) {
    width: 20%;
  }

  th:nth-child(4) {
    width: 15%;
  }
  th:nth-child(5) {
    width: 7%;
  }
  th:nth-child(6) {
    width: 7%;
  }
  th:nth-child(7) {
    width: 15%;
  }
  svg {
    width: 20px;
    height: 20px;
    transition: 0.3s ease-in-out;
    &:hover {
      stroke: ${props => props.theme.blue};
    }
  }
`;
