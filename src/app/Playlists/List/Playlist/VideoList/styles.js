import styled from "styled-components";

export const PlVideo = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;

  border-bottom: 1px solid ${props => props.theme.border};

  font-size: 0.8rem;
  cursor: pointer;

  .delete-video {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    stroke: ${props => props.theme.P};
    background: ${props => props.theme.backgroundPrimary};
    width: 20px;
    height: 20px;
  }
  .pl-duration {
    margin-right: 1rem;
  }
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
