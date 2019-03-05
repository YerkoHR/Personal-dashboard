import styled from "styled-components";

export const ContainerPlayer = styled.div`
  margin-top: 4rem;
  border-top: 2px solid ${props => props.theme.border};
  iframe {
    margin-top: 2rem;
    width: 900px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.border};
  }
`;
