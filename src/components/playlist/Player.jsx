import React from "react";
import styled from "styled-components";

const ContainerPlayer = styled.div`
  margin-top: 4rem;
  border-top: 2px solid ${props => props.theme.border};
  iframe {
    margin-top: 2rem;
    width: 900px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.border};
  }
`;

const Player = ({ active, activeIds }) => (
  <>
    {(active !== "") & (activeIds !== "") ? (
      <ContainerPlayer>
        <iframe
          type="text/html"
          title={active}
          src={`https://www.youtube.com/embed?listType=playlist&playlist=${activeIds}`}
        />
      </ContainerPlayer>
    ) : (
      <div />
    )}
  </>
);

export default Player;
