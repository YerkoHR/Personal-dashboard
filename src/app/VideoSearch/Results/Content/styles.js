import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
`;

export const Details = styled.div`
  padding: 0.5rem;
  background: ${props => props.theme.backgroundCard};
  h3 {
    color: #e4e4e4;
    margin-bottom: 0.5rem;
    font-family: sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
  }
  p {
    color: #737373;
    font-size: 0.8rem;
  }
`;
