import styled from "styled-components";

export const BtnContainer = styled.div`
  position: relative;

  .list-btns,
  .filter-btns {
    position: absolute;
    top: -40px;
    button {
      text-transform: uppercase;
    }
  }
  .list-btns {
    right: 0;
  }
`;
