import styled from "styled-components";

export const BtnContainer = styled.div`
  position: relative;

  button:nth-child(1) {
    position: absolute;
    right: 50px;
    bottom: 10px;
  }
  button:nth-child(2) {
    position: absolute;
    right: 0;
    bottom: 10px;
  }
  button {
    border-radius: 4px;
    border: 0.5px solid grey;
    background: grey;
    padding: 0.5em;
    &:focus {
      outline: 0;
    }
  }
  .active {
    background: #fff;
  }
`;