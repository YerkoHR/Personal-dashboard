import styled, { createGlobalStyle } from "styled-components";

export const Content = styled.div`
  margin: 2em auto;
  width: 90%;
`;

export const H1 = styled.h1`
  color: ${props => props.theme.P};
  font-weight: 900;
  font-size: 2rem;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.P};
  font-weight: 700;
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  color: ${props => props.theme.P};
  font-weight: 500;
  font-size: 1.25rem;
`;

export const P = styled.p`
  color: ${props => props.theme.P};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
`;

export const Input = styled.input`
  padding: 0.5em 1.2em;
  background: ${props => props.theme.backgroundPrimary};
  border-color: transparent;
  border-radius: 2px;
  color: ${props => props.theme.P};
  &:focus {
    outline: 0px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  body {
    margin: 0;
    font-family:  Roboto, sans-serif;
    color: ${props => props.theme.P};
    background: ${props => props.theme.backgroundPrimary};
  }
  *{
    margin: 0;
    padding: 0;
  }
  html, body, #root, #root>div {
  height: 100%
  }
  button, select, svg{
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  select {
    border-radius: 4px;
    border-style: solid;
    border-width: 1.2px;
    background: ${props => props.theme.P};
    &:focus {
      outline: 0;
    }
  }
  .btn-delete:hover {
    stroke: ${props => props.theme.red};
    border-color:${props => props.theme.red};
  }
  .btn-save:hover {
    stroke: ${props => props.theme.green};
    border-color:${props => props.theme.green};
  }
  .btn-container-row{
    width: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .btn-container-column{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .active {
    background: ${props => props.theme.backgroundSecundary} !important;
  }
  .lds-dual-ring {
    width: 32px;
    height: 32px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 23px;
    height: 23px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .fade-in{
    animation: fadeIn .7s ease-in-out; 
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
