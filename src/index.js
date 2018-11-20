import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import Index from "./components/Index";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  body {
    margin: 0;
    font-family:  Roboto, sans-serif;
    color: ${props => props.theme.font};
    background: ${props => props.theme.backgroundPrimary};
  }
  html, body, #root, #root>div {
  height: 100%
}
.lds-dual-ring {
  display: inline-block;
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
`;

const darkTheme = {
  backgroundPrimary: "#343C49",
  backgroundSecundary: "#232935",
  backgroundCard: "#121923",
  font: "#7C7A8F"
};

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <div>
        <GlobalStyle />
        <Index />
      </div>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
