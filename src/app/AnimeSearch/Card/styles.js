import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  z-index: 1;
  min-height: 380px;
  margin: 1.5em auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 10px;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.border};
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
