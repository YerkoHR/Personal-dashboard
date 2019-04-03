import styled from "styled-components";

export const PlVideoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PlVideo = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  width: 100%;
  height: 50px;

  border-bottom: 1px solid ${props => props.theme.border};

  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    .delete-video {
      visibility: visible;
    }
    .draggable {
      visibility: visible;
      background: ${props => props.theme.backgroundPrimary};
    }
  }
`;
