import styled from "styled-components";

export const PLContainer = styled.div`
  position: absolute;
  bottom: 28px;
  right: 25px;
  background: ${props => props.theme.backgroundSecundary};
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 170px;
  justify-content: center;
`;

export const PLActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  flex-grow: 1;
  border-top: 1px solid #3a3a3a;
  div {
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
    color: #fff;
    font-weight: bold;
  }
`;
