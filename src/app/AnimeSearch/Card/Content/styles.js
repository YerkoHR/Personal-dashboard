import styled from "styled-components";
import { P } from "../../../../shared/globals";

export const PAligned = styled(P)`
  width: 80%;
  text-align: center;
  margin: 20px auto;
`;
export const ContentContainer = styled.div`
  h2,
  h3 {
    margin: 0.2em 0.5em;
    border-bottom: 1px solid ${props => props.theme.border};
  }
  .scrollBox {
    height: 250px;
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
