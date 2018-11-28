import React from "react";
import styled from 'styled-components';

const Container = styled.div``;
const VideoContainer = styled.div``;

export default function Results({ data }) {
  return (
    <div>
      <Container>
        {
          data.map((video) => (
            <div key={video.id.videoId || video.id.playlistId}>
            <li >
              <img
               src={video.snippet.thumbnails.medium.url}
               alt={video.snippet.title}
               height={video.snippet.thumbnails.medium.height}
               width={video.snippet.thumbnails.medium.width}
               />
               <p>{video.snippet.title}</p>
               <button>Play</button>
            </li>
            <li>
            <iframe
              type="text/html" 
              width="640" 
              height="360"
              title={video.snippet.title}
              src={video.id.videoId ? 
                `https://www.youtube.com/embed/${video.id.videoId}?autoplay=0`: 
                `https://www.youtube.com/embed/?autoplay=0&listType=playlist&list=${video.id.playlistId}`
                }
            />
            </li>
            </div>
          ))
        }
      </Container>
    </div>
  );
}
