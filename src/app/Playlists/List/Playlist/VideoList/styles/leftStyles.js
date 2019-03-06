import styled from "styled-components";

export const VideoLeft = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  .draggable {
    visibility: hidden;
    position: absolute;
    left: 0;
    width: 15px;
    height: 100%;
  }
  span {
    margin: 0 1.5rem;
  }
  .pl-video-name {
    width: 300px;
  }
`;
