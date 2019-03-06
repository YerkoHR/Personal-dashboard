import styled from "styled-components";

export const StyledList = styled.ul`
  padding: 1em;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5em;
    div {
      width: 100px;
      overflow: hidden;
      visibility: hidden;
      transition: 0.2s ease-in;
      text-align: start;
    }
    div::-webkit-scrollbar-track {
      border: 1px solid #000;
      padding: 2px 0;
      background-color: #404040;
    }
    div::-webkit-scrollbar {
      width: 10px;
    }
    div::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #737272;
      border: 0;
    }
    span {
      font-size: 0.9rem;
    }
    span,
    div:hover {
      visibility: visible;
      overflow: auto;
    }
    div:focus {
      outline: 0;
    }
    svg {
      fill: #0000;
    }
  }
`;
