import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100%;
`;

export const Content = styled.div`
  background: ${props => props.theme.backgroundSecundary};
  text-align: center;
  height: 100%;
`;
