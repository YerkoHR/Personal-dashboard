import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const StyledLi = styled.li`
  margin: 1em auto;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.backgroundCard};
  width: 80%;
  iframe {
    width: 100%;
    height: 500px;
    border: 0;
  }
`;
const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 320px;
  }

  p {
    margin: 0.5em 2em;
    color: #fff;
  }
`;
const VideoActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ContainerBtn = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content: space-around;
  svg {
    fill: #fff;
    user-select: none;
  }
  .show:hover {
    fill: lightblue;
  }
  .hide:hover {
    fill: lightsalmon;
  }
  div {
    position: relative;
    ul {
      padding: 0.2em;
      list-style: none;
      position: absolute;
      bottom: 28px;
      left: 25px;
      li {
        border: 0.2px solid #fff;
        white-space: nowrap;
        width: 100%;
        text-align: start;
        font-size: 0.8em;
      }
    }
  }
`;
export default function Results({ data, togglePlayer, togglePlaylist }) {
  return (
    <StyledUl>
      {data.map((video, index) => (
        <StyledLi
          key={video.id.videoId || video.id.playlistId || video.id.channelId}
        >
          <VideoDetails>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <VideoActions>
              <p>{video.snippet.title}</p>
              <ContainerBtn>
                <div>
                  {video.showPlaylists && (
                    <ul className="fade-in">
                      <li>playlist 1</li>
                      <li>playlist 2</li>
                      <li>playlist 3</li>
                    </ul>
                  )}

                  <svg
                    className="show"
                    onClick={() => togglePlaylist(index)}
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z" />
                  </svg>
                </div>
                {video.showVideo ? (
                  <svg
                    className="hide"
                    onClick={() => togglePlayer(index)}
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
                  </svg>
                ) : (
                  <svg
                    className="show"
                    onClick={() => togglePlayer(index)}
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                  </svg>
                )}
              </ContainerBtn>
            </VideoActions>
          </VideoDetails>
          {video.showVideo && (
            <iframe
              type="text/html"
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
        </StyledLi>
      ))}
    </StyledUl>
  );
}
