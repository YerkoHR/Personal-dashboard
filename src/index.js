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
    background: ${props => props.theme.container};
  }
  html, body, #root, #root>div {
  height: 100%
}
`;

const darkTheme = {
  background: "#686884",
  container: "#343C49",
  font: "#7C7A8F",
  card: "#232935"
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
