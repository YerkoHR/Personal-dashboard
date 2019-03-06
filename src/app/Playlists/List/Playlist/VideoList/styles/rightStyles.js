import styled from "styled-components";

export const RightContainer = styled.div`
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
`;
