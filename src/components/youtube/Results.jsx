import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const VideoContainer = styled.li`
  margin: 1em auto;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.backgroundCard};
  width: 80%;
`;
const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 320px;
  }
  div {
    width: 100%;
    text-align: center;
    position: relative;
    p {
      margin: 0.5em 2em;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;
// CHANGE STYLE
const ResultsBtn = styled.button`
  background: ${props => props.theme.font};
  border: 2px solid ${props => props.theme.font};
  outline: 0;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export default function Results({ data, togglePlayer }) {
  return (
    <Container>
      {data.map((video, index) => (
        <VideoContainer key={video.id.videoId || video.id.playlistId}>
          <VideoDetails>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div>
              <p>{video.snippet.title}</p>
              <ResultsBtn onClick={() => togglePlayer(index)}>
                Show Player
              </ResultsBtn>
            </div>
          </VideoDetails>
          {video.showVideo && (
            <iframe
              type="text/html"
              width="100%"
              height="500"
              title={video.snippet.title}
              src={
                video.id.videoId
                  ? `https://www.youtube.com/embed/${
                      video.id.videoId
                    }?autoplay=0`
                  : `https://www.youtube.com/embed/?autoplay=0&listType=playlist&list=${
                      video.id.playlistId
                    }`
              }
            />
          )}
        </VideoContainer>
      ))}
    </Container>
  );
}
