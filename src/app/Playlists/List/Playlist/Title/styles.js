import styled from "styled-components";

export const PlTitle = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.border};
  height: 100px;
  .pl-btns {
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin: 1rem auto;
    button {
      padding: 0.5rem;
      color: ${props => props.theme.P};
      background: ${props => props.theme.backgroundPrimary};
      border: 0.5px solid ${props => props.theme.border};
      border-radius: 7px;
      font-size: 0.8rem;
      outline: 0;
      transition: 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
