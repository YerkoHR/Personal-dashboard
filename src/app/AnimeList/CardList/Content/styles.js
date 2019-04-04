import styled from "styled-components";

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.backgroundSecundary};
  padding: 0.6rem;

  .scrollBox {
    height: 225px;
    overflow: hidden;
    visibility: hidden;
    transition: 0.2s ease-in;
    margin-top: 0.8rem;
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

export const PAligned = styled.p`
  font-size: 0.75rem;
  text-align: justify;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75em;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${props => props.theme.border};
  padding-top: 0.5rem;
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    text-align: center;
    margin-top: 1rem;
    li {
      font-size: 0.7rem;
      background: ${props => props.theme.backgroundPrimary};
      padding: 0.35rem;
      margin: 0.1rem;
      border-radius: 10px;
    }
  }
`;
