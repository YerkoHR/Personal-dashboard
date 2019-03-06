import styled from "styled-components";

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #737373;
  font-size: 0.6rem;
  color: #fff;
  svg {
    user-select: none;
    transition: 0.4s ease-in-out;
  }
`;

export const VideoActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;

  &:first-child {
    border-bottom: 1px solid #555555;
  }
`;
