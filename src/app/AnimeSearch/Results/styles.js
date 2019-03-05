import styled from "styled-components";

export const StyledUl = styled.ul`
  position: absolute;
  top: 40px;
  z-index: 2;
  &:focus {
    outline: 0;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  padding: 0 0.2rem;
  margin-bottom: 0.3rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  background: ${props => props.theme.backgroundPrimary};

  font-size: 0.8rem;
  transition: 0.6s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transform: translateY(-3px);
  }
  span {
    margin: 0 0.1rem;
  }
`;
