import styled from "styled-components";

export const VideoImage = styled.div`
  display: flex;
  position: relative;
  .spinner {
    margin: auto;
    width: 50px;
    height: 50px;
    align-self: center;
  }
  img {
    width: 320px;
  }
  .duration {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: rgb(56, 56, 56);
    color: #e4e4e4;
    padding: 0.03rem;
    border-radius: 4px;
  }
`;
