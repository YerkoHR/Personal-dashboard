import styled from "styled-components";
import { P } from "../../../../shared/globals";

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.backgroundSecundary};
  padding: 0.75rem;
  .scrollBox {
    height: 225px;
    overflow: hidden;
    visibility: hidden;
    transition: 0.2s ease-in;
  }
  p,
  .scrollBox:hover {
    visibility: visible;
    overflow: auto;
  }
  .scrollBox:focus {
    outline: 0;
  }
`;

export const PAligned = styled(P)`
  text-align: justify;
`;

export const ExtraInfo = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    text-align: center;
    li {
      margin: 0 0.5rem;
    }
  }
`;
